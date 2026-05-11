# Documentação — Protocolo Claude Jurídico (LP-PJI)

Índice da base de conhecimento do projeto. Mantenha os arquivos curtos e atualizados quando mudar copy, layout ou stack.

| Documento | Conteúdo |
|-----------|----------|
| [projeto-spec.md](./projeto-spec.md) | Estrutura do repositório, escopo, roadmap leve, histórico de decisões |
| [copy-e-secoes.md](./copy-e-secoes.md) | Regras de copy, compliance jurídico-comercial e checklist de revisão |
| [ia-assistentes.md](./ia-assistentes.md) | Instruções para Claude, ChatGPT e ferramentas similares trabalharem neste repo |
| [design/design-system.md](./design/design-system.md) | Identidade visual, tokens, componentes CSS e padrões de UI |
| [design/hero-layout-e-fundos-escuros.md](./design/hero-layout-e-fundos-escuros.md) | Hero (viewport, flex, breakpoints), fundos escuros, cards escuros em secção clara e checklist de coerência |
| [logs/README.md](./logs/README.md) | Como registrar erros, causas, soluções e prevenção |
| [atualizacoes-proximas/README.md](./atualizacoes-proximas/README.md) | Pacote-base recebido com diretrizes das próximas atualizações |

## Governança de consistência visual

- Base de layout e espaçamento: `.layout-container`, `.section-base`, `.section-tall`, `.section-xl` (ritmo vertical em `design/design-system.md`). Hero: **`h-dvh`** no `<header>`, flex centro–centro no miolo — ver `design/hero-layout-e-fundos-escuros.md`.
- Base de cartões: `.card-premium`, `.card-premium-lg`, `.card-premium-flush`, `.card-dark`, `.card-dark-flush`.
- Base tipográfica de microcopy: `.label-micro`, `.label-nano`, `.label-ultra`, `.technical-label`, `.metadata-text`.
- Escala global da landing: `html { font-size: 80%; }` com exceções em `.scale-exempt` (miolo da hero no `layout-container` e footer).
- Antes de merge visual, revisar `docs/design/design-system.md` e checklist em `docs/copy-e-secoes.md`.

## Referências arquivadas

- [referencias/ai-studio-metadata.json](./referencias/ai-studio-metadata.json) — descritor original exportado do Google AI Studio (apenas histórico).
