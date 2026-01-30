'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="relative bg-olive-950 text-white-off py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 grain opacity-20 pointer-events-none" />
      <motion.div
        className="relative max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-serif text-xl sm:text-2xl md:text-4xl text-white-off/95 mb-4 sm:mb-6 leading-snug px-2">
          Obrigado por fazer parte deste momento tão especial!
        </p>
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-5">
          <Heart className="w-5 h-5 sm:w-7 sm:h-7 text-gold-premium fill-gold-premium" strokeWidth={1.5} />
          <span className="font-serif text-xl sm:text-2xl md:text-3xl text-white-off font-semibold tracking-wide">
            Lucas & Nicole
          </span>
          <Heart className="w-5 h-5 sm:w-7 sm:h-7 text-gold-premium fill-gold-premium" strokeWidth={1.5} />
        </div>
        <p className="font-serif text-base sm:text-lg md:text-xl text-gold-100/90">{siteConfig.weddingDate}</p>
        <p className="text-xs sm:text-sm md:text-body text-white-off/70 mt-6 sm:mt-8 md:mt-10">
          Site criado com <Heart className="inline w-3 h-3 sm:w-4 sm:h-4 text-gold-premium fill-gold-premium" /> para o nosso grande dia
        </p>
      </motion.div>
    </footer>
  );
}
