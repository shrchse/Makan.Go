if(!self.define){let e,o={};const i=(i,s)=>(i=new URL(i+".js",s).href,o[i]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=o,document.head.appendChild(e)}else e=i,importScripts(i),o()})).then((()=>{let e=o[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(o[n])return;let a={};const f=e=>i(e,n),c={module:{uri:n},exports:a,require:f};o[n]=Promise.all(s.map((e=>c[e]||f(e)))).then((e=>(r(...e),a)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.bundle.js",revision:"c3afb08c1a3743b1ee34205b6033830a"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"b8a975bd2b90263bf5be1746c757b11d"},{url:"bd6b63650298f334a08b.jpg",revision:null},{url:"images/heros/Logo.png",revision:"b5ed073ecf9cd15a31e4265c45171e16"},{url:"images/heros/Star.png",revision:"d88db0fbb5a55055311cfaefc74d9e18"},{url:"images/heros/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"images/heros/icons/Logo-128x128.png",revision:"0da69f441042b35f1db26b1bef4b9fe4"},{url:"images/heros/icons/Logo-144x144.png",revision:"57afa85676fa8fa35edf489941741457"},{url:"images/heros/icons/Logo-152x152.png",revision:"e5f7c2d83c0dcb15e6e50c07aca712ab"},{url:"images/heros/icons/Logo-192x192.png",revision:"8712d1e3d6a46339e5f6757041b13eb4"},{url:"images/heros/icons/Logo-384x384.png",revision:"e3ca03136af4da84028625f8101e8e09"},{url:"images/heros/icons/Logo-512x512.png",revision:"f943cb1ffade7ccb1a00abfbc451f768"},{url:"images/heros/icons/Logo-72x72.png",revision:"3793b4281f32d292563298e2a7b9e0ee"},{url:"images/heros/icons/Logo-96x96.png",revision:"eab9d5972eb3060ab8b499fb2586d6e8"},{url:"images/heros/nav-drawer.jpg",revision:"dd046f5083e6b9796eda387faf0147e0"},{url:"index.html",revision:"c9f2c74d9b810d274ac79f3aa7a1e3bb"}],{})}));
//# sourceMappingURL=sw.bundle.js.map
