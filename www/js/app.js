(function(e){function t(t){for(var r,a,i=t[0],c=t[1],u=t[2],d=0,l=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(l.length)l.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={2:0},o={2:0},s=[];function i(e){return c.p+"js/"+({1:"Common"}[e]||e)+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={1:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({1:"Common"}[e]||e)+"."+{1:"e86f5b94",3:"31d6cfe0"}[e]+".css",o=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],d=u.getAttribute("data-href");if(d===r||d===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],p.parentNode.removeChild(p),n(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=d;s.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r=n("c973"),a=n.n(r),o=(n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("2b0e")),s=n("1f91"),i=n("42d2"),c=n("b178");o["a"].use(c["c"],{config:{},lang:s["a"],iconSet:i["a"]});var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("keep-alive",{attrs:{include:e.cachedPages}},[n("router-view")],1)],1)},d=[],l=o["a"].extend({name:"App",data(){return{cachedPages:new Array}},mounted(){const e=this.$store.getters["CachedStore/GET_CACHED_PAGES"];e&&(this.cachedPages=e)}}),p=l,f=n("2877"),m=Object(f["a"])(p,u,d,!1,null,null,null),h=m.exports,g=n("4bde"),b=n("2f62");const v={pk:"",userId:"",firstName:"",lastName:"",groupId:0,buildingPK:"",address:"",buildingName:""};var y=v;const P={SET_USER_SYNC(e,t){e.state.pk=t.pk,e.state.userId=t.userId,e.state.firstName=t.firstName,e.state.lastName=t.lastName,e.state.groupId=t.groupId,e.state.buildingPK=t.buildingPK,e.state.address=t.address,e.state.buildingName=t.buildingName}};var E=P;const S={GET_USER(e){return e}};var _=S;const N={SET_USER(e,t){e.pk=t.pk,e.userId=t.userId,e.firstName=t.firstName,e.lastName=t.lastName,e.groupId=t.groupId,e.buildingPK=t.buildingPK,e.address=t.address,e.buildingName=t.buildingName}};var w=N;const A={namespaced:!0,actions:E,getters:_,mutations:w,state:y};var O=A;const C={cachedPages:[]};var j=C;const k={ADD_APGE_SYNC(e,t){e.state.cachedPages.includes(t)||e.state.cachedPages.push(t)},REMOVE_APGE_SYNC(e,t){const n=e.state.cachedPages.indexOf(t);n>0&&e.state.cachedPages.splice(n,1)}};var x=k;const I={GET_CACHED_PAGES(e){return e.cachedPages}};var T=I;const D={ADD_APGE(e,t){e.cachedPages.includes(t)||e.cachedPages.push(t)},REMOVE_APGE(e,t){const n=e.cachedPages.indexOf(t);n>0&&e.cachedPages.splice(n,1)}};var L=D;const G={namespaced:!0,actions:x,getters:T,mutations:L,state:j};var V=G,K=Object(g["store"])((function({Vue:e}){e.use(b["a"]);const t=new b["a"].Store({modules:{UserStore:O,CachedStore:V},strict:!1});return t})),M=n("8c4f");const q=[{path:"",redirect:"/Login"},{path:"/Login",name:"Login",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"013f")),meta:{title:"Login"}},{path:"/About",name:"About",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"a1d1")),meta:{title:"About"}},{path:"/Dashboard",name:"Dashboard",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"ec95")),meta:{title:"Dashboard"}},{path:"/Scanner",name:"Scanner",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"ee55")),meta:{title:"Scanner"}},{path:"/ScanVisitor/:pk/:groupId",name:"ScanVisitor",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"d4cf")),meta:{title:"ScanVisitor"}}];q.push({path:"*",component:()=>n.e(3).then(n.bind(null,"e51e"))});var R=q,U=Object(g["route"])((function({Vue:e}){e.use(M["a"]);const t=new M["a"]({scrollBehavior:()=>({x:0,y:0}),routes:R,mode:"hash",base:""});return t.beforeEach((e,t,n)=>{const r="Home";document.title=e.meta.title?e.meta.title:r,n()}),t})),B=function(){return H.apply(this,arguments)};function H(){return H=a()((function*(){const e="function"===typeof K?yield K({Vue:o["a"]}):K,t="function"===typeof U?yield U({Vue:o["a"],store:e}):U;e.$router=t;const n={router:t,store:e,render:e=>e(h),el:"#q-app"};return{app:n,store:e,router:t}})),H.apply(this,arguments)}function $(){return Y.apply(this,arguments)}function Y(){return Y=a()((function*(){const{app:e,store:t,router:n}=yield B();document.addEventListener("deviceready",()=>{o["a"].prototype.$q.cordova=window.cordova,new o["a"](e)},!1)})),Y.apply(this,arguments)}$()},"31cd":function(e,t,n){}});