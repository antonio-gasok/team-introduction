# Antonio — Team Introduction

Team Antonio와 범용 합의 인프라 Antonio를 소개하는 GASOK 2026 제출용 웹페이지입니다.

Antonio는 메신저, 음성, 문서처럼 흩어진 업무 흔적을 검토 가능한 합의 상태로 바꾸고, 사람의 확인과 GIWA 기반 증명을 연결합니다. 제품 코어는 특정 산업에 종속되지 않으며 산업별 차이는 선택형 Domain Pack으로 확장합니다.

## 페이지 구성

- 팀의 문제의식과 미션
- `Evidence → Agreement → Proof` 제품 흐름
- 수평형 코어와 선택형 Domain Pack 구조
- 현재 구현 및 테스트 증빙
- 창업자 소개와 팀의 작업 원칙

## 로컬 실행

Node.js 22.13 이상이 필요합니다.

```bash
npm install
npm run dev
```

검증:

```bash
npm test
npm run lint
```

## 기술 구성

- Next.js 16
- React 19
- vinext / Vite
- Cloudflare Workers-compatible output

## 배포

사이트는 Codex Sites 프로젝트와 연결되어 있으며, `.openai/hosting.json`의 프로젝트 식별자를 재사용합니다.
