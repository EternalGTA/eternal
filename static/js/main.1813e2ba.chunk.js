(this["webpackJsonpeternal-gta2"]=this["webpackJsonpeternal-gta2"]||[]).push([[0],{47:function(e){e.exports=JSON.parse('{"url":"http://localhost:8080"}')},57:function(e,t,c){},58:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(40),i=c.n(a),r=(c(57),c(58),c(4)),j=c(94),l=c(1),d=["Home","Lobby","Mod Menus","Youtube","Discord"],b=["","lobby","mod-menu","ytb","discord"];function o(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"home-title",children:Object(l.jsx)("h1",{children:"ETERNAL GTA"})}),Object(l.jsx)(j.a,{className:"home",container:!0,spacing:{xs:2,md:5},columns:{xs:4,sm:8,md:12},children:d.map((function(e,t){return Object(l.jsx)(j.a,{item:!0,children:Object(l.jsx)("a",{href:"/#/"+b[t],className:"menu-button",children:e})},t)}))})]})}var u=c(8),m=(c(63),c.p+"static/media/blanc.5dde4282.png");function h(){var e=n.a.useState(!1),t=Object(u.a)(e,2),c=t[0],a=t[1],i=function(){var e=window.scrollY;a(e>1)};Object(s.useEffect)((function(){window.addEventListener("scroll",i)}));var r=["navbar"];return c&&r.push("scrolled"),Object(l.jsxs)("header",{className:r.join(" "),children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("img",{alt:"",src:m})}),Object(l.jsx)("nav",{className:"navigation",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#/lobby",children:"Lobby"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#/mod-menu",children:"Mod Menus"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#/ytb",children:"Youtube"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#/discord",children:"Discord"})})]})})]})}function O(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),c=t[0],a=(t[1],Object(s.useState)(!0)),i=Object(u.a)(a,2),r=i[0];i[1];return n.a.useEffect((function(){}),[]),r||c?Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"header",children:Object(l.jsx)(h,{})}),Object(l.jsx)("div",{className:"content",children:Object(l.jsx)("div",{className:"center",children:Object(l.jsx)("div",{className:"container"})})}),Object(l.jsx)("div",{className:"footer",children:"Copyright - Eternal"})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"header",children:Object(l.jsx)(h,{})}),Object(l.jsx)("div",{className:"content",children:Object(l.jsx)("div",{className:"center",children:"Loading Lobbys..."})}),Object(l.jsx)("div",{className:"footer"})]})}c(64);var x=["#0F0","#F00","#fabe58","#0080FF"],v=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"card",style:{boxShadow:"1px 1px 2px 1px ".concat(x.at(e.status))},children:[Object(l.jsx)("div",{className:"card-body",children:Object(l.jsx)("div",{className:"card-body-image",children:Object(l.jsx)("img",{className:"card-img",src:e.imageUrl,alt:e.name})})}),Object(l.jsx)("div",{className:"card-header",children:Object(l.jsx)("div",{className:"card-name",children:e.name})}),Object(l.jsx)("div",{className:"card-footer",children:Object(l.jsxs)("div",{className:"card-button",children:[e.activate?Object(l.jsx)("button",{className:"btn download-btn "+(e.activate?"":"disabled"),disabled:!e.activate,onClick:function(){e.activate&&window.open(e.url)},children:"Download"}):"",Object(l.jsx)("button",{className:"btn preview-btn",children:"Preview"})]})})]})})},f=c(46),p=c.n(f),N=c(47);var g;c(83),c(84);function E(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(!0),r=Object(u.a)(i,2),j=r[0],d=r[1];return n.a.useEffect((function(){p.a.get("".concat(N.url,"/api/menu")).then((function(e){var t=e.data;a(t),d(!1)})).catch((function(e){return console.log(e)}))}),[]),j||c?Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"header",children:Object(l.jsx)(h,{})}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)("div",{className:"center",children:[Object(l.jsxs)("div",{className:"legend",children:[Object(l.jsx)("div",{children:"Undetect"}),Object(l.jsx)("div",{children:"Detect"}),Object(l.jsx)("div",{children:"Risky"}),Object(l.jsx)("div",{children:"Updating"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"LES MODS MENUS GRATUITS"}),Object(l.jsxs)("p",{children:["Vous trouverez ici les diff\xe9rents mods menus que je pr\xe9sente sur ma cha\xeene.",Object(l.jsx)("br",{}),"Pour savoir comment installer un menu, n'h\xe9sitez pas \xe0 cliquer sur Preview,",Object(l.jsx)("br",{}),"vous aurez par la suite un tutoriel pour l'installer et une vid\xe9o showcase."]})]}),Object(l.jsxs)("div",{className:"container",children:[c.map((function(e){return Object(l.jsx)(v,{name:e.name,description:e.description,url:e.url,imageUrl:e.imageUrl,activate:e.activate,status:e.status},e.name)})),c.map((function(e){return Object(l.jsx)(v,{name:e.name,description:e.description,url:e.url,imageUrl:e.imageUrl,activate:e.activate,status:e.status},e.name)})),c.map((function(e){return Object(l.jsx)(v,{name:e.name,description:e.description,url:e.url,imageUrl:e.imageUrl,activate:e.activate,status:e.status},e.name)}))]})]})}),Object(l.jsx)("div",{className:"footer",children:"Copyright - Eternal"})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"header",children:Object(l.jsx)(h,{})}),Object(l.jsx)("div",{className:"content",children:Object(l.jsx)("div",{className:"center",children:"Loading Menus..."})}),Object(l.jsx)("div",{className:"footer"})]})}!function(e){e[e.UNDETECT=0]="UNDETECT",e[e.DETECT=1]="DETECT",e[e.RISKY=2]="RISKY",e[e.UPDATING=3]="UPDATING"}(g||(g={}));var T=function(){return Object(l.jsx)("div",{className:"app",children:Object(l.jsxs)(r.d,{children:[Object(l.jsx)(r.b,{path:"/",element:Object(l.jsx)(o,{})}),Object(l.jsx)(r.b,{path:"/lobby",element:Object(l.jsx)(O,{})}),Object(l.jsx)(r.b,{path:"/discord",element:Object(l.jsx)(r.a,{replace:!0,to:""})}),Object(l.jsx)(r.b,{path:"/mod-menu",element:Object(l.jsx)(E,{})})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,98)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))},y=c(48),S=c(97),U=c(30),D=Object(y.a)({palette:{mode:"dark"}});i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(S.a,{theme:D,children:Object(l.jsx)(U.a,{children:Object(l.jsx)(T,{})})})}),document.getElementById("root")),w()}},[[85,1,2]]]);
//# sourceMappingURL=main.1813e2ba.chunk.js.map