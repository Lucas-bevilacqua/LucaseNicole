'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';
import Image from 'next/image';

const fotos = [
  '/farrapos.png',
  '/dia-pedido-namoro-selfie.png',
  '/dia-pedido-namoro-maos.png',
  '/primeiro-passeio-museu.png',
  '/kika.png',
  '/primeira-viagem-aniversario.png',
  '/viagem-aniversario-nicole.png',
  '/ushuaia.png',
  '/pedido-namoro.png',
  '/pedido-casamento-fondue.png',
  '/pedido-casamento-campos-jordao.png',
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
];

export default function GaleriaFotos() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="galeria" className="bg-white-off">
      <SectionTitle title="Momentos Especiais" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
        {fotos.map((src, i) => (
          <motion.button
            key={i}
            type="button"
            className="relative aspect-square rounded-xl overflow-hidden shadow-luxe border border-olive-dark/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-premium focus-visible:ring-offset-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setLightboxIndex(i)}
          >
            <Image
              src={src}
              alt={`Foto do casal ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-olive-950/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10"
              onClick={() => setLightboxIndex(null)}
              aria-label="Fechar"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              className="relative max-w-4xl w-full aspect-[4/3]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={fotos[lightboxIndex]}
                alt={`Foto ampliada ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
