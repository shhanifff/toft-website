import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Collections from "@/components/Collections";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

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
      <footer className="py-12 border-t border-white/5 bg-black text-center">
        <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">
          © 2026 TOFT MEN'S · EDAVANNAPPARA · ALL RIGHTS RESERVED
        </p>
      </footer>
    </main>
  );
}
