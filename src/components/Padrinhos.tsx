'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';
import Image from 'next/image';

const padrinhos = [
  { name: 'Nome do Padrinho 1', relation: 'Amigo', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  { name: 'Nome da Madrinha 1', relation: 'Amiga', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
  { name: 'Nome do Padrinho 2', relation: 'Família', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80' },
  { name: 'Nome da Madrinha 2', relation: 'Família', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
  { name: 'Nome do Padrinho 3', relation: 'Amigo', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
  { name: 'Nome da Madrinha 3', relation: 'Amiga', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80' },
];

export default function Padrinhos() {
  return (
    <SectionWrapper id="padrinhos" className="bg-cream">
      <SectionTitle title="Nossos Padrinhos e Madrinhas" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-14">
        {padrinhos.map((p, i) => (
          <motion.article
            key={p.name}
            className="text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
          >
            <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full overflow-hidden border-2 border-olive-dark/20 shadow-luxe mb-5 ring-2 ring-white-off ring-offset-4 ring-offset-cream">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 144px, 176px"
              />
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-olive-950 font-semibold">{p.name}</h3>
            <p className="text-body text-gray-warm mt-1">{p.relation}</p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
