"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Truck, Heart, Star, ShieldCheck, Globe } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Curation",
    description: "Handpicked premium footwear from global brands, curated for the modern connoisseur.",
    category: "01 / Selection"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Quality Integrity",
    description: "Every product is meticulously vetted to ensure the highest standards of craftsmanship.",
    category: "02 / Quality"
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Express Logistics",
    description: "Our seamless delivery network ensures your collection reaches you with precision.",
    category: "03 / Service"
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Boutique Experience",
    description: "Visit our physical space in Edavannappara for an immersive sensory experience.",
    category: "04 / Presence"
  }
];

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll(".feature-item");
    items.forEach((item, i) => {
      gsap.fromTo(item, 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          },
          delay: i * 0.2
        }
      );
    });
  }, []);

  return (
    <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 md:px-20 lg:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20 items-start mb-20 md:mb-32">
          <div className="lg:col-span-8 w-full overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.85] font-syne tracking-tighter text-editorial break-words"
            >
              CRAFTING THE <br />
              <span className="text-yellow-500">STANDARD.</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-4 lg:pt-8">
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.4em] leading-relaxed">
              We transcend traditional retail to offer a curated experience for those who value authenticity and global style.
            </p>
          </div>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          {features.map((feature, index) => (
            <div key={index} className="feature-item flex flex-col items-start group">
              <div className="w-full flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <span className="text-yellow-500 text-[10px] font-bold uppercase tracking-widest">
                  {feature.category}
                </span>
                <div className="text-white opacity-20 group-hover:opacity-100 group-hover:text-yellow-500 transition-all duration-700 group-hover:rotate-[360deg]">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tighter font-syne group-hover:translate-x-4 transition-transform duration-700">
                {feature.title}
              </h3>
              <p className="text-white/40 text-lg leading-relaxed max-w-md">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Architectural Background Elements */}
      <div className="absolute top-0 right-0 w-[1px] h-full bg-white/5 hidden lg:block"></div>
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 hidden lg:block"></div>
    </section>
  );
}
