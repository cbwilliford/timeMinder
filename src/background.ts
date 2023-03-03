import {Hostname, StorageCache} from './types';

// use chrome alarms for weekly updates and restarting daily count? https://developer.chrome.com/docs/extensions/reference/alarms/

const storageCache: StorageCache = {
  activePage: {
    url: undefined,
    msElapsed: Date.now(),
    title: '',
    visits: 1
    },
  lastUpdated: Date.now(),
  hostnames: {},
  idleTime: 0,
  msElapsed: 0,
};

const initStorageCache = chrome.storage.local.get(null).then((storage) => {
  Object.assign(storageCache, storage);
});

const createHostname = (hostname: string, msElapsed: number, favicon: string | undefined): Hostname => {
  return {
    hostname,
    msElapsed,
    favicon,
    pages: []
  }
}

const storeActivePage = (storageCache: StorageCache) =>  {
    const {activePage, lastUpdated, hostnames, idleTime} = storageCache;
    if (typeof activePage.url === 'undefined') return;
    // Update the current activePage and store it in hostnames
    const {hostname} = new URL(activePage.url!)
    // 1. calc time elapsed
    let msElapsed = Date.now() - lastUpdated;
    // accountfor offset from idle/unfocus
    if (idleTime > 0){
      msElapsed -= (Date.now() - idleTime)
      storageCache.idleTime = 0;
    }
    // 2. Update activePage
    activePage.msElapsed = msElapsed;
    // 3. Update hostname obj or locate it on storageCache
    const hostnameObj = hostnames[hostname]
    const existingPage = hostnameObj.pages.find(page => page.url === activePage.url);
    if (existingPage) {
      // Merge page views by URL: msElapsed & visits
      existingPage.msElapsed += msElapsed;
      existingPage.visits ++;
    } else {
      hostnameObj.pages.push(activePage)
    }

    hostnameObj.msElapsed += msElapsed;
    // 4. add page to hostname
    hostnames[hostname] = hostnameObj;
    // Update total msElapsed to avoid summing all msElapsed values on every render.
    storageCache.msElapsed += msElapsed;
}


const updateActivePage = async (newActiveTab: chrome.tabs.Tab | null) => {
  try {
    await initStorageCache;
    let tab;
    if(newActiveTab) {
      tab = newActiveTab;
    } else {
      // changing tabs and windows doesn't send a tab object, so must query to get tab
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      tab = tabs[0]
    }
    if (typeof tab.url === 'undefined') return
    if (!tab.url.match(/.+\..+/)) return // exclude chrome protocol urls, go links, etc.
    const {url, title, favIconUrl} = tab;
    const newHostname = new URL(url!).hostname;

    // build new active tab to begin tracking this in storage
    const newActivePage = {
      url,
      msElapsed: 0,
      visits: 1,
      title
    }

    // init newActivePage's hostname in hostnames
    if (!storageCache.hostnames[newHostname]){
      const newHostnameObject = createHostname(newHostname, 0, favIconUrl)
      console.log('newHostnameObject: ', newHostnameObject)
      storageCache.hostnames[newHostname] = newHostnameObject;
    }


    console.log('storageCache: ', storageCache)
    storeActivePage(storageCache);
    storageCache.activePage = newActivePage;
    storageCache.lastUpdated = Date.now();

    // save storageCache to storage.local
    chrome.storage.local.set(storageCache)
  } catch (error) {
    console.error(error);
  }
};


chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
  if (change.status !== 'complete') return;
  updateActivePage(tab);
});


chrome.tabs.onActivated.addListener(activeInfo => {
  updateActivePage(null);
});

chrome.windows.onFocusChanged.addListener(async windowId => {
  if (windowId > 0) {
    updateActivePage(null);
  } else {
  // Focus leaves Chrome window
    try {
      await initStorageCache;
      chrome.storage.local.set({idleTime: Date.now()})
      .then(() => console.log('idle time set'))
    } catch(err) {
      console.error(err)
    }
  }
});


chrome.idle.onStateChanged.addListener(() => {

  // Returns active, idle, or locked state when state changed.
  // Must set detection interval to determine idle state, so for v1, only check locked state and active state
  // https://developer.chrome.com/docs/extensions/reference/idle/

})
