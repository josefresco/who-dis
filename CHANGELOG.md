# Changelog

All notable changes to the Who Dis? Chrome extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.1] - 2026-01-13

### Added
- KEYBOARD_NAVIGATION_TEST.md with comprehensive keyboard accessibility testing report
- Documentation of excellent keyboard accessibility through native Chrome APIs

### Documentation
- Detailed analysis of extension architecture and accessibility features
- Confirmation of WCAG compliance through browser-native UI elements

## [1.0.0] - 2025-08-24

### Added
- Initial release of Who Dis? Chrome extension
- Right-click context menu integration for IP address lookup
- Automatic IP address detection in selected text
- Opens ipinfo.io in new tab for detailed IP information
- Lightweight background service worker implementation
- Chrome extension release package
- CHROME_STORE.md with Chrome Web Store publishing guidelines
- README.md with setup and usage instructions

### Changed
- Corrected release package format (removed incorrect tar.gz)

### Features
- Context menu: "Look up IP address" option
- Supports IPv4 addresses
- Browser-native UI (no custom popup or options page)
- Zero dependencies
- Minimal permissions (contextMenus only)

## [0.1.0] - 2025-08-08

### Added
- Initial development version
- Core IP lookup functionality
- Basic documentation
- Development package
