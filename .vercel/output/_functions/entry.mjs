import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BgDfEy0J.mjs';
import { manifest } from './manifest_CxPiO20N.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/contact-form-handler.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/rss.xml.astro.mjs');
const _page5 = () => import('./pages/_---blog_/_category_/_---page_.astro.mjs');
const _page6 = () => import('./pages/_---blog_/_tag_/_---page_.astro.mjs');
const _page7 = () => import('./pages/_---blog_/_---page_.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const _page9 = () => import('./pages/_---blog_.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.12.2_@types+node@24_6a6417aa2813425ff6dc0bf3dcb3be22/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/contact-form-handler.ts", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/rss.xml.ts", _page4],
    ["src/pages/[...blog]/[category]/[...page].astro", _page5],
    ["src/pages/[...blog]/[tag]/[...page].astro", _page6],
    ["src/pages/[...blog]/[...page].astro", _page7],
    ["src/pages/index.astro", _page8],
    ["src/pages/[...blog]/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "79ff3bde-792a-4dd2-97b4-0ea8aabe83e0",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
