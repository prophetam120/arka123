"use client";

import dynamic from "next/dynamic";

const HomePage = dynamic(
  () => import("@/components/HomePage").then((m) => m.HomePage),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-svh items-center justify-center bg-[#f7f3ec] text-[#1a2744]">
        <div className="font-[family-name:var(--font-syne)] text-2xl font-bold tracking-wide">
          АРКА 123
        </div>
      </div>
    ),
  },
);

export default function Page() {
  return <HomePage />;
}
