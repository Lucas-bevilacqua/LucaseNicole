'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail, Instagram, Hash } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';
import { siteConfig } from '@/lib/config';

export default function Contato() {
  const whatsappUrl = siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`
    : '#';

  return (
    <SectionWrapper id="contato" className="bg-white-off">
      <SectionTitle title="Dúvidas? Fale Conosco!" />

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-5 max-w-2xl mx-auto">
        {siteConfig.whatsapp && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-olive-950 text-white-off rounded-xl font-semibold text-body-lg hover:bg-olive-dark transition-all duration-300 shadow-premium"
          >
            <MessageCircle className="w-6 h-6 flex-shrink-0" strokeWidth={2} />
            Abrir WhatsApp
          </a>
        )}
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-cream border-2 border-olive-dark text-olive-950 rounded-xl font-semibold text-body-lg hover:bg-olive-950/5 transition-all duration-300"
        >
          <Mail className="w-6 h-6 flex-shrink-0" strokeWidth={2} />
          {siteConfig.email}
        </a>
        {siteConfig.instagram && (
          <a
            href={`https://instagram.com/${siteConfig.instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-cream border-2 border-olive-dark text-olive-950 rounded-xl font-semibold text-body-lg hover:bg-olive-950/5 transition-all duration-300"
          >
            <Instagram className="w-6 h-6 flex-shrink-0" strokeWidth={2} />
            @{siteConfig.instagram.replace('@', '')}
          </a>
        )}
      </div>

      <p className="text-center mt-12 text-body-lg text-olive-950 flex items-center justify-center gap-2 flex-wrap font-medium">
        <Hash className="w-5 h-5 text-gold-premium" strokeWidth={2} />
        Marque suas fotos com {siteConfig.hashtag}
      </p>
    </SectionWrapper>
  );
}
