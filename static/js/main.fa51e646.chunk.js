(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(14),c=n.n(o),l=n(7),u=n(5),i=function(){return a.a.createElement("div",{id:"menu"},"from Menu",a.a.createElement("br",null),"test from menu 2")},p=Object(r.createContext)(),m=function(){var e=Object(r.useContext)(p).setData;return a.a.createElement("div",null,"from Home",a.a.createElement("button",{onClick:function(){e(2)}},"click"),a.a.createElement("br",null),"link to ",a.a.createElement(l.b,{to:"/portfolio-app/about"},"About"))},f=function(){var e=Object(r.useContext)(p).data;return a.a.createElement("div",null,"from About ",e,a.a.createElement("br",null),"link to ",a.a.createElement(l.b,{to:"/portfolio-app/"},"Home"))},b=n(18),s=n(17);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d=function(e,t){switch(t.type){case"set-data":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{data:t.payload});default:return e}},O=function(e){var t=Object(r.useReducer)(d,{data:1}),n=Object(b.a)(t,2),o=n[0],c=n[1];return a.a.createElement(p.Provider,{value:{data:o.data,setData:function(e){c({type:"set-data",payload:e})}}},e.children)},y=(n(29),n(30),function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,null,a.a.createElement(a.a.Fragment,null,a.a.createElement(i,null),a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/portfolio-app/",component:m}),a.a.createElement(u.a,{exact:!0,path:"/portfolio-app/about",component:f})))))});c.a.render(a.a.createElement((function(){return a.a.createElement(O,null,a.a.createElement(y,null))}),null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.fa51e646.chunk.js.map