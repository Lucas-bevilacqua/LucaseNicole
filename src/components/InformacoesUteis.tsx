'use client';

import { motion } from 'framer-motion';
import { Hotel, Car, CloudSun, Clock } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';
import { siteConfig } from '@/lib/config';

const cards = [
  {
    id: 'hospedagem',
    icon: Hotel,
    title: 'Onde ficar?',
    content: (
      <>
        Sugestões de hotéis próximos ao Recanto Miami em Guarulhos:
        <ul className="mt-3 space-y-1 text-body text-gray-warm">
          <li>• Hotéis na região de Guarulhos (Água Azul, Centro)</li>
          <li>• Hotéis próximos ao Aeroporto de Guarulhos (10-15 min)</li>
          <li>• Opções em São Paulo capital (30-40 min)</li>
        </ul>
        <p className="mt-3 text-body text-gray-dark">
          Distância aproximada até o Recanto Miami: verifique no mapa.
        </p>
      </>
    ),
  },
  {
    id: 'como-chegar',
    icon: Car,
    title: 'Como Chegar',
    content: (
      <>
        <p className="font-semibold text-olive-dark mb-2">De carro:</p>
        <p className="text-body text-gray-warm mb-2">
          Via Dutra (Rod. Presidente Dutra), saída Guarulhos. Acesso pela Av. Acapulco.
        </p>
        <p className="font-semibold text-olive-950 mb-2 mt-4">Transporte:</p>
        <p className="text-body text-gray-warm">
          Uber/99/Táxi recomendado. Aeroporto de Guarulhos: 15-20 min. São Paulo: 30-40 min.
        </p>
        <p className="text-body text-gray-dark mt-3">
          Waze/Google Maps: &quot;Recanto Miami Guarulhos&quot;
        </p>
      </>
    ),
  },
  {
    id: 'clima',
    icon: CloudSun,
    title: 'Clima',
    content: (
      <>
        <p className="text-body text-gray-warm">
          Novembro em Guarulhos: primavera/início do verão. Temperatura esperada: 20-28°C.
        </p>
        <p className="text-body text-gray-warm mt-2">
          Possibilidade de chuva — levar guarda-chuva/sombrinha. Roupas leves e protetor solar.
        </p>
      </>
    ),
  },
  {
    id: 'programacao',
    icon: Clock,
    title: 'Programação do Dia',
    content: (
      <>
        <ul className="space-y-2 text-body text-gray-warm">
          <li>18h30 — Chegada dos convidados (cheguem cedo!)</li>
          <li>19h — Cerimônia</li>
          <li>20h — Coquetel</li>
          <li>21h — Jantar</li>
          <li>22h — Festa</li>
        </ul>
        <p className="text-body text-gray-dark mt-3">Horários aproximados. O importante: 19h em ponto! 😉</p>
      </>
    ),
  },
];

export default function InformacoesUteis() {
  return (
    <SectionWrapper id="informacoes-uteis" className="bg-cream">
      <SectionTitle title="Informações Úteis" />

      <div className="grid md:grid-cols-2 gap-5 md:gap-8">
        {cards.map((card, i) => (
          <motion.article
            key={card.id}
            className="card-luxe"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-olive-950/8 flex items-center justify-center border border-olive-dark/10 flex-shrink-0">
                <card.icon className="w-6 h-6 md:w-7 md:h-7 text-olive-dark" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-olive-950 font-semibold">{card.title}</h3>
            </div>
            <div className="text-sm md:text-body text-gray-dark leading-relaxed">{card.content}</div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
