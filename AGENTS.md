# Portfolio maintenance

Whenever editing this site, update the affected route entries in
`src/data/page-updates.js` before building and publishing. Use the calendar date
in America/Los_Angeles on which the page content or page-specific interaction
actually changed. Include dependent routes when shared content/data changes.
Keep dates on untouched pages unchanged; shared presentation changes, regenerated
exports, and date-footer corrections alone do not reset page content dates.
When backfilling, inspect source history and convert commit timestamps to this
timezone, rather than using build time or the latest generated-file commit.

Preserve muted, looping, inline autoplay for pursuit videos. Verify responsive
layout and focus behavior when changing their presentation.

Use `npm run build` to refresh both `out/` and `docs/` before publishing.
