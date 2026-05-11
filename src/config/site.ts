/**
 * Configuração central para links e textos reutilizados em produção.
 * Defina VITE_CHECKOUT_URL no .env (ver .env.example).
 */
export const productName = "Protocolo Claude Jurídico";
export const mechanismName = "Protocolo Jurisprudência Inteligente";
export const siteName = productName;

export const siteDescription =
  "Treinamento prático para advogados usarem Claude com briefing estruturado, validação de fontes e revisão humana.";

export function getCheckoutUrl(): string {
  const url = import.meta.env.VITE_CHECKOUT_URL?.trim();
  return url && url.length > 0 ? url : "#";
}
