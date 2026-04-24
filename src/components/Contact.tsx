"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Contact() {
  return (
    <section className="py-24 bg-black relative border-t border-white/5" id="contact">
      <div className="container mx-auto px-6 md:px-20 lg:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-12 font-syne"
            >
              Visit Our <br /> Experience Store.
            </motion.h2>

            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="text-yellow-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Location</h4>
                  <p className="text-white/50 leading-relaxed max-w-sm">
                    Areacode - Vazhakkad Rd, opposite Cheekode Road, <br />
                    Edavannappara, Kerala 673645
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="text-yellow-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Contact</h4>
                  <p className="text-white/50 leading-relaxed">
                    075103 59791
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                  <Clock className="text-yellow-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Opening Hours</h4>
                  <p className="text-white/50 leading-relaxed">
                    Open · Closes 10:00 PM <br />
                    Available All Days
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-12 rounded-[40px] h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Stay Updated</h3>
                <p className="text-white/50 mb-10">
                  Follow us on Instagram for the latest arrivals and exclusive offers.
                </p>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-yellow-500 transition-colors"
                >
                  <InstagramIcon className="w-5 h-5" />
                  Follow @toft_mens
                </a>
              </div>

              <div className="mt-16 pt-16 border-t border-white/5">
                <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-6">
                  Quick Inquiry
                </p>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Ask about a product..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                  />
                  <button className="absolute right-2 top-2 bottom-2 px-6 bg-yellow-500 rounded-xl text-black font-bold">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Accent light */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
