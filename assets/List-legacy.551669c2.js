!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,o=[],l=!0,a=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);l=!0);}catch(c){a=!0,i=c}finally{try{l||null==t.return||t.return()}finally{if(a)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function t(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}System.register(["./index-legacy.2c217026.js","./Folder-legacy.b93a3f83.js","./index-legacy.c5dd90d2.js","./index-legacy.f1af0902.js","./icon-legacy.b8237672.js","./helper-legacy.abc708d5.js","./Layout-legacy.b5e7d71e.js","./useTitle-legacy.d9f4a2e0.js","./FolderTree-legacy.ead0c4bb.js","./video_box-legacy.3e4a8eef.js","./_commonjs-dynamic-modules-legacy.cf19cda3.js","./Paginator-legacy.a5d254d8.js","./index-legacy.3b738cbe.js","./index-legacy.76ee2f7b.js"],(function(n){"use strict";var r,i,o,l,a,c,u,s,f,d,g,b,m,h,y,p,j,v,w,x,A,S,k,$,O,C,_,P,M,z,I,D,E,L,T,K,F;return{setters:[function(e){r=e.bI,i=e.b,o=e.h,l=e.ae,a=e.L,c=e.aM,u=e.az,s=e.ds,f=e.t,d=e.aO,g=e.S,b=e.ax,m=e.al,h=e.aw,y=e.b5,p=e.cm,j=e.cR,v=e.ad,w=e.l,x=e.a,A=e.m,S=e.x,k=e.dt,$=e.du,O=e.dv,C=e.E,_=e.G,P=e.a1,M=e.a4},function(e){z=e.b},function(e){I=e.u},function(e){D=e.q},function(e){E=e.g,L=e.O},function(e){T=e.u,K=e.I,F=e.a},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var G=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],H=function(e){if((0,r().isHide)(e.obj))return null;var n=I().setPathAs,x=z({id:1}).show,A=i(),S=A.pushHref,k=A.to,$=F().isMouseSupported,O=T(),C=function(){return w.list_item_filename_overflow};return o(v.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){var r,i,v;return o(l,(i={get classList(){return{selected:!!e.obj.selected}},class:"list-item viselect-item"},(v={})[r="data-index"]=v[r]||{},v[r].get=function(){return e.index},t(i,"w","$full"),t(i,"p","$2"),t(i,"rounded","$lg"),t(i,"transition","all 0.3s"),"_hover",v._hover=v._hover||{},v._hover.get=function(){return{transform:"scale(1.01)",bgColor:a()}},t(i,"as",D),"href",v.href=v.href||{},v.href.get=function(){return e.obj.name},"cursor",v.cursor=v.cursor||{},v.cursor.get=function(){return $()||c()&&!O()?"default":"pointer"},"bgColor",v.bgColor=v.bgColor||{},v.bgColor.get=function(){return u((function(){return!!e.obj.selected}),!0)()?a():void 0},t(i,"on:dblclick",(function(n){$()&&(n.ctrlKey||n.metaKey||n.shiftKey||k(S(e.obj.name)))})),t(i,"on:click",(function(n){if($())return n.preventDefault();c()&&(n.preventDefault(),O()?k(S(e.obj.name)):s(e.index,!e.obj.selected))})),t(i,"onMouseEnter",(function(){n(e.obj.name,e.obj.is_dir,!0)})),t(i,"onContextMenu",(function(n){f((function(){d(!1),s(e.index,!0,!0)})),x(n,{props:e.obj})})),"children",v.children=v.children||{},v.children.get=function(){return[o(l,{class:"name-box",spacing:"$1",get w(){return G[0].w},get children(){return[o(g,{get when(){return c()},get children(){return o(K,{"on:click":function(e){e.stopPropagation()},get checked(){return e.obj.selected},onChange:function(n){s(e.index,n.target.checked)}})}}),o(b,{class:"icon",boxSize:"$6",get color(){return m()},get as(){return E(e.obj)},mr:"$1","on:click":function(n){e.obj.type===L.IMAGE&&(n.stopPropagation(),n.preventDefault(),h.emit("gallery",e.obj.name))}}),o(y,{class:"name",get css(){return{wordBreak:"break-all",whiteSpace:"multi_line"===C()?"unset":"nowrap","overflow-x":"scrollable"===C()?"auto":"hidden",textOverflow:"ellipsis"===C()?"ellipsis":"unset","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),o(y,{class:"size",get w(){return G[1].w},get textAlign(){return G[1].textAlign},get children(){return p(e.obj.size)}}),o(y,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return G[2].w},get textAlign(){return G[2].textAlign},get children(){return j(e.obj.modified)}})]},function(e,n){for(var t in n)(o=n[t]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,t,o);if(Object.getOwnPropertySymbols)for(var r=Object.getOwnPropertySymbols(n),i=0;i<r.length;i++){var o,l=r[i];(o=n[l]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,l,o)}}(i,v),i))}})};n("default",(function(){var n=x(),t=e(A(),2),r=t[0],i=t[1],a=e(A(!1),2),u=a[0],s=a[1];S((function(){r()&&k(r(),u())}));var b=function(e){return{fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:e.textAlign,cursor:"pointer",onClick:function(){e.name===r()?s(!u()):f((function(){i(e.name),s(!1)}))}}},m=F(),p=m.isMouseSupported,j=m.registerSelectContainer,v=m.captureContentMenu;return j(),o(M,{onDragOver:function(e){for(var n,t,r=Array.from(null!==(n=null===(t=e.dataTransfer)||void 0===t?void 0:t.items)&&void 0!==n?n:[]),i=0;i<r.length;i++){if("file"===r[i].kind){h.emit("tool","upload"),e.preventDefault();break}}},"oncapture:contextmenu":v,get classList(){return{"viselect-container":p()}},class:"list",w:"$full",spacing:"$1",get children(){return[o(l,{class:"title",w:"$full",p:"$2",get children(){return[o(l,{get w(){return G[0].w},spacing:"$1",get children(){return[o(g,{get when(){return c()},get children(){return o(K,{get checked(){return $()},get indeterminate(){return O()},onChange:function(e){d(e.target.checked)}})}}),o(y,C((function(){return b(G[0])}),{get children(){return n("home.obj.".concat(G[0].name))}}))]}}),o(y,C({get w(){return G[1].w}},(function(){return b(G[1])}),{get children(){return n("home.obj.".concat(G[1].name))}})),o(y,C({get w(){return G[2].w}},(function(){return b(G[2])}),{display:{"@initial":"none","@md":"inline"},get children(){return n("home.obj.".concat(G[2].name))}}))]}}),o(_,{get each(){return P.objs},children:function(e,n){return o(H,{obj:e,get index(){return n()}})}})]}})}))}}}))}();
