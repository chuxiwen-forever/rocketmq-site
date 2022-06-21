"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3085],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,p=m["".concat(i,".").concat(d)]||m[d]||f[d]||c;return t?r.createElement(p,o(o({ref:n},s),{},{components:t})):r.createElement(p,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<c;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6159:function(e,n,t){t.d(n,{N:function(){return m},Z:function(){return d}});var r=t(3366),a=t(7462),c=t(7294),o=t(6010),l=t(4973),i=t(941),u="anchorWithStickyNavbar_31ik",s="anchorWithHideOnScrollNavbar_3R7-",f=["id"],m=function(e){var n=Object.assign({},e);return c.createElement("header",null,c.createElement("h1",(0,a.Z)({},n,{id:void 0}),n.children))},d=function(e){return"h1"===e?m:(n=e,function(e){var t,a=e.id,m=(0,r.Z)(e,f),d=(0,i.LU)().navbar.hideOnScroll;return a?c.createElement(n,m,c.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,o.Z)("anchor","anchor__"+n,(t={},t[s]=d,t[u]=!d,t)),id:a}),m.children,c.createElement("a",{className:"hash-link",href:"#"+a,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):c.createElement(n,m)});var n}},2238:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(7462),a=t(3366),c=t(7294),o=t(9105),l=t(6742),i=t(6213),u=t(6159),s=t(6010),f=t(941),m="details_1VDD";function d(e){var n=Object.assign({},e);return c.createElement(f.PO,(0,r.Z)({},n,{className:(0,s.Z)("alert alert--info",m,n.className)}))}var p=["mdxType","originalType"];var v={head:function(e){var n=c.Children.map(e.children,(function(e){return function(e){var n,t;if(null!=e&&null!=(n=e.props)&&n.mdxType&&null!=e&&null!=(t=e.props)&&t.originalType){var r=e.props,o=(r.mdxType,r.originalType,(0,a.Z)(r,p));return c.createElement(e.props.originalType,o)}return e}(e)}));return c.createElement(o.Z,e,n)},code:function(e){var n=e.children;return(0,c.isValidElement)(n)?n:n.includes("\n")?c.createElement(i.Z,e):c.createElement("code",e)},a:function(e){return c.createElement(l.Z,e)},pre:function(e){var n,t=e.children;return(0,c.isValidElement)(t)&&(0,c.isValidElement)(null==t||null==(n=t.props)?void 0:n.children)?t.props.children:c.createElement(i.Z,(0,c.isValidElement)(t)?null==t?void 0:t.props:Object.assign({},e))},details:function(e){var n=c.Children.toArray(e.children),t=n.find((function(e){var n;return"summary"===(null==e||null==(n=e.props)?void 0:n.mdxType)})),a=c.createElement(c.Fragment,null,n.filter((function(e){return e!==t})));return c.createElement(d,(0,r.Z)({},e,{summary:t}),a)},h1:(0,u.Z)("h1"),h2:(0,u.Z)("h2"),h3:(0,u.Z)("h3"),h4:(0,u.Z)("h4"),h5:(0,u.Z)("h5"),h6:(0,u.Z)("h6")}},7979:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(7294),a=t(6010),c=t(6698),o=t(3905),l=t(2238),i=t(571),u=t(941),s="mdxPageWrapper_3qD3";var f=function(e){var n=e.content,t=n.frontMatter,f=n.metadata,m=t.title,d=t.description,p=t.wrapperClassName,v=t.hide_table_of_contents,h=f.permalink;return r.createElement(c.Z,{title:m,description:d,permalink:h,wrapperClassName:null!=p?p:u.kM.wrapper.mdxPages,pageClassName:u.kM.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,a.Z)("row",s)},r.createElement("div",{className:(0,a.Z)("col",!v&&"col--8")},r.createElement(o.Zo,{components:l.Z},r.createElement(n,null))),!v&&n.toc&&r.createElement("div",{className:"col col--2"},r.createElement(i.Z,{toc:n.toc})))))}},571:function(e,n,t){t.d(n,{r:function(){return d},Z:function(){return p}});var r=t(7294),a=t(6010),c=t(941);function o(e){var n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function l(e){var n,t=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=r.find((function(e){return o(e).top>=t}));return a?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:null!=(n=r[r.indexOf(a)-1])?n:null:r[r.length-1]}function i(){var e=(0,r.useRef)(0),n=(0,c.LU)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}var u=function(e){var n=(0,r.useRef)(void 0),t=i();(0,r.useEffect)((function(){var r=e.linkClassName,a=e.linkActiveClassName;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=l({anchorTopOffset:t.current}),o=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){if(t){var r;n.current&&n.current!==e&&(null==(r=n.current)||r.classList.remove(a)),e.classList.add(a),n.current=e}else e.classList.remove(a)}(e,e===o)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])},s="tableOfContents_35-E",f="table-of-contents__link",m={linkClassName:f,linkActiveClassName:"table-of-contents__link--active"};function d(e){var n=e.toc,t=e.isChild;return n.length?r.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},n.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:f,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children}))}))):null}var p=function(e){var n=e.toc;return u(m),r.createElement("div",{className:(0,a.Z)(s,"thin-scrollbar")},r.createElement(d,{toc:n}))}}}]);