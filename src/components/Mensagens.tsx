'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';
import { MessageCircle } from 'lucide-react';

export default function Mensagens() {
  return (
    <SectionWrapper id="mensagens" className="bg-cream">
      <SectionTitle title="Deixe sua Mensagem" />

      <p className="text-center text-body-lg text-gray-dark mb-10 max-w-xl mx-auto leading-relaxed">
        Quer nos deixar um recado? Entre em contato pelo WhatsApp ou email na seção &quot;Contato&quot; — adoraremos ouvir você!
      </p>

      <div className="flex justify-center">
        <motion.a
          href="#contato"
          className="inline-flex items-center gap-2 px-8 py-4 bg-olive-950/5 text-olive-950 rounded-xl font-semibold border-2 border-olive-dark/20 hover:bg-olive-950/10 hover:border-olive-dark/30 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <MessageCircle className="w-5 h-5" strokeWidth={2} />
          Ir para Contato
        </motion.a>
      </div>
    </SectionWrapper>
  );
}
