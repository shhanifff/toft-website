"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [logoError, setLogoError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-[100] px-4 md:px-8 py-4 flex justify-center pointer-events-none"
      >
        <div className={`w-full max-w-[1200px] flex items-center justify-between transition-all duration-500 rounded-full px-6 py-3 pointer-events-auto ${
          isScrolled ? "bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "bg-transparent border-transparent"
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-yellow-500/50 transition-colors duration-500">
              {!logoError ? (
                <Image
                  src="/logo.jpg"
                  alt="Toft Logo"
                  fill
                  className="object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                  priority
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="font-bold text-yellow-500 text-lg md:text-xl">T</span>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-lg md:text-xl tracking-tight font-syne uppercase leading-none">
                Toft
              </span>
              <span className="text-yellow-500 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] leading-none mt-1">
                Men's
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {["Collections", "Features", "Reviews", "Journal"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white/60 text-xs font-semibold uppercase tracking-widest hover:text-white transition-colors py-2 group"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 z-10">
            <button className="text-white/70 hover:text-white transition-colors duration-300">
              <Search className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </button>
            <button className="text-white/70 hover:text-white transition-colors duration-300">
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </button>
            <div className="w-[1px] h-6 bg-white/20 hidden md:block mx-2"></div>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black hover:bg-yellow-500 transition-colors duration-300"
            >
              <Menu className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Modern Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[200] bg-zinc-950 flex flex-col justify-between"
          >
            {/* Overlay Header */}
            <div className="px-6 md:px-12 py-8 flex justify-between items-center w-full max-w-[1400px] mx-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="font-bold text-black text-lg">T</span>
                </div>
                <span className="text-white font-black text-xl tracking-tight font-syne uppercase">Toft</span>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:border-yellow-500 hover:bg-yellow-500 transition-colors duration-300"
              >
                <X className="w-5 h-5 text-white group-hover:text-black transition-colors" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex items-center px-6 md:px-12 w-full max-w-[1400px] mx-auto">
              <div className="flex flex-col gap-6 md:gap-10">
                {["Home", "Collections", "New Arrivals", "About Brand", "Contact"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <Link
                      href={item === "Home" ? "/" : `#${item.toLowerCase().replace(" ", "-")}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white/60 hover:text-white text-4xl md:text-7xl font-bold tracking-tighter transition-colors font-syne flex items-center gap-4 group"
                    >
                      <span className="text-sm md:text-lg font-medium text-white/20 group-hover:text-yellow-500 transition-colors font-sans w-8 md:w-12">
                        0{i + 1}
                      </span>
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="px-6 md:px-12 py-8 w-full max-w-[1400px] mx-auto border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <div className="flex flex-col gap-2">
                <span className="text-white/40 text-xs uppercase tracking-widest font-semibold">Get in touch</span>
                <a href="mailto:hello@toftmens.com" className="text-white text-lg hover:text-yellow-500 transition-colors">hello@toftmens.com</a>
              </div>
              <div className="flex gap-8">
                {["Instagram", "Twitter", "Facebook"].map((social) => (
                  <a key={social} href="#" className="text-white/60 hover:text-white text-sm uppercase tracking-widest font-medium transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
