// Background script for IP lookup extension

// Create context menu when extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "ipLookup",
    title: "Who Dis?",
    contexts: ["selection"]
  });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "ipLookup") {
    const selectedText = info.selectionText.trim();
    
    // IP address validation (IPv4 and IPv6)
    const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^::1$|^::$|^(?:[0-9a-fA-F]{1,4}:)*::[0-9a-fA-F]{1,4}(?::[0-9a-fA-F]{1,4})*$/;
    
    if (ipv4Regex.test(selectedText) || ipv6Regex.test(selectedText)) {
      // Use whatismyipaddress.com IP lookup service
      const lookupUrl = `https://whatismyipaddress.com/ip/${selectedText}`;
      
      // Open the lookup URL in a new tab
      chrome.tabs.create({
        url: lookupUrl,
        active: true
      });
    } else {
      // Show error notification for invalid IP
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon48.png',
        title: 'Invalid IP Address',
        message: `"${selectedText}" is not a valid IP address.`
      });
    }
  }
});

// Add notification permission if needed
chrome.runtime.onInstalled.addListener(() => {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icon48.png',
    title: 'IP Lookup Extension',
    message: 'Extension installed! Right-click on IP addresses to look them up.'
  });
});