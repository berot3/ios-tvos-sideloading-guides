# Debrify sources and publication gate

Primary references and unresolved checks for a possible Debrify installation guide.

**Last reviewed:** 5 September 2026  
**Candidate status:** **EXPERIMENTAL · NEEDS DEVICE TEST**  
**Tracking issue:** [#11 — Validate Debrify before publishing a guide](https://github.com/berot3/ios-tvos-sideloading-guides/issues/11)

> [!IMPORTANT]
> Debrify's iOS and tvOS IPAs are official developer release assets from the canonical repository. That establishes a substantially stronger distribution chain than an unrelated community mirror. It does not establish app stability, security, entitlement compatibility, or refresh reliability on a particular device.

> [!WARNING]
> Debrify has moved from the fast-moving v0.8 alpha series to **v0.9.0-beta.1**, published 1 September 2026. The package provenance is strong, but this repository still has no complete recorded iPhone/iPad or Apple TV device workflow. Keep Debrify experimental here until install, launch, update-over-existing, data retention, and refresh behavior have been reproduced.

## Primary sources

| Source | Used to verify |
| --- | --- |
| [Canonical Debrify repository](https://github.com/varunsalian/debrify) | Project ownership, supported providers and platforms, source, and current license |
| [Debrify releases](https://github.com/varunsalian/debrify/releases) | Official package filenames, release channel, dates, file sizes, and GitHub-provided SHA-256 digests |
| [v0.9.0-beta.1 release](https://github.com/varunsalian/debrify/releases/tag/v0.9.0-beta.1) | Current checked beta and iOS/tvOS release assets |
| [Release build workflow](https://github.com/varunsalian/debrify/blob/main/.github/workflows/build.yml) | iOS and tvOS build, ad-hoc signing, signature verification, packaging, and upload path |
| [tvOS source tree](https://github.com/varunsalian/debrify/tree/main/tvos) | Native tvOS project, Runner target, and Top Shelf extension |
| [Official website](https://varunsalian.github.io/debrify/) | Product scope, supported providers, and responsible-use statement |
| [Privacy policy](https://varunsalian.github.io/debrify/privacy.html) | Locally stored credentials, third-party integrations, Aptabase analytics, and user controls |
| [AGPL-3.0-only license](https://github.com/varunsalian/debrify/blob/main/LICENSE) | Current GNU Affero General Public License v3 text |
| [Relicensing commit](https://github.com/varunsalian/debrify/commit/37c1aa88966b77f91dcdd4b6962a33fd681e6ea3) | Project relicensed from the earlier PolyForm terms to AGPL-3.0-only on 28 August 2026 |
| [First tvOS alpha announcement](https://www.reddit.com/r/debrify/comments/1vlme2s/debrify_on_apple_tv_first_tvos_build_is_up/) | Developer statement that playback, remote/focus handling, and the player dock required early testing |
| [Developer TestFlight statement](https://www.reddit.com/r/debrify/comments/1vuf1rl/sneak_peek_at_next_weeks_debrify_update_and_yes/) | Developer statement that there was no near-term public TestFlight route; recheck before publishing a guide |

## Current release-channel snapshot

This snapshot is evidence for the 5 September review, not a version that a future guide should hard-code as permanently current.

| Channel | Package | SHA-256 | Assessment |
| --- | --- | --- | --- |
| v0.9.0-beta.1 | `debrify-v0.9.0-beta.1-unsigned.ipa` | `b7a94903b77f19e2a78bfef195bc617735ec8e400522111d77be7b1e00abd8c2` | Official iOS/iPadOS developer asset; beta; device workflow still unverified here |
| v0.9.0-beta.1 | `debrify-v0.9.0-beta.1-tvos-unsigned.ipa` | `bcac60d5ab59b0bd5e54d45b85bc023bb2b2f3a9d4686438eae04db326ac9855` | Official tvOS developer asset; beta; device workflow still unverified here |

GitHub Actions checks out the release ref, builds the applications, ad-hoc signs their nested binaries, verifies that the Mach-O files contain signature slots, packages the applications as IPAs, and uploads them to the same GitHub release. This is an inspectable first-party build path. It is not a claim that independent reproducible-build verification has been completed.

The older v0.8 alpha snapshot in this repository is now historical. Reader-facing text must derive the current channel from the release page rather than continuing to describe v0.8.7 as current.

## License change

Debrify is no longer correctly described as PolyForm Noncommercial or merely noncommercial source-available software. The canonical `LICENSE` now contains the GNU Affero General Public License v3, and the project history records the change as **AGPL-3.0-only**.

For current material:

- describe the project as AGPL-3.0-only / free and open-source software when license context is relevant;
- do not repeat the old noncommercial restriction as current policy;
- keep historical PolyForm wording only when explicitly discussing releases or repository state from before the relicensing.

## Current risk assessment

- **Distribution provenance:** Strong. The developer publishes both Apple IPAs in the canonical repository and GitHub records SHA-256 digests for the assets.
- **Release maturity:** Improved but still under validation here. v0.9.0-beta.1 supersedes the v0.8 alpha series, but a beta label does not replace device testing.
- **tvOS maturity:** Still higher risk than ordinary iOS distribution because the port is young and earlier source/release notes identified patched or pre-alpha dependencies. Recheck those assumptions against the current beta before a tvOS guide is promoted.
- **Maintenance:** Very active and volatile. Version-specific screenshots and instructions age quickly, so a guide should link to current releases and state its review date.
- **Credential sensitivity:** High. The app can store debrid, WebDAV, indexer, tracker, IPTV, and other credentials. Release notes describe encrypted credentials and backups, but no independent security audit is recorded here.
- **Analytics:** Aptabase usage analytics are disclosed. The privacy policy should be rechecked against the current implementation before publication.
- **Code quality / reliability:** Earlier maintainer warnings about large files, static state, duplicated provider logic, and tightly coupled components remain maintenance signals, not evidence of malicious behavior.
- **TestFlight:** No current public TestFlight route is verified by this repository. The earlier developer statement said there was no near-term TestFlight plan. Recheck immediately before any reader-facing statement because this is a volatile distribution fact.

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
- [ ] Recheck TestFlight status immediately before publication.
- [ ] Reuse the shared sideloading workflow instead of duplicating generic Apple signing instructions in the Debrify guide.

Until the publication gate is met, Debrify may appear in the repository roadmap and the compact app-availability snapshot, but it must not be presented on the website as a verified normal-installation guide.
