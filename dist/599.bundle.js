"use strict";(self.webpackChunkjugni_swapv2=self.webpackChunkjugni_swapv2||[]).push([[599],{17328:(e,t,s)=>{s.d(t,{AccountCtrl:()=>O,Id:()=>w,ConfigCtrl:()=>j,zv:()=>b,uA:()=>C,ExplorerCtrl:()=>$,jb:()=>F,OptionsCtrl:()=>I,AV:()=>m,ThemeCtrl:()=>Z,ToastCtrl:()=>te,WcConnectionCtrl:()=>K}),Symbol();const n=Symbol(),a=Object.getPrototypeOf,o=new WeakMap,r=(e,t=!0)=>{o.set(e,t)},i=e=>"object"==typeof e&&null!==e,l=new WeakMap,c=new WeakSet,[d]=((e=Object.is,t=((e,t)=>new Proxy(e,t)),s=(e=>i(e)&&!c.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)),d=(e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}}),u=new WeakMap,p=((e,t,s=d)=>{const n=u.get(e);if((null==n?void 0:n[0])===t)return n[1];const a=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return r(a,!0),u.set(e,[t,a]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(a,t))return;const n=Reflect.get(e,t),o={value:n,enumerable:!0,configurable:!0};if(c.has(n))r(n,!1);else if(n instanceof Promise)delete o.value,o.get=()=>s(n);else if(l.has(n)){const[e,t]=l.get(n);o.value=p(e,t(),s)}Object.defineProperty(a,t,o)})),a}),h=new WeakMap,f=[1,1],w=(r=>{if(!i(r))throw new Error("object required");const d=h.get(r);if(d)return d;let u=f[0];const g=new Set,m=(e,t=++f[0])=>{u!==t&&(u=t,g.forEach((s=>s(e,t))))};let b=f[1];const v=e=>(t,s)=>{const n=[...t];n[1]=[e,...n[1]],m(n,s)},C=new Map,y=e=>{var t;const s=C.get(e);s&&(C.delete(e),null==(t=s[1])||t.call(s))},I=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r)),E=t(I,{deleteProperty(e,t){const s=Reflect.get(e,t);y(t);const n=Reflect.deleteProperty(e,t);return n&&m(["delete",[t],s]),n},set(t,r,d,u){const p=Reflect.has(t,r),f=Reflect.get(t,r,u);if(p&&(e(f,d)||h.has(d)&&e(f,h.get(d))))return!0;var b;y(r),i(d)&&(d=(e=>e&&(o.has(e)?o.get(e):a(e)===Object.prototype||a(e)===Array.prototype))(b=d)&&b[n]||null||d);let I=d;if(d instanceof Promise)d.then((e=>{d.status="fulfilled",d.value=e,m(["resolve",[r],e])})).catch((e=>{d.status="rejected",d.reason=e,m(["reject",[r],e])}));else{!l.has(d)&&s(d)&&(I=w(d));const e=!c.has(I)&&l.get(I);e&&((e,t)=>{if(C.has(e))throw new Error("prop listener already exists");if(g.size){const s=t[3](v(e));C.set(e,[t,s])}else C.set(e,[t])})(r,e)}return Reflect.set(t,r,I,u),m(["set",[r],d,f]),!0}});h.set(r,E);const j=[I,(e=++f[1])=>(b===e||g.size||(b=e,C.forEach((([t])=>{const s=t[1](e);s>u&&(u=s)}))),u),p,e=>(g.add(e),1===g.size&&C.forEach((([e,t],s)=>{if(t)throw new Error("remove already exists");const n=e[3](v(s));C.set(s,[e,n])})),()=>{g.delete(e),0===g.size&&C.forEach((([e,t],s)=>{t&&(t(),C.set(s,[e]))}))})];return l.set(E,j),Reflect.ownKeys(r).forEach((e=>{const t=Object.getOwnPropertyDescriptor(r,e);"value"in t&&(E[e]=r[e],delete t.value,delete t.writable),Object.defineProperty(I,e,t)})),E}))=>[w,l,c,e,t,s,d,u,p,h,f])();function u(e={}){return d(e)}function p(e,t,s){const n=l.get(e);let a;n||console.warn("Please use proxy object");const o=[],r=n[3];let i=!1;const c=r((e=>{o.push(e),s?t(o.splice(0)):a||(a=Promise.resolve().then((()=>{a=void 0,i&&t(o.splice(0))})))}));return i=!0,()=>{i=!1,c()}}var h=s(48764);let f;const w={ethereumClient:void 0,setEthereumClient(e){f=e},client(){if(f)return f;throw new Error("ClientCtrl has no client set")}},g=u({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),m={state:g,subscribe:e=>p(g,(()=>e(g))),push(e,t){e!==g.view&&(g.view=e,t&&(g.data=t),g.history.push(e))},reset(e){g.view=e,g.history=[e]},replace(e){g.history.length>1&&(g.history[g.history.length-1]=e,g.view=e)},goBack(){if(g.history.length>1){g.history.pop();const[e]=g.history.slice(-1);g.view=e}},setData(e){g.data=e}},b={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",W3M_VERSION:"W3M_VERSION",W3M_PREFER_INJECTED_URL_FLAG:"w3mPreferInjected",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>typeof window<"u"&&!(!window.matchMedia("(pointer:coarse)").matches&&!/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>b.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){const e=navigator.userAgent.toLowerCase();return b.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,s){if(b.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let n=e;return n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),this.setWalletConnectDeepLink(n,s),`${n}wc?uri=${encodeURIComponent(t)}`},formatUniversalUrl(e,t,s){if(!b.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let n=e;return e.endsWith("/")&&(n=e.slice(0,-1)),this.setWalletConnectDeepLink(n,s),`${n}/wc?uri=${encodeURIComponent(t)}`},wait:async e=>new Promise((t=>{setTimeout(t,e)})),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){localStorage.setItem(b.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))},setWalletConnectAndroidDeepLink(e){const[t]=e.split("?");localStorage.setItem(b.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))},removeWalletConnectDeepLink(){localStorage.removeItem(b.WALLETCONNECT_DEEPLINK_CHOICE)},setWeb3ModalVersionInStorage(){typeof localStorage<"u"&&localStorage.setItem(b.W3M_VERSION,"2.4.2")},getWalletRouterData(){var e;const t=null==(e=m.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t},getSwitchNetworkRouterData(){var e;const t=null==(e=m.state.data)?void 0:e.SwitchNetwork;if(!t)throw new Error('Missing "SwitchNetwork" view data');return t},isPreferInjectedFlag:()=>typeof location<"u"&&new URLSearchParams(location.search).has(b.W3M_PREFER_INJECTED_URL_FLAG)},v=u({enabled:typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),C={state:v,subscribe:e=>p(v.events,(()=>e(function(e,t){const s=l.get(e);s||console.warn("Please use proxy object");const[n,a,o]=s;return o(n,a(),void 0)}(v.events[v.events.length-1])))),initialize(){v.enabled&&typeof crypto<"u"&&(v.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){v.connectedWalletId=e},click(e){if(v.enabled){const t={type:"CLICK",name:e.name,userSessionId:v.userSessionId,timestamp:Date.now(),data:e};v.events.push(t)}},track(e){if(v.enabled){const t={type:"TRACK",name:e.name,userSessionId:v.userSessionId,timestamp:Date.now(),data:e};v.events.push(t)}},view(e){if(v.enabled){const t={type:"VIEW",name:e.name,userSessionId:v.userSessionId,timestamp:Date.now(),data:e};v.events.push(t)}}},y=u({selectedChain:void 0,chains:void 0,standaloneChains:void 0,standaloneUri:void 0,isStandalone:!1,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1,isPreferInjected:!1,walletConnectVersion:1}),I={state:y,subscribe:e=>p(y,(()=>e(y))),setChains(e){y.chains=e},setStandaloneChains(e){y.standaloneChains=e},setStandaloneUri(e){y.standaloneUri=e},getSelectedChain(){const e=w.client().getNetwork().chain;return e&&(y.selectedChain=e),y.selectedChain},setSelectedChain(e){y.selectedChain=e},setIsStandalone(e){y.isStandalone=e},setIsCustomDesktop(e){y.isCustomDesktop=e},setIsCustomMobile(e){y.isCustomMobile=e},setIsDataLoaded(e){y.isDataLoaded=e},setIsUiLoaded(e){y.isUiLoaded=e},setWalletConnectVersion(e){y.walletConnectVersion=e},setIsPreferInjected(e){y.isPreferInjected=e},setIsAuth(e){y.isAuth=e}},E=u({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chainImages:void 0,tokenImages:void 0,tokenContracts:void 0,standaloneChains:void 0,enableStandaloneMode:!1,enableAuthMode:!1,enableNetworkView:!1,enableAccountView:!0,enableExplorer:!0,defaultChain:void 0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),j={state:E,subscribe:e=>p(E,(()=>e(E))),setConfig(e){var t,s,n,a;C.initialize(),I.setStandaloneChains(e.standaloneChains),I.setIsStandalone(!(null==(t=e.standaloneChains)||!t.length)||!!e.enableStandaloneMode),I.setIsAuth(!!e.enableAuthMode),I.setIsCustomMobile(!(null==(s=e.mobileWallets)||!s.length)),I.setIsCustomDesktop(!(null==(n=e.desktopWallets)||!n.length)),I.setWalletConnectVersion(null!=(a=e.walletConnectVersion)?a:1),I.state.isStandalone||(I.setChains(w.client().chains),I.setIsPreferInjected(w.client().isInjectedProviderInstalled()&&b.isPreferInjectedFlag())),e.defaultChain&&I.setSelectedChain(e.defaultChain),b.setWeb3ModalVersionInStorage(),Object.assign(E,e)}},W=u({address:void 0,profileName:void 0,profileAvatar:void 0,profileLoading:!1,balanceLoading:!1,balance:void 0,isConnected:!1}),O={state:W,subscribe:e=>p(W,(()=>e(W))),getAccount(){const e=w.client().getAccount();W.address=e.address,W.isConnected=e.isConnected},async fetchProfile(e,t){var s;try{W.profileLoading=!0;const n=t??W.address,a=null==(s=I.state.chains)?void 0:s.find((e=>1===e.id));if(n&&a){const t=await w.client().fetchEnsName({address:n,chainId:1});if(t){const s=await w.client().fetchEnsAvatar({name:t,chainId:1});s&&await e(s),W.profileAvatar=s}W.profileName=t}}finally{W.profileLoading=!1}},async fetchBalance(e){try{const{chain:t}=w.client().getNetwork(),{tokenContracts:s}=j.state;let n;t&&s&&(n=s[t.id]),W.balanceLoading=!0;const a=e??W.address;if(a){const e=await w.client().fetchBalance({address:a,token:n});W.balance={amount:e.formatted,symbol:e.symbol}}}finally{W.balanceLoading=!1}},setAddress(e){W.address=e},setIsConnected(e){W.isConnected=e},resetBalance(){W.balance=void 0},resetAccount(){W.address=void 0,W.isConnected=!1,W.profileName=void 0,W.profileAvatar=void 0,W.balance=void 0}},A="https://explorer-api.walletconnect.com";async function L(e,t){const s=new URL(e,A);return s.searchParams.append("projectId",j.state.projectId),Object.entries(t).forEach((([e,t])=>{t&&s.searchParams.append(e,String(t))})),(await fetch(s)).json()}const S=async e=>L("/w3m/v1/getDesktopListings",e),P=async e=>L("/w3m/v1/getMobileListings",e),M=async e=>L("/w3m/v1/getInjectedListings",e),k=async e=>L("/w3m/v1/getAllListings",e),N=e=>`${A}/w3m/v1/getWalletImage/${e}?projectId=${j.state.projectId}`,U=e=>`${A}/w3m/v1/getAssetImage/${e}?projectId=${j.state.projectId}`;var D=Object.defineProperty,R=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,x=(e,t,s)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const V=b.isMobile(),B=u({wallets:{listings:[],total:0,page:1},injectedWallets:[],search:{listings:[],total:0,page:1},recomendedWallets:[]}),$={state:B,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=j.state;if("NONE"===e||"ALL"===t&&!e)return B.recomendedWallets;if(b.isArray(e)){const t={recommendedIds:e.join(",")},{listings:s}=await k(t),n=Object.values(s);n.sort(((t,s)=>e.indexOf(t.id)-e.indexOf(s.id))),B.recomendedWallets=n}else{const{standaloneChains:e,walletConnectVersion:s,isAuth:n}=I.state,a=e?.join(","),o=b.isArray(t),r={page:1,sdks:n?"auth_v1":void 0,entries:b.RECOMMENDED_WALLET_AMOUNT,chains:a,version:s,excludedIds:o?t.join(","):void 0},{listings:i}=V?await P(r):await S(r);B.recomendedWallets=Object.values(i)}return B.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var s in t||(t={}))_.call(t,s)&&x(e,s,t[s]);if(R)for(var s of R(t))T.call(t,s)&&x(e,s,t[s]);return e})({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:n}=j.state,{recomendedWallets:a}=B;if("ALL"===n)return B.wallets;t.search||(a.length?t.excludedIds=a.map((e=>e.id)).join(","):b.isArray(s)&&(t.excludedIds=s.join(","))),b.isArray(n)&&(t.excludedIds=[t.excludedIds,n].filter(Boolean).join(",")),I.state.isAuth&&(t.sdks="auth_v1");const{page:o,search:r}=e,{listings:i,total:l}=V?await P(t):await S(t),c=Object.values(i),d=r?"search":"wallets";return B[d]={listings:[...B[d].listings,...c],total:l,page:o??1},{listings:c,total:l}},async getInjectedWallets(){const{listings:e}=await M({}),t=Object.values(e);return B.injectedWallets=t,B.injectedWallets},getWalletImageUrl:e=>N(e),getAssetImageUrl:e=>U(e),resetSearch(){B.search={listings:[],total:0,page:1}}},H=u({pairingUri:"",pairingError:!1}),K={state:H,subscribe:e=>p(H,(()=>e(H))),setPairingUri(e){H.pairingUri=e},setPairingError(e){H.pairingError=e}},z=u({open:!1}),F={state:z,subscribe:e=>p(z,(()=>e(z))),open:async e=>new Promise((t=>{const{isStandalone:s,isUiLoaded:n,isDataLoaded:a,isPreferInjected:o,selectedChain:r}=I.state,{isConnected:i}=O.state,{enableNetworkView:l}=j.state;if(s)I.setStandaloneUri(e?.uri),I.setStandaloneChains(e?.standaloneChains),m.reset("ConnectWallet");else if(null!=e&&e.route)m.reset(e.route);else if(i)m.reset("Account");else if(l)m.reset("SelectNetwork");else{if(o)return w.client().connectConnector("injected",r?.id).catch((e=>console.error(e))),void t();m.reset("ConnectWallet")}const{pairingUri:c}=K.state;if(n&&a&&(s||c||i))z.open=!0,t();else{const e=setInterval((()=>{const s=I.state,n=K.state;s.isUiLoaded&&s.isDataLoaded&&(s.isStandalone||n.pairingUri||i)&&(clearInterval(e),z.open=!0,t())}),200)}})),close(){z.open=!1}};var J=Object.defineProperty,G=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,X=(e,t,s)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const Y=u({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),Z={state:Y,subscribe:e=>p(Y,(()=>e(Y))),setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(Y.themeMode=t),s&&(Y.themeVariables=((e,t)=>{for(var s in t||(t={}))q.call(t,s)&&X(e,s,t[s]);if(G)for(var s of G(t))Q.call(t,s)&&X(e,s,t[s]);return e})({},s))}},ee=u({open:!1,message:"",variant:"success"}),te={state:ee,subscribe:e=>p(ee,(()=>e(ee))),openToast(e,t){ee.open=!0,ee.message=e,ee.variant=t},closeToast(){ee.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=h.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}))},64599:(e,t,s)=>{s.d(t,{Web3Modal:()=>c});var n=s(17328),a=Object.defineProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(e,t,s)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;class c{constructor(e){this.openModal=n.jb.open,this.closeModal=n.jb.close,this.subscribeModal=n.jb.subscribe,this.setTheme=n.ThemeCtrl.setThemeConfig,n.ThemeCtrl.setThemeConfig(e),n.ConfigCtrl.setConfig(((e,t)=>{for(var s in t||(t={}))r.call(t,s)&&l(e,s,t[s]);if(o)for(var s of o(t))i.call(t,s)&&l(e,s,t[s]);return e})({enableStandaloneMode:!0},e)),this.initUi()}async initUi(){if(typeof window<"u"){await s.e(680).then(s.bind(s,84680));const e=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",e),n.OptionsCtrl.setIsUiLoaded(!0)}}}}}]);