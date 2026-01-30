'use client';

import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = '',
  noPadding,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`py-section-mobile md:py-section ${noPadding ? '' : 'px-6 md:px-10'} max-w-6xl mx-auto ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
