"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6960],{73615:function(e,t,a){a.d(t,{E:function(){return r}});var n=a(85893);a(67294);var i=a(94184),s=a.n(i);let r=e=>{let{status:t}=e,{type:a,icon:i,message:r}=t||{},l=s()({"status-container":!0,["status-".concat(a)]:a,empty:!r});return(0,n.jsxs)("span",{className:l,children:[i?(0,n.jsx)("span",{className:"status-icon",children:i}):null,r?(0,n.jsx)("span",{className:"status-message",children:r}):null]})};t.Z=r},79139:function(e,t,a){a.d(t,{A8:function(){return u},Kx:function(){return c},Sk:function(){return h},mG:function(){return d},nv:function(){return f},xA:function(){return m}});var n=a(85893);a(67294);var i=a(94184),s=a.n(i),r=a(79531),l=a(79915),o=a(73615);let c="default",u="password",d="numeric",h="textarea",m="url",f=e=>{let{className:t,disabled:a,fieldName:i,label:c,maxLength:f,onBlur:p,onChange:g,onPressEnter:b,pattern:y,placeholder:x,required:v,status:w,tip:j,type:k,useTrim:P,value:L}=e,N=e=>{if(g){let t=k===d?e:e.target.value;g({fieldName:i,value:P?t.trim():t})}},S=e=>{let t=e.target.value;p&&p({value:t})},A=()=>{b&&b()},T=r.Z,C={};k===h?(T=r.Z.TextArea,C={autoSize:!0}):k===u?(T=r.Z.Password,C={visibilityToggle:!0}):k===d?(T=l.Z,C={type:"number",min:1,max:10**f-1}):k===m&&(C={type:"url",pattern:y});let E="field-".concat(i),{type:O}=w||{},G=s()({"formfield-container":!0,"textfield-container":!0,["type-".concat(k)]:!0,required:v,["status-".concat(O)]:w});return(0,n.jsxs)("div",{className:G,children:[c?(0,n.jsx)("div",{className:"label-side",children:(0,n.jsx)("label",{htmlFor:E,className:"formfield-label",children:c})}):null,(0,n.jsxs)("div",{className:"input-side",children:[(0,n.jsx)("div",{className:"input-group",children:(0,n.jsx)(T,{id:E,className:"field ".concat(t," ").concat(E),...C,...k!==d&&{allowClear:!0},placeholder:x,maxLength:f,onChange:N,onBlur:S,onPressEnter:A,disabled:a,value:L})}),(0,n.jsx)(o.E,{status:w}),(0,n.jsx)("p",{className:"field-tip",children:j})]})]})};f.defaultProps={className:"",disabled:!1,label:"",maxLength:255,placeholder:"",required:!1,status:null,tip:"",type:c,value:"",pattern:"",useTrim:!1,useTrimLead:!1,onSubmit:()=>{},onBlur:()=>{},onChange:()=>{},onPressEnter:()=>{}}},46551:function(e,t,a){a.d(t,{$7:function(){return g},Kx:function(){return m},Sk:function(){return f},xA:function(){return p}});var n=a(85893),i=a(71577),s=a(94184),r=a.n(s),l=a(67294),o=a(90745),c=a(41983),u=a(99519),d=a(73615),h=a(79139);let m="default",f="textarea",p="url",g=e=>{let{apiPath:t,configPath:a="",initialValue:s,useTrim:m,useTrimLead:f,...p}=e,[g,b]=(0,l.useState)(null),[y,x]=(0,l.useState)(!1),v=(0,l.useContext)(u.aC),{setFieldInConfigState:w}=v||{},j=null,{fieldName:k,required:P,tip:L,status:N,value:S,onChange:A,onSubmit:T}=p,C=()=>{b(null),x(!1),clearTimeout(j),j=null};(0,l.useEffect)(()=>{P&&(""===S||null===S)||S===s?x(!1):(C(),x(!0))},[S]);let E=e=>{let{fieldName:t,value:a}=e;if(A){let n=a;m?n=a.trim():f&&(n=a.replace(/^\s+/g,"")),A({fieldName:t,value:n})}},O=e=>{let{value:t}=e;A&&P&&""===t&&A({fieldName:k,value:s})},G=async()=>{(P&&""!==S||S!==s)&&(b((0,c.kg)(c.Jk)),await (0,o.Si)({apiPath:t,data:{value:S},onSuccess:()=>{w({fieldName:k,value:S,path:a}),b((0,c.kg)(c.zv))},onError:e=>{b((0,c.kg)(c.Un,"There was an error: ".concat(e)))}}),j=setTimeout(C,o.sI),T&&T())},M=r()({"textfield-with-submit-container":!0,submittable:y});return(0,n.jsxs)("div",{className:M,children:[(0,n.jsx)("div",{className:"textfield-component",children:(0,n.jsx)(h.nv,{...p,onSubmit:null,onBlur:O,onChange:E})}),(0,n.jsxs)("div",{className:"formfield-container lower-container",children:[(0,n.jsx)("p",{className:"label-spacer"}),(0,n.jsxs)("div",{className:"lower-content",children:[(0,n.jsx)("div",{className:"field-tip",children:L}),(0,n.jsx)(d.E,{status:N||g}),(0,n.jsx)("div",{className:"update-button-container",children:(0,n.jsx)(i.Z,{type:"primary",size:"small",className:"submit-button",onClick:G,disabled:!y,children:"Update"})})]})]})]})};g.defaultProps={configPath:"",initialValue:""}},6960:function(e,t,a){a.d(t,{l:function(){return z}});var n=a(85893),i=a(99519),s=a(82661),r=a(67294),l=a(45697),o=a.n(l),c=a(41664),u=a.n(c),d=a(9008),h=a.n(d),m=a(11699),f=a(11163),p=a(97183),g=a(14670),b=a(66516),y=a(26713),x=a(94199),v=a(71577),w=a(94184),j=a.n(w),k=a(5152),P=a.n(k),L=a(64777),N=a(70241),S=a(50738),A=a(46551),T=a(90745),C=a(79531),E=a(85402),O=a(41983);let{TextArea:G}=C.Z,M=e=>{let{open:t,handleClose:a}=e,[i,s]=(0,r.useState)(""),[l,o]=(0,r.useState)(!1),[c,u]=(0,r.useState)(null);function d(){o(!1),u(null),a()}async function h(){o(!0);try{await (0,L.rQ)(L.e_,{data:{value:i},method:"POST",auth:!0}),u(O.zv),setTimeout(d,1e3)}catch(e){console.error(e),u(O.Un)}o(!1)}return(0,n.jsxs)(E.Z,{destroyOnClose:!0,width:600,title:"Post to Followers",open:t,onCancel:a,footer:[(0,n.jsx)(v.Z,{onClick:()=>a(),children:"Cancel"}),(0,n.jsx)(v.Z,{type:"primary",onClick:h,disabled:l||c,loading:l,children:(null==c?void 0:c.toUpperCase())||"Post"})],children:[(0,n.jsx)("h3",{children:"Tell the world about your future streaming plans or let your followers know to tune in."}),(0,n.jsx)(G,{placeholder:"I'm still live, come join me!",size:"large",showCount:!0,maxLength:500,style:{height:"150px",width:"100%"},onChange:function(e){s(e.target.value)}})]})},U=P()(()=>Promise.all([a.e(2074),a.e(1264)]).then(a.t.bind(a,63126,23)),{loadableGenerated:{webpack:()=>[63126]},ssr:!1}),q=P()(()=>Promise.all([a.e(2074),a.e(863)]).then(a.t.bind(a,50863,23)),{loadableGenerated:{webpack:()=>[50863]},ssr:!1}),D=P()(()=>Promise.all([a.e(2074),a.e(9073)]).then(a.t.bind(a,99073,23)),{loadableGenerated:{webpack:()=>[99073]},ssr:!1}),F=P()(()=>Promise.all([a.e(2074),a.e(7090)]).then(a.t.bind(a,87090,23)),{loadableGenerated:{webpack:()=>[87090]},ssr:!1}),I=P()(()=>Promise.all([a.e(2074),a.e(4927)]).then(a.t.bind(a,64927,23)),{loadableGenerated:{webpack:()=>[64927]},ssr:!1}),Z=P()(()=>Promise.all([a.e(2074),a.e(7434)]).then(a.t.bind(a,27434,23)),{loadableGenerated:{webpack:()=>[27434]},ssr:!1}),H=P()(()=>Promise.all([a.e(2074),a.e(3840)]).then(a.t.bind(a,3840,23)),{loadableGenerated:{webpack:()=>[3840]},ssr:!1}),R=P()(()=>Promise.all([a.e(2074),a.e(5672)]).then(a.t.bind(a,65672,23)),{loadableGenerated:{webpack:()=>[65672]},ssr:!1}),W=P()(()=>Promise.all([a.e(2074),a.e(5258)]).then(a.t.bind(a,85258,23)),{loadableGenerated:{webpack:()=>[85258]},ssr:!1}),B=P()(()=>Promise.all([a.e(2074),a.e(775)]).then(a.t.bind(a,10775,23)),{loadableGenerated:{webpack:()=>[10775]},ssr:!1}),K=e=>{let{children:t}=e,a=(0,r.useContext)(i.aC),{serverConfig:l,online:o,broadcaster:c,versionNumber:d}=a||{},{instanceDetails:w,chatDisabled:k,federation:P}=l,{enabled:C}=P,[E,O]=(0,r.useState)(""),[G,K]=(0,r.useState)(!1),z=(0,r.useContext)(s.k),_=(0,f.useRouter)(),{route:V}=_||{},{Header:Q,Footer:X,Content:J,Sider:$}=p.Z,[Y,ee]=(0,r.useState)(""),et=async()=>{try{let e=await (0,L.GR)(d);ee(e)}catch(t){console.log("==== error",t)}};(0,r.useEffect)(()=>{et()},[d]),(0,r.useEffect)(()=>{O(w.streamTitle)},[w]);let ea=e=>{let{value:t}=e;O(t)},en=()=>{K(!0)},ei=j()({"app-container":!0,online:o}),es=()=>{z.setMessage(null)},er=z.message?(0,n.jsx)(g.Z,{message:z.message,afterClose:es,banner:!0,closable:!0}):null,el=c?(0,N.wS)((0,m.Z)(new Date,new Date(c.time))):"",eo=o?(0,n.jsx)(I,{}):(0,n.jsx)(Z,{}),ec=(0,n.jsxs)("div",{className:"online-status-indicator",children:[(0,n.jsx)("span",{className:"status-label",children:o?"Online ".concat(el):"Offline"}),(0,n.jsx)("span",{className:"status-icon",children:eo})]}),eu=[{label:(0,n.jsx)(u(),{href:"/admin/webhooks",children:"Webhooks"}),key:"webhooks"},{label:(0,n.jsx)(u(),{href:"/admin/access-tokens",children:"Access Tokens"}),key:"access-tokens"},{label:(0,n.jsx)(u(),{href:"/admin/actions",children:"External Actions"}),key:"actions"}],ed=[{label:(0,n.jsx)(u(),{href:"/admin/chat/messages",children:"Messages"}),key:"messages"},{label:(0,n.jsx)(u(),{href:"/admin/chat/users",children:"Users"}),key:"chat-users"},{label:(0,n.jsx)(u(),{href:"/admin/chat/emojis",children:"Emojis"}),key:"emojis"}],eh=[{label:(0,n.jsx)(u(),{href:"/admin/hardware-info",children:"Hardware"}),key:"hardware-info"},{label:(0,n.jsx)(u(),{href:"/admin/stream-health",children:"Stream Health"}),key:"stream-health"},{label:(0,n.jsx)(u(),{href:"/admin/logs",children:"Logs"}),key:"logs"},C&&{label:(0,n.jsx)(u(),{href:"/admin/federation/actions",children:"Social Actions"}),key:"federation-activities"}],em=[{label:(0,n.jsx)(u(),{href:"/admin/config/general",children:"General"}),key:"config-public-details"},{label:(0,n.jsx)(u(),{href:"/admin/config/server",children:"Server Setup"}),key:"config-server"},{label:(0,n.jsx)(u(),{href:"/admin/config-video",children:"Video"}),key:"config-video"},{label:(0,n.jsx)(u(),{href:"/admin/config-chat",children:"Chat"}),key:"config-chat"},{label:(0,n.jsx)(u(),{href:"/admin/config-federation",children:"Social"}),key:"config-federation"},{label:(0,n.jsx)(u(),{href:"/admin/config-notify",children:"Notifications"}),key:"config-notify"}],ef=[{label:(0,n.jsx)(u(),{href:"/admin",children:"Home"}),icon:(0,n.jsx)(q,{}),key:"home"},{label:(0,n.jsx)(u(),{href:"/admin/viewer-info",children:"Viewers"}),icon:(0,n.jsx)(D,{}),key:"viewer-info"},!k&&{label:(0,n.jsx)(u(),{href:"/admin/viewer-info",children:"Chat & Users"}),icon:(0,n.jsx)(R,{}),children:ed,key:"chat-and-users"},C&&{key:"fediverse-followers",label:(0,n.jsx)(u(),{href:"/admin/federation/followers",children:"Followers"}),icon:(0,n.jsx)("img",{alt:"fediverse icon",src:"/img/fediverse-black.png",width:"17rem",style:{opacity:.6,position:"relative",top:"-1px"}})},{key:"configuration",label:"Configuration",icon:(0,n.jsx)(U,{}),children:em},{key:"utilities",label:"Utilities",icon:(0,n.jsx)(F,{}),children:eh},{key:"integrations",label:"Integrations",icon:(0,n.jsx)(W,{}),children:eu},Y&&{key:"upgrade",label:(0,n.jsx)(u(),{href:"/upgrade",children:"Upgrade to v".concat("".concat(Y)||"")})},{key:"help",label:(0,n.jsx)(u(),{href:"/admin/help",children:"Help"}),icon:(0,n.jsx)(H,{})}];return(0,n.jsxs)(p.Z,{className:ei,children:[(0,n.jsxs)(h(),{children:[(0,n.jsx)("title",{children:"Owncast Admin"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/img/favicon/favicon-32x32.png"})]}),(0,n.jsxs)($,{width:240,className:"side-nav",children:[(0,n.jsxs)("h1",{className:"owncast-title",children:[(0,n.jsx)("span",{className:"logo-container",children:(0,n.jsx)(S.C,{variant:"simple"})}),(0,n.jsx)("span",{className:"title-label",children:"Owncast Admin"})]}),(0,n.jsx)(b.Z,{defaultSelectedKeys:[V.substring(1)||"home"],defaultOpenKeys:Y?["utilities-menu"]:[],mode:"inline",className:"menu-container",items:ef})]}),(0,n.jsxs)(p.Z,{className:"layout-main",children:[(0,n.jsxs)(Q,{className:"layout-header",children:[(0,n.jsx)(y.Z,{direction:"horizontal",children:(0,n.jsx)(x.Z,{title:"Compose post to your social followers",children:(0,n.jsx)(v.Z,{type:"link",icon:(0,n.jsx)(B,{}),size:"small",onClick:en,style:{display:C?"block":"none",margin:"10px"},children:"Compose Post"})})}),(0,n.jsx)("div",{className:"global-stream-title-container",children:(0,n.jsx)(A.$7,{fieldName:"streamTitle",...T.$t,placeholder:"What are you streaming now? (Stream title)",value:E,initialValue:w.streamTitle,onChange:ea})}),(0,n.jsx)(y.Z,{direction:"horizontal",children:ec})]}),er,(0,n.jsx)(J,{className:"main-content-container",children:t}),(0,n.jsx)(X,{className:"footer-container",children:(0,n.jsxs)("a",{href:"https://owncast.online/?source=admin",target:"_blank",rel:"noopener noreferrer",children:["About Owncast v",d]})})]}),(0,n.jsx)(M,{open:G,handleClose:()=>K(!1)})]})};K.propTypes={children:o().element.isRequired};let z=e=>{let{page:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/main-layout.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/form-textfields.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/config-socialhandles.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/config-storage.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/config-edit-string-tags.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/config-video-variants.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/config-public-details.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/home.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/chat.css"}),(0,n.jsx)(i.ZP,{children:(0,n.jsx)(s.Z,{children:(0,n.jsx)(K,{children:t})})})]})}},82661:function(e,t,a){a.d(t,{k:function(){return l}});var n=a(85893),i=a(67294),s=a(45697),r=a.n(s);let l=i.createContext({message:null,setMessage:e=>null}),o=e=>{let{children:t}=e,[a,s]=(0,i.useState)("");return(0,n.jsx)(l.Provider,{value:{message:a,setMessage:s},children:t})};o.propTypes={children:r().element.isRequired},t.Z=o},90745:function(e,t,a){a.d(t,{$Z:function(){return ef},$t:function(){return P},$w:function(){return h},AA:function(){return o},AN:function(){return B},AP:function(){return g},BF:function(){return V},B_:function(){return J},CJ:function(){return b},CQ:function(){return v},Dg:function(){return W},EY:function(){return q},FE:function(){return _},HM:function(){return es},I$:function(){return el},IX:function(){return S},KB:function(){return C},Kl:function(){return K},LC:function(){return z},ME:function(){return M},P:function(){return D},RE:function(){return k},SS:function(){return ei},Si:function(){return j},Xc:function(){return Q},Xq:function(){return et},ZQ:function(){return A},_X:function(){return F},c9:function(){return m},cf:function(){return y},cj:function(){return G},d$:function(){return c},dL:function(){return Y},dR:function(){return $},dj:function(){return R},gX:function(){return I},i3:function(){return eo},kB:function(){return H},lT:function(){return O},mv:function(){return em},nm:function(){return ee},os:function(){return x},oy:function(){return eh},pE:function(){return w},rE:function(){return E},rd:function(){return N},rs:function(){return L},sI:function(){return l},sv:function(){return f},t$:function(){return er},tQ:function(){return T},vv:function(){return p},wC:function(){return ec},x8:function(){return ea},yC:function(){return en},y_:function(){return U},yi:function(){return X},yj:function(){return Z},z_:function(){return eu},zm:function(){return ed}});var n=a(85893),i=a(64777),s=a(79139),r=a(37174);let l=3e3,o="/pagecontent",c="/customstyles",u="/serverurl",d="/nsfw",h="/s3",m="/socialhandles",f="/video/streamlatencylevel",p="/video/streamoutputvariants",g="/directoryenabled",b="/chat/forbiddenusernames",y="/chat/suggestedusernames",x="/externalactions",v="/video/codec",w="/federation/blockdomains";async function j(e){let{apiPath:t,data:a,onSuccess:n,onError:s}=e,r=await (0,i.rQ)("".concat(i.ao).concat(t),{data:a,method:"POST",auth:!0});r.success&&n?n(r.message):s&&s(r.message)}let k={apiPath:"/name",configPath:"instanceDetails",maxLength:255,placeholder:"Owncast site name",label:"Name",tip:"The name of your Owncast server",required:!0,useTrimLead:!0},P={apiPath:"/streamtitle",configPath:"instanceDetails",maxLength:100,placeholder:"Doing cool things...",label:"Stream Title",tip:"What is your stream about today?"},L={apiPath:"/serversummary",configPath:"instanceDetails",maxLength:500,placeholder:"",label:"About",tip:"A brief blurb about you, your server, or what your stream is about."},N={apiPath:"/offlinemessage",configPath:"instanceDetails",maxLength:2500,placeholder:"An optional message you can leave people when your stream is not live.",label:"Offline Message",tip:"An optional message you can leave people when your stream is not live."},S={apiPath:"/welcomemessage",configPath:"instanceDetails",maxLength:2500,placeholder:"",label:"Welcome Message",tip:"A system chat message sent to viewers when they first connect to chat. Leave blank to disable."},A={apiPath:"/logo",configPath:"instanceDetails",maxLength:255,placeholder:"/img/mylogo.png",label:"Logo",tip:"Upload your logo if you have one (max size 2 MB). We recommend that you use a square image that is at least 256x256. SVGs are discouraged as they cannot be displayed on all social media platforms."},T={apiPath:"/key",configPath:"",maxLength:255,placeholder:"abc123",label:"Admin Password",tip:"Save this password somewhere safe, you will need it to login to the admin dashboard!",required:!0},C={apiPath:"/ffmpegpath",configPath:"",maxLength:255,placeholder:"/usr/local/bin/ffmpeg",label:"FFmpeg Path",tip:"Absolute file path of the FFMPEG application on your server",required:!0},E={apiPath:"/webserverport",configPath:"",maxLength:6,placeholder:"8080",label:"Owncast port",tip:"What port is your Owncast web server listening? Default is 8080",required:!0},O={apiPath:"/rtmpserverport",configPath:"",maxLength:6,placeholder:"1935",label:"RTMP port",tip:"What port should accept inbound broadcasts? Default is 1935",required:!0},G={apiPath:u,configPath:"yp",maxLength:255,placeholder:"https://owncast.mysite.com",label:"Server URL",tip:"The full url to your Owncast server.",type:s.xA,pattern:r.ax,useTrim:!0},M={apiPath:"/sockethostoverride",configPath:"",maxLength:255,placeholder:"https://owncast.mysite.com",label:"Websocket host override",tip:"The direct URL of your Owncast server.",type:s.xA,pattern:r.ax,useTrim:!0},U={apiPath:"/tags",configPath:"instanceDetails",maxLength:24,placeholder:"Add a new tag",required:!0,label:"",tip:""},q={apiPath:d,configPath:"instanceDetails",label:"NSFW?",tip:"Turn this ON if you plan to steam explicit or adult content. Please respectfully set this flag so unexpected eyes won't accidentally see it in the Directory."},D={apiPath:g,configPath:"yp",label:"Enable directory",tip:"Turn this ON to request to show up in the directory."},F={apiPath:"/hideviewercount",configPath:"",label:"Hide viewer count",tip:"Turn this ON to hide the viewer count the web page."},I={framerate:24,videoPassthrough:!1,videoBitrate:800,audioPassthrough:!0,audioBitrate:0,cpuUsageLevel:3,scaledHeight:null,scaledWidth:null,name:""},Z={apiPath:"/chat/disable",configPath:"",label:"Chat",tip:"Turn the chat functionality on/off on your Owncast server.",useSubmit:!0},H={apiPath:"/chat/joinmessagesenabled",configPath:"",label:"Join Messages",tip:"Show when a viewer joins the chat.",useSubmit:!0},R={apiPath:"/chat/establishedusermode",configPath:"",label:"Established users only",tip:"Only users who have previously been established for some time may chat.",useSubmit:!0},W={apiPath:b,placeholder:"username",label:"Forbidden usernames",tip:"A list of words in chat usernames you disallow."},B={apiPath:y,placeholder:"username",label:"Default usernames",tip:"An optional list of chat usernames that new users get assigned. If the list holds less then 10 items, random names will be generated.  Users can change their usernames afterwards and the same username may be given out multple times.",min_not_reached:"At least 10 items are required for this feature.",no_entries:"The default name generator is used."},K={apiPath:"/federation/enable",configPath:"federation",label:"Enable Social Features",tip:"Send and receive activities on the Fediverse.",useSubmit:!0},z={apiPath:"/federation/private",configPath:"federation",label:"Private",tip:"Follow requests will require approval and only followers will see your activity.",useSubmit:!0},_={apiPath:"/federation/showengagement",configPath:"showEngagement",label:"Show engagement",tip:"Following, liking and sharing will appear in the chat feed.",useSubmit:!0},V={apiPath:"/federation/livemessage",configPath:"federation",maxLength:500,placeholder:"My stream has started, tune in!",label:"Now Live message",tip:"The message sent announcing that your live stream has begun. Tags will be automatically added. Leave blank to disable."},Q={apiPath:"/federation/username",configPath:"federation",maxLength:10,placeholder:"owncast",default:"owncast",label:"Username",tip:'The username used for sending and receiving activities from the Fediverse. For example, if you use "bob" as a username you would send messages to the fediverse from @bob@yourserver. Once people start following your instance you should not change this.'},X={apiPath:u,configPath:"yp",maxLength:255,placeholder:"https://owncast.mysite.com",label:"Server URL",tip:"The full url to your Owncast server is required to enable social features. Must use SSL (https). Once people start following your instance you should not change this.",type:s.xA,pattern:r.ax,useTrim:!0},J={apiPath:d,configPath:"instanceDetails",label:"Potentially NSFW",tip:"Turn this ON if you plan to steam explicit or adult content so previews of your stream can be marked as potentially sensitive."},$={apiPath:w,configPath:"federation",label:"Blocked domains",placeholder:"bad.domain.biz",tip:"You can block specific domains from interacting with you."},Y={audioBitrate:{min:600,max:1200,defaultValue:800,unit:"kbps",incrementBy:100,tip:"nothing to see here"},videoPassthrough:{tip:"If enabled, all other settings will be disabled. Otherwise configure as desired."},audioPassthrough:{tip:"If No is selected, then you should set your desired Audio Bitrate."},scaledWidth:{fieldName:"scaledWidth",label:"Resized Width",maxLength:4,placeholder:"1080",tip:"Optionally resize this content's width."},scaledHeight:{fieldName:"scaledHeight",label:"Resized Height",maxLength:4,placeholder:"720",tip:"Optionally resize this content's height."}},ee={min:24,max:120,defaultValue:24,unit:"fps",incrementBy:null,tip:"Reducing your framerate will decrease the amount of video that needs to be encoded and sent to your viewers, saving CPU and bandwidth at the expense of smoothness.  A lower value is generally is fine for most content."},et={[ee.min]:"".concat(ee.min," ").concat(ee.unit),25:" ",30:" ",50:" ",60:" ",90:" ",[ee.max]:"".concat(ee.max," ").concat(ee.unit)},ea={[ee.min]:"".concat(ee.min,"fps - Good for film, presentations, music, low power/bandwidth servers."),25:"25fps - Good for film, presentations, music, low power/bandwidth servers.",30:"30fps - Good for slow/casual games, chat, general purpose.",50:"50fps - Good for fast/action games, sports, HD video.",60:"60fps - Good for fast/action games, sports, HD video.",90:"90fps - Good for newer fast games and hardware.",[ee.max]:"".concat(ee.max,"fps - Experimental, use at your own risk!")},en={min:400,max:6e3,defaultValue:1200,unit:"kbps",incrementBy:100,tip:"The overall quality of your stream is generally impacted most by bitrate."},ei={fieldName:"name",label:"Name",maxLength:15,placeholder:"HD or Low",tip:"Human-readable name for for displaying in the player."},es={[en.min]:{style:{marginLeft:"24px"},label:"".concat(en.min," ").concat(en.unit)},3e3:3e3,4500:4500,[en.max]:{style:{marginLeft:"-10px"},label:"".concat(en.max," ").concat(en.unit)}},er={1:{style:{marginLeft:"15px"},label:(0,n.jsx)("p",{children:"lowest"})},2:"",3:"",4:"",5:{style:{marginLeft:"-15px"},label:(0,n.jsx)("p",{children:"highest"})}},el={1:"Lowest hardware usage - lowest quality video",2:"Low hardware usage - low quality video",3:"Medium hardware usage - average quality video",4:"High hardware usage - high quality video",5:"Highest hardware usage - higher quality video"},eo={VIDEO_HEIGHT:1080,VIDEO_BITRATE:3e3,HELP_TEXT:"You have only set one video quality variant. If your server has the computing resources, consider adding another, lower-quality variant, so more people can view your content!"},ec={url:"",platform:""},eu="OTHER_SOCIAL_HANDLE_OPTION",ed={accessKey:{fieldName:"accessKey",label:"Access Key",maxLength:255,placeholder:"access key 123",tip:""},acl:{fieldName:"acl",label:"ACL",maxLength:255,placeholder:"",tip:"Optional specific access control value to add to your content.  Generally not required."},bucket:{fieldName:"bucket",label:"Bucket",maxLength:255,placeholder:"bucket 123",tip:"Create a new bucket for each Owncast instance you may be running."},endpoint:{fieldName:"endpoint",label:"Endpoint",maxLength:255,placeholder:"https://your.s3.provider.endpoint.com",tip:'The full URL (with "https://") endpoint from your storage provider.',useTrim:!0,type:s.xA,pattern:r.ax},region:{fieldName:"region",label:"Region",maxLength:255,placeholder:"region 123",tip:""},secret:{fieldName:"secret",label:"Secret key",maxLength:255,placeholder:"your secret key",tip:""},servingEndpoint:{fieldName:"servingEndpoint",label:"Serving Endpoint",maxLength:255,placeholder:"http://cdn.ss3.provider.endpoint.com",tip:"Optional URL that content should be accessed from instead of the default.  Used with CDNs and specific storage providers. Generally not required.",type:s.xA,pattern:r.ax,useTrim:!0},forcePathStyle:{fieldName:"forcePathStyle",label:"Force path-style",tip:"If your S3 provider doesn't support virtual-hosted-style URLs set this to ON (i.e. Oracle Cloud Object Storage)"}},eh={webhookUrl:{fieldName:"webhook",label:"Webhook URL",maxLength:255,placeholder:"https://discord.com/api/webhooks/837/jf38-6iNEv",tip:"The webhook assigned to your channel.",type:s.xA,pattern:r.ax,useTrim:!0},goLiveMessage:{fieldName:"goLiveMessage",label:"Go Live Text",maxLength:300,tip:"The text to send when you go live.",placeholder:"I've gone live! Come watch!"}},em={goLiveMessage:{fieldName:"goLiveMessage",label:"Go Live Text",maxLength:200,tip:"The text to send when you go live.",placeholder:"I've gone live! Come watch!"}},ef={apiKey:{fieldName:"apiKey",label:"API Key",maxLength:200,tip:"",placeholder:"gaUQhRC2lqfrEFfElBXJgOctU"},apiSecret:{fieldName:"apiSecret",label:"API Secret",maxLength:200,tip:"",placeholder:"IIz4jFZMWbUKdFOEGUprFjRwIslG56d1SPQlolJYjXwJ2y2qKS"},accessToken:{fieldName:"accessToken",label:"Access Token",maxLength:200,tip:"",placeholder:"952540400-EEiwe9fkuSvWjnNC82YFa9kgpqbyAP3J7FjE2dkka"},accessTokenSecret:{fieldName:"accessTokenSecret",label:"Access Token Secret",maxLength:200,tip:"",placeholder:"xO0AZWNGfZxpNsYPg3zNEKhAsPPGvNZFlzQArA2khI9Kg"},bearerToken:{fieldName:"bearerToken",label:"Bearer Token",maxLength:200,tip:"",placeholder:"AAAAAAAAAAAAAAFqpXwEAAnnepHkjA8XD5ftx5jUadYIRtPtaq7AAAAwpXPpDWKDcdhiWr0tVDjsgW%2B4awGOM9VQ%3XPoMFuWcHsE42TK"},goLiveMessage:{fieldName:"goLiveMessage",label:"Go Live Text",maxLength:200,tip:"The text to send when you go live.",placeholder:"I've gone live! Come watch!"}}},70241:function(e,t,a){a.d(t,{AB:function(){return c},Qr:function(){return r},t5:function(){return s},wS:function(){return o}});var n=a(42238),i=a.n(n);function s(e){let t=e.split(":");t[t.length-1]="";let a=t.join(":");return"[::1]"===(a=a.slice(0,a.length-1))||"127.0.0.1"===a?"Localhost":a}function r(e){return!e||0===Object.keys(e).length&&e.constructor===Object}function l(e,t,a){return String(t.repeat(a)+e).slice(-a)}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Number.isFinite(+e)?Math.abs(e):0,a=Math.floor(t/86400),n=a>0?"".concat(a," day").concat(a>1?"s":""," "):"",i=Math.floor(t/3600%24),s=i||a?l("".concat(i,":"),"0",3):"",r=l("".concat(Math.floor(t/60%60),":"),"0",3),o=l("".concat(Math.floor(t%60)),"0",2);return n+s+r+o}function c(e){let t=i()(e),{device:a,os:n,browser:s}=t,{major:r,name:l}=s,{version:o,name:c}=n,{model:u,type:d}=a;return"libmpv"===e?"mpv media player":l&&r&&c?"".concat(l," ").concat(r," on ").concat(c," ").concat(o,"\n  ").concat(u||d?" (".concat(u||d,")"):""):e}},41983:function(e,t,a){a.d(t,{Jk:function(){return h},Un:function(){return u},dG:function(){return f},kg:function(){return g},zv:function(){return m}});var n=a(85893),i=a(5152),s=a.n(i);let r=s()(()=>Promise.all([a.e(2074),a.e(7431)]).then(a.t.bind(a,37431,23)),{loadableGenerated:{webpack:()=>[37431]},ssr:!1}),l=s()(()=>Promise.all([a.e(2074),a.e(2461)]).then(a.t.bind(a,42461,23)),{loadableGenerated:{webpack:()=>[42461]},ssr:!1}),o=s()(()=>Promise.all([a.e(2074),a.e(628)]).then(a.t.bind(a,628,23)),{loadableGenerated:{webpack:()=>[628]},ssr:!1}),c=s()(()=>Promise.all([a.e(2074),a.e(7282)]).then(a.t.bind(a,97282,23)),{loadableGenerated:{webpack:()=>[97282]},ssr:!1}),u="error",d="invalid",h="proessing",m="success",f="warning",p={[m]:{type:m,icon:(0,n.jsx)(r,{style:{color:"green"}}),message:"Success!"},[u]:{type:u,icon:(0,n.jsx)(l,{style:{color:"red"}}),message:"An error occurred."},[d]:{type:d,icon:(0,n.jsx)(l,{style:{color:"red"}}),message:"An error occurred."},[h]:{type:h,icon:(0,n.jsx)(o,{}),message:""},[f]:{type:f,icon:(0,n.jsx)(c,{style:{color:"#fc0"}}),message:""}};function g(e,t){return e&&p[e]?t?{type:e,icon:p[e].icon,message:t}:p[e]:null}},99519:function(e,t,a){a.d(t,{aC:function(){return d}});var n=a(85893),i=a(67294),s=a(45697),r=a.n(s),l=a(64777),o=a(90745);let c={streamKeys:[],adminPassword:"",instanceDetails:{customStyles:"",extraPageContent:"",logo:"",name:"",nsfw:!1,socialHandles:[],streamTitle:"",summary:"",tags:[],title:"",welcomeMessage:"",offlineMessage:"",appearanceVariables:{}},ffmpegPath:"",rtmpServerPort:"",webServerPort:"",socketHostOverride:null,s3:{accessKey:"",acl:"",bucket:"",enabled:!1,endpoint:"",region:"",secret:"",servingEndpoint:"",forcePathStyle:!1},yp:{enabled:!1,instanceUrl:""},videoSettings:{latencyLevel:4,cpuUsageLevel:3,videoQualityVariants:[o.gX]},federation:{enabled:!1,isPrivate:!1,username:"",goLiveMessage:"",showEngagement:!0,blockedDomains:[]},notifications:{browser:{enabled:!1,goLiveMessage:""},discord:{enabled:!1,webhook:"",goLiveMessage:""},twitter:{enabled:!1,goLiveMessage:"",apiKey:"",apiSecret:"",accessToken:"",accessTokenSecret:"",bearerToken:""}},externalActions:[],supportedCodecs:[],videoCodec:"",forbiddenUsernames:[],suggestedUsernames:[],chatDisabled:!1,chatJoinMessagesEnabled:!0,chatEstablishedUserMode:!1,hideViewerCount:!1},u={broadcastActive:!1,broadcaster:null,currentBroadcast:null,online:!1,viewerCount:0,sessionMaxViewerCount:0,sessionPeakViewerCount:0,overallPeakViewerCount:0,versionNumber:"0.0.0",streamTitle:"",chatDisabled:!1,health:{healthy:!0,healthPercentage:100,message:"",representation:0}},d=i.createContext({...u,serverConfig:c,setFieldInConfigState:e=>null}),h=e=>{let{children:t}=e,[a,s]=(0,i.useState)(u),[r,o]=(0,i.useState)(c),h=async()=>{try{let e=await (0,l.rQ)(l.Q_);s({...e})}catch(t){}},m=async()=>{try{let e=await (0,l.rQ)(l.bl);o(e)}catch(t){}},f=e=>{let{fieldName:t,value:a,path:n}=e,i=n?{...r,[n]:{...r[n],[t]:a}}:{...r,[t]:a};o(i)};(0,i.useEffect)(()=>{let e=null;return h(),e=setInterval(h,l.NE),m(),()=>{clearInterval(e)}},[]);let p={...a,serverConfig:r,setFieldInConfigState:f};return(0,n.jsx)(d.Provider,{value:p,children:t})};h.propTypes={children:r().element.isRequired},t.ZP=h},37174:function(e,t,a){a.d(t,{Kf:function(){return s},ax:function(){return n},bu:function(){return r},jv:function(){return i}});let n="https?://.*";function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["http:","https:"];try{let a=new URL(e);if(""===a.protocol||""===a.hostname||!t.includes(a.protocol))return!1}catch(n){return!1}return!0}function s(e,t){e.startsWith("@")&&(e=e.slice(1));let a=e.split(/:|@/),[n,i,s]=a;return console.log({account:e,protocol:t,service:n,user:i,host:s}),n===t&&3===a.length&&!!n&&!!i&&!!s}function r(e){if(!e.startsWith("matrix:"))return!1;(e=e.slice(7)).startsWith("@")&&(e=e.slice(1));let t=e.split(":"),[a,n]=t;return 2===t.length&&!!a&&!!n}}}]);
//# sourceMappingURL=6960-9b43acc035d01270.js.map