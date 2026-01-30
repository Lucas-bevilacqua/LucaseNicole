'use client';

import { motion } from 'framer-motion';
import { Heart, Lock } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';
import { siteConfig } from '@/lib/config';

export default function ConfirmarPresenca() {
  return (
    <SectionWrapper id="confirmar-presenca" className="bg-cream grain">
      <SectionTitle title="Confirme sua Presença" />

      <p className="text-center text-body md:text-body-lg text-olive-950 mb-2 md:mb-3 font-semibold">
        Sua presença é muito importante para nós!
      </p>
      <p className="text-center text-sm md:text-body text-gray-warm mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
        Clique no botão abaixo para acessar nosso site de confirmações e nos dizer que estará conosco nesse dia especial!
      </p>

      <motion.div
        className="flex justify-center px-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.a
          href={siteConfig.bifeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 sm:gap-4 px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-7 min-h-[56px] md:min-h-[76px] bg-olive-950 text-white-off rounded-xl md:rounded-2xl font-semibold text-sm sm:text-lg md:text-2xl tracking-wide shadow-luxe border border-olive-900 hover:bg-olive-dark transition-all duration-300 w-full sm:w-auto text-center"
          whileHover={{ scale: 1.03, boxShadow: '0 24px 48px -12px rgba(45, 56, 20, 0.25)' }}
          whileTap={{ scale: 0.98 }}
        >
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0 text-gold-premium group-hover:animate-pulse-soft" strokeWidth={2} />
          <span>CONFIRMAR PRESENÇA</span>
        </motion.a>
      </motion.div>

      <p className="text-center text-xs sm:text-sm md:text-body text-gray-warm mt-6 md:mt-8 flex items-center justify-center gap-2">
        <Lock className="w-4 h-4 md:w-5 md:h-5 text-gold-premium" strokeWidth={2} />
        Leva apenas 2 minutos!
      </p>
    </SectionWrapper>
  );
}
