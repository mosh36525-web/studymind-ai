import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "StudyMind AI — ذاكر بوضوح. تقدّم بثبات.",
    template: "%s — StudyMind AI",
  },
  description: "مساحة تعلم مجانية وهادئة تساعدك على تحويل أهدافك الدراسية إلى تقدم يومي واضح.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
