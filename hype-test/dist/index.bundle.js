/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@hyperlinks-js/hyperlinks/dist/index.bundle.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@hyperlinks-js/hyperlinks/dist/index.bundle.js ***!
  \*********************************************************************/
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(self,(function(){return(()=>{var e={162:(e,t,r)=>{e.exports=r(47)},173:e=>{self,e.exports=(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.r(t),e.d(t,{tooltipInit:()=>n});var o={mixed:"*{margin:0;padding:0;box-sizing:border-box}body{width:100%;min-height:100vh}:root{--bg:hsl(0, 0%, 92%);--border-clr:hsl(0, 0%, 85%);--bdr-rad:0.4em;--gap:0.8em;--font-size:1rem;--text-color:black;--special-text-color:grey;--shadow:0,0%,0%}@media (prefers-color-scheme:dark){:root{--bg:hsl(0, 0%, 22%);--border-clr:hsl(0, 0%, 30%);--bdr-rad:0.4em;--gap:0.8em;--font-size:1rem;--text-color:rgb(247, 247, 247);--special-text-color:grey;--shadow:0,0%,35%}.hyperlinks-container{box-shadow:0 .1em .4em hsla(var(--shadow),.4)}}.hyperlinks-tooltip{position:fixed;animation:fade-out .15s linear forwards;opacity:0}@keyframes fade-out{to{opacity:1}}.hyperlinks-container{width:min(58vw,55ch);height:auto;border:.125em solid var(--border-clr);border-radius:var(--bdr-rad);font-family:sans-serif;background:var(--bg);color:var(--text-color);box-shadow:0 .1em .4em 0 hsla(var(--shadow),.2);user-select:none}.hyperlinks-container img{max-width:100%;height:100%;object-fit:cover;background-position:center;pointer-events:none}.hyperlinks-container,.hyperlinks-site-info-container,.hyperlinks-site-info-container>*{overflow:hidden}.hyperlinks-img-container{border-bottom:.2em solid var(--border-clr)}.hyperlinks-site-info-container{padding:calc(var(--gap) - .2em);line-height:1.3}.hyperlinks-site-info-container>*{text-overflow:ellipsis;white-space:nowrap;font-size:var(--font-size);letter-spacing:.02rem}.hyperlinks-title{margin-bottom:calc(var(--gap) + .5em)}.hyperlinks-site-url{color:var(--special-text-color)}@media (min-width:37em){:root{--gap:1.2em}.hyperlinks-container{display:grid;grid-template-columns:1fr 1.3fr}.hyperlinks-container img{display:block;min-height:10em}.hyperlinks-site-info-container{display:flex;flex-direction:column;row-gap:var(--gap);padding-block:calc(var(--gap) + 0.5em)}.hyperlinks-sub-title{margin-top:auto}.hyperlinks-img-container{border:none}}","light-vertical":":root{--bg:hsl(0, 0%, 92%);--border-clr:hsl(0, 0%, 85%);--bdr-rad:0.4em;--gap:0.8em;--font-size:1rem;--text-color:black;--special-text-color:grey;--shadow:0,0%,0%}.hyperlinks-tooltip{position:fixed;animation:fade-out .15s linear forwards;opacity:0}@keyframes fade-out{to{opacity:1}}.hyperlinks-container{width:min(60vw,35ch);height:auto;border:.125em solid var(--border-clr);border-radius:var(--bdr-rad);font-family:sans-serif;background:var(--bg);color:var(--text-color);box-shadow:0 .1em .4em 0 hsla(var(--shadow),.2);user-select:none}.hyperlinks-container img{max-width:100%;height:100%;object-fit:cover;background-position:center;pointer-events:none}.hyperlinks-container,.hyperlinks-site-info-container,.hyperlinks-site-info-container>*{overflow:hidden}.hyperlinks-img-container{border-bottom:.2em solid var(--border-clr)}.hyperlinks-site-info-container{padding:calc(var(--gap) - .2em);line-height:1.3;padding-top:0}.hyperlinks-site-info-container>*{text-overflow:ellipsis;white-space:nowrap;font-size:var(--font-size);letter-spacing:.02rem}.hyperlinks-title{margin-bottom:calc(var(--gap) + .4em)}.hyperlinks-site-url{color:var(--special-text-color)}","light-horizontal":":root{--bg:hsl(0, 0%, 92%);--border-clr:hsl(0, 0%, 85%);--bdr-rad:0.4em;--gap:1.2em;--font-size:1rem;--text-color:black;--special-text-color:grey;--shadow:0,0%,0%}.hyperlinks-tooltip{position:fixed;animation:fade-out .15s linear forwards;opacity:0}@keyframes fade-out{to{opacity:1}}.hyperlinks-container{width:min(80vw,55ch);height:auto;border:.125em solid var(--border-clr);border-radius:var(--bdr-rad);font-family:sans-serif;background:var(--bg);color:var(--text-color);box-shadow:0 .1em .4em hsla(var(--shadow),.2);user-select:none;display:grid;grid-template-columns:1fr 1.3fr}.hyperlinks-container img{max-width:100%;height:100%;object-fit:cover;background-position:center;pointer-events:none;display:block;min-height:10em}.hyperlinks-container,.hyperlinks-site-info-container,.hyperlinks-site-info-container>*{overflow:hidden}.hyperlinks-site-info-container{padding:calc(var(--gap) - .2em);line-height:1.3;display:flex;flex-direction:column;row-gap:var(--gap);padding-block:calc(var(--gap) + 0.5em)}.hyperlinks-site-info-container>*{text-overflow:ellipsis;white-space:nowrap;font-size:var(--font-size);letter-spacing:.02rem}.hyperlinks-title{margin-bottom:calc(var(--gap) + .5em)}.hyperlinks-site-url{color:var(--special-text-color)}.hyperlinks-sub-title{margin-top:auto}","dark-vertical":":root{--bg:hsl(0, 0%, 22%);--border-clr:hsl(0, 0%, 30%);--bdr-rad:0.4em;--gap:0.8em;--font-size:1rem;--text-color:rgb(247, 247, 247);--special-text-color:grey;--shadow:0,0%,35%}.hyperlinks-tooltip{position:fixed;animation:fade-out .15s linear forwards;opacity:0}@keyframes fade-out{to{opacity:1}}.hyperlinks-container{width:min(60vw,35ch);height:auto;border:.125em solid var(--border-clr);border-radius:var(--bdr-rad);font-family:sans-serif;background:var(--bg);color:var(--text-color);box-shadow:0 .1em .4em hsla(var(--shadow),.4);user-select:none}.hyperlinks-container img{max-width:100%;height:100%;object-fit:cover;background-position:center;pointer-events:none}.hyperlinks-container,.hyperlinks-site-info-container,.hyperlinks-site-info-container>*{overflow:hidden}.hyperlinks-img-container{border-bottom:.2em solid var(--border-clr)}.hyperlinks-site-info-container{padding:calc(var(--gap) - .2em);line-height:1.3}.hyperlinks-site-info-container>*{text-overflow:ellipsis;white-space:nowrap;font-size:var(--font-size);letter-spacing:.02rem}.hyperlinks-title{margin-bottom:calc(var(--gap) + .5em)}.hyperlinks-site-url{color:var(--special-text-color)}","dark-horizontal":":root{--bg:hsl(0, 0%, 22%);--border-clr:hsl(0, 0%, 30%);--bdr-rad:0.4em;--gap:0.8em;--font-size:1rem;--text-color:rgb(247, 247, 247);--special-text-color:grey;--shadow:0,0%,35%}.hyperlinks-tooltip{position:fixed;animation:fade-out .15s linear forwards;opacity:0}@keyframes fade-out{to{opacity:1}}.hyperlinks-container{width:min(80vw,55ch);height:auto;border:.125em solid var(--border-clr);border-radius:var(--bdr-rad);font-family:sans-serif;background:var(--bg);color:var(--text-color);box-shadow:0 .1em .4em hsla(var(--shadow),.4);user-select:none;display:grid;grid-template-columns:1fr 1.3fr}.hyperlinks-container img{max-width:100%;height:100%;object-fit:cover;background-position:center;display:block;min-height:10em;pointer-events:none}.hyperlinks-container,.hyperlinks-site-info-container,.hyperlinks-site-info-container>*{overflow:hidden}.hyperlinks-site-info-container{padding:calc(var(--gap) - .2em);line-height:1.3;display:flex;flex-direction:column;row-gap:var(--gap);padding-block:calc(var(--gap) + 0.5em)}.hyperlinks-site-info-container>*{text-overflow:ellipsis;white-space:nowrap;font-size:var(--font-size);letter-spacing:.02rem}.hyperlinks-title{margin-bottom:calc(var(--gap) + .5em)}.hyperlinks-site-url{color:var(--special-text-color)}.hyperlinks-sub-title{margin-top:auto}"},n=function(e){var t={isTooltipActive:!1,tooltip:null},n=function(){function e(t,r,o,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.imageLink=t,this.description=r,this.heading=o,this.siteURL=n,this.option=i}var t,n,i;return t=e,(n=[{key:"getTooltipHTML",value:function(){var e={all:"<div class=hyperlinks-container><div class=hyperlinks-img-container><img alt=temp-image src=".concat(this.imageLink,"></div><div class=hyperlinks-site-info-container><h2 class=hyperlinks-title>").concat(this.heading,"</h2><div class=hyperlinks-sub-title>").concat(this.description,"</div><div class=hyperlinks-site-url><span>").concat(this.siteURL,"</span></div></div></div>")},t=o[this.option];if(!t)throw new Error("Template not found");return{TEMPLATE_HTML:e,TEMPLATE:t}}}])&&r(t.prototype,n),i&&r(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();document.addEventListener("mouseover",(function(e){e.target.classList.contains("hyperlinks")&&i(e.target)})),document.addEventListener("mouseout",(function(e){e.target.classList.contains("hyperlinks")&&t.tooltip.remove()}));var i=function(r){t.isTooltipActive&&t.tooltip.remove();var o=JSON.parse(localStorage.getItem(r.href)),i=new n(o["og:image"],o["og:description"],o["og:title"],o["og:url"],e),a=document.createElement("div");a.className="hyperlinks-tooltip",a.innerHTML=i.getTooltipHTML().TEMPLATE_HTML.all,document.body.append(a);var l=document.createElement("style");l.innerHTML=i.getTooltipHTML().TEMPLATE,document.body.append(l);var s=r.getBoundingClientRect(),c={left:s.left-a.clientWidth/2+s.width/2,top:s.top+25};s.top>a.clientHeight+25&&(c.top=s.top-a.clientHeight-5),s.left<a.clientWidth+25&&(c.left=s.left),s.right>a.clientWidth+25&&(c.left=s.left-a.clientWidth+s.width),a.style.left=c.left+"px",a.style.top=c.top+"px",t.isTooltipActive=!0,t.tooltip=a}};return t})()},47:e=>{var t=function(e){"use strict";var t,r=Object.prototype,o=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function c(e,t,r,o){var n=t&&t.prototype instanceof m?t:m,i=Object.create(n.prototype),a=new S(o||[]);return i._invoke=function(e,t,r){var o=h;return function(n,i){if(o===f)throw new Error("Generator is already running");if(o===d){if("throw"===n)throw i;return P()}for(r.method=n,r.arg=i;;){var a=r.delegate;if(a){var l=T(a,r);if(l){if(l===g)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=f;var s=p(e,t,r);if("normal"===s.type){if(o=r.done?d:u,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=d,r.method="throw",r.arg=s.arg)}}}(e,r,a),i}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h="suspendedStart",u="suspendedYield",f="executing",d="completed",g={};function m(){}function y(){}function v(){}var b={};s(b,i,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(_([])));k&&k!==r&&o.call(k,i)&&(b=k);var x=v.prototype=m.prototype=Object.create(b);function L(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(n,i,a,l){var s=p(e[n],e,i);if("throw"!==s.type){var c=s.arg,h=c.value;return h&&"object"==typeof h&&o.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,a,l)}),(function(e){r("throw",e,a,l)})):t.resolve(h).then((function(e){c.value=e,a(c)}),(function(e){return r("throw",e,a,l)}))}l(s.arg)}var n;this._invoke=function(e,o){function i(){return new t((function(t,n){r(e,o,t,n)}))}return n=n?n.then(i,i):i()}}function T(e,r){var o=e.iterator[r.method];if(o===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,T(e,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var n=p(o,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,g;var i=n.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function _(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function r(){for(;++n<e.length;)if(o.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:t,done:!0}}return y.prototype=v,s(x,"constructor",v),s(v,"constructor",y),y.displayName=s(v,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},L(E.prototype),s(E.prototype,a,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,o,n,i){void 0===i&&(i=Promise);var a=new E(c(t,r,o,n),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},L(x),s(x,l,"Generator"),s(x,i,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var o=t.pop();if(o in e)return r.value=o,r.done=!1,r}return r.done=!0,r}},e.values=_,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(o,n){return l.type="throw",l.arg=e,r.next=o,n&&(r.method="next",r.arg=t),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;O(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,o){return this.delegate={iterator:_(e),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t,r,o,n,i,a){try{var l=e[i](a),s=l.value}catch(e){return void r(e)}l.done?t(s):Promise.resolve(s).then(o,n)}r.r(o),r.d(o,{Init:()=>h});var i=r(162),a=r.n(i),l=function(e){var t;try{t=window[e];var r="__storage_test__";return t.setItem(r,r),t.removeItem(r),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}};function s(e){return null===localStorage.getItem(e)}var c=function(e,t,r){var o,n,i={};return t.map((function(t){return Array.prototype.some.call(e.getElementsByTagName("meta"),(function(e){return e.name===t||e.getAttribute("property")===t?(i[t]=e.content,!0):void(i[t]="Not available")})),i})),console.log(i),o=r,n=i,"undefined"!=typeof window&&localStorage.setItem(o,JSON.stringify(n)),i},p=r(173),h=function(){var e,r=(e=a().mark((function e(r){var o,n,i,h,u,f;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l("localStorage")){e.next=4;break}console.log("localStorage is supported"),e.next=5;break;case 4:throw new Error("localStorage is not supported");case 5:if((o=t(document.getElementsByClassName("hyperlinks")).map((function(e){return e.href}))).length){e.next=9;break}return console.warn("Running with No Hyperlinks. \n\n If you think this is wrong please refer the docs properly : https://github.com/Criticalcarpet/Hyperlinks#readme"),e.abrupt("return",!1);case 9:if(n=t(new Set(o)),console.log(n),i=n.filter(s),console.log(i),!(i.length>0)){e.next=19;break}return e.next=16,d=n,Promise.all(d.map((function(e){return fetch("https://api.allorigins.win/get?url=".concat(encodeURIComponent(e))).then((function(e){return e.json()}))})));case 16:for(h=e.sent,console.log(h),u=0;u<h.length;u++)a=h[u].contents,f=(new DOMParser).parseFromString(a,"text/html"),console.log(f),c(f,["og:image","og:url","og:title","og:description"],h[u].status.url);case 19:(0,p.tooltipInit)(r);case 20:case"end":return e.stop()}var a,d}),e)})),function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function l(e){n(a,o,i,l,s,"next",e)}function s(e){n(a,o,i,l,s,"throw",e)}l(void 0)}))});return function(e){return r.apply(this,arguments)}}()})(),o})()}));
//# sourceMappingURL=index.bundle.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hyperlinks_js_hyperlinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hyperlinks-js/hyperlinks */ "./node_modules/@hyperlinks-js/hyperlinks/dist/index.bundle.js");
/* harmony import */ var _hyperlinks_js_hyperlinks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hyperlinks_js_hyperlinks__WEBPACK_IMPORTED_MODULE_0__);


_hyperlinks_js_hyperlinks__WEBPACK_IMPORTED_MODULE_0__.Init('mixed')
})();

/******/ })()
;
//# sourceMappingURL=index.bundle.js.map