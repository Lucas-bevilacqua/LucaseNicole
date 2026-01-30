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

      <p className="text-center text-body md:text-body-lg text-gray-dark mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
        Sua presença é nosso maior presente, mas se desejar nos presentear, ficaremos muito gratos!
      </p>

      <motion.div
        className="max-w-sm sm:max-w-md mx-auto card-luxe text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center mb-4 md:mb-5">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-olive-950/8 flex items-center justify-center border border-olive-dark/10">
            <Gift className="w-7 h-7 md:w-8 md:h-8 text-olive-dark" strokeWidth={1.5} />
          </div>
        </div>
        <h3 className="font-serif text-xl md:text-3xl text-olive-950 font-semibold mb-4 md:mb-5">PIX</h3>
        {siteConfig.pixKey ? (
          <>
            <p className="text-sm md:text-body text-gray-dark mb-2">Chave PIX (e-mail):</p>
            <p className="text-sm md:text-body-lg font-medium text-olive-950 break-all mb-4 bg-cream rounded-lg px-3 md:px-4 py-2.5 md:py-3 border border-olive-dark/10">
              {siteConfig.pixKey}
            </p>
            <button
              type="button"
              onClick={copyPixKey}
              className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-olive-950 text-white-off rounded-xl font-semibold hover:bg-olive-dark transition-all duration-300 shadow-premium mb-5 md:mb-6 w-full justify-center text-sm md:text-base"
            >
              {copiedKey ? <Check className="w-4 h-4 md:w-5 md:h-5" /> : <Copy className="w-4 h-4 md:w-5 md:h-5" />}
              {copiedKey ? 'Copiado!' : 'Copiar chave PIX'}
            </button>

            <div className="border-t border-olive-dark/10 pt-5 md:pt-6">
              <p className="text-sm md:text-body text-gray-dark mb-3">Ou copie o código PIX Copia e Cola:</p>
              <button
                type="button"
                onClick={copyPixCode}
                className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-gold-premium text-olive-950 rounded-xl font-semibold hover:bg-gold-dark transition-all duration-300 shadow-premium w-full justify-center text-sm md:text-base"
              >
                {copiedCode ? <Check className="w-4 h-4 md:w-5 md:h-5" /> : <Copy className="w-4 h-4 md:w-5 md:h-5" />}
                {copiedCode ? 'Código copiado!' : 'Copiar código PIX'}
              </button>
            </div>

            <p className="text-xs md:text-body-sm text-gray-warm mt-5 md:mt-6">
              Nome: Nicole Ferreira Cerqueira
              <br />
              Banco: PicPay
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
