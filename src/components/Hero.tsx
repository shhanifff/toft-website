"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Slow cinematic background zoom
    gsap.fromTo(bgRef.current, 
      { scale: 1.1 }, 
      { 
        scale: 1, 
        duration: 3, 
        ease: "power2.out" 
      }
    );

    // Parallax effect on scroll for bg
    gsap.to(bgRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      y: 100,
      opacity: 0.5
    });

    // Heading reveal
    if (titleRef.current) {
      gsap.from(titleRef.current.querySelectorAll("span"), {
        y: 150,
        skewY: 10,
        stagger: 0.2,
        duration: 1.5,
        ease: "power4.out"
      });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Cinematic Background */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2000&auto=format&fit=crop"
          alt="Toft Men's Premium Footwear"
          fill
          className="object-cover brightness-[0.4] contrast-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
      </div>

      {/* Film Grain & Texture */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.05] mix-blend-overlay bg-[url('https://grain-y.com/wp-content/uploads/2020/02/Grainy-Texture-1.jpg')]"></div>
      
      {/* Architectural Grid Lines */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5"></div>
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-white/5"></div>
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-white/5"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full px-6 md:px-20 lg:px-32">
        <div className="overflow-hidden mb-12">
          <h1
            ref={titleRef}
            className="text-white text-[14vw] sm:text-[12vw] md:text-[9vw] lg:text-[8vw] font-bold leading-[0.85] tracking-tighter font-syne text-editorial"
          >
            <span className="block overflow-hidden">UNCOMPROMISING</span>
            <span className="block overflow-hidden text-yellow-500">QUALITY.</span>
            <span className="block overflow-hidden">IMPORTED.</span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-wrap gap-12 items-end"
        >
          <a href="#collections" className="group relative">
            <div className="flex items-center gap-4 text-white hover:text-yellow-500 transition-colors duration-500">
               <span className="font-black uppercase text-xs tracking-widest">Explore Series</span>
               <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                 </svg>
               </div>
            </div>
            <div className="absolute -bottom-2 left-0 w-0 h-px bg-yellow-500 transition-all duration-500 group-hover:w-full"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
