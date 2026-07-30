import { SiteNav } from "../components/SiteNav";

const items = [
  {
    label: "01",
    title: "Pitch Deck",
    body: "문제, 제품, GIWA 적합성, 시장성과 실행 계획",
    href: "/Antonio_GASOK_2026_Pitch_Deck.pdf",
    status: "PDF",
  },
  {
    label: "02",
    title: "Working MVP",
    body: "실제 구현 화면으로 보는 핵심 사용자 흐름",
    href: "/demo",
    status: "LIVE",
  },
  {
    label: "03",
    title: "Verified Contract",
    body: "GIWA Sepolia Registry 주소와 소스 코드",
    href: "https://github.com/antonio-gasok/antonio/tree/main/chain",
    status: "DEPLOY PENDING",
  },
  {
    label: "04",
    title: "Technical One-pager",
    body: "아키텍처, EIP-712 스키마, 보안·개인정보 경계",
    href: "/technical",
    status: "LIVE",
  },
  {
    label: "05",
    title: "Public Repository",
    body: "컨트랙트, 연동 패키지, 문서와 재현 방법",
    href: "https://github.com/antonio-gasok/antonio",
    status: "SOURCE",
  },
];

export default function SubmissionPage() {
  return (
    <main className="inner-page submission-page">
      <SiteNav />
      <section className="page-hero">
        <p className="section-label light">GASOK 2026 / REVIEW HUB</p>
        <h1>Antonio 제출물 한곳에서 보기</h1>
        <p>
          업무 대화를 검증 가능한 합의 상태로 바꾸는 AI×GIWA 인프라의 제품,
          기술, 실행 증거를 연결했습니다.
        </p>
      </section>
      <section className="submission-list">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <span>{item.label}</span>
            <div>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
            <b>{item.status} ↗</b>
          </a>
        ))}
      </section>
      <section className="submission-note">
        <b>투명한 현재 상태</b>
        <p>
          제품·컨트랙트·연동 코드는 구현 및 테스트를 마쳤습니다. GIWA Sepolia의
          Verified 주소는 배포 계정 연결 후 이 페이지에 즉시 반영합니다.
        </p>
      </section>
    </main>
  );
}
