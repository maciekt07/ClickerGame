if(!self.define){let e,n={};const i=(i,r)=>(i=new URL(i+".js",r).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let d={};const c=e=>i(e,o),a={module:{uri:o},exports:d,require:c};n[o]=Promise.all(r.map((e=>a[e]||c(e)))).then((e=>(s(...e),d)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/buy-0d8034f8.mp3",revision:null},{url:"assets/honey-jar-ac6e37c8.png",revision:null},{url:"assets/index-5330535f.css",revision:null},{url:"assets/index-882d7ac4.js",revision:null},{url:"assets/workbox-window.prod.es5-dc90f814.js",revision:null},{url:"honey-jar.png",revision:"d86f3d56d733ba27c32e234c55b9a3f0"},{url:"honey-jar96.png",revision:"dec458cfad822aea6b84be9f3a10d741"},{url:"index.html",revision:"32a4c77dc247ee0efdc2bb9076ae4ab0"},{url:"info.png",revision:"5654c8696d1b9e3a87dc99010fc381b4"},{url:"logo192.png",revision:"99dc5b8ac7992a36ac9ade699785cd1d"},{url:"logo256.png",revision:"13cfa234c6295ebeca412dee2fbb4f1a"},{url:"logo384.png",revision:"b6b7541d2a97aecf0dbbfe9ec3ca98df"},{url:"logo512.png",revision:"cde668699a7a72e44249d9026e4c0b58"},{url:"manifest.webmanifest",revision:"d15871c5db096f51c362ddfa6b21f22a"},{url:"settings.png",revision:"5c0b07e28d3af94e064f2734083bebe0"},{url:"logo192.png",revision:"99dc5b8ac7992a36ac9ade699785cd1d"},{url:"honey-jar.png",revision:"d86f3d56d733ba27c32e234c55b9a3f0"},{url:"honey-jar96.png",revision:"dec458cfad822aea6b84be9f3a10d741"},{url:"info.png",revision:"5654c8696d1b9e3a87dc99010fc381b4"},{url:"logo256.png",revision:"13cfa234c6295ebeca412dee2fbb4f1a"},{url:"logo384.png",revision:"b6b7541d2a97aecf0dbbfe9ec3ca98df"},{url:"logo512.png",revision:"cde668699a7a72e44249d9026e4c0b58"},{url:"settings.png",revision:"5c0b07e28d3af94e064f2734083bebe0"},{url:"manifest.webmanifest",revision:"d15871c5db096f51c362ddfa6b21f22a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
