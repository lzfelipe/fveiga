(this.webpackJsonpfveiga=this.webpackJsonpfveiga||[]).push([[0],{16:function(e,n,t){e.exports=t.p+"static/media/logo_horz.efe3b944.svg"},18:function(e,n,t){e.exports=t.p+"static/media/git.d19bbdb4.png"},27:function(e,n,t){e.exports=t.p+"static/media/logo.58592368.svg"},28:function(e,n,t){e.exports=t.p+"static/media/ig.c4b29dd2.svg"},32:function(e,n,t){e.exports=t(45)},43:function(e,n,t){},44:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(26),l=t.n(r),c=t(1),o=t(2),s=t(10),m=t(11),d=t(13),p=t(14),u=t(27),h=t.n(u),f=t(16),g=t.n(f),E=t(7),v=t.n(E),b=t(28),y=t.n(b),x=t(8),w=t.n(x),j=t(3),k=t(4);function N(){var e=Object(j.a)(["\n@media screen and (max-width: 1024px) {\n        display: none;\n    }\n\n    width: 100%;\n    \n    ul {\n        display: flex;\n        float: right;\n        list-style: none;\n        margin-right: 4%;\n    }\n\n    ul > li {\n        margin-left: 55px;\n        color: #fff;\n    }\n\n    ul > li > a{\n        text-decoration: none;\n        color: #fff;\n        position: relative;\n        font-size: 19px;\n    }\n    \n    ul > li > a:after {\n        content: '';\n        position: absolute;\n        width: 0; height: 3px;\n        display: block;\n        margin-top: 0px;\n        right: 0;\n        background: #C365EF;\n        transition: width .2s ease;\n        -webkit-transition: width .2s ease;\n    }\n\n    ul > li > a:hover:after {\n        width: 60%;\n        left: 0;\n        background: #C365EF;\n    }\n      \n"]);return N=function(){return e},e}function F(){var e=Object(j.a)(["\n    display: flex;\n    flex-direction: row;\n    width: 130%;\n    justify-content: space-around;\n    align-self: center;\n    transform: translate(-22%);\n    img {\n        margin-top: 20px;\n        height: 30px;\n    }\n"]);return F=function(){return e},e}function z(){var e=Object(j.a)(["\n    @media screen and (min-width: 1024px) {\n        display: none;\n    }\n\n    position: fixed;\n    top: 0;\n    right: 0;\n    z-index: 1;\n\n    input {\n        position: absolute;\n        top: 0;\n        right: 0;\n        z-index: 2;\n        cursor: pointer;\n        width: 50px;\n        height: 50px;\n        opacity: 0;\n    }\n\n    input:checked + "," > div {\n        transform: rotate(135deg);\n    }\n\n    input:checked + "," > div:before,\n    input:checked + "," > div:after {\n        top: 0;\n        transform: rotate(90deg);\n    }\n    \n    input:checked:hover + "," > div {\n        transform: rotate(225deg);\n    }\n\n    input:checked ~ "," {\n        visibility: visible;\n    }\n    \n    input:checked ~ "," > div {\n        transform: scale(1);\n        transition-duration: var(--menu-speed);\n    }\n\n    input:checked ~ "," > div > div {\n        opacity: 1;\n        transition:  opacity 0.4s ease 0.4s;\n    }\n"]);return z=function(){return e},e}function O(){var e=Object(j.a)(["\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 1;\n    width: 60px;\n    height: 60px;\n    padding: 0.3vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    div {\n        position: relative;\n        flex: none;\n        width: 50%;\n        height: 2px;\n        background: #fff;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transition: all 0.4s ease;\n    }\n    \n    div::before, div::after {\n        content: '';\n        position: absolute;\n        z-index: 1;\n        top: -10px;\n        width: 100%;\n        height: 2px;\n        background: inherit;\n    }\n\n    div::after {\n        top: 10px;\n    }\n"]);return O=function(){return e},e}function C(){var e=Object(j.a)(["\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    visibility: hidden;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    "," > div {\n        text-align: center;\n        max-width: 80vw;\n        max-height: 100vh;\n        opacity: 0;\n        transition: opacity 0.4s ease;\n    }\n\n    "," > div > ul > li {\n        margin-left: -28%;\n        list-style: none;\n        color: #fff;\n        font-size: 1.5rem;\n        padding: 1rem;\n    }\n\n    "," > div > ul > li > a {\n        color: inherit;\n        text-decoration: none;\n        transition: color 0.4s ease;\n    }\n"]);return C=function(){return e},e}function D(){var e=Object(j.a)(["\n        background: rgba(36, 34, 41, 0.97);\n        border-radius: 50%;\n        width: 200vw;\n        height: 200vw;\n        display: flex;\n        flex: none;\n        align-items: center;\n        justify-content: center;\n        transform: scale(0);\n        transition: all 0.4s ease;\n        justify-items: center;\n\n"]);return D=function(){return e},e}function S(){var e=Object(j.a)([" \n        margin-left: 20px;\n\n    @media screen and (min-width: 1024px) {\n        margin-left: 50px;\n    }\n"]);return S=function(){return e},e}function I(){var e=Object(j.a)(["\n        width: 100%;\n        height: 10%;\n        display: flex;\n        align-items: center;\n        justify-items: space-around;\n\n        @media screen and (max-width: 1024px) {\n            position: fixed;\n            z-index: 1000;\n            background-color: #18161D;  \n            border-bottom: 1px solid rgba(51, 51, 51, 1);\n        }\n        \n"]);return I=function(){return e},e}var T=k.a.div(I()),_=k.a.div(S()),B=k.a.div(D()),M=k.a.div(C(),B,B,B),H=k.a.div(O()),A=k.a.div(z(),H,H,H,H,M,M,M),J=k.a.div(F()),L=k.a.div(N()),R=function(e){Object(p.a)(t,e);var n=Object(d.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement(T,null,i.a.createElement(_,null,i.a.createElement("a",{href:"/fveiga"},i.a.createElement("img",{src:h.a,alt:"logo"}))),i.a.createElement(A,null,i.a.createElement("input",{type:"checkbox"}),i.a.createElement(H,null,i.a.createElement("div",null)),i.a.createElement(M,null,i.a.createElement(B,null,i.a.createElement("div",null,i.a.createElement("img",{src:g.a,alt:"logo"}),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(c.b,{to:"/"},"home")),i.a.createElement("li",null,i.a.createElement(c.b,{to:"/projects"},"projects")),i.a.createElement("li",null,i.a.createElement(c.b,{to:"/contact"},"contact me")),i.a.createElement("hr",{style:{marginLeft:"-28%"}}),i.a.createElement(J,null,i.a.createElement("img",{src:w.a,alt:"logo"}),i.a.createElement("img",{src:y.a,alt:"logo"}),i.a.createElement("img",{src:v.a,alt:"logo"}))))))),i.a.createElement(L,null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(c.b,{to:"/"},"home")),i.a.createElement("li",null,i.a.createElement(c.b,{to:"/projects"},"projects")),i.a.createElement("li",null,i.a.createElement(c.b,{to:"/contact"},"contact me")))))}}]),t}(a.Component),W=t(12);function q(){var e=Object(j.a)(["\ndisplay: flex;\nwidth: 100%;\njustify-content: center;\nalign-content: center;\nflex-direction: column;\nalign-items: center;\njustify-items: center;\n\n\n@media only screen \n  and (min-width: 1025px)  { \n      display: none;\n}\n\n\n.entry{\n  display: flex;\n  width: 80%;\n  height: 50%;\n  background-color: transparent;\n}\n\n.year {\n  color: #FFF;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  background-color: transparent;\n\n  .circle {\n    height: 11px;\n    width: 11px; \n    background-color: #C365EF;\n    border-radius: 20px;\n    margin-right: 5px;\n  }\n\n  .line{\n    height: 2.5rem;\n    width: 2.5px; \n    background-color: #FFF;\n    margin-left: -40%;\n    margin-bottom: -100%;\n  }\n}\n\n\n.text {\n  color: #fff;\n  margin-left: 20px;\n  display: flex;\n  align-content: center;\n  align-items: center; \n}\n\n\n"]);return q=function(){return e},e}function V(){var e=Object(j.a)(["\ndisplay: flex;\nalign-content: center;\njustify-content: center;\ntext-align: center;\nheight: fit-content;\n\n\n.timeline {\n margin: 0;\n font-family: 'Red Hat', sans-serif;\n\n}\n\n.timeline:before {\n  content: '';\n  border-left: 2px solid white;\n  min-height: 33em;\n  position: absolute;\n  margin-top: 30px;\n}\n\n\n@media screen and (max-width: 1024px) {    \n .timeline:before {\n  height: 790px;\n}\n}\n\n.timeline .entries {\n  width: calc(100% - 80px);\n  max-width: 800px;\n  margin: auto;\n  position: relative;\n  left: -4.5px;\n}\n.timeline .entries .entry {\n  width: calc(50% - 80px);\n  float: left;\n  padding: 20px;\n  clear: both;\n  text-align: right;\n}\n.timeline .entries .entry:not(:first-child) {\n  margin-top: -60px;\n}\n.timeline  .entries .entry .title {\n  font-size: 32px;\n  margin-bottom: 12px;\n  position: relative;\n  color: #fff;\n}\n.timeline .entries .entry .title:before {\n  content: '';\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  border: 4px solid #18161D;\n  background-color: #C365EF;\n  border-radius: 100%;\n  top: 45%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  right: -72.999px;\n  z-index: 1000;\n}\n.timeline .entries .entry .title.big:before {\n  width: 24px;\n  height: 24px;\n  -webkit-transform: translate(8px, -50%);\n          transform: translate(8px, -50%);\n}\n.timeline .entries .entry .body {\n  color: #fff;\n}\n.timeline .entries .entry .body p {\n  line-height: 1.4em;\n}\n\n\n.timeline .entries .entry:nth-child(2n) {\n  text-align: left;\n  float: right;\n}\n.timeline .entries .entry:nth-child(2n) .title:before {\n  left: -63px;\n}\n.timeline .entries .entry:nth-child(2n) .title.big:before {\n  -webkit-transform: translate(-8px, -50%);\n          transform: translate(-8px, -50%);\n}\n\n\n@media only screen \n  and (max-width: 1024px)  { \n    .timeline {\n      display: none;\n    }\n}\n\n/* Iphone X Portrait */\n@media only screen \n  and (min-device-width: 375px) \n  and (max-device-width: 812px) \n  and (-webkit-min-device-pixel-ratio: 3)\n  and (orientation: portrait) { \n    .timeline .entries .entry .body p {\n      line-height: 1.6em;\n    }\n\n    .timeline {\n      display: none;\n    }\n}\n\n"]);return V=function(){return e},e}function Y(){var e=Object(j.a)(["\n @media screen and (max-width: 1024px) {    \n     h2 {\n    color: #aaa;\n    font-size: 15px;\n    font-weight: 100;\n    writing-mode: vertical-rl;\n    }\n}\n    width: 100%;\n    height: 120px;\n    justify-content: center;\n    justify-items: center;\n    align-content: center;\n    align-items: center;\n    \n\nh2 {\n    color: #aaa;\n    font-size: 15px;\n    font-weight: 100;\n    writing-mode: vertical-rl;\n    transition: color 0.3s, font-size .3s;\n}\n\nh2:hover {\n    color: #FFF;\n    font-size: 18px;\n    cursor: pointer;\n}\n\n\n"]);return Y=function(){return e},e}function K(){var e=Object(j.a)(["\n\n\n @media screen and (max-width: 1024px) {\n    opacity: 0;\n    z-index: -1000\n}\n\n    div > div > a > img {\n        padding: 5px;\n        transition: background 0.5s, transform .4s;\n        border-radius: 40%;\n    }\n    \n    div > div > a > img:hover{\n        background: #C365EF;\n        transform: scale(1.3);\n    }\n\n    \n\n"]);return K=function(){return e},e}function P(){var e=Object(j.a)(["\n font-size: 16px;\n color: #fff;\n background-color: #C365EF;\n border: none;\n border-radius: 11px;\n padding: 10px 35px ;\n font-weight: bold;\n transition: background 0.5s, transform .2s;\n\n\n:hover {\n    background-color: #7f4d96;\n    transform: scale(1.1);\n    cursor: pointer;\n}\n"]);return P=function(){return e},e}function X(){var e=Object(j.a)(["\npadding: 0;\nmargin: 0;\nmargin-top: 5%;\nfont-family: 'Red Hat Display';\nfont-size: 1.2rem;\nfont-weight: normal;\ncolor: #fff;\ntext-align: center;\n\n@media screen and (min-width: 1024px) {\n    margin-top: 2%;\n    font-size: 1.5rem;\n}\n\n\n"]);return X=function(){return e},e}function $(){var e=Object(j.a)(["\npadding: 0;\nmargin: 0;\nmargin-top: 30%;\nfont-family: 'Red Hat Display';\nfont-size:  15vw;\nfont-weight: bold;\ncolor: #fff;\ntext-align: center;\n\nspan {\n    color: #C365EF\n}\n\n@media screen and (min-width: 1024px) {\n    margin-top: 7vh;\n    font-size:  10vw;\n}\n\n.projects-title {\n  font-size:  10vw;\n\n  @media screen and (min-width: 1024px) {\n    margin-top: 7vh;\n    font-size:  10vw;\n  }\n}\n\n"]);return $=function(){return e},e}function G(){var e=Object(j.a)(["\ndisplay: flex;\nalign-self: center;\nwidth: 80%;\nflex-direction: column;\n\ndiv {\n    margin-top: 5%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n\n    @media screen and (min-width: 1024px) {\n    margin-top: 2%;\n}\n}\n\n"]);return G=function(){return e},e}var Q=k.a.section(G()),U=k.a.h1($()),Z=k.a.h3(X()),ee=k.a.button(P()),ne=k.a.div(K()),te=k.a.div(Y()),ae=k.a.div(V()),ie=k.a.div(q()),re=t(18),le=t.n(re);function ce(){var e=Object(j.a)(["\n      background-color: #34303C;\n      height: fit-content; \n      padding-bottom: 10%;\n      padding-top: 10%;\n      width: '100%';\n      display: \"flex\";\n\n      \n    @media screen and (min-width: 1024px) {\n    display: none;\n}\n"]);return ce=function(){return e},e}function oe(){var e=Object(j.a)(["\n      background-color: #34303C;\n      height: fit-content; \n      padding-bottom: 5%;\n      padding-top: 5%;\n      width: '100%';\n      display: flex;\n      padding-left: 10%;\n      flex-direction: row;\n      flex-wrap: nowrap;\n      align-content: flex-start;\n      align-items: flex-start;\n      \n     #line {\n         width: 30%;\n         margin-right: 20px;\n     }\n\n     #logo {\n         font-size: 0.6em;\n         color: #FFF;\n         width: 20%;\n         a{\n            text-decoration: underline;\n            color: #FFF;\n\n         }\n     }\n\n     #menu {\n         width: 20%;\n         margin-top: -1.5%;\n\n         ul {\n             list-style: none;\n         }\n         li, a {\n             color: #FFF;\n             font-weight: 0;\n             text-decoration: none;\n         }\n     }\n\n     #social {\n        margin-top: -1.5%;\n        h2{\n            font-size: 1.2rem;\n        }\n\n        .socialBottom {\n            display: flex;\n            flex-direction: row;\n            width: 100%;\n            justify-content: space-around;\n        }\n     }\n      \n    @media screen and (max-width: 1024px) {\n    display: none;\n}\n"]);return oe=function(){return e},e}var se=k.a.div(oe()),me=k.a.div(ce()),de=function(e){Object(p.a)(t,e);var n=Object(d.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(se,null,i.a.createElement("div",{id:"line"},i.a.createElement("hr",{style:{borderColor:"#C365EF",height:2,backgroundColor:"#C365EF"}})),i.a.createElement("div",{id:"logo"},i.a.createElement("img",{alt:"Felipe Veiga",src:g.a,height:"30vh"}),i.a.createElement("h2",null,"Can i help you? ",i.a.createElement(c.b,{to:"/contact"},"contact me"))),i.a.createElement("div",{id:"menu"},i.a.createElement("ul",null,i.a.createElement("li",{style:{textDecoration:"underline",fontSize:"1.2rem"}},"Menu"),i.a.createElement("li",null,i.a.createElement(c.b,{to:"/"},"home")),i.a.createElement("li",null,i.a.createElement(c.b,{to:"/projects"},"projects")),i.a.createElement("li",null,i.a.createElement(c.b,{to:"/contact"},"contact me")))),i.a.createElement("div",{id:"social"},i.a.createElement("h2",{style:{color:"#fff"}},"follow me"),i.a.createElement("div",{className:"socialBottom"},i.a.createElement("a",{href:"https://www.behance.net/lzfelipevs3c78",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{alt:"Social Icon",src:v.a,height:"20vh"})),i.a.createElement("a",{href:"https://github.com/lzfelipe",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{alt:"Social Icon",src:le.a,height:"20vh"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/luiz-felipe-veiga-de-siqueira-a91491181",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{alt:"Social Icon",src:w.a,height:"20vh"}))))),i.a.createElement(me,null,i.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement("img",{alt:"Felipe Veiga",src:g.a,height:"30vh",style:{marginBottom:20}})),i.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",margintop:20}},i.a.createElement("a",{href:"https://www.behance.net/lzfelipevs3c78",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{alt:"Social Icon",src:v.a,height:"20vh"})),i.a.createElement("a",{href:"https://github.com/lzfelipe",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{alt:"Social Icon",src:le.a,height:"20vh"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/luiz-felipe-veiga-de-siqueira-a91491181",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{alt:"Social Icon",src:w.a,height:"20vh"})))))}}]),t}(a.Component),pe=function(e){Object(p.a)(t,e);var n=Object(d.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{style:{display:"flex",width:"100%",justifyContent:"center",textAlign:"center"}},i.a.createElement(Q,null,i.a.createElement(U,null,"Hello,",i.a.createElement("br",null)," I'm Felipe",i.a.createElement("span",null,".")),i.a.createElement(Z,null,"javascript fullstack developer & digital designer"," "),i.a.createElement("div",null,i.a.createElement(c.b,{to:"/projects"},i.a.createElement(ee,null,"see my projects"))),i.a.createElement(te,null,i.a.createElement("h2",null,"Know me \u2192")),i.a.createElement("div",{style:{width:"100%",display:"block"}},i.a.createElement(U,{style:{fontSize:28}},"this is my"," ",i.a.createElement("u",{style:{textDecorationColor:"#C365EF"}},"professional timeline")))),i.a.createElement(ne,null,i.a.createElement("div",{style:ue.socialContainer},i.a.createElement("div",{style:ue.socialWrapper},i.a.createElement("a",{href:"https://www.behance.net/lzfelipevs3c78",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:v.a,alt:"behance",width:"20"})),i.a.createElement("a",{href:"https://github.com/lzfelipe",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:le.a,alt:"ig",width:"20"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/luiz-felipe-veiga-de-siqueira-a91491181/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:w.a,alt:"linkedn",width:"20"})))))),i.a.createElement("div",{style:{width:"100vw",height:"fit-content"},id:"timeline"},i.a.createElement(ae,null,i.a.createElement("div",{className:"timeline"},i.a.createElement("div",{class:"entries"},i.a.createElement("div",{class:"entry"},i.a.createElement("div",{class:"title"},"2014"),i.a.createElement("div",{class:"body"},i.a.createElement("p",null,"Entered an IT technical course at Col\xe9gio Anchieta"))),i.a.createElement("div",{class:"entry"},i.a.createElement("div",{class:"title"},"2015"),i.a.createElement("div",{class:"body"},i.a.createElement("p",null,"Started working as a Freelancer"))),i.a.createElement("div",{class:"entry"},i.a.createElement("div",{class:"title"},"2016"),i.a.createElement("div",{class:"body"},i.a.createElement("p",null,"Finished my IT course"))),i.a.createElement("div",{class:"entry"},i.a.createElement("div",{class:"title"},"2016"),i.a.createElement("div",{class:"body"},i.a.createElement("p",null,"Started working as a Teacher/Monitor at Eurodata "))),i.a.createElement("div",{class:"entry"},i.a.createElement("div",{class:"title"},"2017"),i.a.createElement("div",{class:"body"},i.a.createElement("p",null,"Departure from Eurodata"))),i.a.createElement("div",{class:"entry"},i.a.createElement("div",{class:"title big"},"2017"),i.a.createElement("div",{class:"body"},i.a.createElement("p",null,"Joined my bachelor\u2019s degree in Digital Design at Anhembi Morumbi.")))))),i.a.createElement(ie,null,i.a.createElement("div",{className:"entry"},i.a.createElement("div",{className:"year"},i.a.createElement("div",{className:"circle"}),i.a.createElement("h2",null,"2014"),i.a.createElement("span",{className:"line"})),i.a.createElement("div",{className:"text"},i.a.createElement("p",null,"Entered an IT technical course at Col\xe9gio Anchieta"))),i.a.createElement("div",{className:"entry"},i.a.createElement("div",{className:"year"},i.a.createElement("div",{className:"circle"}),i.a.createElement("h2",null,"2015"),i.a.createElement("span",{className:"line"})),i.a.createElement("div",{className:"text"},i.a.createElement("p",null,"Started working as a Freelancer"))),i.a.createElement("div",{className:"entry"},i.a.createElement("div",{className:"year"},i.a.createElement("div",{className:"circle"}),i.a.createElement("h2",null,"2016"),i.a.createElement("span",{className:"line"})),i.a.createElement("div",{className:"text"},i.a.createElement("p",null,"Finished my IT course"))),i.a.createElement("div",{className:"entry"},i.a.createElement("div",{className:"year"},i.a.createElement("div",{className:"circle"}),i.a.createElement("h2",null,"2016"),i.a.createElement("span",{className:"line"})),i.a.createElement("div",{className:"text"},i.a.createElement("p",null,"Started working as a teacher/monitor at Eurodata"))),i.a.createElement("div",{className:"entry"},i.a.createElement("div",{className:"year"},i.a.createElement("div",{className:"circle"}),i.a.createElement("h2",null,"2017"),i.a.createElement("span",{className:"line"})),i.a.createElement("div",{className:"text"},i.a.createElement("p",null,"Departure from Eurodata"))),i.a.createElement("div",{className:"entry"},i.a.createElement("div",{className:"year"},i.a.createElement("div",{className:"circle"}),i.a.createElement("h2",null,"2017"),i.a.createElement("span",{className:"line"})),i.a.createElement("div",{className:"text"},i.a.createElement("p",null,"Joined my bachelor\u2019s degree in Digital Design at Anhembi Morumbi."))),i.a.createElement("div",{className:"entry"},i.a.createElement("div",{className:"year"},i.a.createElement("div",{className:"circle"}),i.a.createElement("h2",null,"2021")),i.a.createElement("div",{className:"text"},i.a.createElement("p",null,"Finished my bachelor\u2019s degree in Digital Design."))))),i.a.createElement(de,null))}}]),t}(a.Component),ue={socialContainer:{display:"flex",height:"30%",position:"absolute",width:"15%",alignItems:"center",right:0},socialWrapper:{height:"40%",justifyContent:"space-around",display:"flex",flexDirection:"column"}},he=pe;var fe=function(){return i.a.createElement("div",{style:ge.mainDiv},i.a.createElement(R,null),i.a.createElement(W.a.div,{animate:{y:"0vh",opacity:1},initial:{y:"-30vh",opacity:0},transition:{duration:1}},i.a.createElement(he,null)))},ge={mainDiv:{backgroundColor:"#18161D",width:"100%",height:"fit-content"}},Ee=t(9),ve=t.n(Ee);t(43);var be=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{width:"100%",position:"relative",top:0}},i.a.createElement(R,null)),i.a.createElement(i.a.Fragment,null,i.a.createElement(W.a.div,{animate:{x:"0vh",opacity:1},initial:{x:"-30vw",opacity:0},transition:{duration:1}},i.a.createElement("div",{style:{height:"100vh"}},i.a.createElement("div",{className:"projecs-title-wrapper"},i.a.createElement("h1",{className:"projects-title",style:{marginBottom:20}},"My latest projects",i.a.createElement("span",null,"."))),i.a.createElement("div",null,i.a.createElement("section",{className:"projects-wrapper"},i.a.createElement("ul",{className:"projects-list"},i.a.createElement(c.b,{style:{justifySelf:"center"}},i.a.createElement("li",{className:"projects-item"},i.a.createElement("img",{alt:"Thumbnail",src:ve.a,className:"project-thumbnail"}))),i.a.createElement(c.b,{style:{justifySelf:"center"}},i.a.createElement("li",{className:"projects-item"},i.a.createElement("img",{alt:"Thumbnail",src:ve.a,className:"project-thumbnail"}))),i.a.createElement(c.b,{style:{justifySelf:"center"}},i.a.createElement("li",{className:"projects-item"},i.a.createElement("img",{alt:"Thumbnail",src:ve.a,className:"project-thumbnail"}))),i.a.createElement(c.b,{style:{justifySelf:"center"}},i.a.createElement("li",{className:"projects-item"},i.a.createElement("img",{alt:"Thumbnail",src:ve.a,className:"project-thumbnail"}))),i.a.createElement(c.b,{style:{justifySelf:"center"}},i.a.createElement("li",{className:"projects-item"},i.a.createElement("img",{alt:"Thumbnail",src:ve.a,className:"project-thumbnail"}))),i.a.createElement(c.b,{style:{justifySelf:"center"}},i.a.createElement("li",{className:"projects-item"},i.a.createElement("img",{alt:"Thumbnail",src:ve.a,className:"project-thumbnail"}))))))))),i.a.createElement("div",{style:{width:"100%",position:"relative",bottom:0}},i.a.createElement(de,null)))};t(44);var ye=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{width:"100%",position:"relative",top:0}},i.a.createElement(R,null)),i.a.createElement(W.a.div,{animate:{x:"0vh",opacity:1},initial:{x:"-30vw",opacity:0},transition:{duration:1}},i.a.createElement("div",{style:{height:"100vh"}},i.a.createElement("div",{className:"contact-main-wrapper"},i.a.createElement("div",{className:"contact-title-wrapper"},i.a.createElement("h1",{className:"contact-title",style:{marginBottom:20}},"How can I  be ",i.a.createElement("br",null)," useful to you",i.a.createElement("span",null,"?"))),i.a.createElement("section",{className:"form-wrapper"},i.a.createElement("form",null,i.a.createElement("label",{htmlFor:"name",style:{color:"#fff"}},"Name"),i.a.createElement("input",{name:"name",maxLength:80}),i.a.createElement("label",{htmlFor:"email",style:{color:"#fff"}},"Email"),i.a.createElement("input",{name:"email",type:"email",maxLength:100}),i.a.createElement("label",{htmlFor:"message",style:{color:"#fff"}},"Message"),i.a.createElement("textarea",{name:"message",maxLength:500}),i.a.createElement("div",{style:{width:"20%",marginTop:20}},i.a.createElement(ee,null,"send"))))))),i.a.createElement("div",{style:{width:"100%",position:"relative",bottom:0}},i.a.createElement(de,null)))};var xe=function(){return i.a.createElement(c.a,null,i.a.createElement("style",{jsx:"true",global:"true"},"body {margin: 0px; padding: 0px; font-family: 'Red Hat Display', sans-serif;}"),i.a.createElement("style",{jsx:"true",global:"true"},"body {background-color: #18161D; margin: 0px; padding: 0px; overflow-x: hidden; max-width: 100vw; -webkit-box-sizing: border-box;\n            -moz-box-sizing: border-box;\n                    box-sizing: border-box;}"),i.a.createElement(o.c,null,i.a.createElement(o.a,{path:"/",component:fe,exact:!0}),i.a.createElement(o.a,{path:"/fveiga",component:fe,exact:!0}),i.a.createElement(o.a,{path:"/projects",component:be}),i.a.createElement(o.a,{path:"/contact",component:ye})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n,t){e.exports=t.p+"static/media/behance.30ead64f.svg"},8:function(e,n,t){e.exports=t.p+"static/media/linkedin.56a42ddf.svg"},9:function(e,n,t){e.exports=t.p+"static/media/inconsciente.2013c919.png"}},[[32,1,2]]]);
//# sourceMappingURL=main.8cdc8120.chunk.js.map