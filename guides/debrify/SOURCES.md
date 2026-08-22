# Debrify sources and publication gate

Primary references and unresolved checks for a possible Debrify installation guide.

**Last reviewed:** 22 August 2026  
**Candidate status:** **EXPERIMENTAL · NEEDS DEVICE TEST**  
**Tracking issue:** [#11 — Validate Debrify before publishing a guide](https://github.com/berot3/ios-tvos-sideloading-guides/issues/11)

> [!IMPORTANT]
> Debrify's iOS and tvOS IPAs are official developer release assets from the canonical repository. That establishes a substantially stronger distribution chain than an unrelated community mirror. It does not establish app stability, security, entitlement compatibility, or refresh reliability on a particular device.

> [!WARNING]
> The current tvOS package and the currently sideloadable v0.8 iOS package are alpha builds intended for early testers. Do not present Debrify as a normal recommendation until the complete install, launch, update, and refresh workflows have been recorded on real devices.

## Primary sources

| Source | Used to verify |
| --- | --- |
| [Canonical Debrify repository](https://github.com/varunsalian/debrify) | Project ownership, supported providers and platforms, code availability, architecture warning, and license |
| [Debrify releases](https://github.com/varunsalian/debrify/releases) | Official package filenames, release channel, dates, file sizes, and GitHub-provided SHA-256 digests |
| [Release build workflow](https://github.com/varunsalian/debrify/blob/main/.github/workflows/build.yml) | iOS and tvOS build, ad-hoc signing, signature verification, packaging, and upload path |
| [tvOS source tree](https://github.com/varunsalian/debrify/tree/main/tvos) | Native tvOS project, Runner target, and Top Shelf extension |
| [Official website](https://varunsalian.github.io/debrify/) | Product scope, supported providers, and responsible-use statement |
| [Privacy policy](https://varunsalian.github.io/debrify/privacy.html) | Locally stored credentials, third-party integrations, Aptabase analytics, and user controls |
| [PolyForm Noncommercial license](https://github.com/varunsalian/debrify/blob/main/LICENSE) | Source-available noncommercial license; not an OSI open-source license |
| [First tvOS alpha announcement](https://www.reddit.com/r/debrify/comments/1vlme2s/debrify_on_apple_tv_first_tvos_build_is_up/) | Developer statement that playback, remote/focus handling, and the player dock required early testing |
| [Current tvOS preview and TestFlight statement](https://www.reddit.com/r/debrify/comments/1vuf1rl/sneak_peek_at_next_weeks_debrify_update_and_yes/) | Apple TV development status and no near-term TestFlight plan |

## Release-channel snapshot

The snapshot below is evidence for this review, not a version that a future guide should hard-code as permanently current.

| Channel | Package | SHA-256 | Assessment |
| --- | --- | --- | --- |
| v0.8.7-alpha.1 | `debrify-v0.8.7-alpha.1-unsigned.ipa` | `278241950924584b9de3ade55c827a5b7056938a75f72f1ffbd83188651dd6df` | Official iOS developer asset; experimental and untested here |
| v0.8.7-alpha.1 | `debrify-v0.8.7-alpha.1-tvos-unsigned.ipa` | `4186d6780d08559abdab4b3df853f2889e4220624d2b69f6a90308206d9e8807` | Official tvOS developer asset; experimental and untested here |
| v0.7.0-beta.1 | `debrify-v0.7.0-beta.1-unsigned.ipa` | `8151a504189268c7123ebd088427d8a2d75be8b0548166e1a5fefce2f023bb65` | Last non-prerelease iOS beta in this review; predates the tvOS package and the v0.8 ad-hoc-signature fix |

GitHub Actions checks out the release ref, builds the applications, ad-hoc signs their nested binaries, verifies that the Mach-O files contain signature slots, packages the applications as IPAs, and uploads them to the same GitHub release. This is an inspectable first-party build path. It is not a claim that independent reproducible-build verification has been completed.

## Current risk assessment

- **Distribution provenance:** Strong. The developer publishes both IPAs in the canonical repository and GitHub provides file digests.
- **tvOS maturity:** Low. The port first became public in v0.8.0-alpha.1 on 11 August 2026 and remains on the fast-moving alpha channel.
- **iOS maturity:** Mixed. A beta channel exists, but the v0.8 release notes and workflow describe the ad-hoc-signing change needed for reliable sideloader re-signing.
- **Maintenance:** Very active but volatile. Frequent alpha releases reduce the value of screenshots and version-specific instructions unless the guide records a review date and release-channel policy.
- **Credential sensitivity:** High. The app can store debrid, WebDAV, indexer, tracker, IPTV, and other credentials. Current release notes describe encrypted credentials and backups, but no independent security audit is recorded here.
- **Analytics:** Aptabase usage analytics are disclosed. The privacy policy was last updated on 25 April 2026 and should be rechecked against the current implementation before publication.
- **Code quality:** The maintainer explicitly warns that the repository contains large files, god classes, static state, duplicated provider logic, and tightly coupled components. Treat this as a reliability and maintainability concern, not proof of malicious behavior.
- **License wording:** Describe Debrify as source-available for noncommercial use. Do not call it FOSS or OSI open source.

## Publication gate

- [ ] Re-check the current release channel and replace stale package metadata immediately before device testing.
- [ ] Verify each downloaded IPA against GitHub's SHA-256 digest.
- [ ] Inspect bundle identifiers, minimum OS versions, entitlements, App Groups, Keychain access, background modes, and the Top Shelf extension.
- [ ] Record a complete iPhone or iPad install, relaunch, restart, update-over-existing, and provisioning-profile refresh.
- [ ] Record a complete Apple TV install, relaunch, restart, update-over-existing, and seven-day reinstallation or refresh.
- [ ] Test TorBox plus at least one Stremio/AIOStreams-compatible addon.
- [ ] Test playback, source selection, subtitles, audio tracks, and multichannel behavior.
- [ ] Test Siri Remote focus, text entry, player dock, Top Shelf, profiles, and remote setup on Apple TV.
- [ ] Confirm whether a sideloading method changes the bundle identifier or disrupts Keychain, profiles, settings, or transferred credentials.
- [ ] Reconcile the current privacy implementation with the published privacy policy and disclose Aptabase analytics neutrally.
- [ ] Keep the alpha warning prominent and distinguish a stable/beta iOS route from the experimental tvOS route.
- [ ] Reuse the shared sideloading workflow instead of duplicating generic Apple signing instructions in the Debrify guide.

Until the publication gate is met, Debrify may appear in the repository roadmap but must not appear on the website as an available or normally recommended guide.
