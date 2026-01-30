'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';
import { siteConfig } from '@/lib/config';
import Countdown from './Countdown';

export default function OGrandeDia() {
  return (
    <SectionWrapper id="o-grande-dia" className="bg-cream">
      <SectionTitle title="O Grande Dia" />

      <Countdown targetDate="2026-11-07T19:00:00" />

      <div className="grid md:grid-cols-2 gap-6 md:gap-12 mt-10 md:mt-20">
        {/* Data e Horário */}
        <motion.div
          className="card-luxe"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-olive-950/8 flex items-center justify-center border border-olive-dark/10">
              <Calendar className="w-6 h-6 md:w-7 md:h-7 text-olive-dark" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-olive-950 font-semibold">
              Data e Horário
            </h3>
          </div>
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-olive-950 font-semibold leading-tight">
            {siteConfig.weddingDayOfWeek}
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-dark mt-1 md:mt-2 font-semibold">
            {siteConfig.weddingDate}
          </p>
          <p className="text-body md:text-body-lg text-gray-warm mt-3 md:mt-4 flex items-center gap-2">
            <Clock className="w-4 h-4 md:w-5 md:h-5 text-gold-premium flex-shrink-0" />
            Horário: {siteConfig.ceremonyTime}
          </p>
          <p className="text-sm md:text-body mt-1 md:mt-2 text-gray-warm">
            Cerimônia e recepção no mesmo local
          </p>
          <p className="text-sm md:text-body mt-3 md:mt-4 pt-3 md:pt-4 border-t border-olive-dark/10 text-olive-950 font-medium">
            Cheguem cedo! 19h em ponto — quem chega atrasado perde o melhor momento (e o Lucas fica nervoso 😅)
          </p>
        </motion.div>

        {/* Local */}
        <motion.div
          className="card-luxe"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-olive-950/8 flex items-center justify-center border border-olive-dark/10">
              <MapPin className="w-6 h-6 md:w-7 md:h-7 text-olive-dark" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-olive-950 font-semibold">
              Local
            </h3>
          </div>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-olive-950 font-semibold">
            {siteConfig.locationName}
          </p>
          <p className="text-body md:text-body-lg text-gray-dark mt-2 md:mt-3 leading-relaxed">
            {siteConfig.locationAddress}
            <br />
            {siteConfig.locationNeighborhood}, {siteConfig.locationCity}
            <br />
            CEP: {siteConfig.locationCEP}
          </p>
          <a
            href={siteConfig.googleMapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 mt-4 md:mt-6 px-5 md:px-6 py-2.5 md:py-3 bg-olive-dark text-white-off rounded-xl font-semibold hover:bg-olive-medium transition-colors w-full sm:w-auto text-sm md:text-base"
          >
            <Navigation className="w-4 h-4 md:w-5 md:h-5" />
            Como Chegar
          </a>
        </motion.div>
      </div>

      {/* Mapa integrado */}
      <motion.div
        className="mt-10 md:mt-14 rounded-xl md:rounded-3xl overflow-hidden shadow-luxe border border-olive-dark/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <iframe
          src={siteConfig.googleMapsUrl}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Local do casamento - Recanto Miami"
          className="w-full md:h-[450px]"
        />
      </motion.div>
    </SectionWrapper>
  );
}
