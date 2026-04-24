import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Collections from "@/components/Collections";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Collections />
      <Reviews />
      <Contact />
      
      {/* Simple Footer */}
      <footer className="py-16 border-t border-white/5 bg-black text-center flex flex-col items-center gap-6">
        <div className="relative w-16 h-16 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            fill 
            className="object-contain mix-blend-screen scale-150" 
          />
        </div>
        <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">
          © 2026 TOFT MEN'S · EDAVANNAPPARA · ALL RIGHTS RESERVED
        </p>
      </footer>
    </main>
  );
}
