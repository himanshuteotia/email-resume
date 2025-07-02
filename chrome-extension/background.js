chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "send-email",
    title: "Send Email to %s",
    contexts: ["selection"]
  });

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "send-email") {
      chrome.storage.local.set({selectedEmail: info.selectionText});
      chrome.action.openPopup();
    }
  });
});