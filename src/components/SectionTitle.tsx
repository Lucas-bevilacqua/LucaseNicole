'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.header
      className="text-center mb-8 sm:mb-12 md:mb-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="separator-ornate mb-4 md:mb-6">
        <span className="ornament bg-gold-premium/40" />
      </div>
      <h2 className="section-title text-3xl sm:text-4xl md:text-display-sm">{title}</h2>
      {subtitle && <p className="section-title-sub text-sm md:text-base">{subtitle}</p>}
      <span className="line-gold" aria-hidden />
      <div className="separator-ornate mt-4 md:mt-6">
        <span className="ornament bg-gold-premium/40" />
      </div>
    </motion.header>
  );
}
