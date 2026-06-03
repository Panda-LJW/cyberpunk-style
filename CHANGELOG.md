# Changelog

## 2026-06-03

### Changed

- Reworked the selected-work project titles into a Wibify-inspired vertical letter roll on hover.
- Kept each project row layout stable while only the title letters move through an overflow-hidden mask.
- Moved the hover accent color into the lower cloned title layer so yellow enters with the rolling text instead of tinting the row immediately.
- Tuned the motion to a precise 0.62s `cubic-bezier(0.76, 0, 0.24, 1)` transition with light per-letter staggering.

## 2026-06-02

### Fixed

- Removed the temporary inline hover preview that flashed before the floating project image appeared.
- Positioned the floating preview from the current pointer location before starting spring-based tracking.
- Kept the floating project image constrained within the viewport.

### Added

- Created the standalone Cyberpunk 2077-inspired portfolio prototype.
- Added the selected-work title marquee and pointer-following project previews.
