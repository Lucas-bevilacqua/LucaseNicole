import Hero from '@/components/Hero';
import NossaHistoria from '@/components/NossaHistoria';
import OGrandeDia from '@/components/OGrandeDia';
import ConfirmarPresenca from '@/components/ConfirmarPresenca';
import ListaPresentes from '@/components/ListaPresentes';
import Padrinhos from '@/components/Padrinhos';
import GaleriaFotos from '@/components/GaleriaFotos';
import InformacoesUteis from '@/components/InformacoesUteis';
import Mensagens from '@/components/Mensagens';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* One-page: sem menu, apenas scroll contínuo */}
      <Hero />
      <NossaHistoria />
      <OGrandeDia />
      <ConfirmarPresenca />
      <ListaPresentes />
      <Padrinhos />
      <GaleriaFotos />
      <InformacoesUteis />
      <Mensagens />
      <Contato />
      <Footer />
    </main>
  );
}
