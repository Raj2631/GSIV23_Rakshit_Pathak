/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_MOVIEDB_API: string;
  readonly VITE_MOVIEDB_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
