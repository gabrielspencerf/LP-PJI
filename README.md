# Protocolo Claude Jurídico — Landing

SPA de marketing para o **Protocolo Claude Jurídico** (treinamento prático para uso assistido de IA na advocacia): React, Vite e Tailwind. Documentação detalhada em **[docs/README.md](./docs/README.md)**.

## O que inclui

- **Landing** com hero (viewport completo, fundo escuro texturado), manifesto, problema, transformação, mecanismo (PJI), entregáveis, programa em acordeão com thumbs 16:9, público, oferta, garantia, FAQ, CTA final e footer no mesmo padrão visual da hero.
- **Páginas legais**: `/termos` e `/privacidade` (conteúdo modelo — revisar com advogado antes de publicar).
- **Checkout** configurável por ambiente (`VITE_CHECKOUT_URL`).

## Stack

| Tecnologia | Uso |
|------------|-----|
| React 19 + TypeScript | UI |
| Vite 6 | Dev (`:3000`) e build |
| Tailwind CSS 4 (`@tailwindcss/vite`) | Estilos e tokens em `src/index.css` |
| react-router-dom 7 | Rotas `/`, `/termos`, `/privacidade` |
| Motion (`motion/react`) | Animações |
| Lucide React | Ícones |

## Estrutura do repositório

```text
LP-PJI/
├── docs/                          # Spec, copy, design system, guias
├── public/
│   ├── _redirects                 # Netlify: fallback SPA → index.html
│   ├── favicon.svg
│   └── media/
│       ├── brands/                # SVGs da faixa de ecossistema (hero)
│       ├── hero-founders-duo.webp
│       └── modules/               # Thumbs (e futuros clipes) dos módulos
├── src/
│   ├── components/
│   │   ├── icons/
│   │   ├── layout/                # Footer, LegalLayout, ClosingSiteBlock (Navbar.tsx disponível, não montado na landing)
│   │   ├── routing/               # ScrollToTop
│   │   ├── sections/
│   │   └── ui/
│   ├── config/site.ts             # Nomes, checkout, e-mail legal opcional
│   ├── hooks/
│   ├── pages/                     # LandingPage, TermsPage, PrivacyPage
│   ├── App.tsx                    # Definição de rotas
│   ├── main.tsx                   # BrowserRouter + mount
│   └── index.css                  # Tokens e classes semânticas
├── vercel.json                    # Rewrite SPA na Vercel
├── index.html
└── package.json
```

## Requisitos

- [Node.js](https://nodejs.org/) LTS

## Uso local

```bash
npm install
npm run dev
```

Servidor: **http://localhost:3000** (host `0.0.0.0` no script).

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção em `dist/` |
| `npm run preview` | Servir o `dist/` localmente |
| `npm run lint` | `tsc --noEmit` |
| `npm run clean` | Remove `dist/` |

## Variáveis de ambiente

Copie `.env.example` para `.env`.

| Variável | Uso |
|----------|-----|
| `VITE_CHECKOUT_URL` | URL do checkout (ex.: Hotmart). Se vazio, CTAs usam `#`. |
| `VITE_SITE_CONTACT_EMAIL` | Opcional: exibido na política de privacidade (LGPD / contato). |
| `DISABLE_HMR` | `true` desliga HMR em ambientes com watcher restrito. |

Não há API obrigatória para a landing.

## Build e deploy

```bash
npm run build
```

Publique o conteúdo de **`dist/`** em hosting estático e defina as variáveis `VITE_*` no painel do provedor.

- **Vercel**: `vercel.json` na raiz redireciona rotas para `index.html`.
- **Netlify**: `public/_redirects` é copiado para `dist/` no build.
- **Outros**: configure fallback de SPA (todas as rotas → `index.html`) para `/termos` e `/privacidade` funcionarem após refresh.

## Licença e marcas

Conteúdo e código do repositório conforme política do mantenedor. Logotipos de terceiros na faixa da hero seguem uso informativo; ver `public/media/brands/README.md`.
