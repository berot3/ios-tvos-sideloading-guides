# Fusion sources

Primary references used to verify the Fusion installation guide.

**Last reviewed:** 19 August 2026

> [!WARNING]
> **Current classification: unofficial community distribution.** The repository owner explicitly states that `yodaluca23/Fusion-AltStore` is not official and is maintained using IPA files shared by Fusion developer Exate in the official Fusion Discord. The GitHub release checksums have not yet been matched against the original Discord attachments, so byte-for-byte identity remains unverified.

| Source | Used to verify |
| --- | --- |
| [Official Fusion website](https://fusionapp.dev/) | Official product identity and current App Store link; no link to `yodaluca23/Fusion-AltStore` was found during this review |
| [Fusion-AltStore community repository](https://github.com/yodaluca23/Fusion-AltStore) | Community-hosted AltStore source and project assets; repository ownership |
| [Community-hosted IPA releases](https://github.com/yodaluca23/Fusion-AltStore/releases) | Current iOS and tvOS filenames, checksums, release availability, and uploader identity |
| [Fusion-AltStore source.json](https://raw.githubusercontent.com/yodaluca23/Fusion-AltStore/refs/heads/main/source.json) | Self-described developer name, app identifiers, minimum OS versions, package metadata, and download URLs |
| [AltStore documentation](https://faq.altstore.io/) | AltStore Classic and AltServer installation behavior |
| [AltServer release notes](https://faq.altstore.io/release-notes/altserver) | Apple TV pairing requirements and seven-day reinstallation behavior |

## Discord provenance evidence

On 9 August 2026, the repository maintainer `yodaluca23` answered a question in the official Fusion Discord and stated:

- the repository is **not official**
- it is maintained using the IPA files Exate shared in that Discord channel
- the linked repository is `https://github.com/yodaluca23/Fusion-AltStore`

This confirms the repository's unofficial status and provides a direct claim about the IPA origin. It does not replace a checksum comparison with the original Discord attachments.

## Verification policy

- Prefer official project repositories, release pages, and documentation.
- Record the review date whenever installation instructions are rechecked.
- Do not infer a package filename or supported platform from the app name alone.
- Treat community reports as supplementary evidence, not as a replacement for an upstream source.
- Update this file when Fusion, AltStore, AltServer, Xcode, or Apple signing requirements change.

## Evidence needed to upgrade the classification

To verify byte-for-byte identity, one of the following must point to the exact release or matching file checksum:

- the original IPA attachments posted by Exate in the official Fusion Discord
- a link from `fusionapp.dev`
- a link from a repository demonstrably controlled by Exate
- a signed statement or reproducible cryptographic verification supplied by the developer

Until then, the guide must not describe the repository as **official** or **upstream**, or claim that its files are byte-for-byte identical to Exate's original Discord attachments.
