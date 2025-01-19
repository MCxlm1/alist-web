import{b as L,aW as j,bD as T,c as z,_ as $,bE as A,f as U,a1 as W,d as B,bF as n,a3 as u,bG as y,bH as I,n as V,ah as N,aD as g}from"./index.16943de2.js";const Q=(s,...r)=>{},m=new Map,q=(s,r=window.scrollY)=>{m.set(s,r)},O=s=>{window.scroll({top:m.get(s)||0,behavior:"smooth"}),Q("recoverScroll",s,m.get(s))};let _=!0,d,p;function J(s,r,i="replaceState"){let a=i==="location"?location.href:location.hash;if(!a.includes("?"))a=`${a}?${s}=${r}`;else if(!a.includes(s))a=`${a}&${s}=${r}`;else{const h=`(\\?|&|#)${s}([^&|^#]*)(&|$|#)`;a=a.replace(new RegExp(h),"$1"+s+"="+r+"$3")}i==="location"&&(location.href=a),i==="pushState"&&history.pushState({},"",a),i==="replaceState"&&history.replaceState({},"",a)}function C(s){for(var r=window.location.search.substring(1),i=r.split("&"),a=0;a<i.length;a++){var h=i[a].split("=");if(h[0]==s)return h[1]}return""}const S={};let l=1;const X=()=>l,Y=()=>{const s=A();l=1,s.type==="pagination"&&J("page",1),console.log("resetGlobalPage",l)},Z=()=>{const{pathname:s,to:r}=L(),[,i]=j(e=>T(e,$(),new z.CancelToken(t=>{d=t}))),a=A();a.type==="pagination"&&C("page")&&(l=parseInt(C("page")));const[,h]=j(e=>{const t={index:e==null?void 0:e.index,size:e==null?void 0:e.size};return U(e==null?void 0:e.path,$(),t.index,t.size,e==null?void 0:e.force,new z.CancelToken(o=>{p=o}))}),R=(e,t=!0,o=!1)=>{o&&(e=B(s(),e)),t?S[e]=!0:delete S[e]};let F=!1;const v=(e,t,o)=>(d==null||d(),p==null||p(),F=t!=null?t:!1,w(""),S[e]?b(e,l,void 0,void 0,o):D(e)),D=async e=>{n.setState(u.FetchingObj);const t=await i(e);y(t,o=>{var c;n.setObj(o),n.setProvider(o.provider),o.is_dir?(R(e),b(e,l)):(n.setReadme(o.readme),n.setHeader(o.header),n.setRelated((c=o.related)!=null?c:[]),n.setRawUrl(o.raw_url),n.setState(u.File))},w)},b=async(e,t,o,c=!1,G)=>{o||(o=a.size),o!==void 0&&a.type==="all"&&(o=void 0),l=t!=null?t:1,n.setState(c?u.FetchingMore:u.FetchingObjs);const E=await h({path:e,index:t,size:o,force:G});y(E,f=>{var H;c?I(f.content):(n.setObjs((H=f.content)!=null?H:[]),n.setTotal(f.total)),n.setReadme(f.readme),n.setHeader(f.header),n.setWrite(f.write),n.setProvider(f.provider),n.setState(u.Folder),c&&(t!=null?t:1)>1||O(e)},w)},w=(e,t)=>{if(t===403)n.setState(u.NeedPassword),F&&V.error(e);else{if(_&&e.endsWith("object not found")){_=!1,r(s().replace(N().base_path,""));return}(t===void 0||t>=0)&&n.setErr(e)}},M=(e,t,o=!1)=>b(s(),e,t,o),P=()=>M(l+1,void 0,!0);return{handlePathChange:v,setPathAs:R,refresh:async(e,t)=>{const o=s();if(q(o),a.type==="load_more"||a.type==="auto_load_more"){const c=l;for(Y(),await v(o,e,t);l<c;)await P()}else await v(o,e,t);O(o)},pageChange:M,loadMore:P,allLoaded:()=>l>=Math.ceil(W.total/a.size)}};function x(s){return g({a:{viewBox:"0 0 24 24"},c:'<path fill="none" d="M0 0h24v24H0z"/><path d="M16 2l5 5v14.008a.993.993 0 01-.993.992H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-3 10h3l-4-4-4 4h3v4h2v-4z"/>'},s)}function k(s){return g({a:{viewBox:"0 0 24 24"},c:'<path fill="none" d="M0 0h24v24H0z"/><path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM13 13h3l-4-4-4 4h3v4h2v-4z"/>'},s)}function ee(s){return g({a:{viewBox:"0 0 24 24"},c:'<path fill="none" d="M0 0h24v24H0z"/><path d="M5.463 4.433A9.961 9.961 0 0112 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 006.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0112 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0013.54 5.772l.997 1.795z"/>'},s)}export{ee as R,Y as a,O as b,k as c,x as d,J as e,X as g,q as r,Z as u};
