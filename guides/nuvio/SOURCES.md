# Nuvio guide verification notes

Last reviewed: **28 August 2026**

These notes document the provenance decisions behind the Nuvio guide. They are deliberately more conservative than community shorthand such as “official IPA” or “auto-update”.

## Publication decision

**PARTIAL / official iOS package; community tvOS package.**

- Nuvio's official mobile source is active and supports iOS/iPadOS.
- Since release 0.4.11, NuvioMedia publishes the unsigned Full IPA and its SHA-256 digest in the official repository.
- The earlier community `NuvioFull.json` channel stops at 0.4.10 and is retained only as historical provenance, not as the recommended update route.
- No official NuvioMedia tvOS app exists; the Apple TV workflow uses an independent community beta.
- AltStore PAL is not a current Nuvio installation route.

## Canonical project

- Website: <https://nuvio.tv>
- Verified GitHub organization: <https://github.com/NuvioMedia>
- Official mobile source: <https://github.com/NuvioMedia/NuvioMobile>
- Official releases: <https://github.com/NuvioMedia/NuvioMobile/releases>
- First checked release with official Full IPA: <https://github.com/NuvioMedia/NuvioMobile/releases/tag/0.4.11>

The official 0.4.11 GitHub release, published 26 August 2026, contains `nuvio-0.4.11-full-release.ipa`. GitHub records SHA-256 `712e32aa5957c770a1e6769223769d1b56d0c9f957f369901190637f3cb49114` and size 51,638,510 bytes for that asset. The filename pattern, rather than 0.4.11 itself, is used in the reader guide so it does not become a stale “latest” claim.

The repository named `NuvioMedia/NuvioTV` targets Android TV. Its name is not evidence of an official Apple TV app.

## iPhone and iPad package

- Publisher: <https://github.com/NuvioMedia/NuvioMobile>
- Release channel: <https://github.com/NuvioMedia/NuvioMobile/releases>
- Checked file: `nuvio-0.4.11-full-release.ipa`
- Checked SHA-256: `712e32aa5957c770a1e6769223769d1b56d0c9f957f369901190637f3cb49114`

This is an official NuvioMedia release asset, but it is unsigned and must still be re-signed by the user's sideloading tool. “Official IPA” describes provenance; it does not mean App Store signing, Apple review, or immunity from sideloading limitations.

The `Enhanced` variant is an experimental community fork. Its maintainer's 0.4.11 release states that community Full builds will stop because Full is now officially released by NuvioMedia: <https://github.com/luqmanfadlli/NuvioMobile-Enhanced/releases/tag/0.4.11>.

### Retired community Full source

- Historical manifest: <https://raw.githubusercontent.com/luqmanfadlli/NuvioMobile-iOS/main/NuvioFull.json>
- Last entry observed: 0.4.10

The Reddit comment supplied by the user recommended adding this manifest to SideStore for convenient version updates. That was useful for the former community distribution, but the manifest is now frozen behind the official release channel. The public guide therefore does not tell new users to add it. It remains documented here so readers understand why older instructions and screenshots mention it.

## Current iOS availability

User-supplied screenshots from the official Nuvio Discord dated 14 August 2026 state that Nuvio was currently unavailable on iOS without sideloading after the App Store/TestFlight builds were removed. They name Sideloadly, SideStore and TrollStore as third-party possibilities and say those tools are not affiliated with or endorsed by Nuvio.

The official repository README still linked TestFlight during the review. The newer maintainer statement was treated as the current availability source and the README entry as stale.

This historical Discord state was superseded by NuvioMedia's official 0.4.11 IPA release on 26 August 2026.

## SideStore and iLoader workflow

Primary tool sources:

- SideStore FAQ: <https://docs.sidestore.io/docs/faq>
- SideStore prerequisites: <https://docs.sidestore.io/docs/installation/prerequisites>
- iLoader repository: <https://github.com/nab138/iloader>
- iLoader website: <https://iloader.app/>
- Official Nuvio releases: <https://github.com/NuvioMedia/NuvioMobile/releases>

iLoader documents support for macOS, Windows and Linux and can install SideStore or SideStore + LiveContainer, import certificate and pairing files, and install an IPA. The iLoader project identifies only its GitHub repository and `iloader.app` as official download locations. Its Homebrew and AUR packages are community maintained.

iLoader lists automatic refreshing of installed apps under **Future Plans**. The guide therefore does not describe iLoader itself as the current ongoing refresh service. It installs and prepares SideStore; SideStore and LocalDevVPN handle the normal on-device refresh workflow.

SideStore's official FAQ says a computer is needed only for installation and SideStore is untethered afterward. Its prerequisites say LocalDevVPN is required whenever installing, updating, or refreshing and specify Wi-Fi. The guide therefore answers the main user question prominently but method-specifically:

- normal SideStore setup: computer required once;
- later on-device refresh: computer may be fully off;
- iPhone/iPad still needs Wi-Fi with internet access and LocalDevVPN when the refresh runs;
- this does not apply to Sideloadly's computer daemon or the Apple TV workflows.

Community workflow evidence:

- <https://www.reddit.com/r/Nuvio/comments/1vum8dw/how_to_install_nuvio_fullenhanced_on_ios_with/>
- <https://www.reddit.com/r/SideStore/comments/1qy943x/sidestore_refresh_automation/>

The Nuvio thread documents two scheduled Shortcuts automations: connect LocalDevVPN and run `Refresh All Apps`, then disconnect LocalDevVPN 15–20 minutes later. The discussion also confirms that the computer can remain off after initial SideStore setup. The SideStore thread and user-supplied screenshots report that the VPN-stop automation can fail or wait for automation notifications.

These are individual community reports, not an official reliability guarantee. The public guide labels the workflow **optional**, **community**, and **needs a device test**. It recommends running more often than once per week so a failed automation does not consume the full seven-day recovery window.

### Update wording

The guide distinguishes:

1. **Nuvio version update:** download a newer official Full IPA and install it over the existing app with SideStore.
2. **Signature refresh:** SideStore renews the free seven-day development signature using LocalDevVPN.

The retired community source previously made user-initiated version updates more convenient, but it is frozen at 0.4.10. No official NuvioMedia SideStore/AltStore source was established during this review. Unattended background **version updates** are therefore not promised. SideStore's background **signature refresh** is a separate feature and is never called an app update.

### LocalDevVPN wording

LocalDevVPN supplies the local on-device connection SideStore needs; the guide does not describe it as a conventional remote VPN provider. The optional stop automation can be unreliable. Users are told to disable `Notify When Run` where iOS offers the option, verify the actual expiry date after the first run, and disconnect LocalDevVPN manually if it remains active.

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
- The retired `NuvioFull.json` manifest is the current official update channel.
- SideStore guarantees unattended background Nuvio version updates.
- A successful-looking Shortcuts run proves the provisioning expiry was extended.
- The LocalDevVPN stop automation is reliable on every current iOS/iPadOS version.
- iLoader currently refreshes installed apps automatically.
- LiveContainer is required for Nuvio.
- The SideStore/iLoader workflow applies to Apple TV.
- NuvioMedia publishes or endorses an official Apple TV app.
- Windows is a fully verified wireless Apple TV Sideloadly route.
- AltStore PAL installs the Nuvio IPA.
- Re-signing or changing tools always preserves all local data.
