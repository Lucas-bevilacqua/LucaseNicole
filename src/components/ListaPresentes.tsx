'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Copy, Check } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';
import { siteConfig } from '@/lib/config';

export default function ListaPresentes() {
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const copyPixKey = () => {
    if (siteConfig.pixKey) {
      navigator.clipboard.writeText(siteConfig.pixKey);
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2000);
    }
  };

  const copyPixCode = () => {
    if (siteConfig.pixCopiaECola) {
      navigator.clipboard.writeText(siteConfig.pixCopiaECola);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
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
            <p className="text-body text-gray-dark mb-2">Chave PIX (e-mail):</p>
            <p className="text-body-lg font-medium text-olive-950 break-all mb-4 bg-cream rounded-lg px-4 py-3 border border-olive-dark/10">
              {siteConfig.pixKey}
            </p>
            <button
              type="button"
              onClick={copyPixKey}
              className="inline-flex items-center gap-2 px-6 py-3 bg-olive-950 text-white-off rounded-xl font-semibold hover:bg-olive-dark transition-all duration-300 shadow-premium mb-6 w-full justify-center"
            >
              {copiedKey ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              {copiedKey ? 'Copiado!' : 'Copiar chave PIX'}
            </button>

            <div className="border-t border-olive-dark/10 pt-6">
              <p className="text-body text-gray-dark mb-3">Ou copie o código PIX Copia e Cola:</p>
              <button
                type="button"
                onClick={copyPixCode}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold-premium text-olive-950 rounded-xl font-semibold hover:bg-gold-dark transition-all duration-300 shadow-premium w-full justify-center"
              >
                {copiedCode ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                {copiedCode ? 'Código copiado!' : 'Copiar código PIX'}
              </button>
            </div>

            <p className="text-body-sm text-gray-warm mt-6">
              Nome: Nicole Ferreira Cerqueira
            </p>
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
