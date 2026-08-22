# Sideloading method validation

Last updated: **22 August 2026**

This document is the durable evidence and device-test record for shared iOS, iPadOS, and tvOS sideloading workflows. The corresponding GitHub issue tracks remaining work. App guides must not promote an untested method as the default merely because the tool claims generic IPA support.

## Status legend

- **RESEARCHED** — primary documentation checked; no current hands-on result recorded here.
- **NEEDS DEVICE TEST** — plausible and documented, but app/device compatibility is not established.
- **VERIFIED** — the complete install, launch, and refresh workflow was tested on recorded hardware and OS versions.
- **ADVANCED** — viable only for experienced users or additional infrastructure.
- **EXPERIMENTAL** — young, beta-only, exploit-dependent, or otherwise unsuitable as a default route.
- **NOT RECOMMENDED** — material security, reliability, maintenance, or usability concerns prevent a normal recommendation.
- **REJECTED** — tested or researched and found unsuitable for the stated app/device workflow.

## Evidence rules

1. Prefer Apple, the app developer, and the sideloading tool's official documentation or repository.
2. Record community reports as supplementary evidence, never as proof of generic compatibility.
3. Separate four different claims:
   - the tool can install an IPA;
   - the app launches after signing;
   - app data and required entitlements work;
   - the signature can be refreshed reliably.
4. Record the tool version, device model, OS version, app version, IPA source, bundle-ID behavior, and test date.
5. A method becomes the default recommendation only after the relevant app/device path is **VERIFIED**.
6. Re-test after material iOS, iPadOS, tvOS, app, signing-tool, or pairing changes.
7. Paid and certificate-provider routes must disclose price, UDID handling, certificate/revocation risk, refund terms, and dependence on the provider.
8. Never call app-version updating and provisioning-profile refreshing the same operation.

## Initial validation matrix

No row is marked **VERIFIED** yet. Existing published guides were source-checked, but their complete device workflows still need a recorded hands-on pass.

| App | Platform | Method | Research | Install | Launch | Refresh | Current status | Main question |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Fusion | iPhone / iPad | AltStore Classic + AltServer | Primary docs checked | Not recorded | Not recorded | Not recorded | RESEARCHED | Confirm current AltStore UI, source import, update, and background/manual refresh. |
| Fusion | iPhone / iPad | SideStore + iLoader | Generic support only | Not recorded | Not recorded | Not recorded | NEEDS DEVICE TEST | Does the Fusion source import and does iCloud/app handoff behave normally? |
| Fusion | iPhone / iPad | Sideloadly | Generic IPA support only | Not recorded | Not recorded | Not recorded | NEEDS DEVICE TEST | Confirm direct IPA install, overwrite update, and free daemon refresh. |
| Fusion | Apple TV | AltServer + Xcode | Primary docs checked | Not recorded | Not recorded | Not recorded | RESEARCHED | Revalidate pairing and manual seven-day reinstall on current tvOS. |
| Fusion | Apple TV | Sideloadly | Generic tvOS support only | Not recorded | Not recorded | Not recorded | NEEDS DEVICE TEST | Confirm launch and clarify free manual refresh versus paid tvOS auto-refresh. |
| Fusion | Apple TV | atvloadly | Primary repo checked | Not recorded | Not recorded | Not recorded | ADVANCED · NEEDS DEVICE TEST | Does bundle-ID rewriting or signing break Fusion iCloud/CloudKit behavior? |
| Fusion | iOS / tvOS | FlareStore | Provider docs checked | Not recorded | Not recorded | Not recorded | NEEDS DEVICE TEST · PAID | Confirm certificate lifetime, app compatibility, and beta Apple TV flow without treating it as a default. |
| Nuvio | iPhone / iPad | SideStore + iLoader | Primary + community workflow checked | Not recorded | Not recorded | Not recorded | RESEARCHED | Validate Full source import, slow framework signing, update, data retention, and refresh. |
| Nuvio | iPhone / iPad | Sideloadly | Primary docs checked | Not recorded | Not recorded | Not recorded | RESEARCHED | Confirm direct Full IPA install, overwrite update, and free daemon refresh. |
| Nuvio | Apple TV | Sideloadly | Primary + project docs checked | Not recorded | Not recorded | Not recorded | RESEARCHED | Confirm pairing, launch, Top Shelf limitation, and free manual reinstall. |
| Nuvio | Apple TV | atvloadly | Generic tvOS support only | Not recorded | Not recorded | Not recorded | ADVANCED · NEEDS DEVICE TEST | Confirm the community beta tolerates bundle-ID rewriting and automatic refresh. |
| Nuvio | iOS / tvOS | FlareStore | Provider docs checked | Not recorded | Not recorded | Not recorded | NEEDS DEVICE TEST · PAID | Confirm IPA compatibility and beta Apple TV installation. |
| Debrify | iPhone / iPad | AltStore Classic | Official IPA and release workflow checked | Not recorded | Not recorded | Not recorded | EXPERIMENTAL · NEEDS DEVICE TEST | Confirm v0.8 alpha installs, retains credentials during updates, and refreshes without breaking Keychain data. |
| Debrify | iPhone / iPad | SideStore | Official IPA and release workflow checked | Not recorded | Not recorded | Not recorded | EXPERIMENTAL · NEEDS DEVICE TEST | Confirm framework signing, update-over-existing, background refresh, and data retention. |
| Debrify | iPhone / iPad | Sideloadly | Official IPA and generic tool support checked | Not recorded | Not recorded | Not recorded | EXPERIMENTAL · NEEDS DEVICE TEST | Confirm direct install, daemon refresh, and preservation of the original bundle identifier. |
| Debrify | Apple TV | AltServer + Xcode | Official tvOS IPA checked; generic method docs only | Not recorded | Not recorded | Not recorded | EXPERIMENTAL · NEEDS DEVICE TEST | Confirm signing, installation, Top Shelf, remote focus, playback, and seven-day reinstallation. |
| Debrify | Apple TV | Sideloadly | Official tvOS IPA and generic tool support checked | Not recorded | Not recorded | Not recorded | EXPERIMENTAL · NEEDS DEVICE TEST | Confirm installation, multichannel audio, update-over-existing, and free versus paid refresh behavior. |
| Debrify | Apple TV | atvloadly | Official tvOS IPA checked; generic tool support only | Not recorded | Not recorded | Not recorded | ADVANCED · EXPERIMENTAL · NEEDS DEVICE TEST | Confirm bundle-ID rewriting does not break Keychain, profiles, Top Shelf, or remote setup. |
| Any supported app | iOS 27 | SideInstaller → SideStore | Primary repo checked | Not recorded | Not recorded | Not recorded | EXPERIMENTAL | SideInstaller installs SideStore; it is not itself proof of app refresh reliability. |
| Any compatible iOS app | iPhone / iPad | LiveContainer + SideStore | Primary docs checked | Not recorded | Not recorded | Not recorded | ADVANCED · NEEDS DEVICE TEST | Check entitlements, extensions, external handoff, refresh shortcut, and container limitations. |

## Required research checklist

### Project and package

- [ ] Identify the canonical app project, website, repository, source manifest, and release channel.
- [ ] Distinguish official source code, official binaries, community builds, forks, and paid signing services.
- [ ] Record the IPA filename, app version/build, minimum OS, bundle identifier, release date, and SHA-256 where possible.
- [ ] Check whether the manifest itself provides a SHA-256 value and accurate permission/entitlement metadata.
- [ ] Check current App Store, TestFlight, AltStore PAL, and sideload-only availability using the app developer's current statement.

### Method behavior

- [ ] Confirm supported host operating systems and whether a computer is needed once or continuously.
- [ ] Confirm whether the method uses the user's Apple Account, a third-party certificate, or a shared/enterprise certificate.
- [ ] Document how credentials, UDIDs, certificates, pairing files, and 2FA data are handled.
- [ ] Confirm whether the method changes the bundle identifier.
- [ ] Check App Groups, iCloud/CloudKit, push notifications, extensions, keychain access, background modes, and external-app handoff.
- [ ] Separate automatic app-version updates, user-initiated updates, background signature refresh, daemon refresh, and manual reinstall.
- [ ] Record free and paid limitations without presenting a third-party provider's marketing claims as Apple policy.
- [ ] Check current open issues for pairing, signing, refresh, data-loss, and OS-update regressions.

### Beginner usability

- [ ] Record exact current UI labels and menu paths.
- [ ] Identify the shortest safe route for a first-time user.
- [ ] Identify which failure states can leave the app unusable after seven days.
- [ ] Provide recovery steps that do not unnecessarily delete the existing app or its data.
- [ ] Mark Docker, Linux/OpenWrt, LiveContainer, beta, exploit-based, and third-party-certificate methods as advanced or experimental where appropriate.

## Hands-on device checklist

Run this checklist separately for every app/platform/method row.

- [ ] Record tester, date, device model, OS version, tool version, app version, IPA URL, and IPA SHA-256.
- [ ] Install only from the documented official or explicitly qualified community source.
- [ ] Capture the exact pairing, trust, Developer Mode, source-import, and installation steps.
- [ ] Confirm the app launches twice, including once after a device restart.
- [ ] Confirm required login, local data, iCloud/CloudKit, extensions, player handoff, and network functions.
- [ ] Install an update over the existing app and confirm whether data remains.
- [ ] Perform a manual signature refresh before expiry.
- [ ] Verify automatic/daemon refresh only when the tool explicitly supports it; record the triggering conditions.
- [ ] Confirm the app still launches after the refreshed profile replaces the original one.
- [ ] Record failures and attach sanitized logs or screenshots where useful.
- [ ] Assign the final status and update the reader-facing recommendation.

## Test record template

```md
### <App> — <Platform> — <Method>

- Status:
- Tester:
- Test date:
- Device:
- OS:
- Tool/version:
- App/version:
- IPA source:
- SHA-256:
- Apple account type:
- Bundle ID before/after:
- Install result:
- Launch after restart:
- App features and entitlements:
- Update-over-existing result:
- Manual refresh result:
- Automatic/daemon refresh result:
- Data retained:
- Known limitations:
- Evidence:
- Recommendation:
```

## Shared guide architecture

The intended reader-facing structure is:

- `/sideloading/` — method chooser, Apple signing fundamentals, security, and detailed shared workflows.
- Fusion and Nuvio guides — distribution status, package provenance, app-specific choices, first launch, data, and troubleshooting.
- Shared method content — authored once and reused in both the standalone sideloading page and app-guide summaries.

Readers should not be forced to bounce between pages for every step. App guides should retain a concise complete route and link to the shared page for detailed setup and recovery.

## Primary method sources

- Apple Personal Team limits: <https://developer.apple.com/help/account/basics/about-your-developer-account/>
- AltStore Classic and AltServer: <https://faq.altstore.io/altstore-classic/>
- SideStore installation: <https://docs.sidestore.io/docs/installation/install>
- SideStore prerequisites: <https://docs.sidestore.io/docs/installation/prerequisites>
- iLoader: <https://github.com/nab138/iloader>
- Sideloadly FAQ: <https://sideloadly.io/faq.html>
- Sideloadly changelog, including tvOS auto-refresh conditions: <https://sideloadly.io/changelog.html>
- LiveContainer + SideStore: <https://livecontainer.github.io/docs/installation/lc_sidestore>
- SideInstaller: <https://github.com/FrizzleM/SideInstaller>
- atvloadly: <https://github.com/bitxeno/atvloadly>
- FlareStore: <https://flarestore.app/>
- FlareStore Apple TV beta guide: <https://flarestore.app/guide/apple-tv/>
- FlareStore privacy policy: <https://flarestore.app/privacy/>
- FlareStore terms: <https://flarestore.app/tos/>
- Debrify canonical repository: <https://github.com/varunsalian/debrify>
- Debrify releases: <https://github.com/varunsalian/debrify/releases>
- Debrify release workflow: <https://github.com/varunsalian/debrify/blob/main/.github/workflows/build.yml>
- Debrify privacy policy: <https://varunsalian.github.io/debrify/privacy.html>
- Debrify tvOS alpha announcement: <https://www.reddit.com/r/debrify/comments/1vlme2s/debrify_on_apple_tv_first_tvos_build_is_up/>
