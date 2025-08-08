# Who Dis? - IP Lookup Chrome Extension

A simple Chrome extension that allows you to quickly look up IP addresses by right-clicking on them. Perfect for network administrators, security professionals, and anyone who needs to identify IP addresses on web pages.

## Features

- **Right-click IP lookup**: Select any IP address on a webpage and right-click to look it up
- **IPv4 and IPv6 support**: Validates and looks up both IPv4 and IPv6 addresses
- **Instant results**: Opens IP information in a new tab using whatismyipaddress.com
- **Error notifications**: Shows helpful notifications for invalid IP addresses
- **Lightweight**: Minimal permissions and zero data collection

## Installation

### From Chrome Web Store (Coming Soon)
1. Visit the Chrome Web Store (link pending)
2. Click "Add to Chrome"
3. Confirm installation

### Manual Installation (Developer Mode)
1. Download the latest release from [Releases](https://github.com/josefresco/who-dis/releases)
2. Unzip the downloaded file
3. Open Chrome and navigate to `chrome://extensions/`
4. Enable "Developer mode" in the top right
5. Click "Load unpacked" and select the unzipped folder
6. The extension is now installed and ready to use

## How to Use

1. **Select an IP address** on any webpage (e.g., `192.168.1.1` or `2001:db8::1`)
2. **Right-click** on the selected text
3. **Choose "Who Dis?"** from the context menu
4. A new tab will open with detailed IP information

![Usage Demo](https://via.placeholder.com/600x300/4CAF50/white?text=Demo+Screenshot+Coming+Soon)

## Supported IP Formats

- **IPv4**: `192.168.1.1`, `8.8.8.8`, `203.0.113.0`
- **IPv6**: `2001:db8::1`, `::1`, `::`

## Privacy & Security

- **No data collection**: This extension does not collect, store, or transmit any personal data
- **Minimal permissions**: Only requests necessary permissions for core functionality
- **Open source**: All code is available for review in this repository
- **Third-party service**: IP lookups are performed using whatismyipaddress.com

## Permissions Explained

- **contextMenus**: Creates the right-click menu option
- **activeTab**: Accesses selected text on the current tab only
- **notifications**: Shows error messages for invalid IP addresses

## Development

### Prerequisites
- Chrome browser
- Basic knowledge of Chrome extension development

### Local Development
1. Clone this repository:
   ```bash
   git clone https://github.com/josefresco/who-dis.git
   cd who-dis
   ```

2. Load the extension in Chrome:
   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the project folder

3. Make your changes and reload the extension to test

### File Structure
```
who-dis/
├── manifest.json       # Extension configuration
├── background.js       # Service worker with main logic
├── icon16.png         # 16x16 icon
├── icon48.png         # 48x48 icon
├── icon128.png        # 128x128 icon
└── README.md          # This file
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
- Follow existing code style
- Test your changes thoroughly
- Update documentation as needed
- Ensure all security best practices are followed

## Changelog

### Version 1.0.0
- Initial release
- IPv4 and IPv6 support
- Right-click context menu
- Error notifications
- Integration with whatismyipaddress.com

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions:
- Open an issue on [GitHub](https://github.com/josefresco/who-dis/issues)
- Check existing issues for solutions

## Acknowledgments

- Thanks to whatismyipaddress.com for providing the IP lookup service
- Built with Chrome Extension Manifest V3

---

**Security Note**: This extension follows Chrome Web Store security guidelines and has been reviewed for malicious code. It uses minimal permissions and does not collect user data.