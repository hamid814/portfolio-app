(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),o=a(5),l=a.n(o),r=Object(c.createContext)(),s=(a(11),function(){var e=Object(c.useContext)(r),t=e.aPageIsActive,a=e.setActivePage,o=e.setPagesStatus,l=e.setPagesTransiting,s=e.pagesTraversing;return n.a.createElement("div",{id:"menu-container",className:"".concat(!t&&"d-n"," ").concat(s.status&&"d-n"),onClick:function(e){a("from-menu"),o("zoom-out"),l(!0,"come")}},n.a.createElement("div",{id:"menu"}),n.a.createElement("div",{id:"shadow"}),n.a.createElement("div",{id:"menu-desc"},"go back"),n.a.createElement("div",{id:"menu-cover-for-hover"}))}),i=function(){return n.a.createElement("div",{id:"back-scroll"})},m=(a(12),a(1)),u=(a(13),function(){var e=Object(c.useContext)(r),t=e.myName,a=e.pagesStatus,o=e.activePage,l=e.aPageIsActive,s=e.setActivePage,i=e.setPagesStatus,u=e.setPagesTransiting,d=e.traversPages,g=e.pagesTransiting,v=Object(c.useState)("HOME"),p=Object(m.a)(v,2),E=p[0],b=p[1],f=Object(c.useState)([{name:"HOME",time:100},{name:"H&ME",time:250},{name:"H&*E",time:300},{name:"H0*E",time:500},{name:"HO^#",time:650},{name:"H@ME",time:800},{name:"$@ME",time:900},{name:"$OME",time:1050},{name:"#OME",time:1150},{name:"##ME",time:1250},{name:"###E",time:1350},{name:"####",time:1450},{name:"H123",time:1600},{name:"HOM4",time:1800},{name:"H!M4",time:2e3},{name:"H!ME",time:2150},{name:"HOME",time:2400}]),k=Object(m.a)(f,2),h=k[0];k[1];Object(c.useEffect)((function(){h.forEach((function(e){setTimeout((function(){b(e.name)}),2.4*e.time)}))}),[]);return n.a.createElement("div",{className:"page-container ".concat("home"===o&&l&&"active"),id:"home"},n.a.createElement("div",{className:"side-layer ".concat(l?"not":"is")}),n.a.createElement("div",{className:"back-layer ".concat(l?"not":"is")}),n.a.createElement("div",{className:"layer ".concat(l?"not":"is"," ").concat("zoom-in"===a?"zoom-in-vertical":"zoom-out-vertical"),onClick:function(){l||g.status||(s("home"),i("zoom-in"),u(!0,"go"))}},n.a.createElement("h1",null,E,n.a.createElement("span",{className:"desc"},n.a.createElement("div",{className:"text"},"click")))),n.a.createElement("div",{className:"background-layer"}),n.a.createElement("div",{className:"page ".concat("home"===o?"on":"off"),onMouseMove:function(e){var t=e.clientX,a=e.clientY;setTimeout((function(){document.querySelector("#home").style.setProperty("--mouse-x","".concat(t,"px")),document.querySelector("#home").style.setProperty("--mouse-y","".concat(a,"px"))}),0)}},"Hi!",n.a.createElement("div",null,"I'm ",t),n.a.createElement("div",{className:"background-image"}),n.a.createElement("div",{className:"circle"},n.a.createElement("div",{className:"dot"})),n.a.createElement("div",{className:"go-to-contact-container",onClick:function(){d("contact")}},n.a.createElement("div",{className:"go-to-contact"},n.a.createElement("div",{className:"arrow"},n.a.createElement("div",{className:"line line-one"}),n.a.createElement("div",{className:"line line-two"}),n.a.createElement("div",{className:"line line-three"})),n.a.createElement("div",{className:"text"},"Contact"))),n.a.createElement("div",{className:"go-to-about-container",onClick:function(){d("about")}},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 65 600"},n.a.createElement("path",{fill:"#fff",fillOpacity:"1"}),n.a.createElement("text",{fill:"#fff"},"About")))))}),d=(a(14),function(e){var t=e.item,a=Object(c.useState)(t.initialPos),o=Object(m.a)(a,2),l=o[0],r=o[1];return n.a.createElement("div",{className:"content-group"},n.a.createElement("div",{className:"content-sheet ".concat(l)},n.a.createElement("div",{className:"content-title"},t.title),n.a.createElement("div",{className:"content-text"},t.text)),n.a.createElement("div",{className:"front-sheet background-pattern-2 ".concat(l),onMouseEnter:function(){"left"===l?r("right"):"right"===l&&r("left")}},t.logo.map((function(e){return n.a.createElement("i",{className:e})}))))}),g=function(){var e=Object(c.useContext)(r),t=e.setActivePage,a=e.pagesStatus,o=e.activePage,l=e.setPagesStatus,s=e.aPageIsActive,i=e.setModal,u=e.setPagesTransiting,g=e.traversPages,v=e.pagesTraversing,p=e.pagesTransiting,E=Object(c.useState)(!1),b=Object(m.a)(E,2),f=b[0],k=b[1],h=Object(c.useState)([{id:1,initialPos:"left",logo:["fab fa-react fa-5x rotate"],title:n.a.createElement("b",null,"React"),text:n.a.createElement("i",null,"experienced with ",n.a.createElement("b",null,"react")," and have done several projects with")},{id:2,initialPos:"left",logo:["fab fa-js fa-5x"],title:"JavaScript",text:n.a.createElement("i",null,"mastered ",n.a.createElement("b",null,"es6")," and ",n.a.createElement("b",null,"es7"))},{id:3,initialPos:"right",logo:["fab fa-html5 fa-5x mr-1","fab fa-css3-alt fa-5x"],title:"HTML, CSS",text:n.a.createElement("i",null,n.a.createElement("b",null,"html5")," and ",n.a.createElement("b",null,"css3"),n.a.createElement("br",null),n.a.createElement("b",null,"semantic")," and ",n.a.createElement("b",null,"modern"),n.a.createElement("br",null),"the fundations of any webpage")},{id:4,initialPos:"right",logo:["fas fa-ruler-combined fa-5x"],title:"UI",text:n.a.createElement("i",null,"have a passion for ",n.a.createElement("b",null,"greate")," UIs")}]),N=Object(m.a)(h,2),w=N[0];N[1];return n.a.createElement("div",{className:"page-container ".concat("home"===o&&s&&"active"),id:"about"},n.a.createElement("div",{className:"side-layer ".concat(s?"not":"is")}),n.a.createElement("div",{className:"back-layer ".concat(s?"not":"is")}),n.a.createElement("div",{className:"layer ".concat(s?"not":"is"," ").concat("zoom-in"===a?"zoom-in-vertical":"zoom-out-vertical"),onClick:function(){s||p.status||(t("about"),l("zoom-in"),u(!0,"go"))}},n.a.createElement("h1",null,"ABOUT",n.a.createElement("span",{className:"desc"},n.a.createElement("div",{className:"text"},"click")))),n.a.createElement("div",{className:"background-layer"},!v.status&&!p.status&&n.a.createElement("div",null,"my ",n.a.createElement("span",null,"Works"))),n.a.createElement("div",{className:"page ".concat("about"===o?"on":"off"," ").concat(f&&"pull-up")},n.a.createElement("div",{className:"header",onClick:function(){i("on",{name:"header",id:1})}},"ABOUT ME"),n.a.createElement("div",{className:"back-sheet background-pattern-1"}),n.a.createElement("div",{className:"content"},w.map((function(e){return n.a.createElement(d,{key:e.id,item:e})}))),n.a.createElement("div",{className:"go-to-contact-container",onClick:function(){g("contact")}},n.a.createElement("div",null,"Contact Me"))),n.a.createElement("div",{className:"go-to-home-container ".concat("zoom-in"!==a&&"d-n"," ").concat(p.status&&"d-n"," ").concat(v.status&&"d-n"),onClick:function(){g("home")}},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 65 600"},n.a.createElement("path",{fill:"#fff",fillOpacity:"1"}),n.a.createElement("text",{fill:"#fff"},"Home"))),n.a.createElement("div",{className:"go-to-works-container ".concat("zoom-in"!==a&&"d-n"," ").concat(p.status&&"d-n"," ").concat(v.status&&"d-n"),onClick:function(){g("works")},onMouseEnter:function(){k(!0)},onMouseLeave:function(){k(!1)}}))},v=(a(15),function(){var e=Object(c.useContext)(r),t=e.setActivePage,a=e.activePage,o=e.pagesStatus,l=e.setPagesStatus,s=e.aPageIsActive,i=e.setPagesTransiting,u=e.traversPages,d=e.pagesTraversing,g=e.pagesTransiting,v=Object(c.useState)(!1),p=Object(m.a)(v,2),E=p[0],b=p[1],f=Object(c.useState)(null),k=Object(m.a)(f,2),h=k[0],N=k[1],w=Object(c.useState)({workOne:{name:"Trello",description:"a clone for trello",text:n.a.createElement("span",null,"this project is the best example for minapulating data in several layers",n.a.createElement("br",null),"fully made with ",n.a.createElement("b",null,"react"),"."),ghLink:"https://github.com/hamid814/trello-clone",ghPagesLink:"https://hamid814.github.io/trello-clone/"},workTwo:{name:"Formi",description:"make forms fast",text:n.a.createElement("span",null,"applicatin idea is to construct simple html'5' forms with just some clicks",n.a.createElement("br",null),"its a classBased component application",n.a.createElement("br",null),"fully made with ",n.a.createElement("b",null,"react"),"."),ghLink:"https://github.com/hamid814/r-p",ghPagesLink:"https://hamid814.github.io/r-p/"},workThree:{name:"Diprella",description:"design concept made visual",text:n.a.createElement("span",null,n.a.createElement("br",null),"designed by ",n.a.createElement("a",{href:"https://selectoglobal.com/",target:"_blanck"},"SELECTO"),n.a.createElement("br",null),"fully made with ",n.a.createElement("b",null,"react"),"."),ghLink:"https://github.com/hamid814/signup-signin-concept",ghPagesLink:"https://hamid814.github.io/signup-signin-concept/"},workFour:{name:"Todo",description:"my first project",text:n.a.createElement("span",null,"project that every Developer should do, a simple Todo app",n.a.createElement("br",null),"CRUD application",n.a.createElement("br",null),"fully made with ",n.a.createElement("b",null,"react"),"."),ghLink:"https://github.com/hamid814/todo-app",ghPagesLink:"https://hamid814.github.io/todo-app/"},github:{name:"Github",description:"my github repos",text:"for more wroks and other reposetories, check out my github profile...",ghLink:"https://github.com/hamid814/"}}),y=Object(m.a)(w,2),O=y[0];y[1];Object(c.useEffect)((function(){N(null)}),[a]);var P=function(e){h&&e.target.id===h?N(null):h&&e.target.id!==h?N(e.target.id):null===h&&N(e.target.id)},T=function(e){window.open(e.target.id)};return n.a.createElement("div",{className:"page-container ".concat("home"===a&&s&&"active"),id:"works"},n.a.createElement("div",{className:"side-layer ".concat(s?"not":"is")}),n.a.createElement("div",{className:"back-layer ".concat(s?"not":"is")}),n.a.createElement("div",{className:"layer ".concat(s?"not":"is"," ").concat("zoom-in"===o?"zoom-in-vertical":"zoom-out-vertical"),onClick:function(){s||g.status||(t("works"),l("zoom-in"),i(!0,"go"))}},n.a.createElement("h1",null,"WORKS",n.a.createElement("span",{className:"desc"},n.a.createElement("div",{className:"text"},"click")))),n.a.createElement("div",{className:"background-layer"},!d.status&&!g.status&&n.a.createElement("div",null,n.a.createElement("span",null,"About")," Me")),n.a.createElement("div",{className:"page ".concat("works"===a?"on":"off"," ").concat(null!==h?"a-work-is-active":"no-works-active"," ").concat(E&&"pull-down")},n.a.createElement("div",{className:"work works-one ".concat("work-one"===h?"opened":"closed")},n.a.createElement("div",{className:"background"}),n.a.createElement("div",{className:"title"},O.workOne.name),n.a.createElement("div",{className:"work-description"},O.workOne.description),n.a.createElement("div",{className:"details-placeholder"}),n.a.createElement("div",{className:"work-details"},n.a.createElement("div",{className:"work-image ".concat(O.workOne.name)}),n.a.createElement("div",{className:"work-text"},O.workOne.text)),n.a.createElement("div",{className:"buttons-panel"},n.a.createElement("div",{className:"button toggle",id:"work-one",onClick:P},n.a.createElement("div",{className:"text",id:"work-one"},"work-one"!==h?"Open":"Close")),n.a.createElement("div",{className:"button gh",id:O.workOne.ghLink,onClick:T},n.a.createElement("div",{className:"text",id:O.workOne.ghLink},"Github")),n.a.createElement("div",{className:"button view",id:O.workOne.ghPagesLink,onClick:T},n.a.createElement("div",{className:"text",id:O.workOne.ghPagesLink},"View")))),n.a.createElement("div",{className:"work reverse works-two ".concat("work-two"===h?"opened":"closed")},n.a.createElement("div",{className:"background"}),n.a.createElement("div",{className:"title"},O.workTwo.name),n.a.createElement("div",{className:"work-description"},O.workTwo.description),n.a.createElement("div",{className:"details-placeholder"}),n.a.createElement("div",{className:"work-details"},n.a.createElement("div",{className:"work-image ".concat(O.workTwo.name)}),n.a.createElement("div",{className:"work-text"},O.workTwo.text)),n.a.createElement("div",{className:"buttons-panel"},n.a.createElement("div",{className:"button toggle",id:"work-two",onClick:P},n.a.createElement("div",{className:"text",id:"work-two"},"work-two"!==h?"Open":"Close")),n.a.createElement("div",{className:"button gh",id:O.workTwo.ghLink,onClick:T},n.a.createElement("div",{className:"text",id:O.workTwo.ghLink},"Github")),n.a.createElement("div",{className:"button view",id:O.workTwo.ghPagesLink,onClick:T},n.a.createElement("div",{className:"text",id:O.workTwo.ghPagesLink},"View")))),n.a.createElement("div",{className:"work works-three ".concat("work-three"===h?"opened":"closed")},n.a.createElement("div",{className:"background"}),n.a.createElement("div",{className:"title"},O.workThree.name),n.a.createElement("div",{className:"work-description"},O.workThree.description),n.a.createElement("div",{className:"details-placeholder"}),n.a.createElement("div",{className:"work-details"},n.a.createElement("div",{className:"work-image ".concat(O.workThree.name)}),n.a.createElement("div",{className:"work-text"},O.workThree.text)),n.a.createElement("div",{className:"buttons-panel"},n.a.createElement("div",{className:"button toggle",id:"work-three",onClick:P},n.a.createElement("div",{className:"text",id:"work-three"},"work-three"!==h?"Open":"Close")),n.a.createElement("div",{className:"button gh",id:O.workThree.ghLink,onClick:T},n.a.createElement("div",{className:"text",id:O.workThree.ghLink},"Github")),n.a.createElement("div",{className:"button view",id:O.workThree.ghPagesLink,onClick:T},n.a.createElement("div",{className:"text",id:O.workThree.ghPagesLink},"View")))),n.a.createElement("div",{className:"work reverse works-four ".concat("work-four"===h?"opened":"closed")},n.a.createElement("div",{className:"background"}),n.a.createElement("div",{className:"title"},O.workFour.name),n.a.createElement("div",{className:"work-description"},O.workFour.description),n.a.createElement("div",{className:"details-placeholder"}),n.a.createElement("div",{className:"work-details"},n.a.createElement("div",{className:"work-image ".concat(O.workFour.name)}),n.a.createElement("div",{className:"work-text"},O.workFour.text)),n.a.createElement("div",{className:"buttons-panel"},n.a.createElement("div",{className:"button toggle",id:"work-four",onClick:P},n.a.createElement("div",{className:"text",id:"work-four"},"work-four"!==h?"Open":"Close")),n.a.createElement("div",{className:"button gh",id:O.workFour.ghLink,onClick:T},n.a.createElement("div",{className:"text",id:O.workFour.ghLink},"Github")),n.a.createElement("div",{className:"button view",id:O.workFour.ghPagesLink,onClick:T},n.a.createElement("div",{className:"text",id:O.workFour.ghPagesLink},"View")))),n.a.createElement("div",{className:"work github ".concat("github"===h?"opened":"closed")},n.a.createElement("div",{className:"background"}),n.a.createElement("div",{className:"title"},O.github.name),n.a.createElement("div",{className:"work-description"},O.github.description),n.a.createElement("div",{className:"details-placeholder"}),n.a.createElement("div",{className:"work-details"},n.a.createElement("div",{className:"work-text"},O.github.text)),n.a.createElement("div",{className:"buttons-panel"},n.a.createElement("div",{className:"button toggle",id:"github",onClick:P},n.a.createElement("div",{className:"text",id:"github"},"github"!==h?"Open":"Close")),n.a.createElement("div",{className:"button gh",id:O.github.ghLink,onClick:T},n.a.createElement("div",{className:"text",id:O.github.ghLink},"Github")))),n.a.createElement("div",{className:"go-to-contact-container",onClick:function(){u("contact")}},n.a.createElement("div",{className:"text"},n.a.createElement("span",null,"Contact")," Me")),n.a.createElement("div",{className:"go-to-about-container",onClick:function(){u("about")},onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)}})))}),p=a(3),E=a(2),b=(a(16),function(){var e=Object(c.useState)({name:{value:"",focused:!1},email:{value:"",focused:!1},company:{value:"",focused:!1},message:{value:"",focused:!1}}),t=Object(m.a)(e,2),a=t[0],o=t[1],l=Object(c.useState)(!1),r=Object(m.a)(l,2),s=(r[0],r[1],Object(c.useState)("")),i=Object(m.a)(s,2),u=(i[0],i[1],Object(c.useState)("")),d=Object(m.a)(u,2),g=(d[0],d[1],Object(c.useState)("")),v=Object(m.a)(g,2),b=(v[0],v[1],function(e){var t=Object(E.a)({},a,Object(p.a)({},e.target.name,Object(E.a)({},a[e.target.name],{value:e.target.value})));o(t)}),f=function(e){var t=Object(E.a)({},a,Object(p.a)({},e.target.name,Object(E.a)({},a[e.target.name],{focused:!0})));o(t)},k=function(e){var t=Object(E.a)({},a,Object(p.a)({},e.target.name,Object(E.a)({},a[e.target.name],{focused:!1})));o(t)};return n.a.createElement("div",{id:"form",onSubmit:function(e){e.preventDefault()}},n.a.createElement("form",null,n.a.createElement("div",{className:"form-header"},n.a.createElement("h2",null,"Let's Get in touch")),n.a.createElement("div",{className:"form-group ".concat(""!==a.name.value||a.name.focused?"active":"not-active")},n.a.createElement("label",{onClick:f},"Name"),n.a.createElement("input",{type:"text",name:"name",value:a.name.value,onChange:b,onFocus:f,onBlur:k})),n.a.createElement("div",{className:"form-group ".concat(""!==a.email.value||a.email.focused?"active":"not-active")},n.a.createElement("label",null,"Email"),n.a.createElement("input",{type:"text",name:"email",value:a.email.value,onChange:b,onFocus:f,onBlur:k})),n.a.createElement("div",{className:"form-group ".concat(""!==a.company.value||a.company.focused?"active":"not-active")},n.a.createElement("label",null,"Company"),n.a.createElement("input",{type:"text",name:"company",value:a.company.value,onChange:b,onFocus:f,onBlur:k})),n.a.createElement("div",{className:"form-group ".concat(""!==a.message.value||a.message.focused?"active":"not-active")},n.a.createElement("label",null,"Message"),n.a.createElement("input",{type:"text",name:"message",value:a.message.value,onChange:b,onFocus:f,onBlur:k})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"submit",value:"Send"}))))}),f=function(){var e=Object(c.useContext)(r),t=e.setActivePage,a=e.pagesStatus,o=e.activePage,l=e.setPagesStatus,s=e.aPageIsActive,i=e.traversPages,m=e.setPagesTransiting,u=e.pagesTransiting;return n.a.createElement("div",{className:"page-container ".concat("home"===o&&s&&"active"),id:"contact"},n.a.createElement("div",{className:"side-layer ".concat(s?"not":"is")}),n.a.createElement("div",{className:"back-layer ".concat(s?"not":"is")}),n.a.createElement("div",{className:"layer ".concat(s?"not":"is"," ").concat("zoom-in"===a?"zoom-in-vertical":"zoom-out-vertical"),onClick:function(){s||u.status||(t("contact"),l("zoom-in"),m(!0,"go"))}},n.a.createElement("h1",null,"CONTACT",n.a.createElement("span",{className:"desc"},n.a.createElement("div",{className:"text"},"click")))),n.a.createElement("div",{className:"background-layer"}),n.a.createElement("div",{className:"page ".concat("contact"===o?"on":"off")},n.a.createElement("div",{className:"background"},n.a.createElement("div",{className:"line-one"},"CON"),n.a.createElement("div",{className:"line-two"},"TACT")),n.a.createElement("div",{className:"social"},n.a.createElement("div",{className:"item-container"},n.a.createElement("div",{className:"item"},n.a.createElement("div",{className:"text"},"hamid331994",n.a.createElement("br",null),n.a.createElement("br",null),"@gmial.com"),n.a.createElement("div",{className:"item-desc"})),n.a.createElement("div",{className:"item-border"})),n.a.createElement("div",{className:"item-container",onClick:function(){window.open("https://github.com/hamid814")}},n.a.createElement("div",{className:"item"},n.a.createElement("div",{className:"text"},"github"),n.a.createElement("div",{className:"item-desc"},"click to open github")),n.a.createElement("div",{className:"item-border"}))),n.a.createElement(b,null),n.a.createElement("div",{className:"go-to-works-container",onClick:function(){i("works")}},n.a.createElement("div",{className:"text"},"See My ",n.a.createElement("span",null,"works"))),n.a.createElement("div",{className:"go-to-home-container",onClick:function(){i("home")}},n.a.createElement("div",{className:"go-to-home"},n.a.createElement("div",{className:"arrow"},n.a.createElement("div",{className:"line line-one"}),n.a.createElement("div",{className:"line line-two"}),n.a.createElement("div",{className:"line line-three"})),n.a.createElement("div",{className:"text"},"Home")))))},k=function(){var e=Object(c.useContext)(r),t=e.pagesStatus,a=e.pagesPos,o=e.pagesTransiting,l=e.pagesTraversing;return n.a.createElement("div",{className:"pages\n                  ".concat(t,"\n                  ").concat(a,"\n                  ").concat(o.status&&"transiting ".concat(o.direction),"\n                  ").concat(l.status&&"traversing")},n.a.createElement(u,null),n.a.createElement(g,null),n.a.createElement(v,null),n.a.createElement(f,null))},h=(a(17),function(){var e=Object(c.useContext)(r),t=e.modalStatus,a=e.setModal,o=Object(c.useState)("off"),l=Object(m.a)(o,2),s=l[0],i=l[1];Object(c.useEffect)((function(){"on"===t?(i("come"),setTimeout((function(){i("on")}),1e3)):"off"===t?(i("go"),setTimeout((function(){i("off")}),1e3)):"first-off"===t&&i("off")}),[t]);return n.a.createElement("div",{id:"modal",className:"func-close-modal modal-".concat(s),onClick:function(e){e.target.classList.contains("func-close-modal")&&"on"===s&&a("off",null)}},n.a.createElement("div",{id:"modal-container"},n.a.createElement("div",{id:"modal-close",onClick:function(){"on"===s&&a("off",null)}},"\xd7")))}),N=(a(18),function(e){var t=e.select,a=e.defaultPack,o=e.activePack,l=Object(c.useState)(a),r=Object(m.a)(l,2),s=r[0],i=r[1],u={background:s.colorOne.color,border:"1px solid ".concat(s.borderColor)},d={background:s.colorTwo.color,border:"1px solid ".concat(s.borderColor)},g={background:s.colorThree.color,border:"1px solid ".concat(s.borderColor)},v={border:"1px solid ".concat(s.borderColor)};return n.a.createElement("div",{className:"color-pack",onClick:function(){i(o),t(s)},style:v},n.a.createElement("div",{className:"slice-one",style:u}),n.a.createElement("div",{className:"slice-two",style:d}),n.a.createElement("div",{className:"slice-three",style:g}))}),w=function(){var e=Object(c.useState)(!1),t=Object(m.a)(e,2),a=t[0],o=t[1],l=Object(c.useState)(!1),r=Object(m.a)(l,2),s=r[0],i=r[1],u=Object(c.useState)(0),d=Object(m.a)(u,2),g=d[0],v=d[1],p=Object(c.useState)({pack1:{packNameString:"pack1",colorOne:{color:"rgb(38, 38, 38)",opacit:"rgba(38, 38, 38, 0.9)",title:"#56617c"},colorTwo:{color:"rgba(140, 133, 41)",opacit:"rgba(140, 133, 41, 0.9)",title:"#8C8529"},colorThree:{color:"rgba(86, 97, 124)",opacit:"rgba(86, 97, 124, 0.9)",title:"#6E361A"},colorFour:{color:"rgba(110, 54, 26)",opacit:"rgba(110, 54, 26, 0.9)",title:"#262626"},borderColor:"transparent"},pack2:{packNameString:"pack2",colorOne:{color:"rgb(210, 180, 140)",opacit:"rgba(210, 180, 140, 0.9)",title:"rgb(255, 99, 71)"},colorTwo:{color:"rgb(0, 128, 128)",opacit:"rgba(0, 128, 128, 0.9)",title:"rgb(0, 128, 128)"},colorThree:{color:"rgb(255, 99, 71)",opacit:"rgba(255, 99, 71, 0.9)",title:"rgb(216, 191, 216)"},colorFour:{color:"rgb(216, 191, 216)",opacit:"rgba(216, 191, 216, 0.9)",title:"rgb(210, 180, 140)"},borderColor:"transparent"},pack3:{packNameString:"pack3",colorOne:{color:"rgb(30, 30, 30)",opacit:"rgba(30, 30, 30, 0.9)",title:"#56617c"},colorTwo:{color:"rgb(150, 150, 150)",opacit:"rgba(150, 150, 150, 0.9)",title:"#8C8529"},colorThree:{color:"rgb(210, 210, 210)",opacit:"rgba(210, 210, 210, 0.9)",title:"#6E361A"},colorFour:{color:"rgb(90, 90, 90)",opacit:"rgba(90, 90, 90, 0.9)",title:"#262626"},borderColor:"transparent"},pack4:{packNameString:"pack4",colorOne:{color:"rgba(255,255,255,1)",opacit:"rgba(0,0,0,0)",title:"#56617c"},colorTwo:{color:"rgba(255,255,255,1)",opacit:"rgba(0,0,0,0)",title:"#8C8529"},colorThree:{color:"rgba(255,255,255,1)",opacit:"rgba(0,0,0,0)",title:"#6E361A"},colorFour:{color:"rgba(255,255,255,1)",opacit:"rgba(0,0,0,0)",title:"#262626"},borderColor:"#999"}}),E=Object(m.a)(p,2),b=E[0],f=(E[1],Object(c.useState)("pack1")),k=Object(m.a)(f,2),h=k[0],w=k[1],y=Object(c.useRef)(null);Object(c.useEffect)((function(){O(b.pack2)}),[]),Object(c.useEffect)((function(){a?y.current.style.transform="rotateZ(0deg)":a||(y.current.style.transform="rotateZ(".concat(g,"deg)"),setTimeout((function(){360===g?v(1):0===g?v(359):g<360&&(s?v(g-1):s||v(g+1))}),20))}),[g,a]);var O=function(e){document.body.style.setProperty("--color-one",e.colorOne.color),document.body.style.setProperty("--color-one-o",e.colorOne.opacit),document.body.style.setProperty("--color-one-title",e.colorOne.title),document.body.style.setProperty("--color-two",e.colorTwo.color),document.body.style.setProperty("--color-two-o",e.colorTwo.opacit),document.body.style.setProperty("--color-two-title",e.colorTwo.title),document.body.style.setProperty("--color-three",e.colorThree.color),document.body.style.setProperty("--color-three-o",e.colorThree.opacit),document.body.style.setProperty("--color-three-title",e.colorThree.title),document.body.style.setProperty("--color-four",e.colorFour.color),document.body.style.setProperty("--color-four-o",e.colorFour.opacit),document.body.style.setProperty("--color-four-title",e.colorFour.title),document.body.style.setProperty("--layers-border-color",e.borderColor),w(e.packNameString)};return n.a.createElement("div",{onClick:function(e){e.target.classList.contains("func-colse-select-color")&&o(!1)},onMouseEnter:function(){i(!0)},onMouseLeave:function(){i(!1)},id:"select-color-container",className:"func-colse-select-color ".concat(a?"active":"deactive")},n.a.createElement("div",{className:"close-select-color",onClick:function(){o(!1)}},n.a.createElement("div",{className:"line"}),n.a.createElement("div",{className:"line"}),n.a.createElement("div",{className:"line"})),n.a.createElement("div",{className:"desc"},n.a.createElement("div",{className:"desc-text"},"color set")),n.a.createElement("div",{id:"select-color",className:"".concat(a?"open":"close"),ref:y,onClick:function(){!a&&o(!0)}},n.a.createElement("div",{className:"color-one"},n.a.createElement(N,{select:O,defaultPack:b.pack4,activePack:b[h]})),n.a.createElement("div",{className:"color-two"},n.a.createElement(N,{select:O,defaultPack:b.pack1,activePack:b[h]})),n.a.createElement("div",{className:"color-three"},n.a.createElement(N,{select:O,defaultPack:b.pack3,activePack:b[h]}))))},y=function(){return Object(c.useContext)(r).isDeveloping?n.a.createElement("div",{style:{position:"absolute",top:70,right:-410,display:"inline-block",background:"#6c9",padding:7,transform:"rotateZ(45deg)",textAlign:"center",width:1e3,zIndex:999999}},"Site is under Development"):n.a.createElement(n.a.Fragment,null)},O=function(e,t){switch(t.type){case"set-active-page":return Object(E.a)({},e,{activePage:t.payload});case"set-pages-status":if("zoom-out"===t.payload)return Object(E.a)({},e,{pagesStatus:t.payload,aPageIsActive:!1});if("zoom-in"===t.payload)return Object(E.a)({},e,{pagesStatus:t.payload});break;case"set-a-page-is-active":return Object(E.a)({},e,{aPageIsActive:t.payload});case"set-pages-pos":return Object(E.a)({},e,{pagesPos:t.payload});case"set-modal":return Object(E.a)({},e,{modalStatus:t.payload.status,modalData:t.payload.data});case"set-pages-transiting":return Object(E.a)({},e,{pagesTransiting:t.payload});case"set-pages-traversing":return Object(E.a)({},e,{pagesTraversing:t.payload});default:return e}},P=function(e){var t=Object(c.useReducer)(O,{myName:"H",myTechs:["react","typescript","javascript","html","css, sass, framewoks","UI","api","psd to HTML","REST api"],myWantedTechs:["GatsbyJS","nodeJS","NEXTjs","ExpressJS","mongodb","react-native","electron","url shorteners"],activePage:"about",pagesStatus:"zoom-in",pagesPos:"top-right",aPageIsActive:!0,pageDest:"none",pagesTransiting:{status:!1,direction:"come"},pagesTraversing:{status:!1},modalStatus:"first-off",modalData:null,isDeveloping:!0}),a=Object(m.a)(t,2),o=a[0],l=a[1],s=function(e){l({type:"set-active-page",payload:e}),"home"===e?l({type:"set-pages-pos",payload:"top-left"}):"about"===e?l({type:"set-pages-pos",payload:"top-right"}):"works"===e?l({type:"set-pages-pos",payload:"bottom-right"}):"contact"===e&&l({type:"set-pages-pos",payload:"bottom-left"}),"from-menu"!==e&&setTimeout((function(){l({type:"set-a-page-is-active",payload:!0})}),1e3)};return n.a.createElement(r.Provider,{value:{myName:o.myName,activePage:o.activePage,pagesStatus:o.pagesStatus,aPageIsActive:o.aPageIsActive,pagesPos:o.pagesPos,modalStatus:o.modalStatus,modalData:o.modalData,pagesTransiting:o.pagesTransiting,pagesTraversing:o.pagesTraversing,isDeveloping:o.isDeveloping,setActivePage:s,setPagesStatus:function(e){var t=e||("zoom-in"===o.pagesStatus?"zoom-out":"zoom-in");l({type:"set-pages-status",payload:t})},setApageIsActive:function(e){l({type:"set-a-page-is-active",payload:e})},traversPages:function(e){var t="set-pages-traversing";o.pagesTraversing.status||l({type:t,payload:{status:!0}}),setTimeout((function(){s(e)}),500),setTimeout((function(){l({type:t,payload:{status:!1}})}),1750)},setPagesTransiting:function(e,t){var a="set-pages-transiting";l({type:a,payload:{status:e,direction:t}}),setTimeout((function(){l({type:a,payload:{status:!1,direction:t}})}),1300)},setModal:function(e,t){l({type:"set-modal",payload:{status:e,data:t}})}}},e.children)},T=(a(19),a(20),a(21),a(22),function(){var e=Object(c.useContext)(r),t=e.aPageIsActive,a=e.setActivePage,o=e.setPagesStatus,l=e.setPagesTransiting,m=e.pagesTransiting,u=e.pagesTraversing;Object(c.useEffect)((function(){a("from-menu"),o("zoom-out"),l(!0,"come")}),[]);return n.a.createElement("div",{tabIndex:"1",onKeyUp:function(e){27===e.keyCode&&t&&!u.status&&(a("from-menu"),o("zoom-out"),l(!0,"come")),72!==e.keyCode||t||m.status||(a("home"),o("zoom-in"),l(!0,"go")),65!==e.keyCode||t||m.status||(a("about"),o("zoom-in"),l(!0,"go")),87!==e.keyCode||t||m.status||(a("works"),o("zoom-in"),l(!0,"go")),67!==e.keyCode||t||m.status||(a("contact"),o("zoom-in"),l(!0,"go"))}},n.a.createElement(h,null),n.a.createElement(w,null),n.a.createElement(s,null),n.a.createElement(k,null),n.a.createElement(i,null),n.a.createElement(y,null))});l.a.render(n.a.createElement((function(){return n.a.createElement(P,null,n.a.createElement(T,null))}),null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.d3ec2fed.chunk.js.map