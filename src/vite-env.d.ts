/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL do checkout (ex.: Hotmart). Se vazio, CTAs usam "#". */
  readonly VITE_CHECKOUT_URL?: string;
  /** E-mail exibido na Política de Privacidade (LGPD / contato). */
  readonly VITE_SITE_CONTACT_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
