'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';
import Image from 'next/image';

const moments = [
  {
    year: '2023',
    title: 'Como nos conhecemos',
    description: 'Cada um conta de um jeito — tem quem diga que foi por um amigo chamado Helbert… Mas na real: aplicativo, match, e primeiro encontro no bar Farrapos, na Berrini, em SP. E dali pra frente, tudo mudou.',
    image: '/farrapos.png',
    side: 'left',
  },
  {
    year: '2023',
    title: 'Quando Lucas decidiu pedir',
    description: 'Essa noite foi quando Lucas decidiu que ia pedir ela em namoro. O momento em que tudo ganhou outro rumo.',
    image: '/pedido-namoro.png',
    side: 'right',
  },
  {
    year: '2023',
    title: 'O dia do pedido de namoro',
    description: 'O dia em que Lucas pediu ela em namoro. Uma noite especial, com a cidade aos nossos pés e o começo de nossa história a dois.',
    image: '/dia-pedido-namoro-selfie.png',
    side: 'left',
  },
  {
    year: '2023',
    title: 'A primeira viagem de aniversário',
    description: 'A Nicole deu de presente de aniversário do Lucas a primeira viagem dos dois. A partir dessa, combinamos: todo aniversário o presente seria uma viagem. E assim virou nossa tradição.',
    image: '/primeira-viagem-aniversario.png',
    side: 'right',
  },
  {
    year: '2024',
    title: 'Nosso primeiro pet juntos: Kiaria Maria',
    description: 'Ela chegou pra ficar: Kiaria Maria — ou, como todo mundo chama, Kika (ou Kikalot). Nosso primeiro pet juntos, e a família ganhou mais um membro de quatro patas.',
    image: '/kika.png',
    side: 'left',
  },
  {
    year: '2024',
    title: 'A viagem de aniversário da Nicole',
    description: 'O Lucas deu de presente de aniversário da Nicole uma viagem à praia. A tradição já tinha começado: todo aniversário, uma viagem juntos.',
    image: '/viagem-aniversario-nicole.png',
    side: 'right',
  },
  {
    year: '2024',
    title: 'A primeira viagem que marcou: Ushuaia',
    description: 'Fomos para Ushuaia. Neve, frio, fim do mundo — e a certeza de que juntos a gente vai longe. Foi a viagem que marcou.',
    image: '/ushuaia.png',
    side: 'left',
  },
  {
    year: '2025',
    title: 'Nosso primeiro passeio no museu',
    description: 'Primeiro passeio no museu, pra mostrar que somos cultos. Escadaria vermelha, D. Pedro I ao fundo e um beijo que não combina com cara de sério.',
    image: '/primeiro-passeio-museu.png',
    side: 'right',
  },
  {
    year: '2025',
    title: 'O pedido de casamento',
    description: 'Em Campos do Jordão, na fondue, de mesa — esse foi o pedido de verdade. A foto do Lucas de joelho com as luzes? Simulação pra registrar o momento. Prioridades: primeiro o sim, depois a pose. 😂',
    image: '/pedido-casamento-fondue.png',
    side: 'left',
  },
  {
    year: '2026',
    title: 'O grande dia',
    description: 'Preparando cada detalhe para celebrar nosso amor com quem amamos.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    side: 'right',
  },
];

export default function NossaHistoria() {
  return (
    <SectionWrapper id="nossa-historia" className="bg-white-off">
      <SectionTitle title="Nossa História" />

      <div className="space-y-16 md:space-y-32">
        {moments.map((moment, i) => (
          <motion.article
            key={`${moment.year}-${i}`}
            className={`flex flex-col gap-6 md:gap-12 ${moment.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Mobile: Foto primeiro, Texto depois | Desktop: alternado conforme side */}
            <div className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md order-1 md:order-none">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-luxe border border-olive-dark/10 p-1 md:p-1.5 bg-cream">
                <Image
                  src={moment.image}
                  alt={moment.title}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left order-2 md:order-none px-2 sm:px-0">
              <span className="font-serif text-xl sm:text-2xl md:text-3xl text-gold-premium font-semibold tracking-wide">
                {moment.year}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-olive-950 mt-1 md:mt-2 font-semibold leading-tight">
                {moment.title}
              </h3>
              <p className="text-body md:text-body-lg text-gray-dark mt-3 md:mt-4 leading-relaxed">
                {moment.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
