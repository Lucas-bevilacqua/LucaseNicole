'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';
import Image from 'next/image';

const colorSwatches = [
  { name: 'Verde Oliva', bg: 'bg-olive-dark' },
  { name: 'Bege', bg: 'bg-beige' },
  { name: 'Dourado', bg: 'bg-gold-premium' },
];

const inspirationImages = [
  { url: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80', alt: 'Look masculino elegante' },
  { url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80', alt: 'Look feminino elegante' },
  { url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80', alt: 'Traje social' },
  { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', alt: 'Inspiração masculina' },
];

export default function DressCode() {
  return (
    <SectionWrapper id="dress-code" className="bg-white-off">
      <SectionTitle title="Traje Sugerido" />

      <p className="text-center text-body-lg text-olive-950 mb-1 font-semibold">
        Traje Passeio Completo / Social
      </p>
      <p className="text-center text-body text-gray-warm mb-12">
        Sugerimos tons de verde oliva, bege e neutros
      </p>

      <div className="flex justify-center gap-8 mb-14 flex-wrap">
        {colorSwatches.map((swatch) => (
          <motion.div
            key={swatch.name}
            className="text-center"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className={`w-20 h-20 md:w-28 md:h-28 rounded-2xl border-2 border-olive-dark/20 shadow-luxe ${swatch.bg}`}
              title={swatch.name}
            />
            <span className="block mt-3 text-body text-olive-950 font-medium">{swatch.name}</span>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-body text-gray-warm mb-6 tracking-wide">Inspirações</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {inspirationImages.map((img, i) => (
          <motion.div
            key={img.alt}
            className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-luxe border border-olive-dark/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 200px"
            />
          </motion.div>
        ))}
      </div>
      <p className="text-center text-body text-gray-warm mt-10">
        Evite: jeans, bermudas, chinelos e roupas muito casuais
      </p>
    </SectionWrapper>
  );
}
