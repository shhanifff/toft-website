"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Jannath Ct",
    review: "Took one Nike AF a year back. Still at the same condition. Comfort and fit 🔥🔥🔥",
    rating: 5,
    tag: "Verified Purchase",
  },
  {
    name: "nowords tillnow",
    review: "Loved their crocs collection instore. Got one for me as well (woman).",
    rating: 5,
    tag: "Store Visit",
  },
  {
    name: "JASNA P",
    review: "FIRST OF ALL THANKS FOR THE PRODUCT WITHOUT ANY DELAY IN ORDERS AND ANY SCRATCHES. EVERY ORDER IS SAFE AND COMFORTABLE FROM TOFT MEN'S.",
    rating: 5,
    tag: "Home Delivery",
  },
  {
    name: "Happy Customer",
    review: "Good quality and cheap in price, money worth. Nice collections and loved their service 👌🏻",
    rating: 5,
    tag: "Service",
  },
];

export default function Reviews() {
  return (
    <section className="py-24 bg-black relative" id="reviews">
      <div className="container mx-auto px-6 md:px-20 lg:px-32 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
            ))}
            <span className="text-white font-bold ml-2">4.8 / 5.0</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-syne"
          >
            Trusted by the <br /> Community.
          </motion.h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Real stories from our customers who found their perfect pair at Toft Men's.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="glass-card p-12 rounded-[40px] relative overflow-hidden group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-yellow-500/10 transition-colors" />
              <div className="flex items-center gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed mb-8 italic">
                "{item.review}"
              </p>
              <div className="flex justify-between items-center border-t border-white/10 pt-8">
                <div>
                  <h4 className="text-white font-bold text-lg">{item.name}</h4>
                  <span className="text-yellow-500 text-xs font-bold tracking-widest uppercase">
                    {item.tag}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                   <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Big Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 opacity-[0.02]">
        <h2 className="text-[25vw] font-bold text-white leading-none whitespace-nowrap">
          REVIEWS
        </h2>
      </div>
    </section>
  );
}
