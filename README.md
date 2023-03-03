# Time Minder

## This is a work in progress

Time Minder is a Chrome extension that minds your browsing time, helping you browser better. Currently, Time Minder lists the pages you visit bucketed by domain, tracking the time you spend on each page and domain.

<p align="center">
  <img width="417" height="594" src="https://user-images.githubusercontent.com/60932322/222628492-2e227818-21fd-4b75-a20d-138e2a2b8345.gif">
</p>

Eventually, Time Minder will make recommendations based on your browsing behavior to help you use your browser more effectively. Examples include:
- Recommending Chrome [site search shortcuts](https://support.google.com/chrome/answer/95426?hl=en&co=GENIE.Platform%3DDesktop#zippy=) for domains with the most page visits
- Offering to pin the pages opened the longest and with the highest number of page visits
- Sending daily and weekly summaries to prompt reflection on how you browsed

## Running Time Minder locally
Time Minder is built in Typescript and React using the [Material UI](https://mui.com/) component library. It uses [Craco](https://www.npmjs.com/package/@craco/craco) to build the extension files. Steps to run locally:
1. Install the dependencies: `npm install`
2. Build the extension: `npm run build`
3. Navigate to chrome://extensions/
4. In the upper right, toggle on Developer Mode
5. In upper left, select Load Unpacked
6. Select build directory created in step 2
