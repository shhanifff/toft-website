"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const collections = [
  {
    title: "Nike AF Series",
    category: "Premium Imported",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop",
    price: "From ₹2,499",
  },
  {
    title: "Signature Crocs",
    category: "Comfort Collection",
    image: "https://images.unsplash.com/photo-1623126435942-8800989f074d?q=80&w=1000&auto=format&fit=crop",
    price: "From ₹1,299",
  },
  {
    title: "Imported Formal",
    category: "Elegance Redefined",
    image: "https://images.unsplash.com/photo-1614252335198-d636412e2496?q=80&w=1000&auto=format&fit=crop",
    price: "From ₹3,999",
  },
  {
    title: "Urban Sneakers",
    category: "Street Ready",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop",
    price: "From ₹2,999",
  },
];

export default function Collections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={containerRef} className="py-24 bg-black overflow-hidden" id="collections">
      <div className="container mx-auto px-6 md:px-20 lg:px-32 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white font-syne"
            >
              Curated for <br /> Excellence.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-xs"
          >
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Our signature series combines global aesthetics with unbeatable value. 
              From the iconic AF series to the latest Crocs collection.
            </p>
            <div className="w-12 h-px bg-yellow-500"></div>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scrolling Rows */}
      <div className="flex flex-col gap-8 md:gap-16">
        <motion.div style={{ x: x1 }} className="flex gap-8 px-6">
          {collections.map((item, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-[450px] aspect-[4/5] relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-yellow-500 text-[10px] font-bold uppercase tracking-widest mb-1">
                  {item.category}
                </p>
                <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm font-medium">{item.price}</p>
              </div>
            </div>
          ))}
          {/* Repeat for continuous feel */}
          {collections.map((item, i) => (
            <div
              key={`repeat-${i}`}
              className="min-w-[300px] md:min-w-[450px] aspect-[4/5] relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-yellow-500 text-[10px] font-bold uppercase tracking-widest mb-1">
                  {item.category}
                </p>
                <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm font-medium">{item.price}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Second row scrolling in opposite direction */}
        <motion.div style={{ x: x2 }} className="flex gap-8 px-6">
          {[...collections].reverse().map((item, i) => (
            <div
              key={`rev-${i}`}
              className="min-w-[300px] md:min-w-[450px] aspect-[4/5] relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-yellow-500 text-[10px] font-bold uppercase tracking-widest mb-1">
                  {item.category}
                </p>
                <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm font-medium">{item.price}</p>
              </div>
            </div>
          ))}
          {[...collections].reverse().map((item, i) => (
            <div
              key={`rev-repeat-${i}`}
              className="min-w-[300px] md:min-w-[450px] aspect-[4/5] relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-yellow-500 text-[10px] font-bold uppercase tracking-widest mb-1">
                  {item.category}
                </p>
                <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm font-medium">{item.price}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
