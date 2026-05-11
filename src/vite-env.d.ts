/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL do checkout (ex.: Hotmart). Se vazio, CTAs usam "#". */
  readonly VITE_CHECKOUT_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
