# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- **2026-02-19 23:38 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-19 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-18 19:55 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-17 20:37 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-16 13:00 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- 2026-02-16: Validation locale `node --test` (12/12) [OK]
- Tests: `node --test` [OK]
- Reader: tests for prefs toggle placement (mobile-first)
- Theme: test to assert `css/style.css` exists
- Stats: tests for session counting and GeoIP throttle
- Portfolio: test to enforce GitHub link points to repositories tab
- Privacy: test to enforce header logo uses `./assets/logo_final.png`

### Changed
- Reader: removed blocking in-reader overlay panel (loading/error) to keep article interaction always available
- Reader: added runtime cleanup for injected overlay/modal/paywall/cookie panels inside same-origin article iframe
- Reader: added persistent local cache for generated local articles (`localStorage` + runtime memory + session fallback) to speed up page reloads
- Aggregator: strengthened article HTML cleanup to strip blocking overlay/modal/paywall/cookie containers before save
- Reader list: removed iframe encapsulation for article links (`data/articles/*` now open directly)
- Reader: article info title bar is now permanently hidden to remove the white strip above embedded articles
- Reader: added local `file://` fallback loader (hidden iframe to `README.md`) when fetch is blocked locally
- Workflow: `update-ai-pulse.yml` now keeps previous README as fallback when aggregation fails or generated README is invalid
- Aggregator: category-level isolation so one failing category does not block publication of others
- Aggregator: RSS generation and email digest steps switched to non-blocking best-effort mode
- CI: Dependabot automation flow migrated from legacy `security` path to `dependencies -> main`
- Reader: move prefs toggle into the top navigation
- Reader: robust section detection from `h2` headings to auto-fill "Aller a" and keep anchor navigation functional
- Reader: compact "Filtres" button in top bar (less intrusive, mobile-first)
- Reader: language default uses local GeoIP stats when available, otherwise browser language
- Reader: bilingual quick labels in UI (EN/FR) including filters and section navigation
- Reader: removed third-party Google tag from iframe reader page
- Reader: keyword search now ignores language while matching and falls back to visible articles if no exact match
- Reader: category quick-tags added for one-click section anchor navigation
- Security: Tracker UUID generation now uses RFC4122 v4 with secure randomness (`crypto.getRandomValues`) when available
- Security: Legacy fallback for UUID randomness retained for environments without Web Crypto
- CI: Dependabot secure flow branch name normalized to `security` across auto-merge and auto-PR workflows
- Reader: EN language switch icon updated to a US-style flag logo (no emoji)
- Stats: privacy-first tracker (localStorage + first-party session cookie)
- Portfolio: GitHub links point to the repositories tab (no viewer indirection)
- Privacy: fix header logo reference (`logo_text.png` -> `logo_final.png`)

## [1.1.0] - 2026-01-31
### Added
- **2026-02-19 23:38 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-19 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-18 19:55 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-17 20:37 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-16 13:00 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-14 11:26 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-13 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-13 06:15 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-12 06:17 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-12 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-11 06:17 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-11 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-11 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-10 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-10 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-09 06:35 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-09 06:34 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-09 06:33 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-09 06:33 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-09 06:33 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-06 06:17 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-06 06:17 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-06 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-04 06:17 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-04 06:17 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-03 07:59 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-02 06:36 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-02 06:35 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-02 06:34 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **Unified Design System**: Centralized `css/style.css` for consistent dark/neon theme across all pages.
- **Local Analytics**: Implemented `js/tracker.js` for privacy-first, local-storage based session tracking.
- **Custom Cursor**: Added high-contrast cyberpunk arrow cursor with interactive hover states.
- **Portfolio Integration**: Added `portfolio.html` to showcase GitHub activity and projects.
- **About Page**: dedicated page for the agency information.

## [1.2.0] - 2026-02-01
### Added
- **2026-02-19 23:38 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-19 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-18 19:55 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-17 20:37 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-16 13:00 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-14 11:26 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-13 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-13 06:15 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-12 06:17 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-12 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-11 06:17 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-11 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-11 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-10 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-10 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-09 06:35 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-09 06:34 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-09 06:33 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-09 06:33 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-09 06:33 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-06 06:17 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-06 06:17 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-06 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-04 06:17 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-04 06:17 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-03 07:59 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-02 06:36 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-02 06:35 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-02 06:34 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **Action Sync Workflow**: Automated synchronization of workflow files to `dependabot-secure-flow` action repository
- **Automatic Releases**: Semantic versioning and automated release creation for action updates
- **CHANGELOG Automation**: Automatic CHANGELOG updates in action repository on sync
- **Release Notifications**: Automated issue creation when new action releases are published
- **PWA Manifest**: Updated manifest for proper GitHub Pages deployment

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
- **2026-02-19 23:38 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-19 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-18 19:55 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-17 20:37 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-16 13:00 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-14 11:26 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-13 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-13 06:15 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-12 06:17 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-12 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-11 06:17 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-11 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-11 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-10 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-10 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-09 06:35 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-09 06:34 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-09 06:33 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-09 06:33 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-09 06:33 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-06 06:17 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-06 06:17 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-06 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-04 06:17 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-04 06:17 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-03 07:59 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-02 06:36 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-02 06:35 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-02 06:34 UTC**: Automated Security Batch Update (DependabotSecureFlow)
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

## [Unreleased] - 2026-02-16
### Added
- **2026-02-19 23:38 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-19 06:16 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-18 19:55 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- **2026-02-17 20:37 UTC**: Automated Security Batch Update (DependabotSecureFlow)
- Dedicated categories: `Local News / Informations locales` and `Weather / Météo` with FR/EN labels.
- French trusted Open Source feeds: `Developpez.com`, `LinuxFr`, `Programmez`.
- Localized keyword mappings for `OpenClaw`, `Local News`, `Weather`, and `Open Source`.

### Changed
- `france` category no longer relies on `Liberation` as a required primary source.
- `international` category source set updated to stable, validated feeds.
- Removed several known failing feeds from AI/Cybersecurity categories.

### Tested
- Full test suite: `node --test` => **41 passed, 0 failed**.
- Feed availability check: **135 checked, 115 OK, 20 failing**.
