chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({ url: "chrome://inspect/#devices" });
});