# Instruções para assistentes de IA (Claude, ChatGPT, etc.)

Use este arquivo como **contexto fixo** ao pedir alterações no repositório LP-PJI. Cole ou anexe junto com o pedido do usuário.

## O que é o projeto

SPA em React/Vite para o produto **Protocolo Claude Jurídico** (landing em `/` e páginas legais em `/termos` e `/privacidade`).  
O mecanismo interno na copy é **Protocolo Jurisprudência Inteligente**.

Não existe API server-side no repo; não inventar endpoints ou integração Gemini/Google a menos que o código já mostre isso.

## Onde editar

| Objetivo | Arquivo principal |
|----------|-------------------|
| Rotas (`/`, `/termos`, `/privacidade`) | `src/App.tsx` + `src/main.tsx` (`BrowserRouter`) |
| Ordem das seções da landing | `src/pages/LandingPage.tsx` |
| Conteúdo por bloco | `src/components/sections/*.tsx` |
| Termos / privacidade | `src/pages/TermsPage.tsx`, `src/pages/PrivacyPage.tsx`, `src/components/layout/LegalLayout.tsx` |
| Navbar / rodapé / bloco final escuro | `src/components/layout/` |
| Título SEO, meta, OG | `index.html` (abas legais ajustam `document.title` em runtime) |
| Checkout e textos centrais | `.env` → `VITE_CHECKOUT_URL` + `src/config/site.ts` |
| E-mail opcional (LGPD na política) | `VITE_SITE_CONTACT_EMAIL` + `getSiteContactEmail()` em `site.ts` |
| Cores, fontes, classes globais | `src/index.css` |
| Opções do Vite / build | `vite.config.ts` |
| Fallback SPA em deploy | `vercel.json`, `public/_redirects` |
| Mídia dos módulos (thumbs/vídeos) | `public/media/modules/` + `src/components/sections/ProgramSection.tsx` |
| Marcas da faixa da hero | `public/media/brands/` + `HeroEcosystemStrip.tsx` |

## Convenções de import

- Use alias `@/*` para caminhos internos em `src`.
- Exemplos preferidos: `@/components/...`, `@/hooks/...`, `@/config/...`.
- Evite misturar `@/src/...` com `@/...`; mantenha um padrão único.

## Regras de qualidade

1. **Não adicionar** dependências pesadas ou backends sem pedido explícito do mantenedor.
2. Preservar **acessibilidade** já presente: skip link, `aria-*`, contraste dos botões.
3. **Tokens de design** primeiro (`bg-brand`, `text-accent`, classes `.card-premium`, `.btn-gold`); evitar cores hex espalhadas nas JSX sem motivo.
4. Respeitar classes semânticas de consistência (`.layout-container`, `.section-*`, `.card-*`, `.label-*`) antes de criar novos valores arbitrários.
5. Se precisar adicionar nova variação visual global, atualizar junto `src/index.css` e `docs/design/design-system.md`; alterações na hero ou em fundos escuros devem alinhar com `docs/design/hero-layout-e-fundos-escuros.md`.
6. Se tocar em animações de entrada (`.reveal`), revisar também o hook `src/hooks/useRevealOnScroll.ts`.
7. Copy jurídica: **não garantir resultados processuais** nem minimizar deveres éticos do advogado.
8. Ao mover código para novos componentes, manter **um único estilo** com o restante do arquivo (funções no mesmo arquivo ou pasta `components/` coerente).
9. Manter naming oficial da interface:
   - Produto: **Protocolo Claude Jurídico**
   - Mecanismo: **Protocolo Jurisprudência Inteligente**
10. **`.scale-exempt`**: miolo da hero (`layout-container` em `Hero.tsx`) e footer; o `<header>` da hero **não** usa `scale-exempt`. Evite remover sem revisar a escala global da página.

## O que foi removido do fluxo antigo (AI Studio)

- Chave **GEMINI** / pacote **`@google/genai`** não fazem parte do app atual.
- Não sugerir restaurar esses itens salvo pedido explícito para integração futura.

## Saída esperada ao responder

- Mudanças **mínimas** e focadas no pedido.
- Se criar novos textos legais ou de oferta, indicar que um **revisor humano** deve validar antes de publicar.
