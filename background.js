chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({ url: 'https://chrome.google.com/webstore/category/extensions' });
  });
  