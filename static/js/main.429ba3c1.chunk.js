(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n(3),i=n(1),s=n(0),l=Object(i.createContext)(),r=function(e){var t=e.children,n=Object(i.useState)("light"),c=Object(a.a)(n,2),r=c[0],o=c[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://alvintsa.github.io/",j="Alvin's Portfolio",h={name:"Alvin",description:'I\'m currently a Master\'s Student in Computer Science at the University at Buffalo, \n    where I also received my Bachelor\'s in Computer Science with Minors in Japanese, Mathematics, and Sociology \n    in 2023. Along with my current studies, I work with two professors, \n    conducting research in NLP, AI, and Software; each in their respective labs: \n    <a href="https://www.acsu.buffalo.edu/~cxjacobs/index/CaLiCo_Lab.html" target="_blank" rel="noopener noreferrer">\n      Computational Linguistics and Cognition (CaLiCo) Lab\n    </a>, and\n    <a href="https://cse.buffalo.edu/cubelab/" target="_blank" rel="noopener noreferrer">\n      Computational and Equity (cUBe) Lab\n    </a>.',resume:"https://alvintsa.github.io/resume-page/alvin-tsang-resume.pdf",social:{linkedin:"https://www.linkedin.com/in/alvintsa/",github:"https://github.com/alvintsa"}},b=[{name:"AlvinGPT",description:"A flexibile chatbot that combines Information Retrieval, SEO, NLP, and AI techniques to allow people to have an interactive Google-like search!",stack:["Python","ReactJS","Google Cloud Platform"],sourceCode:"https://github.com/alvintsa/AlvinGPT-public"},{name:"clamp",description:"A Python package that simplifies clustering of LLM next-word predictions with an end-to-end pipeline for seamless analysis.",stack:["Python","Pytorch","YAML"],sourceCode:"https://github.com/calicolab/clamp"},{name:"Steins Gate Auctions",description:"A deployed full-stack e-commerce web application that is themed after the teamapos favorite anime. It incorporates various Web Development techniques such as TCP, IP, and HTTP protocols, authentication, security, and WebSockets.",stack:["Python","JavaScript","HTML","CSS","Docker","MongoDB","Digital Ocean"],sourceCode:"https://github.com/alvintsa/Steinsgateauctions-CSE312-Project"}],u=["Making Friends!","Python","JavaScript","HTML","CSS","Scala","C#","Docker","ReactJS","NodeJS","SQL","MongoDB","Digital Ocean"],d="alvinc2013@gmail.com",m=n(16),O=n.n(m),p=n(14),f=n.n(p),x=n(18),v=n.n(x),k=n(17),g=n.n(k),N=(n(28),function(){var e=Object(i.useContext)(l),t=Object(a.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(i.useState)(!1),o=Object(a.a)(r,2),j=o[0],h=o[1],m=function(){return h(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[b.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:m,className:"link link--nav",children:"Projects"})}):null,u.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:m,className:"link link--nav",children:"Skills"})}):null,d?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:m,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(f.a,{}):Object(s.jsx)(O.a,{})}),Object(s.jsx)("button",{type:"button",onClick:m,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(g.a,{}):Object(s.jsx)(v.a,{})})]})}),_=(n(32),function(){var e=o,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(N,{})]})}),w=n(11),C=n.n(w),S=n(19),y=n.n(S),P=n.p+"static/media/profile.fab5d626.jpg",L=(n(33),function(){var e=h.name,t=h.role,n=h.description,c=h.resume,a=h.social;return Object(s.jsx)("div",{className:"about center",children:Object(s.jsxs)("div",{className:"about__content",children:[Object(s.jsxs)("div",{className:"about__text",children:[e&&Object(s.jsxs)("h1",{children:["Hi! I'm ",Object(s.jsx)("span",{className:"about__name",children:e})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[c&&Object(s.jsx)("a",{href:c,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume (link)"})}),a&&Object(s.jsxs)(s.Fragment,{children:[a.github&&Object(s.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(C.a,{})}),a.linkedin&&Object(s.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(y.a,{})})]})]})]}),Object(s.jsx)("div",{className:"about__image",children:Object(s.jsx)("img",{src:P,alt:"Profile"})})]})})}),A=n(7),I=n.n(A),M=n(20),E=n.n(M),T=(n(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},I()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(C.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(E.a,{})})]})}),J=(n(36),function(){return b.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:b.map((function(e){return Object(s.jsx)(T,{project:e},I()())}))})]}):null}),D=(n(37),function(){return u.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:u.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},I()())}))})]}):null}),B=n(21),G=n.n(B),H=(n(38),function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top","aria-label":"top",children:Object(s.jsx)(G.a,{fontSize:"large"})})}):null}),R=(n(39),function(){return d?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(d),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),q=(n(40),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/rjshkhr/cleanfolio",className:"link footer__link"})})}),F=(n(41),function(){var e=Object(i.useContext)(l),t=Object(a.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(_,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(L,{}),Object(s.jsx)(J,{}),Object(s.jsx)(D,{}),Object(s.jsx)(R,{})]}),Object(s.jsx)(H,{}),Object(s.jsx)(q,{})]})});n(42);Object(c.render)(Object(s.jsx)(r,{children:Object(s.jsx)(F,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.429ba3c1.chunk.js.map