"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const floaters = containerRef.current.querySelectorAll(".floating-element");
    floaters.forEach((el, i) => {
      gsap.to(el, {
        y: -20,
        rotation: i % 2 === 0 ? 5 : -5,
        duration: 3 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.5,
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Film Grain Overlay */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.05] mix-blend-overlay bg-[url('https://grain-y.com/wp-content/uploads/2020/02/Grainy-Texture-1.jpg')]"></div>

      {/* Cinematic Parallax Background */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop"
          alt="Toft Men's Premium Footwear"
          fill
          className="object-cover brightness-[0.5] contrast-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/40"></div>
      </motion.div>

      {/* Architectural Grid Lines */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-white/10"></div>
        <div className="absolute top-0 left-2/3 w-[1px] h-full bg-white/10"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full px-6 md:px-20 lg:px-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mb-8"
        >
          <span className="text-yellow-500 font-bold tracking-[0.5em] uppercase text-xs">
            Imported Shoe Store · Edavannappara
          </span>
        </motion.div>

        <div className="overflow-hidden mb-12">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-white text-[12vw] md:text-[8vw] lg:text-[7vw] font-bold leading-[0.95] tracking-tighter font-syne"
          >
            UNCOMPROMISING <br />
            <span className="text-stroke">QUALITY.</span> IMPORTED.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-wrap gap-8 items-center"
        >
          <a
            href="#collections"
            className="group relative px-10 py-5 bg-yellow-500 rounded-full overflow-hidden transition-all duration-500 hover:pr-14 shadow-[0_20px_50px_rgba(234,179,8,0.2)]"
          >
            <span className="relative z-10 text-black font-black uppercase text-xs tracking-widest">
              Explore Collection
            </span>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-black"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </a>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-black bg-neutral-800 overflow-hidden"
                >
                  <Image
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Customer"
                    width={40}
                    height={40}
                  />
                </div>
              ))}
            </div>
            <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">
              4.8 Rating <br />{" "}
              <span className="text-white">93+ Happy Clients</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements (Decorative) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="floating-element absolute top-1/4 right-1/4 w-32 h-32 glass-card rounded-full blur-2xl opacity-20 bg-yellow-500"></div>
        <div className="floating-element absolute bottom-1/4 left-1/4 w-48 h-48 glass-card rounded-full blur-3xl opacity-10 bg-white"></div>
      </div>

    </section>
  );
}
