# Protocolo Jurisprudência Inteligente — Landing

Landing page estática de alta conversão para o **Protocolo IJ**, construída com React + Vite + Tailwind.

Documentação técnica e de conteúdo: **[docs/README.md](./docs/README.md)**.

## Contexto desta atualização

Esta versão consolidou a base para produção:

- estrutura modular por domínio (`layout`, `sections`, `ui`, `icons`, `hooks`, `config`);
- padronização visual em classes semânticas globais (`section-*`, `card-*`, `btn-*`, `label-*`);
- ajustes de responsividade e consistência entre mobile/tablet/desktop;
- correção de regressões visuais em cards e botões;
- limpeza do legado do Google AI Studio (arquivo de metadata movido para `docs/referencias`);
- documentação completa em `docs/` (spec, design system, copy, guias de IA e logs).

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Motion (`motion/react`)
- Lucide React

## Estrutura principal

```text
LP-PJI/
├── docs/                      # Base documental do projeto
├── public/                    # Assets estáticos (favicon)
├── src/
│   ├── components/
│   │   ├── icons/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── config/                # Configuração central do site
│   ├── hooks/                 # Hooks reutilizáveis (ex.: reveal on scroll)
│   ├── App.tsx
│   └── index.css              # Tokens e classes semânticas globais
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

Servidor: `http://localhost:3000`

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Sobe servidor de desenvolvimento |
| `npm run build` | Gera build de produção em `dist/` |
| `npm run preview` | Preview local do build |
| `npm run lint` | Verificação TypeScript (`tsc --noEmit`) |
| `npm run clean` | Remove `dist/` |

## Variáveis de ambiente

Copie `.env.example` para `.env`:

| Variável | Uso |
|----------|-----|
| `DISABLE_HMR` | `true` desliga HMR em ambientes com watcher restrito |
| `VITE_CHECKOUT_URL` | URL final do checkout (ex.: Hotmart) |

Não há chave de API obrigatória para renderização da landing.

## Build e deploy

```bash
npm run build
```

Publique `dist/` em host estático (Vercel, Netlify, S3+CloudFront, Nginx, etc.) e configure `VITE_CHECKOUT_URL` no ambiente de deploy.
