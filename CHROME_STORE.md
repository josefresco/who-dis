# Chrome Web Store Submission Guide

## Store Listing Information

### Basic Information
- **Name**: IP Lookup - Who Dis?
- **Category**: Productivity
- **Language**: English

### Description (Short - 132 characters max)
Right-click on any IP address to look it up instantly. Supports IPv4 and IPv6. Perfect for network admins and security professionals.

### Description (Detailed)
Who Dis? is a lightweight Chrome extension that makes IP address lookups incredibly simple. Just select any IP address on a webpage, right-click, and choose "Who Dis?" to instantly get detailed information about that IP.

**Key Features:**
✅ Right-click IP lookup on any webpage
✅ Supports both IPv4 and IPv6 addresses  
✅ Instant results in a new tab
✅ Smart IP validation with error notifications
✅ Zero data collection - completely private
✅ Minimal permissions for maximum security

**Perfect for:**
- Network administrators
- Security professionals  
- Web developers
- IT support staff
- Anyone curious about IP addresses they encounter

**How it works:**
1. Select any IP address on a webpage
2. Right-click and choose "Who Dis?"
3. Get instant detailed IP information

**Privacy First:**
This extension doesn't collect, store, or transmit any of your data. It only accesses the text you select and uses minimal permissions.

**Open Source:**
Full source code available on GitHub for transparency and security review.

### Screenshots Needed
1. **Context menu in action** (1280x800)
2. **IP lookup results page** (1280x800)  
3. **Error notification example** (1280x800)
4. **Extension icon in browser** (640x400)
5. **Before/after comparison** (640x400)

### Promotional Images
- **Small promo tile**: 440x280
- **Large promo tile**: 920x680  
- **Marquee promo tile**: 1400x560

## Permissions Justification

### contextMenus
**Why needed**: Creates the right-click menu item "Who Dis?" that users click to trigger IP lookup.
**User benefit**: Provides intuitive access to the extension's core functionality.

### activeTab  
**Why needed**: Reads the selected text (IP address) from the current tab.
**User benefit**: Allows the extension to process the IP address the user wants to look up.

### notifications
**Why needed**: Shows helpful error messages when selected text is not a valid IP address.
**User benefit**: Provides immediate feedback and prevents confusion when invalid text is selected.

## Privacy Policy

Since this extension doesn't collect user data, a simple privacy policy:

```
Privacy Policy for IP Lookup - Who Dis?

Data Collection: This extension does not collect, store, or transmit any personal data.

Data Usage: The extension only processes IP addresses you explicitly select and choose to look up. This information is sent to whatismyipaddress.com for lookup purposes only.

Storage: No data is stored locally or remotely by this extension.

Third Parties: IP lookups are performed using whatismyipaddress.com. Please review their privacy policy for information about their data practices.

Contact: For questions about this privacy policy, please visit our GitHub repository.
```

## Submission Checklist

### Required Files ✅
- [x] manifest.json (valid Manifest V3)
- [x] background.js (service worker)  
- [x] Icons (16px, 48px, 128px)
- [x] README.md
- [x] LICENSE

### Chrome Web Store Requirements ✅
- [x] Single purpose functionality
- [x] Minimal permissions
- [x] No malicious code
- [x] Proper error handling
- [x] User-friendly notifications
- [x] Clean, documented code

### Testing Checklist
- [ ] Test IPv4 address lookup
- [ ] Test IPv6 address lookup  
- [ ] Test invalid IP error handling
- [ ] Test context menu appears
- [ ] Test in different Chrome versions
- [ ] Test with various website layouts

## Release Notes

### Version 1.0.0
- Initial release
- Right-click IP address lookup
- IPv4 and IPv6 support
- Error notifications for invalid IPs
- Integration with whatismyipaddress.com lookup service
- Zero data collection
- Open source codebase