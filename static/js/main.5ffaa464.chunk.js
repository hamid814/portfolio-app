(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(3),o=a.n(c),i=Object(n.createContext)(),r=(a(10),function(){var e=Object(n.useContext)(i),t=e.aPageIsActive,a=e.setActivePage,c=e.setPagesStatus,o=e.setPagesTransiting,r=e.pagesTraversing;return s.a.createElement("div",{id:"menu-container",className:"".concat(!t&&"d-n"," ").concat(r.status&&"d-n"),onClick:function(e){a("from-menu"),c("zoom-out"),o(!0,"come")}},s.a.createElement("div",{id:"menu"}),s.a.createElement("div",{id:"shadow"}),s.a.createElement("div",{id:"menu-desc"},"go back"),s.a.createElement("div",{id:"menu-cover-for-hover"}))}),l=function(){return s.a.createElement("div",{id:"back-scroll"})},m=(a(11),a(1)),u=(a(12),function(){var e=Object(n.useContext)(i),t=e.myName,a=e.aPageIsActive,c=e.setActivePage,o=e.setPagesStatus,r=e.setPagesTransiting,l=e.pagesTransiting,u=Object(n.useState)("HOME"),g=Object(m.a)(u,2),p=g[0],d=g[1],v=Object(n.useState)([{name:"HOME",time:100},{name:"H&ME",time:250},{name:"H&*E",time:300},{name:"H0*E",time:500},{name:"HO^#",time:650},{name:"H@ME",time:800},{name:"$@ME",time:900},{name:"$OME",time:1050},{name:"#OME",time:1150},{name:"##ME",time:1250},{name:"###E",time:1350},{name:"####",time:1450},{name:"H123",time:1600},{name:"HOM4",time:1800},{name:"H!M4",time:2e3},{name:"H!ME",time:2150},{name:"HOME",time:2400}]),f=Object(m.a)(v,2),E=f[0];f[1];Object(n.useEffect)((function(){E.forEach((function(e){setTimeout((function(){d(e.name)}),1.8*e.time)}))}),[]);return s.a.createElement("div",{className:"page-container",id:"home"},s.a.createElement("div",{className:"side-layer ".concat(a?"not":"is")}),s.a.createElement("div",{className:"back-layer ".concat(a?"not":"is")}),s.a.createElement("div",{className:"layer ".concat(a?"not":"is"),onClick:function(){a||l.status||(c("home"),o("zoom-in"),r(!0,"go"))}},s.a.createElement("h1",null,p)),s.a.createElement("div",{className:"page"},"Hi!",s.a.createElement("div",null,"I'm ",t)))}),g=(a(13),function(){var e=Object(n.useContext)(i),t=e.setActivePage,a=e.setPagesStatus,c=e.aPageIsActive,o=e.setModal,r=e.setPagesTransiting,l=e.traversPages,m=e.pagesTransiting;return s.a.createElement("div",{className:"page-container",id:"about"},s.a.createElement("div",{className:"side-layer ".concat(c?"not":"is")}),s.a.createElement("div",{className:"back-layer ".concat(c?"not":"is")}),s.a.createElement("div",{className:"layer ".concat(c?"not":"is"),onClick:function(){c||m.status||(t("about"),a("zoom-in"),r(!0,"go"))}},s.a.createElement("h1",null,"ABOUT")),s.a.createElement("div",{className:"page"},s.a.createElement("div",{className:"header",onClick:function(){o("on",{name:"header",id:1})}},"ABOUT ME"),s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"item"},"item"),s.a.createElement("div",{className:"item"},"item"),s.a.createElement("div",{className:"item",onClick:function(){l("works")}},"item"))))}),p=(a(14),function(){var e=Object(n.useContext)(i),t=e.setActivePage,a=e.setPagesStatus,c=e.aPageIsActive,o=e.setPagesTransiting,r=e.traversPages,l=e.pagesTransiting;return s.a.createElement("div",{className:"page-container",id:"works"},s.a.createElement("div",{className:"side-layer ".concat(c?"not":"is")}),s.a.createElement("div",{className:"back-layer ".concat(c?"not":"is")}),s.a.createElement("div",{className:"layer ".concat(c?"not":"is"),onClick:function(){c||l.status||(t("works"),a("zoom-in"),o(!0,"go"))}},s.a.createElement("h1",null,"WORKS")),s.a.createElement("div",{className:"page"},"Works",s.a.createElement("div",{className:"go-to-contact-container",onClick:function(){r("contact")}},"Contact Me")))}),d=(a(15),function(){var e=Object(n.useContext)(i),t=e.setActivePage,a=e.setPagesStatus,c=e.aPageIsActive,o=e.traversPages,r=e.setPagesTransiting,l=e.pagesTransiting;return s.a.createElement("div",{className:"page-container",id:"contact"},s.a.createElement("div",{className:"side-layer ".concat(c?"not":"is")}),s.a.createElement("div",{className:"back-layer ".concat(c?"not":"is")}),s.a.createElement("div",{className:"layer ".concat(c?"not":"is"),onClick:function(){c||l.status||(t("contact"),a("zoom-in"),r(!0,"go"))}},s.a.createElement("h1",null,"CONTACT")),s.a.createElement("div",{className:"page"},"Contact",s.a.createElement("br",null),s.a.createElement("div",{className:"go-to-works-container",onClick:function(){o("works")}},s.a.createElement("div",{className:"go-to-works"},s.a.createElement("div",{className:"desc"},"works"),s.a.createElement("div",{className:"bar"})))))}),v=function(){var e=Object(n.useContext)(i),t=e.pagesStatus,a=e.pagesPos,c=e.pagesTransiting,o=e.pagesTraversing;return s.a.createElement("div",{className:"pages\n                  ".concat(t,"\n                  ").concat(a,"\n                  ").concat(c.status&&"transiting ".concat(c.direction),"\n                  ").concat(o.status&&"traversing ".concat(o.destination))},s.a.createElement(u,null),s.a.createElement(g,null),s.a.createElement(p,null),s.a.createElement(d,null))},f=(a(16),function(){var e=Object(n.useContext)(i),t=e.modalStatus,a=e.setModal,c=Object(n.useState)(!1),o=Object(m.a)(c,2),r=o[0],l=o[1];return s.a.createElement("div",{id:"modal",className:"func-close-modal modal-".concat(t),onClick:function(e){e.target.classList.contains("func-close-modal")&&a("off",null)}},s.a.createElement("div",{id:"modal-container",className:"".concat(r&&"modal-hanging")},s.a.createElement("div",{id:"modal-close",onClick:function(){a("off",null)},onMouseEnter:function(){l(!0)},onMouseLeave:function(){l(!1)}},"\xd7")))}),E=a(4);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(E.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=function(e,t){switch(t.type){case"set-active-page":return b({},e,{activePage:t.payload});case"set-pages-status":if("zoom-out"===t.payload)return b({},e,{pagesStatus:t.payload,aPageIsActive:!1});if("zoom-in"===t.payload)return b({},e,{pagesStatus:t.payload});break;case"set-a-page-is-active":return b({},e,{aPageIsActive:t.payload});case"set-pages-pos":return b({},e,{pagesPos:t.payload});case"set-modal":return b({},e,{modalStatus:t.payload.status,modalData:t.payload.data});case"set-pages-transiting":return b({},e,{pagesTransiting:t.payload});case"set-pages-traversing":return b({},e,{pagesTraversing:t.payload});default:return e}},O=function(e){var t=Object(n.useReducer)(P,{myName:"H",activePage:"home",pagesStatus:"zoom-out",pagesPos:"bottom-left",aPageIsActive:!1,pageDest:"none",pagesTransiting:{status:!1,direction:"come"},pagesTraversing:{status:!1,destination:"none"},modalStatus:"off",modalData:null}),a=Object(m.a)(t,2),c=a[0],o=a[1];return s.a.createElement(i.Provider,{value:{myName:c.myName,activePage:c.activePage,pagesStatus:c.pagesStatus,aPageIsActive:c.aPageIsActive,pagesPos:c.pagesPos,modalStatus:c.modalStatus,modalData:c.modalData,pagesTransiting:c.pagesTransiting,pagesTraversing:c.pagesTraversing,setActivePage:function(e){o({type:"set-active-page",payload:e}),"home"===e?o({type:"set-pages-pos",payload:"top-left"}):"about"===e?o({type:"set-pages-pos",payload:"top-right"}):"works"===e?o({type:"set-pages-pos",payload:"bottom-right"}):"contact"===e&&o({type:"set-pages-pos",payload:"bottom-left"}),"from-menu"!==e&&setTimeout((function(){o({type:"set-a-page-is-active",payload:!0})}),1e3)},setPagesStatus:function(e){var t=e||("zoom-in"===c.pagesStatus?"zoom-out":"zoom-in");o({type:"set-pages-status",payload:t})},setApageIsActive:function(e){o({type:"set-a-page-is-active",payload:e})},traversPages:function(e){var t="set-pages-traversing",a="dest-"+{home:{place:"top-left"},about:{place:"top-right"},works:{place:"bottom-right"},contact:{place:"bottom-left"}}[e].place;c.pagesTraversing.status||o({type:t,payload:{status:!0,destination:a}}),setTimeout((function(){}),500),setTimeout((function(){o({type:t,payload:{status:!1,destination:"none"}})}),1300)},setPagesTransiting:function(e,t){var a="set-pages-transiting";o({type:a,payload:{status:e,direction:t}}),setTimeout((function(){o({type:a,payload:{status:!1,direction:t}})}),1300)},setModal:function(e,t){o({type:"set-modal",payload:{status:e,data:t}})}}},e.children)},N=(a(17),a(18),a(19),a(20),function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(f,null),s.a.createElement(r,null),s.a.createElement(v,null),s.a.createElement(l,null))});o.a.render(s.a.createElement((function(){return s.a.createElement(O,null,s.a.createElement(N,null))}),null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.5ffaa464.chunk.js.map