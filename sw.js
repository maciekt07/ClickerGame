if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let d={};const a=e=>n(e,o),c={module:{uri:o},exports:d,require:a};s[o]=Promise.all(r.map((e=>c[e]||a(e)))).then((e=>(i(...e),d)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/buy-0d8034f8.mp3",revision:null},{url:"assets/HappyBee-f44f8be5.png",revision:null},{url:"assets/honey-jar-ac6e37c8.png",revision:null},{url:"assets/index-55fec1ff.css",revision:null},{url:"assets/index-e84e6673.js",revision:null},{url:"assets/poland-flag-icon-3edbd64e.svg",revision:null},{url:"assets/SadBee-b4280f81.png",revision:null},{url:"assets/toast-dc5b35e7.mp3",revision:null},{url:"assets/workbox-window.prod.es5-dc90f814.js",revision:null},{url:"honey-jar.png",revision:"d86f3d56d733ba27c32e234c55b9a3f0"},{url:"honey-jar96.png",revision:"dec458cfad822aea6b84be9f3a10d741"},{url:"index.html",revision:"3b4b4f4db3fc2751a6c72c8d72d1e165"},{url:"info.png",revision:"5654c8696d1b9e3a87dc99010fc381b4"},{url:"logo192.png",revision:"99dc5b8ac7992a36ac9ade699785cd1d"},{url:"logo256.png",revision:"13cfa234c6295ebeca412dee2fbb4f1a"},{url:"logo384.png",revision:"b6b7541d2a97aecf0dbbfe9ec3ca98df"},{url:"logo512.png",revision:"cde668699a7a72e44249d9026e4c0b58"},{url:"manifest.webmanifest",revision:"dbb3acee89a8ec7d674c26fd75f45e69"},{url:"screenshots/ss1.png",revision:"01ae98e92ecbe1d926082d96d3e706fe"},{url:"screenshots/ss2.png",revision:"41e27bfb8dbad3269a07e94912aa6978"},{url:"screenshots/ss3.png",revision:"736ecad526df059db8522d2580887e15"},{url:"screenshots/ss4.png",revision:"064317a4f14244e313cd602a1db9df3b"},{url:"settings.png",revision:"5c0b07e28d3af94e064f2734083bebe0"},{url:"logo192.png",revision:"99dc5b8ac7992a36ac9ade699785cd1d"},{url:"honey-jar.png",revision:"d86f3d56d733ba27c32e234c55b9a3f0"},{url:"honey-jar96.png",revision:"dec458cfad822aea6b84be9f3a10d741"},{url:"info.png",revision:"5654c8696d1b9e3a87dc99010fc381b4"},{url:"logo256.png",revision:"13cfa234c6295ebeca412dee2fbb4f1a"},{url:"logo384.png",revision:"b6b7541d2a97aecf0dbbfe9ec3ca98df"},{url:"logo512.png",revision:"cde668699a7a72e44249d9026e4c0b58"},{url:"settings.png",revision:"5c0b07e28d3af94e064f2734083bebe0"},{url:"screenshots/ss1.png",revision:"01ae98e92ecbe1d926082d96d3e706fe"},{url:"screenshots/ss2.png",revision:"41e27bfb8dbad3269a07e94912aa6978"},{url:"screenshots/ss3.png",revision:"736ecad526df059db8522d2580887e15"},{url:"screenshots/ss4.png",revision:"064317a4f14244e313cd602a1db9df3b"},{url:"manifest.webmanifest",revision:"dbb3acee89a8ec7d674c26fd75f45e69"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
