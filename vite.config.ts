import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// Base path:
//  - Cloudflare Pages (CF_PAGES=1) serves from the domain root.
//  - GitHub Pages serves from /<repo-name>/. GitHub Actions exposes
//    GITHUB_REPOSITORY="owner/repo"; locally we fall back to the repo folder name.
//  - Override with VITE_BASE=/whatever/ when needed.
const repoName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "Bitcoin_Lottery";
const base =
  process.env.VITE_BASE ?? (process.env.CF_PAGES ? "/" : `/${repoName}/`);

// Content-Security-Policy injected into every HTML entry at build time only
// (the dev server needs inline scripts for HMR / React Fast Refresh).
// The app handles private keys, so scripts may only come from this origin,
// and the only network destination allowed is mempool.space.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'wasm-unsafe-eval'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data:",
  "connect-src 'self' https://mempool.space",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
  "upgrade-insecure-requests",
].join("; ");

const cspPlugin = (): Plugin => ({
  name: "inject-csp-meta",
  apply: "build",
  transformIndexHtml(html) {
    return html.replace(
      /<meta charset="UTF-8" \/>/i,
      `<meta charset="UTF-8" />\n  <meta http-equiv="Content-Security-Policy" content="${CSP}" />`
    );
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "./index.html",
        education: "./education.html",
        educacao: "./education-pt.html",
        educacion: "./education-es.html",
        txbuilder: "./tx-builder.html",
        keyanatomy: "./key-anatomy.html",
      },
    },
  },
  plugins: [
    wasm(),
    topLevelAwait(),
    nodePolyfills({ globals: { Buffer: true } }),
    react(),
    cspPlugin(),
  ],
  base,
});
