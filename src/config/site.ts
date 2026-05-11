/**
 * Configuração central para links e textos reutilizados em produção.
 * Defina VITE_CHECKOUT_URL no .env (ver .env.example).
 */
export const siteName = "Protocolo Jurisprudência Inteligente";

export const siteDescription =
  "Protocolo IJ — método de uso de IA na advocacia com auditoria técnica e redução de risco (Claude).";

export function getCheckoutUrl(): string {
  const url = import.meta.env.VITE_CHECKOUT_URL?.trim();
  return url && url.length > 0 ? url : "#";
}
