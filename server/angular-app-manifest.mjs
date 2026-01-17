
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/resume"
  },
  {
    "renderMode": 2,
    "route": "/project"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7594, hash: '7b6db7f896fb578a15d6146b45795ab61c0d2548610c527f4bdcb19b5b4b9046', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5650, hash: 'c1624392ff2c5ec76699facc76e09f7fb147afe193d20d0090b78081e1fec794', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21685, hash: 'b48ff689e548472f0c6060c06f6246971d03efc8a35ceae363bfc4e1f055ff1d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 21218, hash: '729afc455b53c34023877ed08a8146169dc092e2c6f5c5b1ee4ece4a60e0f6ea', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'project/index.html': {size: 19724, hash: '1fdf9197767b20ddb3e17e1417c8d82d6833a557814e7e1116b0e6613fc4b72a', text: () => import('./assets-chunks/project_index_html.mjs').then(m => m.default)},
    'styles-DDXGT2SN.css': {size: 22548, hash: '2gy1qdGKT4U', text: () => import('./assets-chunks/styles-DDXGT2SN_css.mjs').then(m => m.default)}
  },
};
