# Logs de incidentes

Use esta pasta para **documentar bugs ou falhas recorrentes** no desenvolvimento ou no deploy — não para changelog de features (isso fica em [projeto-spec.md](../projeto-spec.md)).

## Quando criar um registro

- Erro que levou mais de 15 minutos para diagnosticar.
- Falha em CI, build ou preview que possa voltar a ocorrer.
- Comportamento estranho de dependência ou ferramenta (Vite, Tailwind, TypeScript).
- Regressão de padrão visual (spacing, tipografia, cards ou container fora da base definida).

## Formato sugerido

Crie um arquivo `YYYY-MM-DD-assunto-curto.md` ou acrescente uma entrada na tabela abaixo (para incidentes menores).

### Template de incidente

```markdown
# [Título curto]

**Data:** AAAA-MM-DD  
**Ambiente:** local / CI / produção  
**Severidade:** baixa | média | alta

## Sintoma
O que o usuário ou o pipeline viu (mensagem de erro, tela em branco, etc.).

## Causa raiz
Explicação técnica direta.

## Solução
Passos ou commit que resolveram.

## Como evitar
- Checklist ou mudança de processo
- Teste ou verificação manual sugerida
```

## Registro consolidado (edição manual)

| Data | Assunto | Causa (resumo) | Solução (resumo) | Evitar |
|------|---------|----------------|------------------|--------|
| — | *Nenhum incidente registrado ainda* | | | |

> **Dica:** se o time preferir um único arquivo em vez de vários, use apenas a tabela acima e um arquivo `historico.md` com narrativa longa quando necessário.
