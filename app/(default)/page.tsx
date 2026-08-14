import Link from "next/link";

export default function GuideHub() {
  return <main className="hub">
    <header className="hub-hero">
      <div className="eyebrow">OPEN, MULTILINGUAL, SOURCE-CHECKED</div>
      <h1>iOS &amp; tvOS<br />Sideloading Guides.</h1>
      <p className="hub-intro">Practical installation guides for iPhone, iPad, and Apple TV — with the correct packages, signing limits, refresh requirements, and troubleshooting in one place.</p>
      <div className="hub-actions">
        <Link className="button-link" href="/guides/fusion/">Open the Fusion guide →</Link>
        <a className="button-link secondary" href="https://github.com/berot3/ios-tvos-sideloading-guides">View source on GitHub ↗</a>
      </div>
    </header>

    <section className="guide-overview" aria-labelledby="guides-title">
      <div className="section-kicker">GUIDE LIBRARY</div>
      <h2 id="guides-title">Available and planned guides</h2>
      <div className="guide-grid">
        <article className="guide-card">
          <div className="badge-row"><span className="badge">iPhone / iPad</span><span className="badge">Apple TV</span><span className="badge">EN · DE · ES · FR</span></div>
          <h3>Fusion</h3>
          <p>Install Fusion with AltStore Classic on iPhone or with AltServer and Xcode on Apple TV. Includes the seven-day signing workflow and common fixes.</p>
          <Link className="button-link" href="/guides/fusion/">Read the guide →</Link>
        </article>
        <article className="guide-card planned">
          <div className="badge-row"><span className="badge">Research planned</span></div>
          <h3>Nuvio and more</h3>
          <p>Future guides will use the same verified structure and may cover AltStore Classic, AltStore PAL, SideStore, AltServer, or Xcode when supported.</p>
          <a className="button-link secondary" href="https://github.com/berot3/ios-tvos-sideloading-guides/issues">Suggest an app ↗</a>
        </article>
      </div>
    </section>

    <aside className="hub-note">
      <h2>No IPA files are hosted here</h2>
      <p>Every guide links to upstream projects and official documentation. Always verify an app and its source before installing it.</p>
    </aside>
  </main>;
}
