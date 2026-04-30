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
      <div className="container mx-auto px-4 sm:px-6 md:px-20 lg:px-32 mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
          <div className="max-w-2xl w-full">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl font-bold font-syne tracking-tighter leading-[0.85] text-editorial break-words"
            >
              CURATED <br />
              <span className="text-yellow-500">EXCELLENCE.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-start md:items-end gap-4"
          >
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] text-left md:text-right max-w-[200px]">
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
            className="product-card relative bg-black aspect-[3/4] overflow-hidden border-r border-white/5 last:border-r-0 cursor-pointer"
          >
            {/* Image Container */}
            <div className="absolute inset-0">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              {/* Gradient for bottom text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 flex flex-col z-20">
              
              <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tighter mb-4">
                {product.name}
              </h3>
              
              <div className="flex items-center justify-between">
                <span className="text-white font-medium text-lg tracking-wide">{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
