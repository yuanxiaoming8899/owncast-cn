(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2239],{8888:function(e,t,i){"use strict";i.r(t),i.d(t,{OwncastPlayer:function(){return j},default:function(){return M}});var n=i(85893),s=i(67294),r=i(4480),a=i(49218),l=i(85215),o=i(76161),h=i.n(o);i(27901);let c=e=>{let{options:t,onReady:i}=e,r=s.useRef(null),a=s.useRef(null);return s.useEffect(()=>{if(!a.current){let e=r.current,n=a.current=(0,l.Z)(e,t,()=>(console.debug("player is ready"),i&&i(n,l.Z)));n.autoplay(t.autoplay),n.src(t.sources)}},[t,r]),(0,n.jsx)("div",{"data-vjs-player":!0,children:(0,n.jsx)("video",{ref:r,className:"video-js vjs-big-play-centered vjs-show-big-play-button-on-pause ".concat(h().player," vjs-owncast")})})},u={position:"absolute",width:"100%",height:"100%"},d=e=>{let{src:t="",width:i,height:r,objectFit:a="fill",duration:l="1s"}=e,o=(0,s.useMemo)(()=>({display:"inline-block",position:"relative",width:i,height:r}),[i,r]),h=(0,s.useMemo)(()=>[{...u,objectFit:a,opacity:0,transition:"opacity ".concat(l)},{...u,objectFit:a,opacity:1,transition:"opacity ".concat(l)},{...u,objectFit:a,opacity:0}],[a,l]),[c,d]=(0,s.useState)(0),[m,g]=(0,s.useState)(["",""]),f=t!==m[1]?t:"",p=()=>{d((c+1)%3),g([m[1],f])};return(0,n.jsx)("span",{style:o,children:[...m,f].map((e,t)=>""!==e&&(0,n.jsx)("img",{src:e,alt:"",style:h[t],onLoad:2===t?p:void 0},e))})};d.defaultProps={objectFit:"fill",duration:"3s"};var m=i(70034),g=i.n(m);let f=e=>{let t,{online:i,initialSrc:r,src:a}=e,[l,o]=(0,s.useState)(r),[h,c]=(0,s.useState)("0s");return(0,s.useEffect)(()=>{clearInterval(t),t=setInterval(()=>{"0s"===h&&c("3s"),o("".concat(a,"?").concat(Date.now()))},2e4)},[]),(0,n.jsxs)("div",{className:g().poster,children:[!i&&(0,n.jsx)("img",{src:r,alt:"logo"}),i&&(0,n.jsx)(d,{src:l,duration:h,objectFit:"cover",width:"100%",height:"100%"})]})};var p=i(72581),y=i(77466),b=class{stop(){clearInterval(this.sendMetricsTimer),this.player.off()}setClockSkew(e){this.clockSkewMs=e}videoJSReady(){let e=this.player.tech({IWillNotUseThisInPlugins:!0});this.supportsDetailedMetrics=!!e,e.on("usage",e=>{"vhs-unknown-waiting"===e.name&&this.setIsBuffering(!0),"vhs-rendition-change-abr"===e.name&&this.incrementQualityVariantChanges()});let t=this.player.textTracks();t.addEventListener("cuechange",()=>{this.incrementQualityVariantChanges()})}handlePlaying(){clearInterval(this.collectPlaybackMetricsTimer),this.collectPlaybackMetricsTimer=setInterval(()=>{this.collectPlaybackMetrics()},5e3)}handleEnded(){clearInterval(this.collectPlaybackMetricsTimer)}handleBuffering(){this.incrementErrorCount(1),this.setIsBuffering(!0)}handleNoLongerBuffering(){this.setIsBuffering(!1)}handleError(){this.incrementErrorCount(1)}incrementErrorCount(e){this.errors+=e}incrementQualityVariantChanges(){if(!this.hasPerformedInitialVariantChange){this.hasPerformedInitialVariantChange=!0;return}this.qualityVariantChanges++}setIsBuffering(e){if(this.isBuffering=e,!e){clearTimeout(this.bufferingDurationTimer);return}this.bufferingDurationTimer=setTimeout(()=>{this.incrementErrorCount(1)},500)}trackSegmentDownloadTime(e){this.segmentDownloadTime.push(e)}trackBandwidth(e){this.bandwidthTracking.push(e)}trackLatency(e){this.latencyTracking.push(e)}collectPlaybackMetrics(){let e=this.player.tech({IWillNotUseThisInPlugins:!0});if(!e||!e.vhs||this.player.paused())return;let t=this.player.networkState();if(2!==t)return;let i=e.vhs.systemBandwidth;this.trackBandwidth(i);try{let n=function(e){let t;let i=e.vhs.playlists.media(),n=e.currentTime();for(let s=0,r=i.segments.length;s<r;s++)if(n<i.segments[s].end){t=i.segments[s];break}return t||([t]=i.segments),t}(e);if(!n||!n.dateTimeObject)return;let s=n.dateTimeObject.getTime(),r=new Date().getTime()+this.clockSkewMs,a=r-s;if(a<0||a/1e3>=40)return;this.trackLatency(a)}catch(l){console.warn(l)}}async send(){let e;if(0===this.segmentDownloadTime.length||!this.player||this.player.paused())return;let t=this.errors;if(this.supportsDetailedMetrics){let i=e=>e.reduce((e,t)=>e+t,0)/e.length,n=i(this.segmentDownloadTime)/1e3,s=i(this.bandwidthTracking)/1e3,r=i(this.latencyTracking)/1e3;e={bandwidth:Math.round(1e3*s)/1e3,latency:Math.round(1e3*r)/1e3,downloadDuration:Math.round(1e3*n)/1e3,errors:t+(this.isBuffering?1:0),qualityVariantChanges:this.qualityVariantChanges}}else e={errors:t+(this.isBuffering?1:0)};this.errors=0,this.qualityVariantChanges=0,this.segmentDownloadTime=[],this.bandwidthTracking=[],this.latencyTracking=[];let a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};try{await fetch("/api/metrics/playback",a)}catch(l){console.error(l)}}constructor(e,t){var i=this;this.player=e,this.supportsDetailedMetrics=!1,this.hasPerformedInitialVariantChange=!1,this.clockSkewMs=0,this.segmentDownloadTime=[],this.bandwidthTracking=[],this.latencyTracking=[],this.errors=0,this.qualityVariantChanges=0,this.isBuffering=!1,this.bufferingDurationTimer=0,this.collectPlaybackMetricsTimer=0,this.videoJSReady=this.videoJSReady.bind(this),this.handlePlaying=this.handlePlaying.bind(this),this.handleBuffering=this.handleBuffering.bind(this),this.handleEnded=this.handleEnded.bind(this),this.handleError=this.handleError.bind(this),this.send=this.send.bind(this),this.collectPlaybackMetrics=this.collectPlaybackMetrics.bind(this),this.handleNoLongerBuffering=this.handleNoLongerBuffering.bind(this),this.sendMetricsTimer=0,this.player.on("canplaythrough",this.handleNoLongerBuffering),this.player.on("error",this.handleError),this.player.on("stalled",this.handleBuffering),this.player.on("waiting",this.handleBuffering),this.player.on("playing",this.handlePlaying),this.player.on("ended",this.handleEnded);let n=t.xhr;t.Vhs.xhr=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];if(t[0].uri.match(".ts")){let r=new Date,a=t[1];t[1]=(e,t,n)=>{let s=new Date,l=s.getTime()-r.getTime();i.trackSegmentDownloadTime(l),a(e,t,n)}}return n(...t)},this.videoJSReady(),this.sendMetricsTimer=setInterval(()=>{this.send()},1e4)}},T=function(e,t,i,n){let s=t.getComponent("MenuItem"),r=t.getComponent("MenuItem"),a=t.getComponent("MenuButton"),l=new r(e,{selectable:!0});l.setAttribute("class","latency-toggle-item"),l.on("click",()=>{n()});let o=new class extends s{createEl(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"button",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=super.createEl(e,t,i);return n.innerHTML='<hr style="opacity: 0.3; margin-left: 10px; margin-right: 10px;" />',n}constructor(e,t){super(e,t)}}(e,{selectable:!1});class h extends a{createItems(){let t=e.tech({IWillNotUseThisInPlugins:!0}),n=new r(e,{selectable:!0,label:"Auto"}),s=i.map(i=>{let n=new r(e,{selectable:!0,label:i.name});return n.on("click",()=>{if(!t){console.warn("Invalid attempt to access null player tech");return}t.vhs.representations().forEach((e,t)=>{e.enabled(t===i.index)}),n.selected(!1)}),n});n.on("click",()=>{t.vhs.representations().forEach(e=>{e.enabled(!0)}),n.selected(!1)});let a=!!t&&!!t.vhs;return i.length<2&&a?[l]:i.length>1&&a?[n,...s,o,l]:a||1!==i.length?[n,...s]:[]}constructor(){super(e)}}let c=e.tech({IWillNotUseThisInPlugins:!0});if(i.length<2&&(!c||!c.vhs))return;t.registerComponent("MenuButton",h);let u=new h;return u.addClass("vjs-quality-selector"),u},v=class{setClockSkew(e){this.clockSkewMs=e}check(){if(new Date().getTime()-this.startupTime.getTime()<1e4||this.player.paused()||this.player.seeking()||this.inTimeout||!this.enabled)return;let e=this.player.tech({IWillNotUseThisInPlugins:!0});if(!e||!e.vhs)return;let t=this.player.networkState();if(2!==t)return;let i=0;try{if(0===e.vhs.stats.buffered.length){this.timeout();return}e.vhs.stats.buffered.forEach(e=>{i+=e.end-e.start})}catch(n){console.error(n)}let s=e.vhs.playlists.media(),r=s.attributes.BANDWIDTH,a=e.vhs.systemBandwidth,l=a/r;try{let o=function(e){let t;let i=e.vhs.playlists.media(),n=e.currentTime();for(let s=0,r=i.segments.length;s<r;s++)if(n<i.segments[s].end){t=i.segments[s];break}return t||([t]=i.segments),t}(e);if(!o)return;if(l<1.8&&i<6*o.duration){this.timeout();return}let h=Math.max(4e3,1e3*o.duration*1.8),c=this.bufferedAtLatency.concat([h]),u=c.reduce((e,t)=>e+t,0)/c.length,d=Math.max(1.4*u,Math.min(1e3*o.duration*2.6,15e3));u>=d&&(d=u+3e3);let m=o.dateTimeObject.getTime(),g=new Date().getTime()+this.clockSkewMs,f=g-m;if(this.currentLatency=f,Math.abs(f)>8e4){this.timeout();return}if(f>d){if(this.shouldJumpToLive()&&f>d+5e3){let p=f/1e3-3*o.duration,y=this.player.currentTime()+p;console.info("latency",f/1e3,"jumping",p,"to live from ",this.player.currentTime()," to ",y);let b=e.vhs.stats.buffered[0].end,T=e.vhs.stats.buffered[0].start;if(y>T<b){this.jump(y);return}}let v=.33*l;(v=Math.max(Math.min(v,1.08),1))>this.playbackRate+.02&&(v=this.playbackRate+.02),v=Math.round(1e3*v)/1e3,this.start(v)}else f<=u&&this.stop();console.info("latency",f/1e3,"min",u/1e3,"max",d/1e3,"playback rate",this.playbackRate,"enabled:",this.enabled,"running: ",this.running,"skew: ",this.clockSkewMs,"rebuffer events: ",this.bufferingCounter)}catch(k){}}shouldJumpToLive(){if(this.bufferingCounter>1)return!1;let e=new Date().getTime(),t=e-this.lastJumpOccurred;return t>2e4}jump(e){this.jumpingToLiveIgnoreBuffer=!0,this.performedInitialLiveJump=!0,this.lastJumpOccurred=new Date,console.info("current time",this.player.currentTime(),"seeking to",e),this.player.currentTime(e),setTimeout(()=>{this.jumpingToLiveIgnoreBuffer=!1},5e3)}setPlaybackRate(e){this.playbackRate=e,this.player.playbackRate(e)}start(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;!this.inTimeout&&this.enabled&&e!==this.playbackRate&&(this.running=!0,this.setPlaybackRate(e))}stop(){this.running&&console.log("stopping latency compensator..."),this.running=!1,this.setPlaybackRate(1)}enable(){this.enabled=!0,clearInterval(this.checkTimer),clearTimeout(this.bufferingTimer),this.checkTimer=setInterval(()=>{this.check()},3e3)}disable(){clearInterval(this.checkTimer),clearTimeout(this.timeoutTimer),this.stop(),this.enabled=!1}timeout(){this.jumpingToLiveIgnoreBuffer||(this.inTimeout=!0,this.stop(),clearTimeout(this.timeoutTimer),this.timeoutTimer=setTimeout(()=>{this.endTimeout()},3e4))}endTimeout(){clearTimeout(this.timeoutTimer),this.inTimeout=!1}handlePlaying(){let e=this.playing;this.playing=!0,clearTimeout(this.bufferingTimer),this.enabled&&this.shouldJumpToLive()&&(e||(this.jumpingToLiveIgnoreBuffer=!0,this.player.liveTracker.seekToLiveEdge(),this.lastJumpOccurred=new Date))}handlePause(){this.playing=!1}handleEnded(){this.enabled&&this.disable()}handleError(){this.enabled&&this.timeout()}countBufferingEvent(){if(this.bufferingCounter+=1,this.bufferingCounter>4){this.disable();return}this.bufferedAtLatency.push(this.currentLatency),console.log("latency compensation timeout due to buffering:",this.bufferingCounter,"buffering events of",4),setTimeout(()=>{this.bufferingCounter>0&&(this.bufferingCounter-=1)},18e4)}handleBuffering(){if(this.enabled&&!this.inTimeout){if(this.jumpingToLiveIgnoreBuffer){this.jumpingToLiveIgnoreBuffer=!1;return}this.timeout(),clearTimeout(this.bufferingTimer),this.bufferingTimer=setTimeout(()=>{this.countBufferingEvent()},200)}}constructor(e){this.player=e,this.playing=!1,this.enabled=!1,this.running=!1,this.inTimeout=!1,this.jumpingToLiveIgnoreBuffer=!1,this.timeoutTimer=0,this.checkTimer=0,this.bufferingCounter=0,this.bufferingTimer=0,this.playbackRate=1,this.lastJumpOccurred=null,this.startupTime=new Date,this.clockSkewMs=0,this.currentLatency=null,this.bufferedAtLatency=[],this.player.on("playing",this.handlePlaying.bind(this)),this.player.on("pause",this.handlePause.bind(this)),this.player.on("error",this.handleError.bind(this)),this.player.on("waiting",this.handleBuffering.bind(this)),this.player.on("stalled",this.handleBuffering.bind(this)),this.player.on("ended",this.handleEnded.bind(this)),this.player.on("canplaythrough",this.handlePlaying.bind(this)),this.player.on("canplay",this.handlePlaying.bind(this)),this.check=this.check.bind(this),this.start=this.start.bind(this),this.enable=this.enable.bind(this),this.countBufferingEvent=this.countBufferingEvent.bind(this)}};let k="owncast_volume",w="latencyCompensatorEnabled",C=new class{start(){this.stop(),this.timer=setInterval(()=>{!function(){try{fetch("/api/ping")}catch(e){console.error(e)}}()},4e3)}stop(){clearInterval(this.timer)}},B=null,I=null,E=!1;async function P(){let e=[];try{let t=await fetch("/api/video/variants");e=await t.json()}catch(i){console.error(i)}return e}let j=e=>{let{source:t,online:i}=e,l=s.useRef(null),[o,h]=(0,r.FV)(y.We),u=(0,r.sJ)(y.g8),d=()=>{try{l.current.volume((0,p.$o)(k)||1)}catch(e){console.warn(e)}},m=()=>{(0,p.qQ)(k,l.current.muted()?0:l.current.volume())},g=()=>{l.current.paused()?l.current.play():l.current.pause()},j=()=>{l.current.muted()||0===l.current.volume()?l.current.volume(.7):l.current.volume(0)},M=()=>{l.current.isFullscreen()?l.current.exitFullscreen():l.current.requestFullscreen()},x=e=>{let t=document.querySelector(".latency-toggle-item > .vjs-menu-item-text");t&&(t.innerHTML=e)},S=()=>{I&&I.stop(),E=!0,(I=new v(l.current)).setClockSkew(u),I.enable(),(0,p.qQ)(w,!0),x("disable minimized latency")},L=()=>{I&&I.disable(),I=null,E=!1,(0,p.qQ)(w,!1),x('<span style="font-size: 0.8em">enable minimized latency (experimental)</span>')},D=()=>{E?L():S()},R=e=>{let t=e.tech({IWillNotUseThisInPlugins:!0});if(!t||!t.vhs)return;let i=(0,p.$o)(w);"true"===i&&t&&t.vhs?S():L()},N=async(e,t)=>{let i=await P(),n=T(e,t,i,D);e.controlBar.addChild(n,{},e.controlBar.children_.length-2),R(e)},J=(e,t)=>{if(window.hasOwnProperty("WebKitPlaybackTargetAvailabilityEvent")){let i=t.getComponent("Button"),n=t.extend(i,{constructor(){i.call(this,e)},handleClick(){try{let e=document.getElementsByTagName("video")[0];e.webkitShowPlaybackTargetPicker()}catch(t){console.error(t)}}}),s=e.controlBar.addChild(new n);s.addClass("vjs-airplay")}};(0,a.y1)("space",e=>{e.preventDefault(),g()}),(0,a.y1)("f",M,{enableOnContentEditable:!1}),(0,a.y1)("m",j,{enableOnContentEditable:!1}),(0,a.y1)("0",()=>l.current.volume(l.current.volume()+.1),{enableOnContentEditable:!1}),(0,a.y1)("9",()=>l.current.volume(l.current.volume()-.1),{enableOnContentEditable:!1});let O=(e,t)=>{l.current=e,d(),J(e,t),e.on("waiting",()=>{console.debug("player is waiting")}),e.on("dispose",()=>{console.debug("player will dispose"),C.stop()}),e.on("playing",()=>{console.debug("player is playing"),C.start(),h(!0)}),e.on("pause",()=>{console.debug("player is paused"),C.stop(),h(!1)}),e.on("ended",()=>{console.debug("player is ended"),C.stop(),h(!1)}),t.hookOnce(),e.on("volumechange",m),(B=new b(e,t)).setClockSkew(u),N(e,t)};return(0,s.useEffect)(()=>{B&&B.setClockSkew(u)},[u]),(0,s.useEffect)(()=>()=>{L(),null==B||B.stop()},[]),(0,n.jsxs)("div",{style:{display:"grid",width:"100% !important",aspectRatio:"16/9"},children:[i&&(0,n.jsx)("div",{style:{gridColumn:1,gridRow:1},children:(0,n.jsx)(c,{options:{autoplay:!1,controls:!0,responsive:!0,fluid:!1,playsinline:!0,liveui:!0,preload:"auto",controlBar:{progressControl:{seekBar:!1}},html5:{vhs:{enableLowInitialPlaylist:!0,experimentalBufferBasedABR:!0,useNetworkInformationApi:!0,maxPlaylistRetries:30}},liveTracker:{trackingThreshold:0,liveTolerance:15},sources:[{src:t,type:"application/x-mpegURL"}]},onReady:O})}),(0,n.jsx)("div",{style:{gridColumn:1,gridRow:1},children:!o&&(0,n.jsx)(f,{online:i,initialSrc:"/thumbnail.jpg",src:"/thumbnail.jpg"})})]})};var M=j},76161:function(e){e.exports={player:"VideoJS_player__GT8FN",poster:"VideoJS_poster__nlmqm"}},70034:function(e){e.exports={poster:"VideoPoster_poster__RDkSk"}},25893:function(){}}]);