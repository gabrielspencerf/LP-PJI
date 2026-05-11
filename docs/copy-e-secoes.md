# Copy e seções — Protocolo IJ

## Tom de voz

- **Profissional e assertivo** — falar para advogados; evitar gírias de marketing agressivo demais, mas manter urgência onde já existe (riscos, “era da advocacia”).
- **Técnico quando necessário** — termos como “auditoria”, “higidez”, “protocolo”, “camadas” reforçam seriedade; não simplificar ao ponto de soar genérico.
- **Transparência sobre IA** — deixar claro que a IA não substitui julgamento humano e que o método existe para **reduzir erro**, não prometer resultado processual.

## Hierarquia da mensagem

1. **Hero** — Promessa principal + subpromessa de segurança/higidez + CTA primário.
2. **Método** — Diferencia “ferramenta” de “protocolo”; citação forte (efeito memorável).
3. **Riscos** — Dor e medo legítimo (alucinação, dados, etc.) com severidade visual.
4. **Fluxo** — Como o método funciona em etapas (educação + autoridade).
5. **Prova social** — Depoimento único; números (“+850”) devem **refletir dados reais** se usados em contexto sério.
6. **FAQ** — Objeções e detalhes de produto (áreas do direito, garantia, vitalício).
7. **Oferta** — Preço, escassez (“vagas”), benefícios em bullets; selos de pagamento.

## Regras de revisão

- Antes de publicar alterações de copy: ler em voz alta o parágrafo e checar se **um advogado sensato** não achar promessa irresponsável ou garantia de resultado.
- Manter **consistência de nomenclatura**: “Protocolo IJ”, “Claude 3.5”, “MASTER Edition”, ano (*Edição 2026*) alinhados em toda a página.
- CTAs em maiúsculas seguem o padrão atual da LP; novos CTAs devem seguir o mesmo estilo ou justificar exceção neste doc.

## Checklist por seção (edição)

- [ ] Títulos (`h1` único no Hero; `h2` por bloco principal; `h3`/`h4` nos cards).
- [ ] Links internos (`#metodo`, `#oferta`, …) conferidos após renomear IDs.
- [ ] FAQ: primeira pergunta aberta por padrão (`useState<number | null>(0)`), com possibilidade de colapsar (`null`); textos não ultrapassarem parágrafos longos sem quebra visual.
- [ ] Oferta: preço e forma de pagamento batendo com a página real de checkout.

## Checklist visual rápido (consistência)

- [ ] Seção usa `.section-base` + variação (`.section-tall` ou `.section-xl`) quando aplicável.
- [ ] Bloco interno usa `.layout-container` (evitar container com padding manual divergente).
- [ ] Card usa variante oficial (`.card-premium`, `.card-premium-lg`, `.card-premium-flush`, `.card-dark`, `.card-dark-flush`).
- [ ] Labels pequenas priorizam `.label-micro` / `.label-nano` (evitar novo `text-[Npx]` sem necessidade).

## IDs HTML usados (não renomear sem atualizar navegação)

`heading-metodo`, `heading-riscos`, `heading-fluxo`, `heading-faq`, `heading-oferta` — usados ou úteis para acessibilidade e âncoras futuras.
