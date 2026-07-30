const proofPoints = [
  ["WEB", "Production build", "PASS"],
  ["BACKEND", "TypeScript build", "PASS"],
  ["CHAIN", "Registry tests", "5 / 5"],
  ["GIWA", "Adapter tests", "3 / 3"],
];

const capabilities = [
  {
    number: "01",
    title: "Evidence pipeline",
    description:
      "메신저, 메모, 음성, 문서를 사건 단위로 수집하고 원문 해시·시간·위치 맥락을 보존합니다.",
  },
  {
    number: "02",
    title: "Human-reviewed AI",
    description:
      "AI가 합의 후보와 상태 변화를 구조화하되, 사람의 수정·확정 없이는 사실로 승격하지 않습니다.",
  },
  {
    number: "03",
    title: "Verifiable state",
    description:
      "버전, 필드별 출처, 봉인 해시, 공개 검증 API와 EIP-712 attestation을 하나의 흐름으로 연결합니다.",
  },
];

const principles = [
  "도메인을 좁히지 않는다",
  "AI의 추론과 사람의 확인을 구분한다",
  "원문이 아닌 증명 가능한 해시를 온체인에 남긴다",
  "기술보다 사용자의 다음 행동을 먼저 설계한다",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Antonio 처음으로">
          ANTONIO<span className="wordmark-dot">●</span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#mission">Mission</a>
          <a href="#product">Product</a>
          <a href="#team">Team</a>
        </nav>
        <a
          className="nav-cta"
          href="https://github.com/antonio-gasok/team-introduction"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker">
          <span className="status-dot" aria-hidden="true" />
          TEAM INTRODUCTION · GASOK 2026
        </div>
        <h1>
          말은 흩어져도,
          <br />
          <span>합의는 남아야 합니다.</span>
        </h1>
        <div className="hero-bottom">
          <p>
            Antonio는 현실의 대화와 사건을 검토 가능한 합의 상태로 바꾸고,
            당사자 행동과 GIWA 증명을 연결하는 범용 합의 인프라를 만듭니다.
          </p>
          <a className="round-link" href="#mission" aria-label="팀 미션 보기">
            <span>EXPLORE</span>
            <b aria-hidden="true">↓</b>
          </a>
        </div>
        <div className="signal-field" aria-hidden="true">
          <span className="signal signal-one" />
          <span className="signal signal-two" />
          <span className="signal signal-three" />
          <span className="signal-label signal-source">SOURCE</span>
          <span className="signal-label signal-state">STATE</span>
          <span className="signal-label signal-proof">PROOF</span>
        </div>
      </section>

      <section className="manifesto" id="mission">
        <p className="section-label">01 / WHY WE BUILD</p>
        <div className="manifesto-grid">
          <h2>합의는 문서 한 장이 아니라 계속 변하는 상태입니다.</h2>
          <div className="manifesto-copy">
            <p>
              중요한 결정은 회의실 밖에서 만들어집니다. 메신저 한 줄, 현장의
              음성, 수정된 파일, 상대방의 짧은 확인이 실제 업무를 바꿉니다.
            </p>
            <p>
              우리는 이 흔적을 단순 요약하지 않습니다. 무엇이 바뀌었고, 어떤
              근거에서 나왔으며, 누가 확인했는지를 다시 검증할 수 있는 상태로
              만듭니다.
            </p>
          </div>
        </div>
      </section>

      <section className="product-section" id="product">
        <div className="product-heading">
          <p className="section-label light">02 / WHAT WE SHIP</p>
          <h2>
            Evidence
            <span>→</span>
            Agreement
            <span>→</span>
            Proof
          </h2>
        </div>

        <div className="capability-list">
          {capabilities.map((capability) => (
            <article key={capability.number}>
              <span className="capability-number">{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>

        <div className="platform-model">
          <div>
            <p className="eyebrow">HORIZONTAL CORE</p>
            <h3>하나의 합의 코어</h3>
            <p>
              Event · Evidence · Semantic Unit · State Diff · Action ·
              Signature · Attestation
            </p>
          </div>
          <div className="plus" aria-hidden="true">
            +
          </div>
          <div>
            <p className="eyebrow">OPTIONAL DOMAIN PACKS</p>
            <h3>맥락만 교체하는 팩</h3>
            <p>용어 · 추출 스키마 · 위험 규칙 · 템플릿 · 커넥터</p>
          </div>
        </div>
      </section>

      <section className="proof-section">
        <div className="proof-intro">
          <p className="section-label">03 / EXECUTION, NOT A CONCEPT</p>
          <h2>아이디어를 설명하기 전에, 작동하는 흐름을 만들었습니다.</h2>
          <p>
            웹·모바일·백엔드 MVP에서 사건 수집, AI 검토, 상태 버전, 필드별
            출처, 봉인과 공개 검증까지 구현했습니다. GIWA Sepolia를 위한
            Registry와 백엔드 전송 어댑터도 테스트를 통과했습니다.
          </p>
        </div>
        <div className="proof-table" role="list" aria-label="구현 검증 현황">
          {proofPoints.map(([label, detail, result]) => (
            <div className="proof-row" role="listitem" key={label}>
              <strong>{label}</strong>
              <span>{detail}</span>
              <b>{result}</b>
            </div>
          ))}
        </div>
        <p className="proof-note">
          현재 단계: GIWA Sepolia 실배포와 Wallet·상대방 서명 UX 연결
        </p>
      </section>

      <section className="team-section" id="team">
        <p className="section-label">04 / THE TEAM</p>
        <div className="team-layout">
          <div className="team-title">
            <p className="team-index">A/01</p>
            <h2>작은 팀, 끊기지 않는 오너십.</h2>
          </div>
          <article className="member">
            <div className="member-monogram" aria-hidden="true">
              <span>SM</span>
              <i />
            </div>
            <div className="member-copy">
              <p className="role">FOUNDER · PRODUCT & ENGINEERING</p>
              <h3>이성민</h3>
              <p>
                고려대학교 컴퓨터학과. Antonio의 제품 전략, AI 파이프라인,
                웹·모바일·백엔드, GIWA 통합을 end-to-end로 설계하고
                구현합니다.
              </p>
              <div className="skill-line">
                <span>PRODUCT</span>
                <span>AI SYSTEM</span>
                <span>FULL-STACK</span>
                <span>WEB3</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="principles">
        <p className="section-label light">05 / HOW WE WORK</p>
        <div className="principle-list">
          {principles.map((principle, index) => (
            <div key={principle}>
              <span>0{index + 1}</span>
              <p>{principle}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-callout">
          <p>BUILDING THE TRUST LAYER FOR REAL-WORLD AGREEMENTS</p>
          <h2>
            대화가 결정이 되는 순간,
            <br />
            Antonio가 증명을 시작합니다.
          </h2>
          <a
            href="https://github.com/antonio-gasok/team-introduction"
            target="_blank"
            rel="noreferrer"
          >
            VIEW OUR GITHUB <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-meta">
          <span>ANTONIO © 2026</span>
          <span>SEOUL · KOREA</span>
          <span>GASOK 2026</span>
        </div>
      </footer>
    </main>
  );
}
