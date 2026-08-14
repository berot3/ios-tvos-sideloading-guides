# iOS & tvOS Sideloading Guides

Multilingual, step-by-step guides for sideloading apps on **iPhone, iPad, and Apple TV** with AltStore Classic, AltStore PAL, AltServer, SideStore, Xcode, and related tools.

The goal is not merely to list download links. Each guide explains the complete installation path, the correct package for every platform, Apple signing limits, refresh requirements, and the most common failure cases.

## Available and planned guides

| App | iPhone / iPad | Apple TV | Languages | Status |
| --- | --- | --- | --- | --- |
| [Fusion](https://fusion-altstore-guide.aylana77.chatgpt.site) | AltStore Classic | AltServer + Xcode | EN, DE, ES, FR | Existing guide; repository migration next |
| Nuvio | Planned | Planned | Planned | Research pending |
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
├── fusion/
├── nuvio/
└── future-app/
```

Shared layout, navigation, language handling, checklists, warnings, copy controls, and troubleshooting components will be reused across every guide. App-specific instructions and translations will remain separated so one guide can be updated without rewriting the others.

## Roadmap

1. Import and preserve the reviewed Fusion guide.
2. Convert the current single-guide implementation into a reusable guide system.
3. Add a searchable guide overview and app-specific routes.
4. Add per-guide SEO metadata, source dates, platform labels, and installation-channel labels.
5. Add automated build, link, accessibility, and content checks.
6. Research and publish the Nuvio guide.
7. Add further iOS and tvOS apps when there is a real documentation gap.

## Contributing

Corrections are welcome, especially when an upstream release changes:

- supported operating-system versions
- IPA filenames
- installation or signing behavior
- AltStore Classic, AltStore PAL, AltServer, SideStore, or Xcode requirements

Please include a primary source such as the app's official repository, release page, or official documentation.

## License

No project license has been selected yet. Until one is added, normal copyright rules apply.
