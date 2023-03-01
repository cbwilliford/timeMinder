export interface Page {
      url: string | undefined,
      msElapsed: number,
      title: string | undefined,
      visits: number
}

export interface Hostname {
    hostname: string,
    msElapsed: number,
    favicon: string | undefined,
    pages?: Page[]
}

export interface Hostnames {
  [key:string]: Hostname
}

export interface StorageCache {
  activePage: Page,
  lastUpdated: number,
  hostnames: Hostnames,
  secondsOffset?: number
  msElapsed: number
}
