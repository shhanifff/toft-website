"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-20 lg:px-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-4 mb-8 group">
              <div className="relative w-12 h-12 bg-white/5 rounded-full flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-yellow-500/50 transition-colors duration-500">
                <Image
                  src="/logo.jpg"
                  alt="Toft Logo"
                  fill
                  className="object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl tracking-tight font-syne uppercase leading-none">
                  Toft
                </span>
                <span className="text-yellow-500 text-[10px] font-bold uppercase tracking-[0.2em] leading-none mt-1">
                  Men's
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8">
              Curating the world's most sought-after silhouettes. Experience
              premium quality imported footwear with an uncompromised aesthetic.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Explore
            </h4>
            <ul className="flex flex-col gap-4">
              {["Collections", "Features", "Reviews", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-white/50 hover:text-yellow-500 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Connect
            </h4>
            <ul className="flex flex-col gap-4 mb-8">
              {["Instagram", "Facebook", "Twitter"].map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span>{social}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="mailto:hello@toftmens.com"
              className="text-yellow-500 hover:text-white transition-colors text-sm font-medium"
            >
              hello@toftmens.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/5">
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] text-center md:text-left">
            © {currentYear} TOFT MEN'S · EDAVANNAPPARA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-white/30 hover:text-white text-[10px] font-bold uppercase tracking-[0.2em] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white/30 hover:text-white text-[10px] font-bold uppercase tracking-[0.2em] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
