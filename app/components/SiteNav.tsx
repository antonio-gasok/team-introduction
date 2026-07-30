export function SiteNav({ dark = false }: { dark?: boolean }) {
  return (
    <header className={`site-header page-header${dark ? " dark" : ""}`}>
      <a className="wordmark" href="/" aria-label="Antonio 홈">
        ANTONIO<span className="wordmark-dot">●</span>
      </a>
      <nav aria-label="주요 메뉴">
        <a href="/demo">Demo</a>
        <a href="/technical">Technical</a>
        <a href="/submission">Submission</a>
      </nav>
      <a
        className="nav-cta"
        href="https://github.com/antonio-gasok/antonio"
        target="_blank"
        rel="noreferrer"
      >
        GitHub <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
