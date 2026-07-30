import { SiteNav } from "../components/SiteNav";

const protections = [
  ["재전송 방지", "서명자별 nonce를 단조 증가시키고 소비된 digest의 재사용을 차단합니다."],
  ["만료 통제", "expiresAt이 지난 요청은 Registry가 거부합니다."],
  ["수명주기", "ISSUE·REVOKE·SUPERSEDE 행위를 독립 attestation으로 기록합니다."],
  ["개인정보 보호", "원문 대신 해시와 Merkle root만 온체인에 남깁니다."],
];

export default function TechnicalPage() {
  return (
    <main className="inner-page technical-page">
      <SiteNav dark />
      <section className="page-hero light-hero">
        <p className="section-label">TECHNICAL ONE-PAGER</p>
        <h1>AI의 제안, 사람의 확인, GIWA의 검증.</h1>
        <p>
          Antonio는 특정 산업에 고정된 앱이 아니라, 모든 업무 합의를 동일한
          사건→근거→상태→행위→증명 모델로 다루는 수평 인프라입니다.
        </p>
      </section>

      <section className="architecture">
        <p className="section-label">SYSTEM FLOW</p>
        <div className="flow-grid">
          {["Evidence", "AI proposal", "Human review", "StateVersion", "EIP-712", "GIWA Registry"].map(
            (item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <b>{item}</b>
              </div>
            ),
          )}
        </div>
      </section>

      <section className="schema-section">
        <div>
          <p className="section-label light">ATTESTATION SCHEMA</p>
          <h2>검증에 필요한 최소 사실만 기록합니다.</h2>
        </div>
        <pre>{`AgreementAction {
  bytes32 agreementId
  bytes32 documentHash
  bytes32 previousHash
  uint256 version
  uint8   action
  bytes32 evidenceRoot
  uint64  issuedAt
  uint64  expiresAt
  uint256 nonce
}`}</pre>
      </section>

      <section className="protection-section">
        <p className="section-label">SECURITY & PRIVACY</p>
        <div className="protection-grid">
          {protections.map(([title, body]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="repo-section">
        <div>
          <p className="section-label light">IMPLEMENTATION</p>
          <h2>검토 가능한 코드와 테스트</h2>
        </div>
        <ul>
          <li>Solidity Registry 테스트 5/5 통과</li>
          <li>백엔드 GIWA adapter 테스트 3/3 통과</li>
          <li>Hardhat 기반 GIWA Sepolia 배포·검증 스크립트</li>
          <li>도메인 팩과 분리된 범용 합의 코어</li>
        </ul>
        <a
          className="text-link"
          href="https://github.com/antonio-gasok/antonio"
          target="_blank"
          rel="noreferrer"
        >
          공개 구현 레포지토리 →
        </a>
      </section>
    </main>
  );
}
