(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2885],{57838:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(97685),r=n(67294);function a(){var e=r.useReducer(function(e){return e+1},0);return(0,i.Z)(e,2)[1]}},24308:function(e,t,n){"use strict";n.d(t,{c4:function(){return a}});var i=n(4942),r=n(87462),a=["xxl","xl","lg","md","sm","xs"],o={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},s=new Map,l=-1,c={};t.ZP={matchHandlers:{},dispatch:function(e){return c=e,s.forEach(function(e){return e(c)}),s.size>=1},subscribe:function(e){return s.size||this.register(),l+=1,s.set(l,e),e(c),l},unsubscribe:function(e){s.delete(e),s.size||this.unregister()},unregister:function(){var e=this;Object.keys(o).forEach(function(t){var n=o[t],i=e.matchHandlers[n];null==i||i.mql.removeListener(null==i?void 0:i.listener)}),s.clear()},register:function(){var e=this;Object.keys(o).forEach(function(t){var n=o[t],a=function(n){var a=n.matches;e.dispatch((0,r.Z)((0,r.Z)({},c),(0,i.Z)({},t,a)))},s=window.matchMedia(n);s.addListener(a),e.matchHandlers[n]={mql:s,listener:a},a(s)})}}},11382:function(e,t,n){"use strict";var i=n(87462),r=n(4942),a=n(97685),o=n(94184),s=n.n(o),l=n(23279),c=n.n(l),u=n(98423),d=n(67294),p=n(53124),f=n(96159),m=n(93355),h=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)0>t.indexOf(i[r])&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n};(0,m.b)("small","default","large");var v=null,y=function(e){var t=e.spinPrefixCls,n=e.spinning,o=void 0===n||n,l=e.delay,m=e.className,y=e.size,g=void 0===y?"default":y,x=e.tip,w=e.wrapperClassName,b=e.style,j=e.children,Z=h(e,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),F=d.useState(function(){return o&&(!o||!l||!!isNaN(Number(l)))}),k=(0,a.Z)(F,2),C=k[0],N=k[1];return d.useEffect(function(){var e=c()(function(){N(o)},l);return e(),function(){var t;null===(t=null==e?void 0:e.cancel)||void 0===t||t.call(e)}},[l,o]),d.createElement(p.C,null,function(n){var a,o,l,c=n.direction,p=s()(t,(l={},(0,r.Z)(l,"".concat(t,"-sm"),"small"===g),(0,r.Z)(l,"".concat(t,"-lg"),"large"===g),(0,r.Z)(l,"".concat(t,"-spinning"),C),(0,r.Z)(l,"".concat(t,"-show-text"),!!x),(0,r.Z)(l,"".concat(t,"-rtl"),"rtl"===c),l),m),h=(0,u.Z)(Z,["indicator","prefixCls"]),y=d.createElement("div",(0,i.Z)({},h,{style:b,className:p,"aria-live":"polite","aria-busy":C}),(a=e.indicator,o="".concat(t,"-dot"),null===a?null:(0,f.l$)(a)?(0,f.Tm)(a,{className:s()(a.props.className,o)}):(0,f.l$)(v)?(0,f.Tm)(v,{className:s()(v.props.className,o)}):d.createElement("span",{className:s()(o,"".concat(t,"-dot-spin"))},d.createElement("i",{className:"".concat(t,"-dot-item")}),d.createElement("i",{className:"".concat(t,"-dot-item")}),d.createElement("i",{className:"".concat(t,"-dot-item")}),d.createElement("i",{className:"".concat(t,"-dot-item")}))),x?d.createElement("div",{className:"".concat(t,"-text")},x):null);if(void 0!==j){var F=s()("".concat(t,"-container"),(0,r.Z)({},"".concat(t,"-blur"),C));return d.createElement("div",(0,i.Z)({},h,{className:s()("".concat(t,"-nested-loading"),w)}),C&&d.createElement("div",{key:"loading"},y),d.createElement("div",{className:F,key:"container"},j))}return y})},g=function(e){var t=e.prefixCls,n=(0,d.useContext(p.E_).getPrefixCls)("spin",t),r=(0,i.Z)((0,i.Z)({},e),{spinPrefixCls:n});return d.createElement(y,(0,i.Z)({},r))};g.setDefaultIndicator=function(e){v=e},t.Z=g},23279:function(e,t,n){var i=n(13218),r=n(7771),a=n(14841),o=Math.max,s=Math.min;e.exports=function(e,t,n){var l,c,u,d,p,f,m=0,h=!1,v=!1,y=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var n=l,i=c;return l=c=void 0,m=t,d=e.apply(i,n)}function x(e){var n=e-f,i=e-m;return void 0===f||n>=t||n<0||v&&i>=u}function w(){var e,n,i,a=r();if(x(a))return b(a);p=setTimeout(w,(e=a-f,n=a-m,i=t-e,v?s(i,u-n):i))}function b(e){return(p=void 0,y&&l)?g(e):(l=c=void 0,d)}function j(){var e,n=r(),i=x(n);if(l=arguments,c=this,f=n,i){if(void 0===p)return m=e=f,p=setTimeout(w,t),h?g(e):d;if(v)return clearTimeout(p),p=setTimeout(w,t),g(f)}return void 0===p&&(p=setTimeout(w,t)),d}return t=a(t)||0,i(n)&&(h=!!n.leading,u=(v="maxWait"in n)?o(a(n.maxWait)||0,t):u,y="trailing"in n?!!n.trailing:y),j.cancel=function(){void 0!==p&&clearTimeout(p),m=0,l=f=c=p=void 0},j.flush=function(){return void 0===p?d:b(r())},j}},1469:function(e){var t=Array.isArray;e.exports=t},7771:function(e,t,n){var i=n(55639);e.exports=function(){return i.Date.now()}},16791:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/stream-health",function(){return n(17253)}])},36435:function(e,t,n){"use strict";n.d(t,{k:function(){return u}});var i=n(85893),r=n(9085),a=n(92616),o=n.n(a),s=n(58091),l=n(60727);function c(e){let t={};return e.forEach(e=>{let n=new Date(e.time),i=(0,s.Z)(n,"H:mma");t[i]=e.value}),t}o().use(r.ZP);let u=e=>{let{data:t,title:n,color:r,unit:a,dataCollections:o,yFlipped:s,yLogarithmic:u}=e,d=[];t&&t.length>0&&d.push({name:n,color:r,data:c(t)}),o.forEach(e=>{d.push({name:e.name,data:c(e.data),color:e.color,dataset:e.options})});let p={scales:{y:{reverse:!1,type:"linear"},x:{type:"time"}}};return p.scales.y.reverse=s,p.scales.y.type=u?"logarithmic":"linear",(0,i.jsx)("div",{className:"line-chart-container",children:(0,i.jsx)(l.wW,{xtitle:"Time",ytitle:n,suffix:a,legend:"bottom",color:r,data:d,download:n,library:p})})};u.defaultProps={dataCollections:[],data:[],title:"",yFlipped:!1,yLogarithmic:!1}},44654:function(e,t,n){"use strict";n.d(t,{j:function(){return g}});var i=n(85893),r=n(71230),a=n(15746),o=n(74763),s=n(85818),l=n(14670),c=n(71577),u=n(5152),d=n.n(u),p=n(41664),f=n.n(p),m=n(67294),h=n(99519);let v=d()(()=>Promise.all([n.e(2074),n.e(7996)]).then(n.t.bind(n,67996,23)),{loadableGenerated:{webpack:()=>[67996]},ssr:!1}),y=d()(()=>Promise.all([n.e(2074),n.e(7039)]).then(n.t.bind(n,67039,23)),{loadableGenerated:{webpack:()=>[67039]},ssr:!1}),g=e=>{let{showTroubleshootButton:t}=e,n=(0,m.useContext)(h.aC),{health:u}=n;if(!u)return null;let{healthy:d,healthPercentage:p,message:g,representation:x}=u,w="#3f8600",b="info";return p<80?(w="#cf000f",b="error"):p<30&&(w="#f0ad4e",b="error"),(0,i.jsxs)("div",{children:[(0,i.jsxs)(r.Z,{gutter:8,children:[(0,i.jsx)(a.Z,{span:12,children:(0,i.jsx)(o.Z,{title:"Healthy Stream",value:d?"Yes":"No",valueStyle:{color:w},prefix:d?(0,i.jsx)(v,{}):(0,i.jsx)(y,{})})}),(0,i.jsx)(a.Z,{span:12,children:(0,i.jsx)(o.Z,{title:"Playback Health",value:p,valueStyle:{color:w},suffix:"%"})})]}),(0,i.jsx)(r.Z,{style:{display:x<100&&0!==x?"grid":"none"},children:(0,i.jsxs)(s.Z.Text,{type:"secondary",style:{textAlign:"center",fontSize:"0.7em",opacity:"0.3"},children:["Stream health represents ",x,"% of all known players. Other player status is unknown."]})}),(0,i.jsx)(r.Z,{gutter:16,style:{width:"100%",display:g?"grid":"none",marginTop:"10px"},children:(0,i.jsx)(a.Z,{span:24,children:(0,i.jsx)(l.Z,{message:g,type:b,showIcon:!0,action:t&&(0,i.jsx)(f(),{passHref:!0,href:"/stream-health",children:(0,i.jsx)(c.Z,{size:"small",type:"text",style:{color:"black"},children:"TROUBLESHOOT"})})})})})]})};g.defaultProps={showTroubleshootButton:!0}},17253:function(e,t,n){"use strict";n.r(t);var i=n(85893),r=n(85818),a=n(14670),o=n(11382),s=n(26713),l=n(71230),c=n(15746),u=n(59652),d=n(74763),p=n(67294),f=n(5152),m=n.n(f),h=n(64777),v=n(36435),y=n(44654),g=n(6960);let x=m()(()=>Promise.all([n.e(2074),n.e(562)]).then(n.t.bind(n,69095,23)),{loadableGenerated:{webpack:()=>[69095]},ssr:!1}),w=m()(()=>Promise.all([n.e(2074),n.e(7282)]).then(n.t.bind(n,97282,23)),{loadableGenerated:{webpack:()=>[97282]},ssr:!1}),b=m()(()=>Promise.all([n.e(2074),n.e(4103)]).then(n.t.bind(n,74103,23)),{loadableGenerated:{webpack:()=>[74103]},ssr:!1}),j=e=>{let{title:t,description:n}=e;return(0,i.jsxs)("div",{className:"description-box",children:[(0,i.jsx)(r.Z.Title,{children:t}),(0,i.jsx)(r.Z.Paragraph,{children:n})]})},Z=()=>{var e,t,n,f,m,g,Z;let[F,k]=(0,p.useState)([]),[C,N]=(0,p.useState)([]),[P,E]=(0,p.useState)(),[S,O]=(0,p.useState)(),[T,L]=(0,p.useState)([]),[D,A]=(0,p.useState)([]),[R,I]=(0,p.useState)([]),[V,B]=(0,p.useState)([]),[M,q]=(0,p.useState)([]),[_,H]=(0,p.useState)([]),[z,W]=(0,p.useState)([]),[G,Q]=(0,p.useState)([]),[Y,X]=(0,p.useState)(0),$=async()=>{try{let e=await (0,h.rQ)(h.N$);k(e.errors),N(e.qualityVariantChanges),O(e.highestLatency),E(e.lowestLatency),L(e.medianLatency),A(e.medianSegmentDownloadDuration),I(e.maximumSegmentDownloadDuration),B(e.minimumSegmentDownloadDuration),q(e.minPlayerBitrate),H(e.medianPlayerBitrate),W(e.maxPlayerBitrate),Q(e.availableBitrates),X(e.segmentLength-.3)}catch(t){console.error(t)}};(0,p.useEffect)(()=>{let e=null;return $(),e=setInterval($,h.NE),()=>{clearInterval(e)}},[]);let U=(0,i.jsxs)("div",{children:[(0,i.jsx)(r.Z.Title,{children:"Stream Performance"}),(0,i.jsx)(a.Z,{type:"info",message:" Data has not yet been collected. Once a stream has begun and viewers are watching this page will be available."}),(0,i.jsx)(o.Z,{size:"large",children:(0,i.jsx)("div",{style:{marginTop:"50px",height:"100px"}})})]});if(!(null==F?void 0:F.length)||!(null==T?void 0:T.length)||!(null==D?void 0:D.length))return U;let J=[{name:"Errors",color:"#B63FFF",options:{radius:3},data:F},{name:"Quality changes",color:"#2087E2",options:{radius:2},data:C}],K=[{name:"Max download duration",color:"#B63FFF",options:{radius:2},data:R},{name:"Median download duration",color:"#00FFFF",options:{radius:2},data:D},{name:"Min download duration",color:"#02FD0D",options:{radius:2},data:V},{name:"Approximate limit",color:"#003FFF",data:D.map(e=>({time:e.time,value:Y})),options:{radius:0}}],ee=[{name:"Lowest player speed",color:"#B63FFF",data:M,options:{radius:2}},{name:"Median player speed",color:"#00FFFF",data:_,options:{radius:2}},{name:"Maximum player speed",color:"#02FD0D",data:z,options:{radius:2}}];G.forEach(e=>{ee.push({name:"Available bitrate",color:"#003FFF",data:M.map(t=>({time:t.time,value:e})),options:{radius:0}})});let et=null===(e=null===(t=ee[0])||void 0===t?void 0:t.data[ee[0].data.length-1])||void 0===e?void 0:e.value,en=null===(n=D[D.length-1])||void 0===n?void 0:n.value,ei=G.reduce((e,t)=>e.valueOf()<t.valueOf()?e:t),er=(null===(f=T[T.length-1])||void 0===f?void 0:f.value)||0,ea=(null===(m=S[S.length-1])||void 0===m?void 0:m.value)||0,eo=(null===(g=P[P.length-1])||void 0===g?void 0:g.value)||0,es=(Number(ea)+Number(eo)+Number(er))/3,el=0,ec=(null===(Z=J[0])||void 0===Z?void 0:Z.data.length)||0;if(ec>5){let eu=J[0].data.slice(-5);el=eu.reduce((e,t)=>e+Number(t.value),0)}else el=J[0].data.reduce((e,t)=>e+Number(t.value),0);let ed=et>0||en>0||el>0,ep=null,ef=null;0!==et&&et<ei&&(ep="One of your viewers is playing your stream at ".concat(et,"kbps, slower than ").concat(ei,"kbps, the lowest quality you made available. Consider adding a lower quality with a lower bitrate if the errors over time warrant this.")),en>Y&&(ef="Your viewers may be consuming your video slower than required. This may be due to slow networks or your latency configuration. You need to decrease the amount of time viewers are taking to consume your video. Consider adding a lower quality with a lower bitrate or experiment with increasing the latency buffer setting.");let em=el>0?"#B63FFF":"unset",eh={display:"flex",alignItems:"center",justifyContent:"center",height:"80px"};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z.Title,{children:"Stream Performance"}),(0,i.jsx)(r.Z.Paragraph,{children:"This tool hopes to help you identify and troubleshoot problems you may be experiencing with your stream. It aims to aggregate experiences across your viewers, meaning one viewer with an exceptionally bad experience may throw off numbers for the whole, especially with a low number of viewers."}),(0,i.jsx)(r.Z.Paragraph,{children:"The data is only collected by those using the Owncast web interface and is unable to gain insight into external players people may be using such as VLC, MPV, QuickTime, etc."}),(0,i.jsxs)(s.Z,{direction:"vertical",size:"middle",children:[(0,i.jsx)(l.Z,{justify:"space-around",children:(0,i.jsx)(c.Z,{style:{width:"100%"},children:(0,i.jsx)(u.Z,{type:"inner",children:(0,i.jsx)(y.j,{showTroubleshootButton:!1})})})}),(0,i.jsxs)(l.Z,{gutter:[16,16],justify:"space-around",style:{display:ed?"flex":"none"},children:[(0,i.jsx)(c.Z,{children:(0,i.jsx)(u.Z,{type:"inner",children:(0,i.jsx)("div",{style:eh,children:(0,i.jsx)(d.Z,{title:"Viewer Playback Speed",value:"".concat(et),prefix:(0,i.jsx)(b,{style:{marginRight:"5px"}}),precision:0,suffix:"kbps"})})})}),(0,i.jsx)(c.Z,{children:(0,i.jsx)(u.Z,{type:"inner",children:(0,i.jsx)("div",{style:eh,children:(0,i.jsx)(d.Z,{title:"Viewer Latency",value:"".concat(es),prefix:(0,i.jsx)(x,{style:{marginRight:"5px"}}),precision:0,suffix:"seconds"})})})}),(0,i.jsx)(c.Z,{children:(0,i.jsx)(u.Z,{type:"inner",children:(0,i.jsx)("div",{style:eh,children:(0,i.jsx)(d.Z,{title:"Recent Playback Errors",value:"".concat(el||0),valueStyle:{color:em},prefix:(0,i.jsx)(w,{style:{marginRight:"5px"}}),suffix:""})})})})]}),(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(j,{title:"Video Segment Download",description:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z.Paragraph,{children:"Once a video segment takes too long to download a viewer will experience buffering. If you see slow downloads you should offer a lower quality for your viewers, or find other ways, possibly an external storage provider, a CDN or a faster network, to improve your stream quality. Increasing your latency buffer can also help for some viewers."}),(0,i.jsx)(r.Z.Paragraph,{children:"In short, once the pink line consistently gets near the blue line, your stream is likely experiencing problems for viewers."})]})}),ef&&(0,i.jsx)(a.Z,{message:"Slow downloads",description:ef,type:"error",showIcon:!0}),(0,i.jsx)(v.k,{title:"Seconds",dataCollections:K,color:"#FF7700",unit:"s",yLogarithmic:!0})]}),(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(j,{title:"Player Network Speed",description:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z.Paragraph,{children:"The playback bitrate of your viewers. Once somebody's bitrate drops below the lowest video variant bitrate they will experience buffering. If you see viewers with slow connections trying to play your video you should consider offering an additional, lower quality."}),(0,i.jsx)(r.Z.Paragraph,{children:"In short, once the pink line gets near the lowest blue line, your stream is likely experiencing problems for at least one of your viewers."})]})}),ep&&(0,i.jsx)(a.Z,{message:"Low bandwidth viewers",description:ep,type:"error",showIcon:!0}),(0,i.jsx)(v.k,{title:"Lowest Player Bitrate",dataCollections:ee,color:"#FF7700",unit:"kbps",yLogarithmic:!0})]}),(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(j,{title:"Errors and Quality Changes",description:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z.Paragraph,{children:"Recent number of errors, including buffering, and quality changes from across all your viewers. Errors can occur for many reasons, including browser issues, plugins, wifi problems, and they don't all represent fatal issues or something you have control over."}),"A quality change is not necessarily a negative thing, but if it's excessive and coinciding with errors you should consider adding another quality variant.",(0,i.jsx)(r.Z.Paragraph,{})]})}),(0,i.jsx)(v.k,{title:"#",dataCollections:J,color:"#FF7700",unit:""})]}),(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(j,{title:"Viewer Latency",description:"An approximate number of seconds that your viewers are behind your live video. The largest cause of latency spikes is buffering. High latency itself is not a problem, and optimizing for low latency can result in buffering, resulting in even higher latency."}),(0,i.jsx)(v.k,{title:"Seconds",dataCollections:[{name:"Median stream latency",color:"#00FFFF",options:{radius:2},data:T},{name:"Lowest stream latency",color:"#02FD0D",options:{radius:2},data:P},{name:"Highest stream latency",color:"#B63FFF",options:{radius:2},data:S}],color:"#FF7700",unit:"s"})]})]})]})};Z.getLayout=function(e){return(0,i.jsx)(g.l,{page:e})},t.default=Z},60057:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var i=n(4942),r=n(1413),a=n(97685),o=n(45987),s=n(67294),l=n(53749),c=n(94184),u=n.n(c),d={adjustX:1,adjustY:1},p=[0,0],f={topLeft:{points:["bl","tl"],overflow:d,offset:[0,-4],targetOffset:p},topCenter:{points:["bc","tc"],overflow:d,offset:[0,-4],targetOffset:p},topRight:{points:["br","tr"],overflow:d,offset:[0,-4],targetOffset:p},bottomLeft:{points:["tl","bl"],overflow:d,offset:[0,4],targetOffset:p},bottomCenter:{points:["tc","bc"],overflow:d,offset:[0,4],targetOffset:p},bottomRight:{points:["tr","br"],overflow:d,offset:[0,4],targetOffset:p}},m=n(15105),h=n(75164),v=n(88603),y=m.Z.ESC,g=m.Z.TAB,x=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"],w=s.forwardRef(function(e,t){var n,c,d,p,m,w,b,j,Z,F,k,C,N,P,E,S,O=e.arrow,T=void 0!==O&&O,L=e.prefixCls,D=void 0===L?"rc-dropdown":L,A=e.transitionName,R=e.animation,I=e.align,V=e.placement,B=e.placements,M=e.getPopupContainer,q=e.showAction,_=e.hideAction,H=e.overlayClassName,z=e.overlayStyle,W=e.visible,G=e.trigger,Q=void 0===G?["hover"]:G,Y=e.autoFocus,X=(0,o.Z)(e,x),$=s.useState(),U=(0,a.Z)($,2),J=U[0],K=U[1],ee="visible"in e?W:J,et=s.useRef(null);s.useImperativeHandle(t,function(){return et.current}),d=(c={visible:ee,setTriggerVisible:K,triggerRef:et,onVisibleChange:e.onVisibleChange,autoFocus:Y}).visible,p=c.setTriggerVisible,m=c.triggerRef,w=c.onVisibleChange,b=c.autoFocus,j=s.useRef(!1),Z=function(){if(d&&m.current){var e,t,n,i;null===(e=m.current)||void 0===e||null===(t=e.triggerRef)||void 0===t||null===(n=t.current)||void 0===n||null===(i=n.focus)||void 0===i||i.call(n),p(!1),"function"==typeof w&&w(!1)}},F=function(){var e,t,n,i,r=(0,v.tS)(null===(e=m.current)||void 0===e?void 0:null===(t=e.popupRef)||void 0===t?void 0:null===(n=t.current)||void 0===n?void 0:null===(i=n.getElement)||void 0===i?void 0:i.call(n))[0];return null!=r&&!!r.focus&&(r.focus(),j.current=!0,!0)},k=function(e){switch(e.keyCode){case y:Z();break;case g:var t=!1;j.current||(t=F()),t?e.preventDefault():Z()}},s.useEffect(function(){return d?(window.addEventListener("keydown",k),b&&(0,h.Z)(F,3),function(){window.removeEventListener("keydown",k),j.current=!1}):function(){j.current=!1}},[d]);var en=function(){var t=e.overlay;return"function"==typeof t?t():t},ei=function(){var e=en();return s.createElement(s.Fragment,null,T&&s.createElement("div",{className:"".concat(D,"-arrow")}),e)},er=_;return er||-1===Q.indexOf("contextMenu")||(er=["click"]),s.createElement(l.Z,(0,r.Z)((0,r.Z)({builtinPlacements:void 0===B?f:B},X),{},{prefixCls:D,ref:et,popupClassName:u()(H,(0,i.Z)({},"".concat(D,"-show-arrow"),T)),popupStyle:z,action:Q,showAction:q,hideAction:er||[],popupPlacement:void 0===V?"bottomLeft":V,popupAlign:I,popupTransitionName:A,popupAnimation:R,popupVisible:ee,stretch:(C=e.minOverlayWidthMatchTrigger,N=e.alignPoint,"minOverlayWidthMatchTrigger"in e?C:!N)?"minWidth":"",popup:"function"==typeof e.overlay?ei:ei(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;K(t),"function"==typeof n&&n(t)},onPopupClick:function(t){var n=e.onOverlayClick;K(!1),n&&n(t)},getPopupContainer:M}),(E=(P=e.children).props?P.props:{},S=u()(E.className,void 0!==(n=e.openClassName)?n:"".concat(D,"-open")),ee&&P?s.cloneElement(P,{className:S}):P))})}},function(e){e.O(0,[2196,173,164,2138,31,4931,5402,2231,7118,5818,9915,8883,8091,4381,5101,4763,5160,710,6960,9774,2888,179],function(){return e(e.s=16791)}),_N_E=e.O()}]);
//# sourceMappingURL=stream-health-07b16b54f0028f65.js.map