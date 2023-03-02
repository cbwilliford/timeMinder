# Time Minder

## This is a work in progress

Time Minder is a Chrome extension that minds the time you spend on each domain and page on that domain, helping you browse honestly. Eventually, it will make recommendations based on your browsing behavior to help you use your browser more effectively. Examples include:
- Recommending Chrome [site search shortcuts](https://support.google.com/chrome/answer/95426?hl=en&co=GENIE.Platform%3DDesktop#zippy=) for domains with the most page visits
- Recommending pinning pages opened the longest
- Daily and weekly reminders with summaries of browsing time

Time Minder is built in Typescript and React and uses [Craco](https://www.npmjs.com/package/@craco/craco) to make `create-react-app` work for a Chrome extension. Steps to run locally:
1. Run `npm run build`
2. Navigate to chrome://extensions/
3. In the upper right, toggle on Developer Mode
4. In upper left, select Load Unpacked
5. Select build directory
