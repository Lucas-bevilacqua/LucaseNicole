import type { Metadata } from 'next';
import Script from 'next/script';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Casamento Lucas & Nicole | 07 de Novembro de 2026',
  description:
    'Celebre conosco nosso grande dia! Confirme sua presença e veja todos os detalhes do nosso casamento. Guarulhos, SP.',
  openGraph: {
    title: 'Casamento Lucas & Nicole',
    description: '07 de Novembro de 2026 - Celebre conosco! Guarulhos, SP.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casamento Lucas & Nicole',
    description: '07 de Novembro de 2026 - Celebre conosco!',
  },
};

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Casamento Lucas & Nicole',
  startDate: '2026-11-07',
  location: {
    '@type': 'Place',
    name: 'Recanto Miami',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Acapulco, 186',
      addressLocality: 'Guarulhos',
      addressRegion: 'SP',
      postalCode: '07159-505',
    },
  },
  description: 'Celebração do casamento de Lucas e Nicole.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-sans bg-cream text-gray-dark min-h-screen">
        <Script
          id="event-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
