(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3126,5202],{53124:function(e,t,n){"use strict";n.d(t,{C:function(){return a},E_:function(){return i},PG:function(){return s}});var r=n(87462),o=n(67294),i=o.createContext({getPrefixCls:function(e,t){return t||(e?"ant-".concat(e):"ant")}}),a=i.Consumer;function s(e){return function(t){var n=t.constructor;return n&&n.displayName||t.name,function(n){return o.createElement(a,null,function(i){var a=e.prefixCls,s=(0,i.getPrefixCls)(a,n.prefixCls);return o.createElement(t,(0,r.Z)({},i,n,{prefixCls:s}))})}}}},94184:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0!==(n=(function(){return o}).apply(t,[]))&&(e.exports=n)}()},61357:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/video",function(){return n(29942)}])},51513:function(e,t,n){"use strict";n.d(t,{R:function(){return f}});var r=n(85893),o=n(27049),i=n(45938),a=n(5152),s=n.n(a),c=n(88335),u=n.n(c);let l=s()(()=>Promise.all([n.e(2074),n.e(2138),n.e(9095)]).then(n.t.bind(n,69095,23)),{loadableGenerated:{webpack:()=>[69095]},ssr:!1}),f=e=>{let t,{streamName:n,customText:a,lastLive:s,notificationsEnabled:c,fediverseAccount:f,onNotifyClick:d,onFollowClick:p}=e;return t=a||(!a&&c&&f?(0,r.jsxs)("span",{children:["This stream is offline. You can"," ",(0,r.jsx)("span",{role:"link",tabIndex:0,className:u().actionLink,onClick:d,children:"be notified"})," ","the next time ",n," goes live or"," ",(0,r.jsx)("span",{role:"link",tabIndex:0,className:u().actionLink,onClick:p,children:"follow"})," ",f," on the Fediverse."]}):!a&&c?(0,r.jsxs)("span",{children:["This stream is offline."," ",(0,r.jsx)("span",{role:"link",tabIndex:0,className:u().actionLink,onClick:d,children:"Be notified"})," ","the next time ",n," goes live."]}):!a&&f?(0,r.jsxs)("span",{children:["This stream is offline."," ",(0,r.jsx)("span",{role:"link",tabIndex:0,className:u().actionLink,onClick:p,children:"Follow"})," ",f," on the Fediverse to see the next time ",n," goes live."]}):"This stream is offline. Check back soon!"),(0,r.jsx)("div",{id:"offline-banner",className:u().outerContainer,children:(0,r.jsxs)("div",{className:u().innerContainer,children:[(0,r.jsx)("div",{className:u().header,children:n}),(0,r.jsx)(o.Z,{className:u().separator}),(0,r.jsx)("div",{className:u().bodyText,children:t}),s&&(0,r.jsxs)("div",{className:u().lastLiveDate,children:[(0,r.jsx)(l,{className:u().clockIcon}),"Last live ".concat((0,i.Z)(new Date(s))," ago.")]})]})})}},69357:function(e,t,n){"use strict";n.d(t,{X:function(){return d}});var r=n(85893),o=n(45938),i=n(68730),a=n(67294),s=n(5152),c=n.n(s),u=n(37970),l=n.n(u);let f=c()(()=>Promise.all([n.e(2074),n.e(2138),n.e(1965)]).then(n.t.bind(n,41965,23)),{loadableGenerated:{webpack:()=>[41965]},ssr:!1}),d=e=>{let t,{online:n,lastConnectTime:s,lastDisconnectTime:c,viewerCount:u}=e,[,d]=(0,a.useState)(new Date);(0,a.useEffect)(()=>{let e=setInterval(()=>d(new Date),1e3);return()=>{clearInterval(e)}},[]);let p="";if(n&&s){let h=function(e){let t=(0,i.Z)({start:e,end:new Date});return t.days>1?"".concat(t.days," days ").concat(t.hours," hours"):t.hours>=1?"".concat(t.hours," hours ").concat(t.minutes," minutes"):"".concat(t.minutes," minutes ").concat(t.seconds," seconds")}(new Date(s));p=n?"Live for  ".concat(h):"Offline",t=u>0&&(0,r.jsxs)("div",{className:l().right,children:[(0,r.jsx)("span",{children:(0,r.jsx)(f,{})}),(0,r.jsx)("span",{children:" ".concat(u)})]})}else!n&&(p="Offline",c&&(t="Last live ".concat((0,o.Z)(new Date(c))," ago.")));return(0,r.jsxs)("div",{className:l().statusbar,children:[(0,r.jsx)("div",{children:p}),(0,r.jsx)("div",{children:t})]})};d.defaultProps={lastConnectTime:null,lastDisconnectTime:null}},54564:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{children:t}=e;return t},t.suspense=function(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e},(0,n(92648).Z)(n(67294));var r=n(92983)},37645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=a.default,o={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};e instanceof Promise?o.loader=()=>e:"function"==typeof e?o.loader=e:"object"==typeof e&&(o=r({},o,e)),o=r({},o,t);let i=o.loader,s=()=>i().then(c);if(o.loadableGenerated&&delete(o=r({},o,o.loadableGenerated,{loader:s})).loadableGenerated,"boolean"==typeof o.ssr){if(!o.ssr)return delete o.ssr,u(s,o);delete o.ssr}return n(o)},t.noSSR=u;var r=n(6495).Z,o=n(92648).Z,i=(0,n(91598).Z)(n(67294)),a=o(n(14588)),s=o(n(54564));function c(e){return{default:e.default||e}}function u(e,t){delete t.webpack,delete t.modules;let n=i.lazy(e),r=t.loading,o=i.default.createElement(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1});return e=>i.default.createElement(i.Suspense,{fallback:o},i.default.createElement(s.default,null,i.default.createElement(n,Object.assign({},e))))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},33644:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(92648).Z)(n(67294));let o=r.default.createContext(null);t.LoadableContext=o},14588:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,o=(0,n(92648).Z)(n(67294)),i=n(33644);let a=[],s=[],c=!1;function u(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class l{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function f(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t);n.lazy=o.default.lazy(n.loader);let r=null;function a(){if(!r){let t=new l(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!c){let u=n.webpack?n.webpack():n.modules;u&&s.push(e=>{for(let t of u)if(-1!==e.indexOf(t))return a()})}function f(e){!function(){a();let e=o.default.useContext(i.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let t=o.default.createElement(n.loading,{isLoading:!0,pastDelay:!0,error:null});return o.default.createElement(o.default.Suspense,{fallback:t},o.default.createElement(n.lazy,e))}return f.preload=()=>a(),f.displayName="LoadableComponent",f}(u,e)}function d(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return d(e,t)})}f.preloadAll=()=>new Promise((e,t)=>{d(a).then(e,t)}),f.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let n=()=>(c=!0,t());d(s,e).then(n,n)})},window.__NEXT_PRELOADREADY=f.preloadReady,t.default=f},29942:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(85893);n(67294);var o=n(4480),i=n(11163),a=n(77466),s=n(51513),c=n(69357),u=n(8888);function l(){var e;let t=(0,o.sJ)(a.RI),n=(0,o.sJ)(a.g1),{name:l}=n,{offlineMessage:f}=n,{viewerCount:d,lastConnectTime:p,lastDisconnectTime:h}=t,m=(0,o.sJ)(a.YW),_=(0,i.useRouter)(),b=null!==(e=_.asPath.split("?")[1])&&void 0!==e?e:"",y=b.split("&").reduce((e,t)=>{let[n,r]=t.split("=");return{...e,[n]:r}},{}),v="true"===y.initiallyMuted;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.me,{}),(0,r.jsxs)("div",{className:"video-embed",children:[m&&(0,r.jsx)(u.OwncastPlayer,{source:"/hls/stream.m3u8",online:m,initiallyMuted:v}),!m&&(0,r.jsx)(s.R,{streamName:l,customText:f,notificationsEnabled:!1}),m&&(0,r.jsx)(c.X,{online:m,lastConnectTime:p,lastDisconnectTime:h,viewerCount:d})]})]})}},64777:function(e,t,n){"use strict";n.d(t,{$i:function(){return B},$l:function(){return V},Bu:function(){return b},E8:function(){return A},Ff:function(){return N},GC:function(){return g},GR:function(){return Q},HP:function(){return R},IO:function(){return T},Kp:function(){return h},Kt:function(){return U},M_:function(){return Z},N$:function(){return X},NE:function(){return c},NM:function(){return _},Q_:function(){return u},Qc:function(){return E},RB:function(){return y},UJ:function(){return Y},WB:function(){return a},WE:function(){return O},WQ:function(){return j},Wr:function(){return P},XA:function(){return S},Y9:function(){return I},a_:function(){return p},ao:function(){return f},bl:function(){return l},e_:function(){return L},hn:function(){return k},iG:function(){return D},iV:function(){return d},jr:function(){return v},kb:function(){return M},kg:function(){return J},ms:function(){return C},nx:function(){return x},op:function(){return G},qk:function(){return m},rQ:function(){return z},sG:function(){return w},um:function(){return F}});var r=n(34155);let o=r.env.NEXT_PUBLIC_ADMIN_USERNAME,i=r.env.NEXT_PUBLIC_ADMIN_STREAMKEY,a="/",s="".concat(a,"api/admin/"),c=15e3,u="".concat(s,"status"),l="".concat(s,"serverconfig"),f="".concat(s,"config"),d="".concat(s,"viewersOverTime"),p="".concat(s,"viewers"),h="".concat(s,"chat/clients"),m="".concat(s,"chat/users/disabled"),_="".concat(s,"chat/users/setenabled"),b="".concat(s,"chat/users/ipbans"),y="".concat(s,"chat/users/ipbans/remove"),v="".concat(s,"chat/users/setmoderator"),g="".concat(s,"chat/users/moderators"),x="".concat(s,"hardwarestats"),w="".concat(s,"logs"),j="".concat(s,"logs/warnings"),O="".concat(s,"chat/messages"),k="/api/admin/chat/messagevisibility",E="".concat(s,"emoji/upload"),N="".concat(s,"emoji/delete"),C="".concat(s,"accesstokens"),P="".concat(s,"accesstokens/delete"),T="".concat(s,"accesstokens/create"),S="".concat(s,"webhooks"),Z="".concat(s,"webhooks/delete"),D="".concat(s,"webhooks/create"),B="".concat(a,"api/socialplatforms"),L="".concat(s,"federation/send"),R="".concat(s,"followers"),A="".concat(s,"followers/pending"),I="".concat(s,"followers/blocked"),M="".concat(s,"followers/approve"),G="".concat(s,"federation/actions"),X="".concat(s,"metrics/video"),F="".concat(s,"config/streamkeys"),Y="".concat(s,"yp/reset");async function z(e,t){let{data:n,method:r="GET",auth:a=!0}=t||{},s={method:r};if(n&&(s.body=JSON.stringify(n)),a&&o&&i){let c=btoa("".concat(o,":").concat(i));s.headers={Authorization:"Basic ".concat(c)},s.mode="cors",s.credentials="include"}try{let u=await fetch(e,s),l=await u.json();if(!u.ok){let f=l.message||"An error has occurred: ".concat(u.status);throw Error(f)}return l}catch(d){return console.error(d),d}}async function V(e,t){let n={method:"GET",auth:!1,...t};return z(e,n)}async function J(e){try{let t=await fetch(e,{referrerPolicy:"no-referrer",referrer:""});if(!t.ok){let n="An error has occured: ".concat(t.status);throw Error(n)}let r=await t.json();return r}catch(o){console.log(o)}return{}}async function U(){return J("https://api.github.com/repos/owncast/owncast/releases/latest")}let W=/^\d+(\.\d+){0,2}$/;async function Q(e){let t=await U(),n=t.tag_name;return("v"===n.substr(0,1)&&(n=n.substr(1)),!function(e,t){if(!e||!t||0===e.length||0===t.length)return!1;if(e===t)return!0;if(W.test(e)&&W.test(t)){let n=e.split(".");for(;n.length<3;)n.push("0");let r=t.split(".");for(;r.length<3;)r.push("0");for(let o=0;o<3;o++){let i=parseInt(n[o],10),a=parseInt(r[o],10);if(i!==a)return i>a}return!0}return e>=t}(e,n))?n:null}},88335:function(e){e.exports={outerContainer:"OfflineBanner_outerContainer__3AbsB",innerContainer:"OfflineBanner_innerContainer__zTm13",bodyText:"OfflineBanner_bodyText__nNNy0",separator:"OfflineBanner_separator___j_Ss",lastLiveDate:"OfflineBanner_lastLiveDate___UZdO",clockIcon:"OfflineBanner_clockIcon__s0DB_",header:"OfflineBanner_header__Vu20o",footer:"OfflineBanner_footer__o3Zl5",actionLink:"OfflineBanner_actionLink__b4Mwa"}},37970:function(e){e.exports={statusbar:"Statusbar_statusbar__AtVnB"}},5152:function(e,t,n){e.exports=n(37645)},11163:function(e,t,n){e.exports=n(80880)},10434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},97326:function(e,t,n){"use strict";function r(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},4942:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(83997);function o(e,t,n){return(t=(0,r.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},87462:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},60136:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(89611);function o(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,r.Z)(e,t)}},78814:function(e,t,n){"use strict";function r(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}n.d(t,{Z:function(){return r}})},89611:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,{Z:function(){return r}})},83997:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(71002);function o(e){var t=function(e,t){if("object"!==(0,r.Z)(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==(0,r.Z)(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===(0,r.Z)(t)?t:String(t)}},71002:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[2544,5938,6395,7689,4252,7466,2239,9774,2888,179],function(){return e(e.s=61357)}),_N_E=e.O()}]);
//# sourceMappingURL=video-33c54af143a52501.js.map