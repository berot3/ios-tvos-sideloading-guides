import type { Metadata } from "next";
import "../globals.css";
import { languages, siteBasePath, siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: { icon: `${siteBasePath}/favicon.svg` },
};

export default async function LanguageRootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  return <html lang={lang}><body>{children}</body></html>;
}
