/**
 * Configuração central para links e textos reutilizados em produção.
 * Defina VITE_CHECKOUT_URL no .env (ver .env.example).
 */
export const productName = "Protocolo Claude Jurídico";
export const mechanismName = "Protocolo Jurisprudência Inteligente";
export const siteName = productName;

export const siteDescription =
  "Treinamento prático para advogados usarem Claude com briefing estruturado, validação de fontes e revisão humana.";

/** Texto exibido nos documentos legais (última revisão editorial). */
export const legalLastUpdatedLabel = '11 de maio de 2026';

/** Título padrão da aba (landing). */
export const defaultDocumentTitle = productName;

/**
 * E-mail institucional para contato / LGPD (opcional).
 * Defina `VITE_SITE_CONTACT_EMAIL` no `.env`.
 */
export function getSiteContactEmail(): string | undefined {
  const raw = import.meta.env.VITE_SITE_CONTACT_EMAIL?.trim();
  return raw && raw.length > 0 ? raw : undefined;
}

export function getCheckoutUrl(): string {
  const url = import.meta.env.VITE_CHECKOUT_URL?.trim();
  return url && url.length > 0 ? url : "#";
}
