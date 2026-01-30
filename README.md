# Site de Casamento - Lucas & Nicole

Site one-page premium para o casamento Lucas & Nicole (07 de Novembro de 2026), conforme PRD.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (Design System verde oliva + dourado)
- **Framer Motion** (animações suaves)
- **Lucide React** (ícones)
- **TypeScript**

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Configuração

Edite `src/lib/config.ts` para:

- **URL do Bife (RSVP):** `bifeUrl`
- **Data/horário:** `weddingDate`, `ceremonyTime`
- **Local:** endereço e `googleMapsUrl`
- **Contato:** `whatsapp`, `email`, `instagram`, `hashtag`
- **PIX:** `pixKey` e (opcional) `pixQrCodeImage`
- **Lista de presentes:** `giftLists` (links das lojas)

## Conteúdo a substituir

1. **Hero:** Trocar a imagem em `src/components/Hero.tsx` pela foto real dos noivos (colocar em `public/` e usar `/hero.jpg`).
2. **Nossa História:** Atualizar textos e fotos em `src/components/NossaHistoria.tsx`.
3. **Padrinhos:** Atualizar nomes, relações e fotos em `src/components/Padrinhos.tsx`.
4. **Galeria:** Trocar URLs das fotos em `src/components/GaleriaFotos.tsx` pelas fotos reais.

## Build e deploy

```bash
npm run build
npm start
```

Recomendado deploy na **Vercel** (conectar repositório Git para deploy automático).

## Estrutura das seções (scroll contínuo, sem menu)

1. Hero  
2. Nossa História  
3. O Grande Dia (data, local, mapa, countdown)  
4. Traje Sugerido (Dress Code)  
5. Confirme sua Presença (botão para o Bife)  
6. Presentes (PIX + lista online)  
7. Padrinhos e Madrinhas  
8. Momentos Especiais (galeria com lightbox)  
9. Informações Úteis (hospedagem, como chegar, clima, programação)  
10. Deixe sua Mensagem (link para contato)  
11. Contato (WhatsApp, email, hashtag)  
12. Footer  

## Checklist pós-configuração

- [ ] Definir horário da cerimônia em `config.ts`
- [ ] Inserir URL real do Bife e testar o botão RSVP
- [ ] Adicionar chave PIX e (opcional) imagem do QR Code
- [ ] Trocar todas as imagens placeholder pelas fotos oficiais
- [ ] Revisar textos e lista de padrinhos
- [ ] Testar em mobile e em navegadores diferentes
- [ ] Configurar domínio e SSL no provedor de hospedagem

---

Site criado com ❤️ para Lucas & Nicole.
