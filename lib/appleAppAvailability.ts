export type ApplePlatform = "mobile" | "tv";
export type AppReleaseStatus = "available" | "testing" | "in_development";
export type TestFlightStatus = "live" | "full" | "previous" | "unconfirmed" | "not_yet" | "no_route";
export type IpaStatus = "available" | "unconfirmed" | "not_yet";

export type AvailabilitySource = {
  label: string;
  url?: string;
};

export type AppleAppAvailability = {
  id: string;
  name: string;
  primaryUrl: string;
  platforms: readonly ApplePlatform[];
  status: AppReleaseStatus;
  testFlight: {
    status: TestFlightStatus;
    url?: string;
  };
  ipa: {
    status: IpaStatus;
    firstParty: boolean;
    url?: string;
  };
  sources: readonly AvailabilitySource[];
  checkedAt: string;
  published: boolean;
};

const fusionOdinDiscordEvidence = "https://github.com/berot3/ios-tvos-sideloading-guides/issues/16#issuecomment-5550512510";

export const appleAppAvailability: readonly AppleAppAvailability[] = [
  {
    id: "strand",
    name: "Strand",
    primaryUrl: "https://testflight.apple.com/join/ynSTTXDZ",
    platforms: ["mobile", "tv"],
    status: "testing",
    testFlight: {
      status: "live",
      url: "https://testflight.apple.com/join/ynSTTXDZ",
    },
    ipa: {
      status: "unconfirmed",
      firstParty: false,
    },
    sources: [
      {
        label: "Apple TestFlight public invitation",
        url: "https://testflight.apple.com/join/ynSTTXDZ",
      },
    ],
    checkedAt: "2026-09-05",
    published: true,
  },
  {
    id: "couch-streamer",
    name: "Couch Streamer",
    primaryUrl: "https://testflight.apple.com/join/46eGdwqE",
    platforms: ["mobile"],
    status: "testing",
    testFlight: {
      status: "live",
      url: "https://testflight.apple.com/join/46eGdwqE",
    },
    ipa: {
      status: "unconfirmed",
      firstParty: false,
    },
    sources: [
      {
        label: "Apple TestFlight public invitation",
        url: "https://testflight.apple.com/join/46eGdwqE",
      },
    ],
    checkedAt: "2026-09-05",
    published: true,
  },
  {
    id: "nuvio",
    name: "Nuvio",
    primaryUrl: "https://github.com/NuvioMedia/NuvioMobile",
    platforms: ["mobile"],
    status: "available",
    testFlight: {
      status: "previous",
      url: "https://github.com/NuvioMedia/NuvioMobile/issues/1606",
    },
    ipa: {
      status: "available",
      firstParty: true,
      url: "https://github.com/NuvioMedia/NuvioMobile/releases/latest",
    },
    sources: [
      {
        label: "NuvioMedia releases — first-party IPA",
        url: "https://github.com/NuvioMedia/NuvioMobile/releases/latest",
      },
      {
        label: "Nuvio TestFlight history / full beta report",
        url: "https://github.com/NuvioMedia/NuvioMobile/issues/1606",
      },
      {
        label: "Former public TestFlight invitation",
        url: "https://testflight.apple.com/join/u4y7MHK9",
      },
    ],
    checkedAt: "2026-09-05",
    published: true,
  },
  {
    id: "stremio",
    name: "Stremio",
    primaryUrl: "https://www.stremio.com/",
    platforms: ["mobile", "tv"],
    status: "available",
    testFlight: {
      status: "previous",
      url: "https://blog.stremio.com/ios-testflight-is-now-full/",
    },
    ipa: {
      status: "available",
      firstParty: true,
      url: "https://blog.stremio.com/stremio-fully-featured-sideloadable-ipa-release-for-ios-ipados-apple-tv-tvos/",
    },
    sources: [
      {
        label: "Official Stremio iOS TestFlight history",
        url: "https://blog.stremio.com/ios-testflight-is-now-full/",
      },
      {
        label: "Official Stremio Apple IPA announcement",
        url: "https://blog.stremio.com/stremio-fully-featured-sideloadable-ipa-release-for-ios-ipados-apple-tv-tvos/",
      },
    ],
    checkedAt: "2026-09-05",
    published: true,
  },
  {
    id: "debrify",
    name: "Debrify",
    primaryUrl: "https://github.com/varunsalian/debrify",
    platforms: ["mobile", "tv"],
    status: "testing",
    testFlight: {
      status: "no_route",
      url: "https://www.reddit.com/r/debrify/comments/1vuf1rl/sneak_peek_at_next_weeks_debrify_update_and_yes/",
    },
    ipa: {
      status: "available",
      firstParty: true,
      url: "https://github.com/varunsalian/debrify/releases/latest",
    },
    sources: [
      {
        label: "Debrify canonical repository",
        url: "https://github.com/varunsalian/debrify",
      },
      {
        label: "Debrify first-party iOS/tvOS IPA releases",
        url: "https://github.com/varunsalian/debrify/releases/latest",
      },
      {
        label: "Developer TestFlight statement",
        url: "https://www.reddit.com/r/debrify/comments/1vuf1rl/sneak_peek_at_next_weeks_debrify_update_and_yes/",
      },
    ],
    checkedAt: "2026-09-05",
    published: true,
  },
  {
    id: "ferrite",
    name: "Ferrite",
    primaryUrl: "https://github.com/Ferrite-iOS/Ferrite",
    platforms: ["mobile"],
    status: "available",
    testFlight: {
      status: "full",
      url: "https://testflight.apple.com/join/YohgCnC4",
    },
    ipa: {
      status: "available",
      firstParty: true,
      url: "https://github.com/Ferrite-iOS/Ferrite/actions/workflows/nightly.yml",
    },
    sources: [
      {
        label: "Apple TestFlight invitation — currently not accepting new testers",
        url: "https://testflight.apple.com/join/YohgCnC4",
      },
      {
        label: "Ferrite README — IPA-only / no future TestFlight plans statement",
        url: "https://github.com/Ferrite-iOS/Ferrite#downloads",
      },
      {
        label: "Ferrite first-party GitHub Actions IPA builds",
        url: "https://github.com/Ferrite-iOS/Ferrite/actions/workflows/nightly.yml",
      },
    ],
    checkedAt: "2026-09-05",
    published: true,
  },
  {
    id: "fusion",
    name: "Fusion",
    primaryUrl: "https://fusionapp.dev/",
    platforms: ["mobile", "tv"],
    status: "available",
    testFlight: {
      status: "previous",
      url: "https://www.reddit.com/r/FusionTheApp/comments/1ua05t9/test_flight/",
    },
    ipa: {
      status: "available",
      firstParty: false,
      url: "https://github.com/yodaluca23/Fusion-AltStore/releases",
    },
    sources: [
      {
        label: "Official Fusion website",
        url: "https://fusionapp.dev/",
      },
      {
        label: "Official Fusion Discord — durable Issue #16 evidence record for Exate's appeal / IPA-maintenance statements",
        url: fusionOdinDiscordEvidence,
      },
      {
        label: "Historical Fusion TestFlight discussion",
        url: "https://www.reddit.com/r/FusionTheApp/comments/1ua05t9/test_flight/",
      },
      {
        label: "Current community-distributed IPA repository",
        url: "https://github.com/yodaluca23/Fusion-AltStore",
      },
    ],
    checkedAt: "2026-09-05",
    published: true,
  },
  {
    id: "odin",
    name: "Odin",
    primaryUrl: "https://odinapp.dev/",
    platforms: [],
    status: "in_development",
    testFlight: {
      status: "not_yet",
    },
    ipa: {
      status: "not_yet",
      firstParty: false,
    },
    sources: [
      {
        label: "Odin official website announced by Exate",
        url: "https://odinapp.dev/",
      },
      {
        label: "Official Fusion Discord — durable Issue #16 evidence record for Exate's Odin / TestFlight-first statements",
        url: fusionOdinDiscordEvidence,
      },
    ],
    checkedAt: "2026-09-05",
    published: true,
  },
];
