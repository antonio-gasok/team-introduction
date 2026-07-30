import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Antonio — Team Introduction",
    description:
      "현실의 대화와 사건을 검토 가능한 합의 상태로 바꾸고 GIWA 증명을 연결하는 Team Antonio를 소개합니다.",
    openGraph: {
      title: "Antonio — Agreement infrastructure for real work",
      description:
        "Evidence → Agreement → Proof. Meet the team building Antonio.",
      type: "website",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1672,
          height: 941,
          alt: "Antonio team introduction",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Antonio — Team Introduction",
      description: "Agreement infrastructure for real work.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
