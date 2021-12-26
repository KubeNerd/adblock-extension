
const defaultFilters = [
  "*://*.tpcgoooglesyndication.com/*",
  "*://*.googleadservices.com/*",
  "*://*.securerepubads.p.doubleclick.net/*"

]
// https://easylist.to/
// https://easylist.to/easylist/easylist.txt
chrome.webRequest.onBeforeRequest.addListener(
  (details)=>{
  console.log(details)
  return{
    cancel:true
  }
}, {
  
  urls:defaultFilters,

},
  ["blocking"]
);

