# iOS & tvOS Sideloading Guides

Multilingual, step-by-step guides for sideloading apps on **iPhone, iPad, and Apple TV** with AltStore Classic, AltStore PAL, AltServer, SideStore, Xcode, and related tools.

**Website:** [berot3.github.io/ios-tvos-sideloading-guides](https://berot3.github.io/ios-tvos-sideloading-guides/)

The goal is not merely to list download links. Each guide explains the complete installation path, the correct package for every platform, Apple signing limits, refresh requirements, and the most common failure cases.

## Available and planned guides

| App | iPhone / iPad | Apple TV | Languages | Status |
| --- | --- | --- | --- | --- |
| [Fusion](https://berot3.github.io/ios-tvos-sideloading-guides/guides/fusion/) | AltStore Classic | AltServer + Xcode | EN, DE, ES, FR | Available — unofficial community IPA repository |
| [Nuvio](https://berot3.github.io/ios-tvos-sideloading-guides/guides/nuvio/) | SideStore / Sideloadly | Unofficial community beta | EN, DE, ES, FR | Available |
| [Debrify](guides/debrify/SOURCES.md) | Official developer IPA | Official developer tvOS IPA | Planned | Experimental alpha — [device validation required](https://github.com/berot3/ios-tvos-sideloading-guides/issues/11) |
| More apps | Planned | When supported | Planned | Suggestions welcome |

## What each guide should include

- verified upstream download and release links
- clear distinction between iOS/iPadOS and tvOS packages
- the correct distribution path, including AltStore Classic, AltStore PAL, SideStore, or direct AltServer installation
- prerequisites and an interactive checklist
- numbered installation steps
- free Apple developer account limitations
- refresh or reinstallation instructions
- quick troubleshooting
- source and review date
- responsive light and dark modes
- accessible navigation and controls
- multilingual content where reliable translations are available

## Safety and scope

> [!WARNING]
> **Fusion IPA provenance:** The linked repository `yodaluca23/Fusion-AltStore` is explicitly unofficial. Its maintainer states that it republishes the IPA files shared by Fusion developer Exate in the official Fusion Discord. The GitHub release checksums have not yet been matched against the original Discord attachments.

This project:

- does **not** host or redistribute IPA files
- does **not** ask users to submit Apple Account credentials
- links to upstream projects and official documentation whenever possible
- distinguishes verified facts from app-specific instructions that may change
- is independent and is not affiliated with Apple, AltStore, or the documented apps

Always verify that an IPA and its source are trustworthy before installing it. Sideloaded apps run under the permissions and entitlements included by their developer.

## Planned site structure

```text
/
├── guides/fusion/
├── guides/nuvio/
├── de/guides/fusion/
├── de/guides/nuvio/
├── es/guides/fusion/
├── es/guides/nuvio/
├── fr/guides/fusion/
├── fr/guides/nuvio/
└── guides/future-app/
```

Shared layout, navigation, language handling, checklists, warnings, copy controls, and troubleshooting components will be reused across every guide. App-specific instructions and translations will remain separated so one guide can be updated without rewriting the others.

## Roadmap

1. Keep Fusion and Nuvio package links, requirements, and signing behavior current.
2. Validate Debrify's official iOS and experimental tvOS packages before publishing a reader-facing guide.
3. Add a searchable guide overview when the library grows.
4. Add link and accessibility checks to the existing build validation.
5. Add further iOS and tvOS apps when there is a real documentation gap.

## Development and publishing

The site is a standard Next.js project configured for a fully static export. To validate a change locally:

```bash
npm ci
npm run check
```

Every pull request runs linting, type-checking, the production build, and exported-route tests. A successful push to `master` publishes the generated `out/` directory through GitHub Actions and GitHub Pages. Generated site files are not committed to the repository.

## Contributing

Corrections are welcome, especially when an upstream release changes:

- supported operating-system versions
- IPA filenames
- installation or signing behavior
- AltStore Classic, AltStore PAL, AltServer, SideStore, or Xcode requirements

Please include a primary source such as the app's official repository, release page, or official documentation.

## License

No project license has been selected yet. Until one is added, normal copyright rules apply.
