# Fusion sources

Primary references used to verify the Fusion installation guide.

**Last reviewed:** 5 September 2026

> [!WARNING]
> **Current classification: unofficial community distribution; future Fusion IPA maintenance undecided.** The repository owner explicitly states that `yodaluca23/Fusion-AltStore` is not official and is maintained using IPA files shared by Fusion developer Exate in the official Fusion Discord. The GitHub release checksums have not yet been matched against the original Discord attachments, so byte-for-byte identity remains unverified.

> [!IMPORTANT]
> On 5 September 2026, user-supplied screenshots from the official Fusion Discord showed developer Exate stating that Apple's appeal result means the addon-capable Fusion app will not return to the App Store. Exate also said that no decision has yet been made about whether Fusion will continue to be maintained as an IPA. This supersedes the earlier expectation that Fusion itself would return to the App Store in some form.

| Source | Used to verify |
| --- | --- |
| [Official Fusion website](https://fusionapp.dev/) | Official product identity, supported Apple platforms, addon architecture, and current public product description; the site does not by itself establish current App Store availability |
| [Fusion-AltStore community repository](https://github.com/yodaluca23/Fusion-AltStore) | Community-hosted AltStore source and project assets; repository ownership |
| [Community-hosted IPA releases](https://github.com/yodaluca23/Fusion-AltStore/releases) | Current iOS and tvOS filenames, checksums, release availability, and uploader identity |
| [Fusion-AltStore source.json](https://raw.githubusercontent.com/yodaluca23/Fusion-AltStore/refs/heads/main/source.json) | Self-described developer name, app identifiers, minimum OS versions, package metadata, and download URLs |
| [AltStore documentation](https://faq.altstore.io/) | AltStore Classic and AltServer installation behavior |
| [AltServer release notes](https://faq.altstore.io/release-notes/altserver) | Apple TV pairing requirements and seven-day reinstallation behavior |

## Official Discord evidence

The repository currently relies on user-supplied screenshots from the official Fusion Discord for several developer statements that are not publicly archived on the Fusion website.

### 9 August 2026 — community IPA provenance

The maintainer `yodaluca23` answered a question in the official Fusion Discord and stated:

- the repository is **not official**;
- it is maintained using the IPA files Exate shared in that Discord channel;
- the linked repository is `https://github.com/yodaluca23/Fusion-AltStore`.

This confirms the repository's unofficial status and provides a direct claim about the IPA origin. It does not replace a checksum comparison with the original Discord attachments.

### 4 September 2026 — transition clarification

A user-supplied screenshot from the official Fusion Discord shows Exate clarifying that:

- a version of the app was still expected to return to the App Store in some form;
- users would still be able to use addons through a future approach;
- Odin was already in development and only a few final tweaks remained;
- Odin was described as not radically different from Fusion.

This statement is useful as chronology, but its App Store expectation was superseded by the later appeal result below.

### 5 September 2026 — Apple appeal result and Odin handoff

A later user-supplied screenshot from the same official Discord shows Exate stating that:

- Apple rejected the appeal;
- addon-capable Fusion cannot return to the App Store under the current rules;
- "Fusion stops here" in its App Store form;
- whether Fusion continues as an IPA is still undecided;
- the next project is **Odin** at `https://odinapp.dev/`;
- Odin is built around the user's own library so it is intended to avoid the same App Store issue;
- Odin will be available on **TestFlight first**;
- more information will follow.

A second developer clarification says the app is "not dead" in the broader sense and again states that no decision has yet been made about maintaining Fusion as an IPA. The same message says all roads now lead to Odin.

For current reader-facing status, use the later appeal-result statement rather than the earlier promise that Fusion itself would return to the App Store.

## Current publication implications

- Do **not** describe Fusion as currently returning to the App Store.
- Do **not** describe future IPA maintenance as confirmed.
- The currently available community-distributed IPA may still be listed as available while it remains downloadable, but its provenance must stay marked as community / non-first-party.
- Historical TestFlight availability should remain historical, not current.
- If the community IPA disappears or stops working, recheck the table immediately rather than assuming continued availability.
- Treat Odin as a separate pre-release app, not as a renamed Fusion release.

## Verification policy

- Prefer official project repositories, release pages, and documentation.
- Record the review date whenever installation instructions are rechecked.
- Do not infer a package filename or supported platform from the app name alone.
- Treat community reports as supplementary evidence, not as a replacement for an upstream source.
- Direct developer statements in the official project Discord may be used when captured and dated, but should be labelled as screenshot evidence when no public permalink exists.
- Update this file when Fusion, Odin, AltStore, AltServer, Xcode, or Apple signing requirements change.

## Evidence needed to upgrade the IPA classification

To verify byte-for-byte identity, one of the following must point to the exact release or matching file checksum:

- the original IPA attachments posted by Exate in the official Fusion Discord;
- a link from `fusionapp.dev`;
- a link from a repository demonstrably controlled by Exate;
- a signed statement or reproducible cryptographic verification supplied by the developer.

Until then, the guide must not describe the community repository as **official** or **upstream**, or claim that its files are byte-for-byte identical to Exate's original Discord attachments.
