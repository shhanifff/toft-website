"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Search, Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between glass-card px-8 py-4 rounded-3xl border-white/5">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center">
            <span className="text-black font-black text-xl">T</span>
          </div>
          <span className="text-white font-black text-xl tracking-tighter font-syne">
            TOFT <span className="text-yellow-500">MEN'S</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {["Collections", "Features", "Reviews", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/60 text-[11px] font-bold uppercase tracking-[0.2em] hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="text-white/60 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <div className="h-6 w-px bg-white/10"></div>
          <button className="flex items-center gap-3 group">
            <span className="hidden md:block text-white font-bold text-[11px] uppercase tracking-[0.2em]">
              Menu
            </span>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <Menu className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
