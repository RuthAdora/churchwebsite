// /app/inspiration/page.tsx
"use client";
import dynamic from "next/dynamic";

// Only 1 dynamic import here, no duplicates
const InspirationPage = dynamic(() => import("@/components/InspirationPage"), {
  ssr: false,
  loading: () => <p className="text-center py-20">Loading Inspiration...</p>,
});

export default function InspirationWrapper() {
  return <InspirationPage />;
}
