"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Search, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

export default function Navbar() {
  const [logoError, setLogoError] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between glass-card px-8 py-4 rounded-3xl border-white/10 shadow-2xl">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-14 h-14 bg-black/40 rounded-2xl flex items-center justify-center border border-white/5 overflow-hidden group-hover:border-yellow-500/30 transition-colors duration-500">
            {!logoError ? (
              <Image
                src="/logo.jpg"
                alt="Toft Logo"
                fill
                className="object-contain mix-blend-screen scale-125 transition-transform duration-700 group-hover:scale-150"
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
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em]">
                Store Open
              </span>
            </div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {["Collections", "Features", "Reviews", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white/50 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-white transition-colors group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow-500 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
            <Search className="w-5 h-5" />
          </button>
          <div className="h-6 w-px bg-white/10"></div>
          <button className="flex items-center gap-3 group bg-white/5 hover:bg-white px-5 py-2.5 rounded-full transition-all duration-500">
            <span className="hidden md:block text-white group-hover:text-black font-bold text-[10px] uppercase tracking-[0.2em]">
              Menu
            </span>
            <Menu className="w-5 h-5 text-white group-hover:text-black" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
