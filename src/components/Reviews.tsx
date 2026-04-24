"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Jannath Ct",
    review: "Took one Nike AF a year back. Still at the same condition. Comfort and fit 🔥🔥🔥",
    rating: 5,
    tag: "Signature Selection",
  },
  {
    name: "nowords tillnow",
    review: "Loved their crocs collection instore. Got one for me as well (woman).",
    rating: 5,
    tag: "Boutique Visit",
  },
  {
    name: "JASNA P",
    review: "FIRST OF ALL THANKS FOR THE PRODUCT WITHOUT ANY DELAY IN ORDERS AND ANY SCRATCHES. EVERY ORDER IS SAFE AND COMFORTABLE FROM TOFT MEN'S.",
    rating: 5,
    tag: "Elite Logistics",
  },
  {
    name: "Happy Customer",
    review: "Good quality and cheap in price, money worth. Nice collections and loved their service 👌🏻",
    rating: 5,
    tag: "Excellence",
  },
];

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".review-card");
    cards.forEach((card, i) => {
      gsap.fromTo(card, 
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=50",
            toggleActions: "play none none reverse"
          },
          delay: i * 0.2
        }
      );
    });
  }, []);

  return (
    <section className="py-32 bg-black relative border-t border-white/5" id="reviews">
      <div className="container mx-auto px-6 md:px-20 lg:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end mb-32">
           <div className="lg:col-span-7">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-bold text-white leading-[0.85] font-syne tracking-tighter text-editorial"
              >
                THE <br />
                <span className="text-yellow-500">VOICE.</span>
              </motion.h2>
           </div>
           <div className="lg:col-span-5 text-right flex flex-col items-end">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]">
                Authentic testimonials from our community.
              </p>
           </div>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="review-card flex flex-col items-start group"
            >
              <Quote className="w-12 h-12 text-yellow-500/20 mb-8 group-hover:text-yellow-500 transition-colors duration-700" />
              <p className="text-2xl md:text-3xl text-white font-medium leading-[1.2] tracking-tight mb-12 font-syne">
                "{item.review}"
              </p>
              <div className="mt-auto w-full border-t border-white/10 pt-8 flex justify-between items-center">
                <div>
                  <h4 className="text-white font-bold text-xl tracking-tighter">{item.name}</h4>
                  <span className="text-yellow-500 text-[10px] font-bold tracking-[0.2em] uppercase">
                    {item.tag}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity">
                   <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] translate-y-1/2">
         <h2 className="text-[30vw] font-black text-white leading-none whitespace-nowrap">
            TESTIMONIALS
         </h2>
      </div>
    </section>
  );
}
