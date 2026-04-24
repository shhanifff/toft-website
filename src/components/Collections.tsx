"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: "Air Force 1 '07",
    category: "Classic Series",
    price: "₹9,495",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    color: "bg-zinc-900"
  },
  {
    id: 2,
    name: "Dunk Low Retro",
    category: "Street Heritage",
    price: "₹8,295",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000&auto=format&fit=crop",
    color: "bg-stone-900"
  },
  {
    id: 3,
    name: "Classic Crocs",
    category: "Lifestyle Comfort",
    price: "₹3,995",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop",
    color: "bg-neutral-900"
  },
  {
    id: 4,
    name: "Jordan 1 High",
    category: "Basketball Legend",
    price: "₹14,995",
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?q=80&w=1000&auto=format&fit=crop",
    color: "bg-zinc-900"
  }
];

export default function Collections() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".product-card");
    
    cards.forEach((card, i) => {
      gsap.fromTo(card, 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          },
          delay: i * 0.1
        }
      );
    });
  }, []);

  return (
    <section id="collections" ref={sectionRef} className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 lg:px-32 mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white text-6xl md:text-8xl font-bold font-syne tracking-tighter leading-[0.85] text-editorial"
            >
              CURATED <br />
              <span className="text-yellow-500">EXCELLENCE.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-end gap-4"
          >
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] text-right max-w-[200px]">
              Selection of the world's most sought after silhouettes.
            </p>
            <div className="w-24 h-px bg-yellow-500/30"></div>
          </motion.div>
        </div>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border-y border-white/5">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="product-card group relative bg-black aspect-[3/4] overflow-hidden border-r border-white/5 last:border-r-0"
          >
            {/* Image Container */}
            <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-110">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover brightness-75 group-hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
              <div className="flex justify-between items-start translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <span className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em]">{product.category}</span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>

              <div>
                <h3 className="text-white text-2xl font-bold tracking-tighter mb-2 group-hover:text-yellow-500 transition-colors duration-500">
                  {product.name}
                </h3>
                <div className="flex items-center gap-4 overflow-hidden">
                   <span className="text-yellow-500 font-bold text-sm tracking-widest">{product.price}</span>
                   <div className="w-0 group-hover:w-12 h-px bg-white/20 transition-all duration-700"></div>
                   <span className="text-[9px] text-white/30 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700">Available</span>
                </div>
              </div>
            </div>

            {/* Hover Reveal Block */}
            <div className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-[98%] transition-transform duration-700 ease-in-out z-30"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
