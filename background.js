// Add a listener for the browser action
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  var msg = {
    message: "user clicked!"
  }
  console.log(msg);
  chrome.tabs.sendMessage(tab.id, msg);
}