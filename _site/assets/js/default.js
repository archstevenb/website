!function(t,e){"function"==typeof define&&define.amd?define([],e(t)):"object"==typeof exports?module.exports=e(t):t.astro=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(t){"use strict";var n,o={},e="querySelector"in document&&"addEventListener"in t&&"classList"in document.createElement("_"),i={selector:"[data-nav-toggle]",toggleActiveClass:"active",navActiveClass:"active",initClass:"js-astro",callback:function(){}},s=function(t){var n={},o=!1,e=0,a=arguments.length;"[object Boolean]"===Object.prototype.toString.call(t)&&(o=t,e++);for(var i=function(t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o&&"[object Object]"===Object.prototype.toString.call(t[e])?n[e]=buoy.extend(!0,n[e],t[e]):n[e]=t[e])};e<a;e++){i(arguments[e])}return n},a=function(t,e){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;0<=--n&&e.item(n)!==this;);return-1<n});t&&t!==document;t=t.parentNode)if(t.matches(e))return t;return null};o.toggleNav=function(t,e,n){var o=s(o||i,n||{}),a=document.querySelector(e);t.classList.toggle(o.toggleActiveClass),a.classList.toggle(o.navActiveClass),o.callback(t,e)};var r=function(t){var e=a(t.target,n.selector);e&&("a"===e.tagName.toLowerCase()&&t.preventDefault(),o.toggleNav(e,e.getAttribute("data-nav-toggle"),n))};return o.destroy=function(){n&&(document.documentElement.classList.remove(n.initClass),document.removeEventListener("click",r,!1),n=null)},o.init=function(t){e&&(o.destroy(),n=s(i,t||{}),document.documentElement.classList.add(n.initClass),document.addEventListener("click",r,!1))},o}),function(t,e){var n=e(t,t.document);t.lazySizes=n,"object"==typeof module&&module.exports&&(module.exports=n)}(window,function(o,c){"use strict";if(c.getElementsByClassName){var s,u,d=c.documentElement,l=o.Date,a=o.HTMLPictureElement,i="addEventListener",f="getAttribute",e=o[i],m=o.setTimeout,n=o.requestAnimationFrame||m,v=o.requestIdleCallback,g=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],y={},p=Array.prototype.forEach,h=function(t,e){return y[e]||(y[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),y[e].test(t[f]("class")||"")&&y[e]},z=function(t,e){h(t,e)||t.setAttribute("class",(t[f]("class")||"").trim()+" "+e)},b=function(t,e){var n;(n=h(t,e))&&t.setAttribute("class",(t[f]("class")||"").replace(n," "))},C=function(e,n,t){var o=t?i:"removeEventListener";t&&C(e,n),r.forEach(function(t){e[o](t,n)})},E=function(t,e,n,o,a){var i=c.createEvent("CustomEvent");return n||(n={}),n.instance=s,i.initCustomEvent(e,!o,!a,n),t.dispatchEvent(i),i},A=function(t,e){var n;!a&&(n=o.picturefill||u.pf)?n({reevaluate:!0,elements:[t]}):e&&e.src&&(t.src=e.src)},w=function(t,e){return(getComputedStyle(t,null)||{})[e]},N=function(t,e,n){for(n=n||t.offsetWidth;n<u.minSize&&e&&!t._lazysizesWidth;)n=e.offsetWidth,e=e.parentNode;return n},L=(zt=[],bt=ht=[],Ct=function(){var t=bt;for(bt=ht.length?zt:ht,yt=!0,pt=!1;t.length;)t.shift()();yt=!1},(Et=function(t,e){yt&&!e?t.apply(this,arguments):(bt.push(t),pt||(pt=!0,(c.hidden?m:n)(Ct)))})._lsFlush=Ct,Et),S=function(n,t){return t?function(){L(n)}:function(){var t=this,e=arguments;L(function(){n.apply(t,e)})}},t=function(t){var n,o=0,a=125,e=666,i=e,s=function(){n=!1,o=l.now(),t()},r=v?function(){v(s,{timeout:i}),i!==e&&(i=e)}:S(function(){m(s)},!0);return function(t){var e;(t=!0===t)&&(i=44),n||(n=!0,(e=a-(l.now()-o))<0&&(e=0),t||e<9&&v?r():m(r,e))}},M=function(t){var e,n,o=99,a=function(){e=null,t()},i=function(){var t=l.now()-n;t<o?m(i,o-t):(v||a)(a)};return function(){n=l.now(),e||(e=m(i,o))}},k=(X=/^img$/i,Y=/^iframe$/i,Z="onscroll"in o&&!/glebot/.test(navigator.userAgent),nt=et=tt=0,ot=-1,at=function(t){nt--,t&&t.target&&C(t.target,at),(!t||nt<0||!t.target)&&(nt=0)},it=function(t,e){var n,o=t,a="hidden"==w(c.body,"visibility")||"hidden"!=w(t,"visibility");for(I-=e,K+=e,G-=e,J+=e;a&&(o=o.offsetParent)&&o!=c.body&&o!=d;)(a=0<(w(o,"opacity")||1))&&"visible"!=w(o,"overflow")&&(n=o.getBoundingClientRect(),a=J>n.left&&G<n.right&&K>n.top-1&&I<n.bottom+1);return a},rt=t(st=function(){var t,e,n,o,a,i,s,r,l;if((P=u.loadMode)&&nt<8&&(t=q.length)){e=0,ot++,null==U&&("expand"in u||(u.expand=500<d.clientHeight&&500<d.clientWidth?500:370),Q=u.expand,U=Q*u.expFactor),et<U&&nt<1&&2<ot&&2<P&&!c.hidden?(et=U,ot=0):et=1<P&&1<ot&&nt<6?Q:tt;for(;e<t;e++)if(q[e]&&!q[e]._lazyRace)if(Z)if((r=q[e][f]("data-expand"))&&(i=1*r)||(i=et),l!==i&&(H=innerWidth+i*V,$=innerHeight+i,s=-1*i,l=i),n=q[e].getBoundingClientRect(),(K=n.bottom)>=s&&(I=n.top)<=$&&(J=n.right)>=s*V&&(G=n.left)<=H&&(K||J||G||I)&&(u.loadHidden||"hidden"!=w(q[e],"visibility"))&&(R&&nt<3&&!r&&(P<3||ot<4)||it(q[e],i))){if(vt(q[e]),a=!0,9<nt)break}else!a&&R&&!o&&nt<4&&ot<4&&2<P&&(F[0]||u.preloadAfterLoad)&&(F[0]||!r&&(K||J||G||I||"auto"!=q[e][f](u.sizesAttr)))&&(o=F[0]||q[e]);else vt(q[e]);o&&!a&&vt(o)}}),ct=S(lt=function(t){z(t.target,u.loadedClass),b(t.target,u.loadingClass),C(t.target,dt)}),dt=function(t){ct({target:t.target})},ut=function(t,e){try{t.contentWindow.location.replace(e)}catch(q){t.src=e}},ft=function(t){var e,n=t[f](u.srcsetAttr);(e=u.customMedia[t[f]("data-media")||t[f]("media")])&&t.setAttribute("media",e),n&&t.setAttribute("srcset",n)},mt=S(function(t,e,n,o,a){var i,s,r,l,c,d;(c=E(t,"lazybeforeunveil",e)).defaultPrevented||(o&&(n?z(t,u.autosizesClass):t.setAttribute("sizes",o)),s=t[f](u.srcsetAttr),i=t[f](u.srcAttr),a&&(l=(r=t.parentNode)&&g.test(r.nodeName||"")),d=e.firesLoad||"src"in t&&(s||i||l),c={target:t},d&&(C(t,at,!0),clearTimeout(D),D=m(at,2500),z(t,u.loadingClass),C(t,dt,!0)),l&&p.call(r.getElementsByTagName("source"),ft),s?t.setAttribute("srcset",s):i&&!l&&(Y.test(t.nodeName)?ut(t,i):t.src=i),a&&(s||l)&&A(t,{src:i})),t._lazyRace&&delete t._lazyRace,b(t,u.lazyClass),L(function(){(!d||t.complete&&1<t.naturalWidth)&&(d?at(c):nt--,lt(c))},!0)}),gt=function(){if(!R){if(l.now()-T<999)return void m(gt,999);var t=M(function(){u.loadMode=3,rt()});R=!0,u.loadMode=3,rt(),e("scroll",function(){3==u.loadMode&&(u.loadMode=2),t()},!0)}},{_:function(){T=l.now(),q=c.getElementsByClassName(u.lazyClass),F=c.getElementsByClassName(u.lazyClass+" "+u.preloadClass),V=u.hFac,e("scroll",rt,!0),e("resize",rt,!0),o.MutationObserver?new MutationObserver(rt).observe(d,{childList:!0,subtree:!0,attributes:!0}):(d[i]("DOMNodeInserted",rt,!0),d[i]("DOMAttrModified",rt,!0),setInterval(rt,999)),e("hashchange",rt,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(t){c[i](t,rt,!0)}),/d$|^c/.test(c.readyState)?gt():(e("load",gt),c[i]("DOMContentLoaded",rt),m(gt,2e4)),q.length?(st(),L._lsFlush()):rt()},checkElems:rt,unveil:vt=function(t){var e,n=X.test(t.nodeName),o=n&&(t[f](u.sizesAttr)||t[f]("sizes")),a="auto"==o;(!a&&R||!n||!t.src&&!t.srcset||t.complete||h(t,u.errorClass))&&(e=E(t,"lazyunveilread").detail,a&&_.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,nt++,mt(t,e,a,o,n))}}),_=(O=S(function(t,e,n,o){var a,i,s;if(t._lazysizesWidth=o,o+="px",t.setAttribute("sizes",o),g.test(e.nodeName||""))for(i=0,s=(a=e.getElementsByTagName("source")).length;i<s;i++)a[i].setAttribute("sizes",o);n.detail.dataAttr||A(t,n.detail)}),j=function(t,e,n){var o,a=t.parentNode;a&&(n=N(t,a,n),(o=E(t,"lazybeforesizes",{width:n,dataAttr:!!e})).defaultPrevented||(n=o.detail.width)&&n!==t._lazysizesWidth&&O(t,a,o,n))},{_:function(){W=c.getElementsByClassName(u.autosizesClass),e("resize",B)},checkElems:B=M(function(){var t,e=W.length;if(e)for(t=0;t<e;t++)j(W[t])}),updateElem:j}),x=function(){x.i||(x.i=!0,_._(),k._())};return function(){var t,e={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0};for(t in u=o.lazySizesConfig||o.lazysizesConfig||{},e)t in u||(u[t]=e[t]);o.lazySizesConfig=u,m(function(){u.init&&x()})}(),s={cfg:u,autoSizer:_,loader:k,init:x,uP:A,aC:z,rC:b,hC:h,fire:E,gW:N,rAF:L}}var W,O,j,B,q,F,R,D,P,T,H,$,I,G,J,K,Q,U,V,X,Y,Z,tt,et,nt,ot,at,it,st,rt,lt,ct,dt,ut,ft,mt,vt,gt,yt,pt,ht,zt,bt,Ct,Et}),astro.init();var selectEvents="ontouchstart"in document==1?"touchstart":"click",dropdown=document.querySelector("#nav > ul");dropdown.addEventListener(selectEvents,function(){dropdown.classList.remove("active"),document.querySelector("#nav > a").classList.remove("active")});var stickyNav=function(t,e,n){t=t,e=e,n=n;var o=0,a=function(){document.documentElement.scrollTop>e?0===o&&(t.classList.add(n),o=1):(t.classList.remove(n),o=0)};return stickyNav.init=function(){a(),window.addEventListener("scroll",a,!1)},stickyNav.init()},stickyNavigation=stickyNav(document.querySelector("#nav"),28,"small");