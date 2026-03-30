import Navbar from "../components/Navbar";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-white">Chargement...</div>}>
        <Navbar />
      </Suspense>
    </main>
  );
}