"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Truck, Heart, Star, ShieldCheck, Globe } from "lucide-react";

const features = [
  {
    icon: <ShoppingBag className="w-6 h-6 text-yellow-500" />,
    title: "In-store Experience",
    description: "Visit our boutique in Edavannappara for a personalized shopping experience.",
  },
  {
    icon: <Truck className="w-6 h-6 text-yellow-500" />,
    title: "Fastest Delivery",
    description: "We ensure your premium footwear reaches you safely and without delay.",
  },
  {
    icon: <Globe className="w-6 h-6 text-yellow-500" />,
    title: "Imported Selection",
    description: "Handpicked premium footwear from global brands, curated for your style.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-yellow-500" />,
    title: "Quality Guaranteed",
    description: "Every product is checked for quality to ensure maximum comfort and durability.",
  },
  {
    icon: <Heart className="w-6 h-6 text-yellow-500" />,
    title: "LGBTQ+ Friendly",
    description: "A welcoming space for everyone to express their unique style.",
  },
  {
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    title: "4.8 Rated Excellence",
    description: "Trusted by hundreds of customers for our service and value for money.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 lg:px-32 relative z-10">
        <div className="flex flex-col items-start mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-syne"
          >
            Crafting the Perfect <br /> Shopping Journey.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="glass-card p-10 rounded-3xl group hover:border-yellow-500/30 transition-colors duration-500"
            >
              <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
