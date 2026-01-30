'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { siteConfig } from '@/lib/config';

const padrinhos = siteConfig.padrinhos;

export default function Padrinhos() {
  const isLoading = padrinhos.length === 0;

  return (
    <SectionWrapper id="padrinhos" className="bg-cream">
      <SectionTitle title="Nossos Padrinhos e Madrinhas" />

      {isLoading ? (
        <motion.div
          className="text-center py-8 md:py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-5 sm:px-8 py-5 sm:py-6 bg-white-off rounded-xl sm:rounded-2xl shadow-luxe border border-olive-dark/10">
            <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 text-olive-dark animate-spin" />
            <p className="text-sm sm:text-body text-olive-950 font-medium text-center">
              Estamos preparando a lista dos nossos padrinhos e madrinhas especiais...
            </p>
          </div>
          <p className="text-xs sm:text-body-sm text-gray-warm mt-4 sm:mt-6 max-w-md mx-auto px-4">
            Em breve revelaremos as pessoas queridas que estarão ao nosso lado neste dia tão especial! 💛
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 md:gap-14">
          {padrinhos.map((p, i) => (
            <motion.article
              key={p.name}
              className="text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <div className="relative w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 mx-auto rounded-full overflow-hidden border-2 border-olive-dark/20 shadow-luxe mb-3 sm:mb-5 ring-2 ring-white-off ring-offset-2 sm:ring-offset-4 ring-offset-cream">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 144px, 176px"
                />
              </div>
              <h3 className="font-serif text-base sm:text-xl md:text-2xl text-olive-950 font-semibold">{p.name}</h3>
              <p className="text-xs sm:text-body text-gray-warm mt-1">{p.relation}</p>
            </motion.article>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
