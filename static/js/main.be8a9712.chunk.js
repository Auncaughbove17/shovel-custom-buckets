(this.webpackJsonpshovel=this.webpackJsonpshovel||[]).push([[0],{105:function(e,t,c){},106:function(e,t,c){},115:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(45),s=c.n(a),i=(c(105),c(106),c(145)),o=c(7),j=c(132),b=c(3);var u=function(e){return Object(b.jsx)(j.a,Object(o.a)(Object(o.a)({isExternal:!0,color:"blue.600"},e),{},{children:e.children}))},l=c(133),h=c(134),d=c(40);var O=function(e){return Object(b.jsx)("header",Object(o.a)(Object(o.a)({},e),{},{children:Object(b.jsxs)(l.a,{pt:"1rem",pb:"1rem",pl:"20vw",pr:"20vw",bg:"gray.100",children:[Object(b.jsx)(h.a,{size:"xl",children:Object(b.jsx)(d.b,{to:"/",children:"Shovel"})}),Object(b.jsxs)(h.a,{size:"sm",children:["Search apps installable via ",Object(b.jsx)(u,{href:"https://scoop.sh",children:"scoop"})]}),e.children]})}))},f=c(90);var p=function(e){return Object(b.jsx)("footer",Object(o.a)(Object(o.a)({},e),{},{children:Object(b.jsxs)(l.a,{pt:"2rem",pb:"2rem",pl:"20vw",pr:"20vw",bg:"white",children:["Shovel v",f.a," is"," ",Object(b.jsx)(u,{href:"https://github.com/mertd/shovel",children:"open source"}),". Your use of this app is governed by the"," ",Object(b.jsx)(u,{href:"https://github.com/mertd/shovel/blob/master/LICENCE",children:"MIT Licence"}),".",e.children]})}))},m=c(5),x=c(75),v=c(149),g=c(147),w=c(142),k=c(148),y=c(76),S=c(140),C=c(141),E=c(47),R=c.n(E),z=c(65),L=c(144),T=c(135),I=c(146),M=c(136);function q(e){var t=Object(L.a)();function c(){return(c=Object(z.a)(R.a.mark((function c(){return R.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,navigator.clipboard.writeText(e.code);case 3:t({status:"success",title:"Copied",description:"You can paste the command into your terminal now \ud83d\udccb",duration:3e3}),c.next=9;break;case 6:c.prev=6,c.t0=c.catch(0),t({status:"error",title:"Error",description:"Copying to clipboard is not supported in your browser \ud83d\udcf5",duration:3e3});case 9:case"end":return c.stop()}}),c,null,[[0,6]])})))).apply(this,arguments)}return Object(b.jsxs)("div",Object(o.a)(Object(o.a)({},e),{},{children:[Object(b.jsx)(T.a,{children:e.code})," ",Object(b.jsx)(I.a,{size:"xs",variant:"outline",onClick:function(){return c.apply(this,arguments)},"aria-label":"copy",children:Object(b.jsx)(y.a,{as:M.a})})]}))}var J=c(137),N=c(138),U=c(139);var W=function(e){var t,c=e.manifest.manifestURL.replace(/^(https:\/\/github\.com\/.*?\/.*?)\/.*$/gm,"$1");return Object(b.jsxs)(k.b,Object(o.a)(Object(o.a)({borderWidth:"1px",bg:"white",shadow:"md",rounded:"md",p:"1em"},e),{},{children:[Object(b.jsxs)(h.a,{size:"sm",children:[Object(b.jsx)(d.b,{to:"/bucket/".concat(e.manifest.bucket,"/manifest/").concat(e.manifest.name),children:e.manifest.name})," ",Object(b.jsx)(u,{href:e.manifest.homepage,title:"Homepage",children:Object(b.jsx)(y.a,{as:J.a})})," ",Object(b.jsx)(u,{href:e.manifest.manifestURL,title:"Manifest",children:Object(b.jsx)(y.a,{as:N.a})})," ",(null===(t=e.manifest.checkver)||void 0===t?void 0:t.github)&&Object(b.jsx)(u,{href:e.manifest.checkver.github,title:"Source Code",children:Object(b.jsx)(y.a,{as:U.a})})]}),Object(b.jsx)(S.a,{}),Object(b.jsxs)("div",{children:[Object(b.jsx)(C.a,{children:e.manifest.version})," ",Object(b.jsx)(C.a,{children:e.manifest.bucket})]}),Object(b.jsx)(w.a,{children:e.manifest.description}),Object(b.jsx)("p",{hidden:"main"===e.manifest.bucket,children:Object(b.jsx)(q,{code:"scoop bucket add ".concat(e.manifest.bucket,' "').concat(c,'"')})}),Object(b.jsx)("p",{children:Object(b.jsx)(q,{code:"scoop install ".concat(e.manifest.bucket,"/").concat(e.manifest.name)})}),e.children]}))},$=c(14),B=Object(n.createContext)([]);B.Consumer;function P(e){var t=Object(n.useState)([]),c=Object(m.a)(t,2),r=c[0],a=c[1],s=Object(L.a)();function i(){return(i=Object(z.a)(R.a.mark((function e(){var t,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://auncaughbove17.github.io/shovel-data/manifests.json");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,a(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),s({status:"error",title:"Error",description:"Couldn't fetch or parse manifests \u26d4",duration:null});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),Object(b.jsx)(B.Provider,Object(o.a)(Object(o.a)({value:r},e),{},{children:e.children}))}var Y=B,A={threshold:.2,keys:["name","description"]};var F=function(e){var t=new URLSearchParams(Object($.h)().search),c=Object($.g)(),r=Object(n.useContext)(Y),a=Object(n.useState)(t.get("q")||""),s=Object(m.a)(a,2),i=s[0],j=s[1],u=Object(n.useState)(null),h=Object(m.a)(u,2),d=h[0],O=h[1],f=Object(n.useState)(new x.a(r,A)),p=Object(m.a)(f,2),y=p[0],S=p[1],C=Object(n.useRef)(null),E=Object(n.useRef)([0,0]),R=Object(n.useRef)(null);function z(){E.current[0]=performance.now();var e=y.search(i);E.current[1]=performance.now(),O(e)}if(Object(n.useEffect)((function(){var e;r.length>0&&(S(new x.a(r,A)),null===R||void 0===R||null===(e=R.current)||void 0===e||e.focus())}),[r]),Object(n.useEffect)((function(){i&&z()}),[y]),Object(n.useEffect)((function(){if(i!==t.get("q")){if(!i)return O(null);c.replace("/search?q="+i),C.current&&clearTimeout(C.current);var e=Math.max(2e3/i.length,500);C.current=setTimeout(z,e)}}),[i]),!r.length)return Object(b.jsx)(v.a,{});var L=(E.current[1]-E.current[0]).toFixed(0);return Object(b.jsx)("div",Object(o.a)(Object(o.a)({},e),{},{children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(g.a,{value:i,onChange:function(e){return j(e.currentTarget.value)},placeholder:"Search",boxSizing:"border-box",background:"white",ref:R}),d&&Object(b.jsxs)(w.a,{as:"sub",children:["Searched ",Object(b.jsx)("b",{children:r.length})," manifests in"," ",Object(b.jsx)("b",{children:L}),"ms and found ",Object(b.jsx)("b",{children:d.length})," result",1===d.length||"s","."]}),Object(b.jsx)(k.a,{spacing:"1rem",pt:"1rem",pb:"1rem",children:null===d||void 0===d?void 0:d.map((function(e){return Object(b.jsx)(W,{manifest:e.item},e.refIndex)}))}),e.children]})}))};var H=function(e){return Object(b.jsx)("main",Object(o.a)(Object(o.a)({},e),{},{children:Object(b.jsxs)(l.a,{pt:"1rem",pb:"1rem",pl:"20vw",pr:"20vw",bg:"gray.100",children:[Object(b.jsx)(F,{}),e.children]})}))};function D(e){var t=Object(n.useContext)(Y).find((function(t){return t.name===e.name&&t.bucket===e.bucket}));return t?Object(b.jsx)(W,Object(o.a)({manifest:t},e)):null}var G=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(i.a,{children:Object(b.jsxs)(P,{children:[Object(b.jsxs)(d.a,{children:[Object(b.jsx)(O,{}),Object(b.jsxs)($.d,{children:[Object(b.jsx)($.b,{path:"/search",children:Object(b.jsx)(H,{})}),Object(b.jsx)($.b,{path:"/bucket/:bucket/manifest/:name",render:function(e){return Object(b.jsx)(D,{name:e.match.params.name,bucket:e.match.params.bucket})}}),Object(b.jsx)($.b,{path:"*",children:Object(b.jsx)($.a,{to:"/search"})})]})]}),Object(b.jsx)(p,{})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(G,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e){e.exports=JSON.parse('{"a":"0.10.1"}')}},[[115,1,2]]]);
//# sourceMappingURL=main.be8a9712.chunk.js.map