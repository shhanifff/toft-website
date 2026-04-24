"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingBag, Search, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [logoError, setLogoError] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 px-6 md:px-12 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <div className={`max-w-[1400px] mx-auto flex items-center justify-between transition-all duration-700 rounded-[2rem] px-8 py-4 ${
        isScrolled ? "glass-card border-white/10 shadow-2xl" : "bg-transparent border-transparent"
      }`}>
        <Link href="/" className="flex items-center gap-5 group">
          <div className="relative w-14 h-14 bg-black/40 rounded-2xl flex items-center justify-center border border-white/5 overflow-hidden group-hover:border-yellow-500/30 transition-all duration-700">
            {!logoError ? (
              <Image
                src="/logo.jpg"
                alt="Toft Logo"
                fill
                className="object-contain mix-blend-screen scale-125 transition-transform duration-1000 group-hover:scale-150"
                priority
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center font-black text-black">
                T
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-2xl tracking-tighter font-syne leading-tight group-hover:text-yellow-500 transition-colors">
              TOFT <span className="text-yellow-500 group-hover:text-white transition-colors">MEN'S</span>
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
              <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em]">
                Live Status · Open
              </span>
            </div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-12">
          {["Collections", "Features", "Reviews", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] hover:text-white transition-colors group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-yellow-500 transition-all duration-700 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <button className="text-white/30 hover:text-white transition-all duration-500 p-2 hover:bg-white/5 rounded-full">
            <Search className="w-5 h-5" />
          </button>
          <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>
          <button className="flex items-center gap-4 group bg-white/5 hover:bg-white px-6 py-3 rounded-full transition-all duration-700 border border-white/5">
            <span className="hidden md:block text-white group-hover:text-black font-bold text-[10px] uppercase tracking-[0.4em]">
              Menu
            </span>
            <Menu className="w-5 h-5 text-white group-hover:text-black" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
