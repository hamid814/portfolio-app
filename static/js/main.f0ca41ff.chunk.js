(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),o=a.n(c),n=a(4),s=a.n(n),l=Object(c.createContext)(),r=(a(10),function(){var e=Object(c.useContext)(l),t=e.aPageIsActive,a=e.setActivePage,n=e.setPagesStatus,s=e.setPagesTransiting,r=e.pagesTraversing;return o.a.createElement("div",{id:"menu-container",className:"".concat(!t&&"d-n"," ").concat(r.status&&"d-n"),onClick:function(e){a("from-menu"),n("zoom-out"),s(!0,"come")}},o.a.createElement("div",{id:"menu"}),o.a.createElement("div",{id:"shadow"}),o.a.createElement("div",{id:"menu-desc"},"go back"),o.a.createElement("div",{id:"menu-cover-for-hover"}))}),i=function(){return o.a.createElement("div",{id:"back-scroll"})},m=(a(11),a(1)),d=(a(12),function(){var e=Object(c.useContext)(l),t=e.myName,a=e.pagesStatus,n=e.activePage,s=e.aPageIsActive,r=e.setActivePage,i=e.setPagesStatus,d=e.setPagesTransiting,u=e.traversPages,g=e.pagesTransiting,v=Object(c.useState)("HOME"),p=Object(m.a)(v,2),E=p[0],b=p[1],k=Object(c.useState)([{name:"HOME",time:100},{name:"H&ME",time:250},{name:"H&*E",time:300},{name:"H0*E",time:500},{name:"HO^#",time:650},{name:"H@ME",time:800},{name:"$@ME",time:900},{name:"$OME",time:1050},{name:"#OME",time:1150},{name:"##ME",time:1250},{name:"###E",time:1350},{name:"####",time:1450},{name:"H123",time:1600},{name:"HOM4",time:1800},{name:"H!M4",time:2e3},{name:"H!ME",time:2150},{name:"HOME",time:2400}]),f=Object(m.a)(k,2),N=f[0];f[1];Object(c.useEffect)((function(){N.forEach((function(e){setTimeout((function(){b(e.name)}),1.8*e.time)}))}),[]);return o.a.createElement("div",{className:"page-container ".concat("home"===n&&s&&"active"),id:"home"},o.a.createElement("div",{className:"side-layer ".concat(s?"not":"is")}),o.a.createElement("div",{className:"back-layer ".concat(s?"not":"is")}),o.a.createElement("div",{className:"layer ".concat(s?"not":"is"," ").concat("zoom-in"===a?"zoom-in-vertical":"zoom-out-vertical"),onClick:function(){s||g.status||(r("home"),i("zoom-in"),d(!0,"go"))}},o.a.createElement("h1",null,E,o.a.createElement("span",{className:"desc"},o.a.createElement("div",{className:"text"},"click")))),o.a.createElement("div",{className:"background-layer"}),o.a.createElement("div",{className:"page ".concat("home"===n?"on":"off"),onMouseMove:function(e){var t=e.clientX,a=e.clientY;setTimeout((function(){document.querySelector("#home").style.setProperty("--mouse-x","".concat(t,"px")),document.querySelector("#home").style.setProperty("--mouse-y","".concat(a,"px"))}),0)}},"Hi!",o.a.createElement("div",null,"I'm ",t),o.a.createElement("div",{className:"circle"},o.a.createElement("div",{className:"dot"})),o.a.createElement("div",{className:"go-to-contact-container",onClick:function(){u("contact")}},o.a.createElement("div",{className:"go-to-contact"},o.a.createElement("div",{className:"arrow"},o.a.createElement("div",{className:"line line-one"}),o.a.createElement("div",{className:"line line-two"}),o.a.createElement("div",{className:"line line-three"})),o.a.createElement("div",{className:"text"},"Contact"))),o.a.createElement("div",{className:"go-to-about-container",onClick:function(){u("about")}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 65 600"},o.a.createElement("path",{fill:"#fff",fillOpacity:"1"}),o.a.createElement("text",{fill:"#fff"},"About")))))}),u=(a(13),function(){var e=Object(c.useContext)(l),t=e.setActivePage,a=e.pagesStatus,n=e.activePage,s=e.setPagesStatus,r=e.aPageIsActive,i=e.setModal,d=e.setPagesTransiting,u=e.traversPages,g=e.pagesTraversing,v=e.pagesTransiting,p=Object(c.useState)(!1),E=Object(m.a)(p,2),b=E[0],k=E[1];return o.a.createElement("div",{className:"page-container ".concat("home"===n&&r&&"active"),id:"about"},o.a.createElement("div",{className:"side-layer ".concat(r?"not":"is")}),o.a.createElement("div",{className:"back-layer ".concat(r?"not":"is")}),o.a.createElement("div",{className:"layer ".concat(r?"not":"is"," ").concat("zoom-in"===a?"zoom-in-vertical":"zoom-out-vertical"),onClick:function(){r||v.status||(t("about"),s("zoom-in"),d(!0,"go"))}},o.a.createElement("h1",null,"ABOUT",o.a.createElement("span",{className:"desc"},o.a.createElement("div",{className:"text"},"click")))),o.a.createElement("div",{className:"background-layer"},!g.status&&!v.status&&o.a.createElement("div",null,"my ",o.a.createElement("span",null,"Works"))),o.a.createElement("div",{className:"page ".concat("about"===n?"on":"off"," ").concat(b&&"pull-up")},o.a.createElement("div",{className:"header",onClick:function(){i("on",{name:"header",id:1})}},"ABOUT ME"),o.a.createElement("div",{className:"back-sheet"},o.a.createElement("div",{className:"shapes-container"},o.a.createElement("div",{className:"line-1"}),o.a.createElement("div",{className:"line-2"}))),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"content-sheet"},o.a.createElement("div",{className:"shapes-container"},o.a.createElement("div",{className:"line-1"}),o.a.createElement("div",{className:"line-2"}))),o.a.createElement("div",{className:"front-sheet"},o.a.createElement("div",{className:"shapes-container"},o.a.createElement("div",{className:"line-1"}),o.a.createElement("div",{className:"line-2"})))),o.a.createElement("div",{className:"go-to-Contact-container",onClick:function(){u("contact")}},"Contect Me")),o.a.createElement("div",{className:"go-to-home-container",onClick:function(){u("home")}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 65 600"},o.a.createElement("path",{fill:"#fff",fillOpacity:"1"}),o.a.createElement("text",{fill:"#fff"},"Home"))),o.a.createElement("div",{className:"go-to-works-container",onClick:function(){u("works")},onMouseEnter:function(){k(!0)},onMouseLeave:function(){k(!1)}}))}),g=(a(14),function(){var e=Object(c.useContext)(l),t=e.setActivePage,a=e.activePage,n=e.pagesStatus,s=e.setPagesStatus,r=e.aPageIsActive,i=e.setPagesTransiting,d=e.traversPages,u=e.pagesTraversing,g=e.pagesTransiting,v=Object(c.useState)(!1),p=Object(m.a)(v,2),E=p[0],b=p[1],k=Object(c.useState)(null),f=Object(m.a)(k,2),N=f[0],h=f[1],y=Object(c.useState)({workOne:{name:"Trello",description:"a clone for trello",ghLink:"https://github.com/hamid814/trello-clone",ghPagesLink:"https://hamid814.github.io/trello-clone/",screenShotLink:""},workTwo:{name:"Formi",description:"make forms fast",ghLink:"https://github.com/hamid814/r-p",ghPagesLink:"https://hamid814.github.io/r-p/",screenShotLink:""},workThree:{name:"Diprella",description:"design concept made visual",ghLink:"https://github.com/hamid814/signup-signin-concept",ghPagesLink:"https://hamid814.github.io/signup-signin-concept/",screenShotLink:""},workFour:{name:"Todo",description:"my first project",ghLink:"https://github.com/hamid814/todo-app",ghPagesLink:"https://hamid814.github.io/todo-app/",screenShotLink:""},github:{name:"Github",description:"my github repos",ghLink:"https://github.com/hamid814/"}}),w=Object(m.a)(y,2),P=w[0];w[1];Object(c.useEffect)((function(){h(null)}),[a]);var O=function(e){N&&e.target.id===N?h(null):N&&e.target.id!==N?h(e.target.id):null===N&&h(e.target.id)},C=function(e){window.open(e.target.id)};return o.a.createElement("div",{className:"page-container ".concat("home"===a&&r&&"active"),id:"works"},o.a.createElement("div",{className:"side-layer ".concat(r?"not":"is")}),o.a.createElement("div",{className:"back-layer ".concat(r?"not":"is")}),o.a.createElement("div",{className:"layer ".concat(r?"not":"is"," ").concat("zoom-in"===n?"zoom-in-vertical":"zoom-out-vertical"),onClick:function(){r||g.status||(t("works"),s("zoom-in"),i(!0,"go"))}},o.a.createElement("h1",null,"WORKS",o.a.createElement("span",{className:"desc"},o.a.createElement("div",{className:"text"},"click")))),o.a.createElement("div",{className:"background-layer"},!u.status&&!g.status&&o.a.createElement("div",null,o.a.createElement("span",null,"About")," Me")),o.a.createElement("div",{className:"page ".concat("works"===a?"on":"off"," ").concat(null!==N?"a-work-is-active":"no-works-active"," ").concat(E&&"pull-down")},o.a.createElement("div",{className:"work works-one ".concat("work-one"===N?"opened":"closed")},o.a.createElement("div",{className:"background"}),o.a.createElement("div",{className:"title"},P.workOne.name),o.a.createElement("div",{className:"work-description"},P.workOne.description),o.a.createElement("div",{className:"buttons-panel"},o.a.createElement("div",{className:"button toggle",id:"work-one",onClick:O},o.a.createElement("div",{className:"text",id:"work-one"},"work-one"!==N?"Open":"Close")),o.a.createElement("div",{className:"button gh",id:P.workOne.ghLink,onClick:C},o.a.createElement("div",{className:"text",id:P.workOne.ghLink},"Github")),o.a.createElement("div",{className:"button view",id:P.workOne.ghPagesLink,onClick:C},o.a.createElement("div",{className:"text",id:P.workOne.ghPagesLink},"View")))),o.a.createElement("div",{className:"work reverse works-two ".concat("work-two"===N?"opened":"closed")},o.a.createElement("div",{className:"background"}),o.a.createElement("div",{className:"title"},P.workTwo.name),o.a.createElement("div",{className:"work-description"},P.workTwo.description),o.a.createElement("div",{className:"buttons-panel"},o.a.createElement("div",{className:"button toggle",id:"work-two",onClick:O},o.a.createElement("div",{className:"text",id:"work-two"},"work-two"!==N?"Open":"Close")),o.a.createElement("div",{className:"button gh",id:P.workTwo.ghLink,onClick:C},o.a.createElement("div",{className:"text",id:P.workTwo.ghLink},"Github")),o.a.createElement("div",{className:"button view",id:P.workTwo.ghPagesLink,onClick:C},o.a.createElement("div",{className:"text",id:P.workTwo.ghPagesLink},"View")))),o.a.createElement("div",{className:"work works-three ".concat("work-three"===N?"opened":"closed")},o.a.createElement("div",{className:"background"}),o.a.createElement("div",{className:"title"},P.workThree.name),o.a.createElement("div",{className:"work-description"},P.workThree.description),o.a.createElement("div",{className:"buttons-panel"},o.a.createElement("div",{className:"button toggle",id:"work-three",onClick:O},o.a.createElement("div",{className:"text",id:"work-three"},"work-three"!==N?"Open":"Close")),o.a.createElement("div",{className:"button gh",id:P.workThree.ghLink,onClick:C},o.a.createElement("div",{className:"text",id:P.workThree.ghLink},"Github")),o.a.createElement("div",{className:"button view",id:P.workThree.ghPagesLink,onClick:C},o.a.createElement("div",{className:"text",id:P.workThree.ghPagesLink},"View")))),o.a.createElement("div",{className:"work reverse works-four ".concat("work-four"===N?"opened":"closed")},o.a.createElement("div",{className:"background"}),o.a.createElement("div",{className:"title"},P.workFour.name),o.a.createElement("div",{className:"work-description"},P.workFour.description),o.a.createElement("div",{className:"buttons-panel"},o.a.createElement("div",{className:"button toggle",id:"work-four",onClick:O},o.a.createElement("div",{className:"text",id:"work-four"},"work-four"!==N?"Open":"Close")),o.a.createElement("div",{className:"button gh",id:P.workFour.ghLink,onClick:C},o.a.createElement("div",{className:"text",id:P.workFour.ghLink},"Github")),o.a.createElement("div",{className:"button view",id:P.workFour.ghPagesLink,onClick:C},o.a.createElement("div",{className:"text",id:P.workFour.ghPagesLink},"View")))),o.a.createElement("div",{className:"work github ".concat("github"===N?"opened":"closed")},o.a.createElement("div",{className:"background"}),o.a.createElement("div",{className:"title"},P.github.name),o.a.createElement("div",{className:"work-description"},P.github.description),o.a.createElement("div",{className:"buttons-panel"},o.a.createElement("div",{className:"button toggle",id:"github",onClick:O},o.a.createElement("div",{className:"text",id:"github"},"github"!==N?"Open":"Close")),o.a.createElement("div",{className:"button gh",id:P.github.ghLink,onClick:C},o.a.createElement("div",{className:"text",id:P.github.ghLink},"Github")))),o.a.createElement("div",{className:"go-to-contact-container",onClick:function(){d("contact")}},o.a.createElement("div",{className:"text"},o.a.createElement("span",null,"Contact")," Me")),o.a.createElement("div",{className:"go-to-about-container",onClick:function(){d("about")},onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)}})))}),v=(a(15),function(){var e=Object(c.useContext)(l),t=e.setActivePage,a=e.pagesStatus,n=e.activePage,s=e.setPagesStatus,r=e.aPageIsActive,i=e.traversPages,m=e.setPagesTransiting,d=e.pagesTransiting;return o.a.createElement("div",{className:"page-container ".concat("home"===n&&r&&"active"),id:"contact"},o.a.createElement("div",{className:"side-layer ".concat(r?"not":"is")}),o.a.createElement("div",{className:"back-layer ".concat(r?"not":"is")}),o.a.createElement("div",{className:"layer ".concat(r?"not":"is"," ").concat("zoom-in"===a?"zoom-in-vertical":"zoom-out-vertical"),onClick:function(){r||d.status||(t("contact"),s("zoom-in"),m(!0,"go"))}},o.a.createElement("h1",null,"CONTACT",o.a.createElement("span",{className:"desc"},o.a.createElement("div",{className:"text"},"click")))),o.a.createElement("div",{className:"background-layer"}),o.a.createElement("div",{className:"page ".concat("contact"===n?"on":"off")},o.a.createElement("div",{className:"background"},o.a.createElement("div",{className:"line-one"},"CON"),o.a.createElement("div",{className:"line-two"},"TACT")),o.a.createElement("div",{className:"social"},o.a.createElement("div",{className:"item-container"},o.a.createElement("div",{className:"item"},o.a.createElement("div",{className:"text"},"email")),o.a.createElement("div",{className:"item-border"})),o.a.createElement("div",{className:"item-container"},o.a.createElement("div",{className:"item"},o.a.createElement("div",{className:"text"},"github")),o.a.createElement("div",{className:"item-border"}))),o.a.createElement("div",{id:"form",onSubmit:function(e){e.preventDefault()}},o.a.createElement("form",null,o.a.createElement("div",{className:"form-header"},o.a.createElement("h2",null,"Send Me a Message")),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Name:"),o.a.createElement("input",{type:"text",name:"name",placeholder:"Name"}),o.a.createElement("div",{className:"input-side-layer"}),o.a.createElement("div",{className:"input-side-rect"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Email:"),o.a.createElement("input",{type:"text",name:"email",placeholder:"Email"}),o.a.createElement("div",{className:"input-side-layer"}),o.a.createElement("div",{className:"input-side-rect"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Message:"),o.a.createElement("input",{type:"text",name:"message",placeholder:"Message"}),o.a.createElement("div",{className:"input-side-layer"}),o.a.createElement("div",{className:"input-side-rect"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"submit",value:"Send"}),o.a.createElement("div",{className:"submit-side-layer"})))),o.a.createElement("div",{className:"go-to-works-container",onClick:function(){i("works")}},o.a.createElement("div",{className:"text"},"See My ",o.a.createElement("span",null,"works"))),o.a.createElement("div",{className:"go-to-home-container",onClick:function(){i("home")}},o.a.createElement("div",{className:"go-to-home"},o.a.createElement("div",{className:"arrow"},o.a.createElement("div",{className:"line line-one"}),o.a.createElement("div",{className:"line line-two"}),o.a.createElement("div",{className:"line line-three"})),o.a.createElement("div",{className:"text"},"Home")))))}),p=function(){var e=Object(c.useContext)(l),t=e.pagesStatus,a=e.pagesPos,n=e.pagesTransiting,s=e.pagesTraversing;return o.a.createElement("div",{className:"pages\n                  ".concat(t,"\n                  ").concat(a,"\n                  ").concat(n.status&&"transiting ".concat(n.direction),"\n                  ").concat(s.status&&"traversing")},o.a.createElement(d,null),o.a.createElement(u,null),o.a.createElement(g,null),o.a.createElement(v,null))},E=(a(16),function(){var e=Object(c.useContext)(l),t=e.modalStatus,a=e.setModal,n=Object(c.useState)("off"),s=Object(m.a)(n,2),r=s[0],i=s[1];Object(c.useEffect)((function(){"on"===t?(i("come"),setTimeout((function(){i("on")}),1e3)):"off"===t?(i("go"),setTimeout((function(){i("off")}),1e3)):"first-off"===t&&i("off")}),[t]);return o.a.createElement("div",{id:"modal",className:"func-close-modal modal-".concat(r),onClick:function(e){e.target.classList.contains("func-close-modal")&&"on"===r&&a("off",null)}},o.a.createElement("div",{id:"modal-container"},o.a.createElement("div",{id:"modal-close",onClick:function(){"on"===r&&a("off",null)}},"\xd7")))}),b=(a(17),function(e){var t=e.select,a=e.defaultPack,n=e.activePack,s=Object(c.useState)(a),l=Object(m.a)(s,2),r=l[0],i=l[1],d={background:r.colorOne.color,border:"1px solid ".concat(r.borderColor)},u={background:r.colorTwo.color,border:"1px solid ".concat(r.borderColor)},g={background:r.colorThree.color,border:"1px solid ".concat(r.borderColor)},v={border:"1px solid ".concat(r.borderColor)};return o.a.createElement("div",{className:"color-pack",onClick:function(){i(n),t(r)},style:v},o.a.createElement("div",{className:"slice-one",style:d}),o.a.createElement("div",{className:"slice-two",style:u}),o.a.createElement("div",{className:"slice-three",style:g}))}),k=function(){var e=Object(c.useState)(!1),t=Object(m.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!1),l=Object(m.a)(s,2),r=l[0],i=l[1],d=Object(c.useState)(0),u=Object(m.a)(d,2),g=u[0],v=u[1],p=Object(c.useState)({pack1:{packNameString:"pack1",colorOne:{color:"rgb(38, 38, 38)",opacit:"rgba(38, 38, 38, 0.9)",title:"#56617c"},colorTwo:{color:"rgba(140, 133, 41)",opacit:"rgba(140, 133, 41, 0.9)",title:"#8C8529"},colorThree:{color:"rgba(86, 97, 124)",opacit:"rgba(86, 97, 124, 0.9)",title:"#6E361A"},colorFour:{color:"rgba(110, 54, 26)",opacit:"rgba(110, 54, 26, 0.9)",title:"#262626"},borderColor:"transparent"},pack2:{packNameString:"pack2",colorOne:{color:"rgb(210, 180, 140)",opacit:"rgba(210, 180, 140, 0.9)",title:"rgb(255, 99, 71)"},colorTwo:{color:"rgb(0, 128, 128)",opacit:"rgba(0, 128, 128, 0.9)",title:"rgb(0, 128, 128)"},colorThree:{color:"rgb(255, 99, 71)",opacit:"rgba(255, 99, 71, 0.9)",title:"rgb(216, 191, 216)"},colorFour:{color:"rgb(216, 191, 216)",opacit:"rgba(216, 191, 216, 0.9)",title:"rgb(210, 180, 140)"},borderColor:"transparent"},pack3:{packNameString:"pack3",colorOne:{color:"rgb(30, 30, 30)",opacit:"rgba(30, 30, 30, 0.9)",title:"#56617c"},colorTwo:{color:"rgb(150, 150, 150)",opacit:"rgba(150, 150, 150, 0.9)",title:"#8C8529"},colorThree:{color:"rgb(210, 210, 210)",opacit:"rgba(210, 210, 210, 0.9)",title:"#6E361A"},colorFour:{color:"rgb(90, 90, 90)",opacit:"rgba(90, 90, 90, 0.9)",title:"#262626"},borderColor:"transparent"},pack4:{packNameString:"pack4",colorOne:{color:"rgba(255,255,255,1)",opacit:"rgba(0,0,0,0)",title:"#56617c"},colorTwo:{color:"rgba(255,255,255,1)",opacit:"rgba(0,0,0,0)",title:"#8C8529"},colorThree:{color:"rgba(255,255,255,1)",opacit:"rgba(0,0,0,0)",title:"#6E361A"},colorFour:{color:"rgba(255,255,255,1)",opacit:"rgba(0,0,0,0)",title:"#262626"},borderColor:"#999"}}),E=Object(m.a)(p,2),k=E[0],f=(E[1],Object(c.useState)("pack1")),N=Object(m.a)(f,2),h=N[0],y=N[1],w=Object(c.useRef)(null);Object(c.useEffect)((function(){P(k.pack2)}),[]),Object(c.useEffect)((function(){a?w.current.style.transform="rotateZ(0deg)":a||(w.current.style.transform="rotateZ(".concat(g,"deg)"),setTimeout((function(){360===g?v(1):0===g?v(359):g<360&&(r?v(g-1):r||v(g+1))}),20))}),[g,a]);var P=function(e){document.body.style.setProperty("--color-one",e.colorOne.color),document.body.style.setProperty("--color-one-o",e.colorOne.opacit),document.body.style.setProperty("--color-one-title",e.colorOne.title),document.body.style.setProperty("--color-two",e.colorTwo.color),document.body.style.setProperty("--color-two-o",e.colorTwo.opacit),document.body.style.setProperty("--color-two-title",e.colorTwo.title),document.body.style.setProperty("--color-three",e.colorThree.color),document.body.style.setProperty("--color-three-o",e.colorThree.opacit),document.body.style.setProperty("--color-three-title",e.colorThree.title),document.body.style.setProperty("--color-four",e.colorFour.color),document.body.style.setProperty("--color-four-o",e.colorFour.opacit),document.body.style.setProperty("--color-four-title",e.colorFour.title),document.body.style.setProperty("--layers-border-color",e.borderColor),y(e.packNameString)};return o.a.createElement("div",{onClick:function(e){e.target.classList.contains("func-colse-select-color")&&n(!1)},onMouseEnter:function(){i(!0)},onMouseLeave:function(){i(!1)},id:"select-color-container",className:"func-colse-select-color ".concat(a?"active":"deactive")},o.a.createElement("div",{className:"close-select-color",onClick:function(){n(!1)}},o.a.createElement("div",{className:"line"}),o.a.createElement("div",{className:"line"}),o.a.createElement("div",{className:"line"})),o.a.createElement("div",{className:"desc"},o.a.createElement("div",{className:"desc-text"},"color set")),o.a.createElement("div",{id:"select-color",className:"".concat(a?"open":"close"),ref:w,onClick:function(){!a&&n(!0)}},o.a.createElement("div",{className:"color-one"},o.a.createElement(b,{select:P,defaultPack:k.pack4,activePack:k[h]})),o.a.createElement("div",{className:"color-two"},o.a.createElement(b,{select:P,defaultPack:k.pack1,activePack:k[h]})),o.a.createElement("div",{className:"color-three"},o.a.createElement(b,{select:P,defaultPack:k.pack3,activePack:k[h]}))))},f=a(2),N=function(e,t){switch(t.type){case"set-active-page":return Object(f.a)({},e,{activePage:t.payload});case"set-pages-status":if("zoom-out"===t.payload)return Object(f.a)({},e,{pagesStatus:t.payload,aPageIsActive:!1});if("zoom-in"===t.payload)return Object(f.a)({},e,{pagesStatus:t.payload});break;case"set-a-page-is-active":return Object(f.a)({},e,{aPageIsActive:t.payload});case"set-pages-pos":return Object(f.a)({},e,{pagesPos:t.payload});case"set-modal":return Object(f.a)({},e,{modalStatus:t.payload.status,modalData:t.payload.data});case"set-pages-transiting":return Object(f.a)({},e,{pagesTransiting:t.payload});case"set-pages-traversing":return Object(f.a)({},e,{pagesTraversing:t.payload});default:return e}},h=function(e){var t=Object(c.useReducer)(N,{myName:"H",activePage:"home",pagesStatus:"zoom-in",pagesPos:"top-left",aPageIsActive:!0,pageDest:"none",pagesTransiting:{status:!1,direction:"come"},pagesTraversing:{status:!1},modalStatus:"first-off",modalData:null}),a=Object(m.a)(t,2),n=a[0],s=a[1],r=function(e){s({type:"set-active-page",payload:e}),"home"===e?s({type:"set-pages-pos",payload:"top-left"}):"about"===e?s({type:"set-pages-pos",payload:"top-right"}):"works"===e?s({type:"set-pages-pos",payload:"bottom-right"}):"contact"===e&&s({type:"set-pages-pos",payload:"bottom-left"}),"from-menu"!==e&&setTimeout((function(){s({type:"set-a-page-is-active",payload:!0})}),1e3)};return o.a.createElement(l.Provider,{value:{myName:n.myName,activePage:n.activePage,pagesStatus:n.pagesStatus,aPageIsActive:n.aPageIsActive,pagesPos:n.pagesPos,modalStatus:n.modalStatus,modalData:n.modalData,pagesTransiting:n.pagesTransiting,pagesTraversing:n.pagesTraversing,setActivePage:r,setPagesStatus:function(e){var t=e||("zoom-in"===n.pagesStatus?"zoom-out":"zoom-in");s({type:"set-pages-status",payload:t})},setApageIsActive:function(e){s({type:"set-a-page-is-active",payload:e})},traversPages:function(e){var t="set-pages-traversing";n.pagesTraversing.status||s({type:t,payload:{status:!0}}),setTimeout((function(){r(e)}),500),setTimeout((function(){s({type:t,payload:{status:!1}})}),1750)},setPagesTransiting:function(e,t){var a="set-pages-transiting";s({type:a,payload:{status:e,direction:t}}),setTimeout((function(){s({type:a,payload:{status:!1,direction:t}})}),1300)},setModal:function(e,t){s({type:"set-modal",payload:{status:e,data:t}})}}},e.children)},y=(a(18),a(19),a(20),a(21),function(){var e=Object(c.useContext)(l),t=e.aPageIsActive,a=e.setActivePage,n=e.setPagesStatus,s=e.setPagesTransiting,m=e.pagesTransiting,d=e.pagesTraversing;return o.a.createElement("div",{tabIndex:"1",onKeyUp:function(e){27===e.keyCode&&t&&!d.status&&(a("from-menu"),n("zoom-out"),s(!0,"come")),72!==e.keyCode||t||m.status||(a("home"),n("zoom-in"),s(!0,"go")),65!==e.keyCode||t||m.status||(a("about"),n("zoom-in"),s(!0,"go")),87!==e.keyCode||t||m.status||(a("works"),n("zoom-in"),s(!0,"go")),67!==e.keyCode||t||m.status||(a("contact"),n("zoom-in"),s(!0,"go"))}},o.a.createElement(E,null),o.a.createElement(k,null),o.a.createElement(r,null),o.a.createElement(p,null),o.a.createElement(i,null))});s.a.render(o.a.createElement((function(){return o.a.createElement(h,null,o.a.createElement(y,null))}),null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.f0ca41ff.chunk.js.map