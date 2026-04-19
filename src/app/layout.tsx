import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "cocoro mini — ローカルAI搭載 miniPC | プライバシーファーストのAI PC",
  description:
    "cocoro mini は cocoro-OS を搭載したローカルAI PC。データはデバイス内で完結、クラウドに送らない。Mac mini より安く、Windows も動く。RAM・SSD 自由カスタマイズ。",
  keywords: [
    "ローカルAI",
    "miniPC",
    "AI PC",
    "cocoro-OS",
    "プライバシー",
    "Windows",
    "Mac mini 代替",
    "LLM",
  ],
  openGraph: {
    title: "cocoro mini — AIは、ここにある。",
    description:
      "プライバシーを守るローカルAI。Mac mini より、ずっと賢く、安く。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "cocoro mini — AIは、ここにある。",
    description: "プライバシーを守るローカルAI。Mac mini より、ずっと賢く、安く。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
