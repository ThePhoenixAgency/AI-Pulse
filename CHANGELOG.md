# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-01-31
### Added
- **Unified Design System**: Centralized `css/style.css` for consistent dark/neon theme across all pages.
- **Local Analytics**: Implemented `js/tracker.js` for privacy-first, local-storage based session tracking.
- **Custom Cursor**: Added high-contrast cyberpunk arrow cursor with interactive hover states.
- **Portfolio Integration**: Added `portfolio.html` to showcase GitHub activity and projects.
- **About Page**: dedicated page for the agency information.

### Changed
- **Site Structure**:
    - Renamed usage of `index.html` (Reader) to `app.html`.
    - Promoted `home.html` to `index.html` (Landing Page).
- **Navigation**: Updated all internal links to reflect the new structure.
- **Privacy Policy**: Updated `privacy.html` to clarify the lack of backend tracking (Local Storage only).
- **404 Page**: Enhanced error page with auto-redirect to homepage.
- **Cleanup**: Removed inline styles in favor of global CSS classes.

## [1.0.1] - 2025-12-22
### Changed
- **CI/CD**: Changed Dependabot update interval to daily.

## [1.0.0] - 2025-12-10
### Added
- **Core**: Initial release of AI-Pulse RSS aggregator.
- **Modules**:
    - Implementation of `URL Tokenizer Engine`.
    - Addition of `URL Health Monitor`.
    - Refactored aggregator for scalability.
- **Automation**: Setup GitHub Actions for `Auto Aggregator` workflow.
- **Database**: Migration scripts for prefixed project tables.

[1.1.0]: https://github.com/ThePhoenixAgency/AI-Pulse/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/ThePhoenixAgency/AI-Pulse/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/ThePhoenixAgency/AI-Pulse/releases/tag/v1.0.0
