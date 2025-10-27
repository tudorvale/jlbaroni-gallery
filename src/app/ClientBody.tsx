"use client";

import Script from "next/script";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        crossOrigin="anonymous"
        src="//unpkg.com/same-runtime/dist/index.global.js"
      />
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </>
  );
}
