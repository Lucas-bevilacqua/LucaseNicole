'use client';

import { motion } from 'framer-motion';
import { Gift, Copy } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';
import { siteConfig } from '@/lib/config';

export default function ListaPresentes() {
  const copyPix = () => {
    if (siteConfig.pixKey) {
      navigator.clipboard.writeText(siteConfig.pixKey);
    }
  };

  return (
    <SectionWrapper id="presentes" className="bg-white-off">
      <SectionTitle title="Presentes" />

      <p className="text-center text-body-lg text-gray-dark mb-12 max-w-2xl mx-auto leading-relaxed">
        Sua presença é nosso maior presente, mas se desejar nos presentear, ficaremos muito gratos!
      </p>

      <motion.div
        className="max-w-md mx-auto card-luxe text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-full bg-olive-950/8 flex items-center justify-center border border-olive-dark/10">
            <Gift className="w-8 h-8 text-olive-dark" strokeWidth={1.5} />
          </div>
        </div>
        <h3 className="font-serif text-2xl md:text-3xl text-olive-950 font-semibold mb-5">PIX</h3>
        {siteConfig.pixKey ? (
          <>
            <div className="bg-cream rounded-xl p-5 mb-5 border border-olive-dark/10">
              <div className="w-44 h-44 mx-auto bg-olive-50/50 rounded-xl flex items-center justify-center text-gray-warm text-body border border-olive-dark/10">
                QR Code
              </div>
            </div>
            <p className="text-body text-gray-dark mb-2">Chave PIX:</p>
            <p className="text-body-lg font-medium text-olive-950 break-all mb-5">
              {siteConfig.pixKey}
            </p>
            <button
              type="button"
              onClick={copyPix}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-olive-950 text-white-off rounded-xl font-semibold hover:bg-olive-dark transition-all duration-300 shadow-premium"
            >
              <Copy className="w-5 h-5" />
              Copiar chave PIX
            </button>
          </>
        ) : (
          <p className="text-body text-gray-warm">
            Chave PIX em breve.
          </p>
        )}
      </motion.div>
    </SectionWrapper>
  );
}
