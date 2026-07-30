import Image from "next/image";
import { SiteNav } from "../components/SiteNav";

const steps = [
  {
    number: "01",
    title: "사건을 근거와 함께 수집",
    body: "메신저·음성·메모·문서를 사건으로 모으고 원문 해시, 시각, 위치 같은 맥락을 보존합니다.",
    image: "/demo/evidence-inbox.png",
    alt: "위치 맥락이 포함된 Antonio 이벤트 인박스",
  },
  {
    number: "02",
    title: "AI 제안을 사람이 검토",
    body: "AI는 합의 후보와 상태 차이를 제안합니다. 사용자가 수정·확정하기 전에는 합의 사실이 되지 않습니다.",
    image: "/demo/human-review.png",
    alt: "Antonio의 사람 중심 AI 검토 화면",
  },
  {
    number: "03",
    title: "합의를 버전 상태로 관리",
    body: "필드별 변경, 출처와 시점을 StateVersion으로 연결해 현재 상태와 과거 이력을 동시에 설명합니다.",
    image: "/demo/agreement-state.png",
    alt: "버전별 변경과 현재 합의 상태 화면",
  },
  {
    number: "04",
    title: "당사자 확인 후 봉인",
    body: "양측 서명과 문서 해시를 묶고 EIP-712 attestation으로 발행합니다. 민감한 원문은 온체인에 올리지 않습니다.",
    image: "/demo/signatures.png",
    alt: "상호 서명과 DID 상세 화면",
  },
];

export default function DemoPage() {
  return (
    <main className="inner-page">
      <SiteNav />
      <section className="page-hero">
        <p className="section-label light">WORKING MVP / GUIDED WALKTHROUGH</p>
        <h1>대화에서 증명 가능한 합의까지.</h1>
        <p>
          아래 화면은 실제 Antonio MVP에서 캡처했습니다. 도메인을 제한하지 않는
          공통 합의 코어 위에 필요한 맥락만 도메인 팩으로 연결합니다.
        </p>
        <div className="status-banner">
          <b>MVP 구현 완료</b>
          <span>GIWA Sepolia Registry 배포·Verified 주소 연결 대기</span>
        </div>
      </section>

      <section className="walkthrough" aria-label="Antonio MVP 핵심 흐름">
        {steps.map((step) => (
          <article className="walkthrough-step" key={step.number}>
            <div className="walkthrough-copy">
              <span>{step.number}</span>
              <h2>{step.title}</h2>
              <p>{step.body}</p>
            </div>
            <div className="screenshot-frame">
              <Image
                src={step.image}
                alt={step.alt}
                width={1672}
                height={941}
                sizes="(max-width: 900px) 100vw, 58vw"
              />
            </div>
          </article>
        ))}
      </section>

      <section className="demo-boundary">
        <p className="section-label light">WHAT THE CHAIN PROVES</p>
        <h2>원문이 아니라, 합의 상태의 무결성과 행위를 증명합니다.</h2>
        <div className="boundary-grid">
          <div>
            <b>OFF-CHAIN</b>
            <p>원문, 개인정보, AI 분석, StateVersion, 필드별 근거</p>
          </div>
          <div>
            <b>ON GIWA</b>
            <p>documentHash, previousHash, evidenceRoot, action, nonce, 서명</p>
          </div>
        </div>
        <a className="text-link" href="/technical">
          기술 구조 자세히 보기 →
        </a>
      </section>
    </main>
  );
}
