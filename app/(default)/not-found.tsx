import Link from "next/link";

export default function NotFound() {
  return <main><div className="eyebrow">404</div><h1>Guide not found.</h1><p className="lead">This guide does not exist yet, or its address has changed.</p><div className="hub-actions"><Link className="button-link" href="/">Back to all guides</Link></div></main>;
}
