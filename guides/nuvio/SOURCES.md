# Nuvio guide verification notes

Last reviewed: **15 August 2026**

These notes document the provenance decisions behind the Nuvio guide. They are deliberately more conservative than community shorthand such as “official IPA” or “auto-update”.

## Publication decision

**PARTIAL / publish with qualification.**

- Nuvio's official mobile source is active and supports iOS/iPadOS.
- The current practical iOS IPA is published by a separate repository whose manifest explicitly labels it unofficial.
- No official NuvioMedia tvOS app exists; the Apple TV workflow uses an independent community beta.
- AltStore PAL is not a current Nuvio installation route.

## Canonical project

- Website: <https://nuvio.tv>
- Verified GitHub organization: <https://github.com/NuvioMedia>
- Official mobile source: <https://github.com/NuvioMedia/NuvioMobile>
- Checked official release: <https://github.com/NuvioMedia/NuvioMobile/releases/tag/0.4.5>

The official 0.4.5 GitHub release, published 12 August 2026, contains Android assets but no iOS IPA. The source tree contains the iOS application and sets an iOS deployment target of 16.1.

The repository named `NuvioMedia/NuvioTV` targets Android TV. Its name is not evidence of an official Apple TV app.

## iPhone and iPad package

- Community repository: <https://github.com/luqmanfadlli/NuvioMobile-iOS>
- Checked release: <https://github.com/luqmanfadlli/NuvioMobile-iOS/releases/tag/0.4.5>
- Full source: <https://raw.githubusercontent.com/luqmanfadlli/NuvioMobile-iOS/main/NuvioFull.json>
- File: `Nuvio-v0.4.5-Full.ipa`
- Version/build: `0.4.5` / `109`
- Date: `2026-08-13T06:10:17Z`
- Bundle identifier: `com.nuvio.media`
- Minimum OS: `16.1`
- SHA-256 recorded during research: `6ecfd8f066d9711b4f1c00953e983f10d58e9f24351a794f150b5d0caa11f0fc`

The manifest says:

- `Nuvio Full (Unofficial)`
- developer: `Nuvio Unofficial`
- Full is built from official source without modifications.

The first two items are facts about the manifest. The upstream-parity statement is the distributor's claim, not an independent reproducible-build verification. The guide therefore calls this a **community-built Full IPA**, never an official NuvioMedia binary.

The `Enhanced` variant contains experimental and custom changes and is intentionally excluded from the beginner workflow.

## Current iOS availability

User-supplied screenshots from the official Nuvio Discord dated 14 August 2026 state that Nuvio was currently unavailable on iOS without sideloading after the App Store/TestFlight builds were removed. They name Sideloadly, SideStore and TrollStore as third-party possibilities and say those tools are not affiliated with or endorsed by Nuvio.

The official repository README still linked TestFlight during the review. The newer maintainer statement was treated as the current availability source and the README entry as stale.

Because the exact target of the Discord “Download iOS .ipa here” link was not visible, the current community repository is not described as an officially designated distribution channel.

## SideStore and iLoader workflow

Primary tool sources:

- SideStore documentation: <https://docs.sidestore.io/>
- iLoader repository: <https://github.com/nab138/iloader>
- iLoader website: <https://iloader.app/>
- Nuvio Full source: <https://raw.githubusercontent.com/luqmanfadlli/NuvioMobile-iOS/main/NuvioFull.json>

iLoader documents support for macOS, Windows and Linux and can install SideStore or SideStore + LiveContainer, import certificate and pairing files, and install an IPA. The iLoader project identifies only its GitHub repository and `iloader.app` as official download locations. Its Homebrew and AUR packages are community maintained.

iLoader lists automatic refreshing of installed apps under **Future Plans**. The guide therefore does not describe iLoader itself as the current ongoing refresh service. It installs and prepares SideStore; SideStore and LocalDevVPN handle the normal on-device refresh workflow.

Community workflow evidence:

- <https://www.reddit.com/r/Nuvio/comments/1vdpdpm/the_best_way_to_sideload_nuvio_in_my_opinion/>
- <https://www.reddit.com/r/Nuvio/comments/1vm372q/sideloaded_ios_nuvio_auto_update/>

The first thread documents this practical sequence: install SideStore with iLoader, add the Nuvio Full JSON source, install Full, use LocalDevVPN, and refresh weekly. The second confirms the source URL and the SideStore `Sources` plus-button flow.

These are community reports, not upstream Nuvio or SideStore documentation. They strengthen the practical recommendation but do not change package provenance.

### Update wording

The guide distinguishes:

1. **Nuvio version update:** a new version becomes visible through the Full source and the user starts the update in SideStore.
2. **Signature refresh:** SideStore renews the free seven-day development signature using LocalDevVPN.

One Reddit reply says “it auto updates,” while another participant clarifies that their setup uses LiveContainer and that they are not fully sure about App-ID behavior. The safer published statement is that the source avoids manually downloading each new IPA and enables convenient user-initiated updates. Unattended background version updates are not guaranteed.

### Data warning

SideStore's FAQ says re-sideloading the same or an updated IPA without deleting the existing app should retain app data. A single Reddit participant reported losing family profiles during a migration and later mentioned a backup utility. The cause and the utility were not independently verified.

The guide therefore recommends updating over the existing installation and checking sync/backups before changing installation methods, without promising data retention.

## Sideloadly

- Official site: <https://sideloadly.io/>

Sideloadly is documented as the simpler direct IPA route. It supports normal free seven-day signing and a refresh daemon when the computer can reach the device. The guide does not imply affiliation with Nuvio.

## Apple signing limits

Primary Apple source:

<https://developer.apple.com/help/account/basics/about-your-developer-account>

Personal Team limits checked for this guide:

- up to 10 App IDs, valid for seven days;
- up to 3 registered devices, valid for seven days;
- up to 3 installed apps per device;
- provisioning profiles expire after seven days.

Tool documentation may describe how it works within these limits, but Apple is the authority for the underlying Personal Team restrictions.

## AltStore Classic and AltStore PAL

- AltStore Classic documentation: <https://faq.altstore.io/altstore-classic/>
- AltStore PAL distinction: <https://faq.altstore.io/altstore-pal/what-is-altstore-pal>
- PAL developer distribution: <https://faq.altstore.io/developers/distribute-with-altstore-pal>

AltStore Classic may use third-party sources and can use the Nuvio Full JSON. AltStore PAL cannot install arbitrary IPA files. PAL apps require Apple's alternative distribution and notarization workflow. No verified Nuvio PAL distribution existed at review time.

## Apple TV community beta

Selected documented community project:

- Repository: <https://github.com/youngchris29-art/NuvioTV>
- Checked release: <https://github.com/youngchris29-art/NuvioTV/releases/tag/tvos-v0.3.0-beta.11>
- File: `NuvioTV.ipa`
- Minimum OS: tvOS 26
- SHA-256 recorded during research: `2ed67c04b8686a8568413f34d2bd5b04f7e724f1cbfdf575dd01022fe6672845`

The project explicitly describes itself as independent, not affiliated with upstream and not endorsed by upstream. The beginner workflow uses Mac + Sideloadly because the project documents the route and Sideloadly's own tvOS notes do not establish reliable wireless Windows pairing.

The checked sideload IPA omits the Top Shelf extension because re-signing the extension with free development signing can break its signatures. The guide presents this as an expected package limitation.

Competing community fork:

<https://github.com/bobsupra/NuvioTVOS>

No primary source established that NuvioMedia prefers either fork. The selected project is used because its beginner installation path and provenance warning are clearer, not because it is canonical.

The two Nuvio SideStore Reddit threads are iOS/iPadOS evidence only and are not used to support tvOS instructions.

## Existing comparable resources

- <https://numb3rs.stream/guide/Nuvio/>
- <https://www.reddit.com/r/Nuvio/comments/1u5rt6e/quick_links_guides_tools_for_new_users_users/>
- <https://www.reddit.com/r/Nuvio/comments/1vdpdpm/the_best_way_to_sideload_nuvio_in_my_opinion/>

The reviewed resources are useful but do not provide one current, fully sourced Apple guide covering official-versus-community provenance, iOS refresh/update distinctions, AltStore PAL limitations and the separate unofficial tvOS route. The repository guide therefore fills a real documentation gap.

## Claims intentionally excluded

- Nuvio is currently available through the App Store or TestFlight.
- The Full IPA or its repository is official NuvioMedia distribution.
- The Full binary was independently proven reproducible from upstream.
- SideStore guarantees unattended background Nuvio version updates.
- iLoader currently refreshes installed apps automatically.
- LiveContainer is required for Nuvio.
- The SideStore/iLoader workflow applies to Apple TV.
- NuvioMedia publishes or endorses an official Apple TV app.
- Windows is a fully verified wireless Apple TV Sideloadly route.
- AltStore PAL installs the Nuvio IPA.
- Re-signing or changing tools always preserves all local data.
