import type { Metadata } from "next";
import "../globals.css";
import { siteBasePath, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "iOS & tvOS Sideloading Guides",
    template: "%s | iOS & tvOS Sideloading Guides",
  },
  description: "Multilingual, step-by-step guides for sideloading apps on iPhone, iPad, and Apple TV with AltStore, AltServer, SideStore, Xcode, and related tools.",
  icons: { icon: `${siteBasePath}/favicon.svg` },
};

export default function DefaultRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
