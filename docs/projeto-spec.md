# Especificação leve — LP-PJI

SPA de marketing para o produto **Protocolo Claude Jurídico** (treinamento prático para uso assistido de IA na advocacia).

O mecanismo interno apresentado na copy é o **Protocolo Jurisprudência Inteligente**.

## Stack

- **React 19** + **TypeScript**
- **Vite 6** (porta `3000`, host `0.0.0.0`)
- **Tailwind CSS 4** via `@tailwindcss/vite`
- **react-router-dom 7** (rotas `/`, `/termos`, `/privacidade`)
- **Motion** (`motion/react`)
- **Lucide React**

Sem backend no repositório. A aplicação é 100% front-end (SPA).

## Convenções técnicas

- Alias interno: `@/*` → `src/*`.
- Padrão de import: `@/components/*`, `@/hooks/*`, `@/config/*`.
- Animação de entrada via hook `useRevealOnScroll`.
- Checkout: `VITE_CHECKOUT_URL` + `src/config/site.ts`.
- Páginas legais: `VITE_SITE_CONTACT_EMAIL` (opcional) para contato na política de privacidade.

## Estrutura de pastas (resumo)

```text
LP-PJI/
├── docs/
├── public/
│   ├── _redirects              # Netlify: fallback SPA
│   ├── favicon.svg
│   └── media/
│       ├── brands/             # SVGs da faixa de ecossistema (hero)
│       └── modules/            # thumbs (e futuros clipes) 16:9 dos módulos
├── src/
│   ├── components/
│   │   ├── icons/              # Ícones React (ex.: ClaudeLogo)
│   │   ├── layout/             # Footer, LegalLayout, ClosingSiteBlock; Navbar.tsx presente mas fora da árvore atual da landing
│   │   ├── routing/            # ScrollToTop
│   │   ├── sections/           # Seções comerciais da landing
│   │   └── ui/                 # SectionTitle e peças reutilizáveis
│   ├── config/site.ts
│   ├── hooks/useRevealOnScroll.ts
│   ├── pages/                  # LandingPage, TermsPage, PrivacyPage
│   ├── App.tsx                 # Rotas
│   ├── main.tsx                # BrowserRouter
│   └── index.css
├── vercel.json                 # Rewrite SPA (Vercel)
└── index.html
```

## Sequência atual da página

1. Hero
2. Manifesto
3. Problema
4. Transformação
5. Mecanismo (Protocolo Jurisprudência Inteligente)
6. Entregáveis
7. Programa (accordion com mídia 16:9 por módulo)
8. Para quem é / não é
9. Oferta
10. Garantia (7 dias)
11. FAQ
12. CTA final
13. Footer

## Rotas da SPA

| Rota | Conteúdo |
|------|----------|
| `/` | Landing completa (`LandingPage.tsx`) |
| `/termos` | Termos de uso (`TermsPage.tsx` + `LegalLayout`) |
| `/privacidade` | Política de privacidade (`PrivacyPage.tsx` + `LegalLayout`) |

## Âncoras principais (na landing)

| Âncora | Conteúdo |
|--------|----------|
| `#metodo` | Manifesto |
| `#riscos` | Problema |
| `#fluxo` | Mecanismo |
| `#programa` | Programa |
| `#oferta` | Oferta |
| `#garantia` | Garantia comercial (7 dias / plataforma) |
| `#faq` | FAQ |

## Decisões de produto e copy

- Nome principal da oferta: **Protocolo Claude Jurídico**.
- Evitar naming antigo como “Protocolo IJ” no conteúdo principal.
- Comunicação orientada a **uso assistido** de IA, sem promessa de resultado jurídico.
- Evitar claims absolutos (“zero risco”, “segurança absoluta”, etc.).

## Decisões visuais

- Tokens centralizados em `src/index.css`.
- Escala global reduzida com `html { font-size: 80%; }`.
- Exceções de escala (`.scale-exempt`): miolo da hero (`layout-container`) e footer.
- **Ritmo de seções**: `.section-base` + `.section-tall` / `.section-xl` com valores alinhados (ver `docs/design/design-system.md`).
- **Hero**: `h-dvh`/`max-h-dvh` no `<header>`, safe-area inferior, flex centro–centro no miolo, grelha 12 colunas em desktop, foto `object-contain` com tetos em `dvh`; detalhe em `docs/design/hero-layout-e-fundos-escuros.md`. Sem navbar fixa na estrutura atual.
- Cards e seção final ajustados para transição visual contínua.

## Roadmap curto

1. ~~Trocar `href="#"` de Termos/Privacidade por rotas reais.~~ Feito: `/termos` e `/privacidade` (React Router + `LegalLayout`).
2. Implementar carregamento real de thumbs e clipes dos módulos em `public/media/modules`.
3. Opcional: testes visuais por breakpoint para evitar regressão de tipografia/spacing.

## Histórico resumido

| Marco | Nota |
|------|------|
| Base inicial | Estrutura originada no AI Studio e migrada para Vite/React |
| Refactor | Componentização completa por seções e layout |
| Compliance | Copy revisada para linguagem jurídica segura |
| Reestruturação comercial | Nova ordem de seções e programa detalhado |
| Refino visual | Escala global reduzida + ajustes de header/footer/cards |
| Legal + rotas | `react-router-dom`, `/termos`, `/privacidade`, deploy SPA (`vercel.json`, `_redirects`) |
| Rodapé | Tipografia sans padronizada (classes `.footer-dark-*` / `.footer-light-*`) |
