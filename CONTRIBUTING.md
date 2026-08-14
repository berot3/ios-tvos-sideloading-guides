# Contributing

Corrections and new guide proposals are welcome.

## Evidence requirements

- Prefer official project documentation, repositories, and release pages.
- Put app-specific verification links in `guides/<slug>/SOURCES.md`.
- Include a review date and update it only after rechecking the instructions.
- Do not infer supported platforms or IPA filenames from an app name.
- Do not add or redistribute IPA files.

## Guide requirements

A publishable guide should cover prerequisites, the exact package for each platform, installation steps, signing limits, renewal or reinstallation, troubleshooting, accessibility, and reliable translations.

Before opening a pull request, run:

```bash
npm ci
npm run check
```
