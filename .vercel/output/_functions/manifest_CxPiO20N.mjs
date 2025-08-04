import 'kleur/colors';
import { j as decodeKey } from './chunks/astro/server_YW1vLL88.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_-nC3l4w7.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Daily%20Usage/MEGASyncLocal/ProgrammingDB/Program%20DB/Personal%20Website/","cacheDir":"file:///D:/Daily%20Usage/MEGASyncLocal/ProgrammingDB/Program%20DB/Personal%20Website/node_modules/.astro/","outDir":"file:///D:/Daily%20Usage/MEGASyncLocal/ProgrammingDB/Program%20DB/Personal%20Website/dist/","srcDir":"file:///D:/Daily%20Usage/MEGASyncLocal/ProgrammingDB/Program%20DB/Personal%20Website/src/","publicDir":"file:///D:/Daily%20Usage/MEGASyncLocal/ProgrammingDB/Program%20DB/Personal%20Website/public/","buildClientDir":"file:///D:/Daily%20Usage/MEGASyncLocal/ProgrammingDB/Program%20DB/Personal%20Website/dist/client/","buildServerDir":"file:///D:/Daily%20Usage/MEGASyncLocal/ProgrammingDB/Program%20DB/Personal%20Website/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"never"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.12.2_@types+node@24_6a6417aa2813425ff6dc0bf3dcb3be22/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact-form-handler","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact-form-handler$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact-form-handler","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact-form-handler.ts","pathname":"/api/contact-form-handler","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}}],"site":"https://prantaneelpegu.com","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/utils/blog.ts",{"propagation":"in-tree","containsHead":false}],["D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/components/blog/RelatedPosts.astro",{"propagation":"in-tree","containsHead":false}],["D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/pages/[...blog]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...blog]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/components/widgets/BlogHighlightedPosts.astro",{"propagation":"in-tree","containsHead":false}],["D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/components/widgets/BlogLatestPosts.astro",{"propagation":"in-tree","containsHead":false}],["D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/pages/[...blog]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...blog]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/pages/[...blog]/[category]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...blog]/[category]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/pages/[...blog]/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...blog]/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/pages/404.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/contact-form-handler@_@ts":"pages/api/contact-form-handler.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/[...blog]/[category]/[...page]@_@astro":"pages/_---blog_/_category_/_---page_.astro.mjs","\u0000@astro-page:src/pages/[...blog]/[tag]/[...page]@_@astro":"pages/_---blog_/_tag_/_---page_.astro.mjs","\u0000@astro-page:src/pages/[...blog]/[...page]@_@astro":"pages/_---blog_/_---page_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.12.2_@types+node@24_6a6417aa2813425ff6dc0bf3dcb3be22/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/[...blog]/index@_@astro":"pages/_---blog_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/node_modules/.pnpm/astro@5.12.2_@types+node@24_6a6417aa2813425ff6dc0bf3dcb3be22/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CgdTRwgU.mjs","D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/assets/images/app-store.png":"chunks/app-store_D_c-wv32.mjs","D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/assets/images/default.png":"chunks/default_fxKFjSg2.mjs","D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/assets/images/google-play.png":"chunks/google-play_ChkQ6-BX.mjs","D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/assets/images/my-photo-long.jpg":"chunks/my-photo-long_-PU-BY_L.mjs","D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/assets/images/my-photo.jpg":"chunks/my-photo_DZofOF5L.mjs","D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/assets/images/nasa-space-gallery-homepage.png":"chunks/nasa-space-gallery-homepage_7nsqjvjk.mjs","D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/assets/images/nsg-showcase.png":"chunks/nsg-showcase_CNyyylaQ.mjs","D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/assets/images/portfolio-homepage.png":"chunks/portfolio-homepage_Dj6OjRPd.mjs","D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/assets/images/snackhub-about.png":"chunks/snackhub-about_CFfGe35B.mjs","D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/assets/images/snackhub-homepage.png":"chunks/snackhub-homepage_CrcqQw0N.mjs","D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/assets/images/snackhub-menu.png":"chunks/snackhub-menu_C8q6coeR.mjs","D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/assets/images/snackhub-recipe.png":"chunks/snackhub-recipe_wqJ3ifhI.mjs","D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/src/assets/images/snackhub-showcase.png":"chunks/snackhub-showcase_CD0-U38M.mjs","D:\\Daily Usage\\MEGASyncLocal\\ProgrammingDB\\Program DB\\Personal Website\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","D:\\Daily Usage\\MEGASyncLocal\\ProgrammingDB\\Program DB\\Personal Website\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BL7Bk8fx.mjs","\u0000@astrojs-manifest":"manifest_CxPiO20N.mjs","D:/Daily Usage/MEGASyncLocal/ProgrammingDB/Program DB/Personal Website/node_modules/.pnpm/astro@5.12.2_@types+node@24_6a6417aa2813425ff6dc0bf3dcb3be22/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.D98dxaWf.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/my-photo-long.CU7nBlTa.jpg","/_astro/nsg-showcase.CNc5DBfu.png","/_astro/snackhub-showcase.Cvh4BAsM.png","/_astro/apple-touch-icon.f_d6QCQM.png","/_astro/favicon.DTjnYw4l.svg","/_astro/portfolio-homepage.CMpZhLNP.png","/_astro/app-store.t3tG4Jz3.png","/_astro/google-play.ISTMcpLO.png","/_astro/default.CZ816Hke.png","/_astro/inter-cyrillic-ext-wght-normal.B2xhLi22.woff2","/_astro/inter-greek-wght-normal.CaVNZxsx.woff2","/_astro/inter-cyrillic-wght-normal.CMZtQduZ.woff2","/_astro/inter-greek-ext-wght-normal.CGAr0uHJ.woff2","/_astro/inter-vietnamese-wght-normal.CBcvBZtf.woff2","/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2","/_astro/inter-latin-ext-wght-normal.DO1Apj_S.woff2","/_astro/snackhub-recipe.Dfm0vFWm.png","/_astro/my-photo.BIo59cK4.jpg","/_astro/snackhub-homepage.7UrqyqFI.png","/_astro/snackhub-about.hsDiCSYU.png","/_astro/snackhub-menu.5D2-DA-O.png","/_astro/nasa-space-gallery-homepage.BGd0KTcD.png","/_astro/devicon.TqfHp33-.eot","/_astro/devicon.CirD-cQx.ttf","/_astro/devicon.BWlTeAUU.woff","/_astro/devicon.Dg8iWy0i.svg","/_astro/_page_.KrVc0xwe.css","/_astro/index.BWo0JKsu.css","/logo-180.png","/manifest.json","/robots.txt","/_headers","/decapcms/config.yml","/decapcms/index.html","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.D98dxaWf.js","/404.html","/contact/index.html","/rss.xml","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"QQfCRyNApCYhksxzYqWNgefPguIMcMnVk3syFnFeLbo="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
