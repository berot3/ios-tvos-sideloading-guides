# Odin sources and pre-release status

Primary references and current publication guardrails for Odin.

**Last reviewed:** 5 September 2026  
**Candidate status:** **PRE-RELEASE · IN ACTIVE DEVELOPMENT**

> [!IMPORTANT]
> Odin is not yet publicly installable. The current evidence is a set of user-supplied screenshots from the official Fusion Discord showing direct statements by Fusion developer Exate. These statements are strong first-party evidence for project intent and development status, but they are not a substitute for a live TestFlight invitation, an App Store listing, or a released IPA.

## Current first-party evidence

On 4–5 September 2026, Exate posted in the official Fusion Discord that:

- Odin is the project that comes next after Fusion's App Store appeal failed;
- the official project URL is `https://odinapp.dev/`;
- Odin is built around the user's own library and is intended not to run into the same App Store addon problem;
- Odin is already in active development and only a few final tweaks remain;
- Odin will be available on **TestFlight first**;
- more information will follow.

A separate clarification from Exate says Odin is not radically different from Fusion and again describes it as being in the final-tweaks stage.

## What is not yet verified

As of this review, this repository has **not** verified:

- a live public TestFlight invitation;
- a public IPA;
- an App Store listing;
- an exact first public version number;
- the precise initial Apple platform set;
- whether iPhone/iPad and Apple TV will launch at the same time;
- bundle identifiers, entitlements, extensions, signing behavior, or migration compatibility with Fusion;
- whether Fusion data can be imported or migrated into Odin;
- whether Odin will eventually publish an official sideloadable IPA.

Because the developer statement only says "TestFlight first", the homepage must not infer 📱, 📺, or both until platform support is explicitly confirmed. The compact availability table therefore uses an unknown-platform marker for Odin.

## Homepage classification

The current conservative homepage row is:

- **Status:** active development;
- **TestFlight:** not yet available;
- **IPA:** not yet available;
- **Platform:** not yet confirmed;
- **Primary project URL:** `https://odinapp.dev/`.

This is intentionally different from `unconfirmed`: the developer has explicitly announced a future TestFlight launch, but no public invitation exists yet.

## Publication policy

- Keep Odin visible only as a pre-release candidate until an install path actually exists.
- Recheck the official project site and official Fusion/Odin Discord before changing TestFlight or IPA status.
- When a TestFlight invitation appears, verify that the Apple page resolves and record the checked date before marking it live.
- If an IPA is published, establish whether it is first-party before adding the ✓ provenance marker.
- Do not assume Fusion's Apple platform coverage, bundle IDs, data model, or sideload behavior carries over to Odin.
- Preserve the distinction between a developer roadmap statement and a publicly available build.

## Relationship to Fusion

Odin is being presented by Exate as the next project after the addon-capable Fusion App Store path ended. Fusion's future IPA maintenance is still undecided. Treat the two as separate products for availability and provenance tracking unless the developer later documents a migration or replacement relationship more precisely.
