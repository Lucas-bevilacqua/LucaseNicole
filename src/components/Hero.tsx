'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
      aria-label="Bem-vindo ao casamento Lucas e Nicole"
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85"
          alt="Lucas e Nicole - Casamento"
          fill
          className="object-cover scale-105"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 overlay-olive z-10" />
        <div className="absolute inset-0 vignette z-10" />
        <div className="absolute inset-0 grain z-10 pointer-events-none" />
      </div>

      {/* Conteúdo central */}
      <motion.div
        className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white-off"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="font-serif text-sm md:text-base tracking-[0.35em] uppercase text-gold-premium mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          É com grande alegria que convidamos
        </motion.p>

        <h1 className="font-serif text-[clamp(3rem,12vw,7rem)] font-semibold leading-[0.95] tracking-[0.02em]">
          Lucas <span className="text-gold-premium font-normal">&</span> Nicole
        </h1>

        <motion.div
          className="w-20 h-px bg-gradient-to-r from-transparent via-gold-premium to-transparent mx-auto mt-8 mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
        />

        <motion.p
          className="font-serif text-2xl md:text-3xl lg:text-4xl text-gold-100 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          {siteConfig.weddingDate}
        </motion.p>
        <motion.p
          className="font-sans text-lg md:text-xl mt-3 text-white-off/90 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Guarulhos, SP
        </motion.p>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold-premium/90">
          Role
        </span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-gold-premium/80 to-transparent rounded-full"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
