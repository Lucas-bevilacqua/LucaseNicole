'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.header
      className="text-center mb-14 md:mb-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="separator-ornate mb-6">
        <span className="ornament bg-gold-premium/40" />
      </div>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-title-sub">{subtitle}</p>}
      <span className="line-gold" aria-hidden />
      <div className="separator-ornate mt-6">
        <span className="ornament bg-gold-premium/40" />
      </div>
    </motion.header>
  );
}
