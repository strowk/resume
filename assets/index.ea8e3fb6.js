var ce=Object.defineProperty,de=Object.defineProperties;var he=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var H=(t,i,a)=>i in t?ce(t,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[i]=a,y=(t,i)=>{for(var a in i||(i={}))q.call(i,a)&&H(t,a,i[a]);if(W)for(var a of W(i))Q.call(i,a)&&H(t,a,i[a]);return t},x=(t,i)=>de(t,he(i));var B=(t,i)=>{var a={};for(var o in t)q.call(t,o)&&i.indexOf(o)<0&&(a[o]=t[o]);if(t!=null&&W)for(var o of W(t))i.indexOf(o)<0&&Q.call(t,o)&&(a[o]=t[o]);return a};import{r as m,u as ue,j as s,F as v,a as e,b as T,L as G,f as me,c as S,d as U,R as z,e as I,g as C,h as N,i as J,k as O,l as _,m as w,n as pe,o as ge,p as fe,q as be,S as $,C as V,s as X,t as ye,v as ve,E as we,w as ke,B as xe,x as Ie,y as Se}from"./vendor.d5f10e1b.js";const Ce=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const h of r)if(h.type==="childList")for(const u of h.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function a(r){const h={};return r.integrity&&(h.integrity=r.integrity),r.referrerpolicy&&(h.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?h.credentials="include":r.crossorigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(r){if(r.ep)return;r.ep=!0;const h=a(r);fetch(r.href,h)}};Ce();var Ae="/assets/photo.df6c86e2.jpg";const Te=({children:t,tooltip:i,placement:a="auto"})=>{const[o,r]=m.exports.useState(null),[h,u]=m.exports.useState(null),[b,k]=m.exports.useState(!1),E=()=>{k(!0)},M=()=>{k(!1)};m.exports.useEffect(()=>{o==null||o.addEventListener("mouseenter",E),o==null||o.addEventListener("mouseleave",M)},[o]);const[P,L]=m.exports.useState(null),{styles:D,attributes:f}=ue(o,h,{placement:a,strategy:"fixed",modifiers:[{name:"arrow",options:{element:P}},{name:"flip",options:{fallbackPlacements:["bottom","right"]}}]});return s(v,{children:[e("button",{ref:r,children:t}),s("div",x(y({ref:u,style:D.popper},f.popper),{className:`${b?"block":"hidden"} bg-black px-1 rounded-md z-10`,children:[i,e("div",{ref:L,style:D.arrow})]}))]})},Y=({icon:t,tooltip:i,tooltipPlacement:a})=>e(Te,{tooltip:i,placement:a,children:e(T,{icon:t,className:"text-white"})}),Ne=(t,i)=>{let a;return()=>{clearTimeout(a),a=setTimeout(o=>{a=void 0,t()},i)}},Re=()=>{const[t,i]=m.exports.useState(window.innerWidth);return m.exports.useEffect(()=>{const a=Ne(function(){i(window.innerWidth)},500);return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}}),t},Z=t=>e("span",{className:"inline-flex items-center justify-center px-4 py-1 mt-1 mr-2 font-bold text-md text-white bg-blue-600 rounded-full",children:t}),c=({value:t})=>e(ee,{value:t,linkTo:"#"+t.replaceAll(" ","-").toLowerCase()}),ee=({value:t,linkTo:i})=>i?e(G,{to:i,children:Z(t)}):Z(t),je=({techs:t})=>{const i=Re(),[a,o]=m.exports.useState(!1),r=a?t:Pe(t,i),h=()=>{o(!0)},u=()=>{o(!1)};return s("p",{className:"mt-2",children:[r.map(b=>e(ee,{value:b},b)),t.length>r.length&&e("button",{className:"inline-flex items-center justify-center px-2 py-0.5 mt-1 text-sm text-white bg-blue-800 rounded-full",onClick:h,children:`+${t.length-r.length} more`}),a&&e("button",{className:"inline-flex items-center justify-center w-8 h-8 mt-1 text-sm text-white bg-blue-800 rounded-full",onClick:u,children:e(T,{icon:me})})]})},Pe=(t,i)=>{const a=i/25;var o=0;return t.filter(r=>(o+=r.length,o<a))},p=({title:t,text:i,icon:a,iconTooltip:o,techs:r,links:h,forceIcon:u=!1})=>s("div",{className:"bg-gray-900 p-4 rounded-xl mt-4 mr-auto shadow-md max-w-prose",children:[s("div",{className:"flex items-baseline",children:[e("div",{className:`${u||"md:hidden"} mr-2 mb-2`,children:e(Y,{icon:a,tooltip:o,tooltipPlacement:"top"})}),e("h3",{className:"font-semibold text-lg mb-1",children:t})]}),e("p",{className:"leading-tight w-full",children:i}),h&&e(Le,{links:h}),r&&e(je,{techs:r})]}),Le=({links:t})=>s("div",{className:"px-1 pt-1",children:["see:",t.map(i=>s("a",{href:i.url,target:"_blank",className:"px-1 hover:bg-sky-700 whitespace-nowrap",children:["<",e(T,{icon:i.icon?i.icon:S,className:"mr-1"}),e("span",{className:"underline",children:i.title}),">"]},i.url))]}),F={haveProvider:!1,hash:"",setHash:t=>{}},te=m.exports.createContext(F),De=({children:t})=>{const[i,a]=m.exports.useState(F);return m.exports.useEffect(()=>{a(x(y({},F),{haveProvider:!0,setHash:o=>{a(r=>x(y({},r),{hash:o}))}}))},[a]),e(te.Provider,{value:i,children:t})},ie=()=>m.exports.useContext(te),ae=({id:t,children:i,hashProvider:a})=>{const o=m.exports.createRef(),r=h=>{if(h.hash===`#${t}`){let u=o.current;u&&(console.log("scrolling into ",h.hash),u.scrollIntoView({behavior:"smooth"}))}};return m.exports.useEffect(()=>{r(a)},[a]),e("div",{id:t,ref:o,children:i})},We=t=>{const i=U();return e(ae,x(y({},t),{hashProvider:i}))};var l=t=>{const i=ie();return i.haveProvider?e(ae,x(y({},t),{hashProvider:i})):e(We,y({},t))};const R=({value:t,children:i})=>e("h3",{className:"text-3xl text-center font-semibold pb-4 pt-12",children:t?e(l,{id:t.toLowerCase(),children:t}):i}),Ee=new RegExp("^(http)|(https)://"),Me=t=>Ee.test(t.href||"")?e("a",y({target:"_blank",className:"dark:bg-green-900"},t)):e(G,{className:"dark:bg-green-900",to:t.href||"#",children:t.children}),n=({text:t,children:i})=>{const a={a:h=>{var u=h,{node:o}=u,r=B(u,["node"]);return e(Me,y({},r))}};return e(Ke,{children:t?e(z,{components:a,className:"pb-4 max-w-prose mx-auto",children:t}):i&&e(z,{components:a,className:"pb-4 max-w-prose mx-auto",children:i})})},Ke=({children:t})=>{const[i,a]=m.exports.useState(!1);return e("div",{onDoubleClick:()=>{a(r=>!r)},className:`rounded-md p-2 ${i?"swiper-no-swiping bg-gray-900":"bg-gray-800"}`,children:t})},g=({children:t})=>e("div",{className:"col-span-1 mx-2",children:t}),Be=()=>s("div",{className:"md:px-4 mx-1",children:[e(R,{value:"Contributions"}),e(n,{children:"Features, bugfixes, libraries and tools contributed to already existing codebase or ecosystem."}),s("div",{className:"md:grid grid-cols-2",children:[e(g,{children:e(p,{title:"Play Seed",links:[{url:"https://ide.play-seed.dev/",title:"website"},{url:"https://docs.play-seed.dev/",title:"documentation",icon:I},{url:"https://github.com/MartinKavik/seed-app-todomvc/pull/2",title:"PR",icon:C}],text:"Interactive coding playground for Seed framework",icon:N,iconTooltip:"Project",techs:["Rust","seed-rs","Docker","Digital Ocean","traefik","Gitlab CI"],forceIcon:!0})}),e(g,{children:e(p,{title:"seed-icons",text:"Library with collections of icons for seed framework",links:[{url:"https://crates.io/crates/seed-icons",title:"crate",icon:I},{url:"https://strwrite.gitlab.io/seed-icons-browser/",title:"website"},{url:"https://github.com/seed-rs/awesome-seed-rs/pull/15",title:"PR",icon:C}],icon:I,iconTooltip:"Library",techs:["Rust","seed-rs","GraphQL"],forceIcon:!0})}),e(g,{children:e(p,{title:"arquillian-cube: multiple namespaces",text:"Support more than one namespace in one test",links:[{url:"https://github.com/arquillian/arquillian-cube/pull/872",title:"PR",icon:C}],icon:J,iconTooltip:"Feature",forceIcon:!0})}),e(g,{children:e(p,{title:"code-server: init containers",text:"Support extraInitContainers for helm chart",links:[{url:"https://github.com/coder/code-server/pull/3393",title:"PR",icon:C}],icon:J,iconTooltip:"Feature",forceIcon:!0})}),e(g,{children:e(p,{title:"jenkinsci/pipeline-aws-plugin: bugfix",text:"Fix wrong partition detection when assuming role",links:[{url:"https://github.com/jenkinsci/pipeline-aws-plugin/pull/251",title:"PR",icon:C}],icon:O,iconTooltip:"Bugfix",forceIcon:!0})}),e(g,{children:e(p,{title:"cypress-hmr-restarter: bugfix",text:"Fix wrong schema in url",links:[{url:"https://github.com/Svish/cypress-hmr-restarter/pull/13",title:"PR",icon:C}],icon:O,iconTooltip:"Bugfix",forceIcon:!0})})]}),e(R,{value:"Pet Projects"}),e(n,{children:"A bunch of interesting tools and stuff I made for myself, others or just for fun. In my repositories you can find a lot of stuff that I tried, but here I list only the things that actually were done to some degree."}),s("div",{className:"md:grid grid-cols-2",children:[e(g,{children:e(p,{title:"Compose for Git",text:"CLI tool and plugins to manage several local git repositories described in one yaml file",icon:N,iconTooltip:"Project",techs:["Golang","Git","VSCode Extension API","Typescript","GRPC"],forceIcon:!0})}),e(g,{children:e(p,{title:"trustmatrix: Evolutionary simultaion of Prisoner's Dilemma",text:"",icon:N,iconTooltip:"Project",techs:["Kotlin","Game theory","Gitlab CI"],forceIcon:!0,links:[{url:"https://gitlab.com/strwrite/trustmatrix",title:"Repo",icon:_},{url:"https://strwrite.gitlab.io/trustmatrix/",title:"Demo",icon:S}]})}),e(g,{children:e(p,{title:"How to transform draw.io xml to picture in Gitlab CI",text:"",icon:N,iconTooltip:"Demo",techs:["React","Material UI"],forceIcon:!0,links:[{url:"https://gitlab.com/strwrite/drawio-gitlab-ci",title:"Repo",icon:_}]})})]}),e(R,{value:"Games"}),e(n,{children:"At some point I wanted to try myself in game design and development and made a bunch of games and libraries (like packages) on a platform known as Crayta. Crayta is accessible in Stadia and in Epic Games. Game logic is implemented with Lua scripts, UI widgets on html/css/js with some specifics (Gameface engine)."}),e(n,{children:"Source code is not available as a part of version control system, however all games in the list below could be remixed, which allows to create own copy with all the same code and configurations."}),s("div",{className:"md:grid grid-cols-2",children:[e(g,{children:e(p,{title:"Nuclear Gear Snake",text:"",icon:w,iconTooltip:"Game",techs:["Lua","html","css","Javascript"],forceIcon:!0,links:[{url:"https://play.crayta.com/games/752238b5-6db0-4ade-b26f-579be485b37a",title:"Crayta",icon:w}]})}),e(g,{children:e(p,{title:"Flight and Fight",text:"",icon:w,iconTooltip:"Game",techs:["Lua","html","css","Javascript"],forceIcon:!0,links:[{url:"https://play.crayta.com/games/266de510-225e-4f3d-94f8-cba7d067a12f",title:"Crayta",icon:w}]})}),e(g,{children:e(p,{title:"Spellfire",text:"",icon:w,iconTooltip:"Game",techs:["Lua","Typescript","html","css","Javascript"],forceIcon:!0,links:[{url:"https://play.crayta.com/games/e6766b4a-2eb8-4190-8e70-5729e0daf1aa",title:"Crayta",icon:w}]})}),e(g,{children:e(p,{title:"Signs of Acryptica",text:"",icon:w,iconTooltip:"Game",techs:["Lua","Typescript","html","css","Javascript"],forceIcon:!0,links:[{url:"https://play.crayta.com/games/a73b4699-3531-41ab-97aa-870802d6bf98",title:"Crayta",icon:w}]})}),e(g,{children:e(p,{title:"Radar",text:"",icon:I,iconTooltip:"Package",techs:["Lua","html","css","Javascript"],forceIcon:!0,links:[{url:"https://forum.crayta.com/t/radar/2847",title:"Crayta",icon:S}]})}),e(g,{children:e(p,{title:"Superhex",text:"",icon:I,techs:["Lua","html","css","Javascript"],iconTooltip:"Package",forceIcon:!0,links:[{url:"https://forum.crayta.com/t/superhex/1616",title:"Crayta",icon:S}]})}),e(g,{children:e(p,{title:"TrackMouse",text:"",icon:I,iconTooltip:"Package",techs:["Lua","html","css","Javascript"],forceIcon:!0,links:[{url:"https://forum.crayta.com/t/trackmouse/1491",title:"Crayta",icon:S}]})}),e(g,{children:e(p,{title:"Holo Target Tracker",text:"",icon:I,iconTooltip:"Package",techs:["Lua","html","css","Javascript"],forceIcon:!0,links:[{url:"https://forum.crayta.com/t/holo-target-tracker/1313",title:"Crayta",icon:S}]})})]})]}),Ge=t=>"type"in t&&t.type==="project",Je=({item:t})=>e(j,{item:t,icon:N,iconTooltip:"Project"}),Oe=t=>"type"in t&&t.type==="upgrade",Fe=({item:t})=>e(j,{item:t,icon:J,iconTooltip:t.tooltip}),qe=t=>"type"in t&&t.type==="graduation",Qe=({item:t})=>e(j,{item:t,icon:pe,iconTooltip:"Graduation"}),He=t=>"type"in t&&t.type==="newJob",Ue=({item:t})=>e(j,{item:t,icon:ge,iconTooltip:"New Job"}),ze=t=>"type"in t&&t.type==="finished",_e=({item:t})=>e(j,{item:t,icon:O,iconTooltip:"Finished"}),oe=({date:t})=>s(v,{children:[e("span",{children:t.toLocaleString("en-us",{month:"short"})}),"\xA0",e("span",{children:t.getFullYear()})]});const $e=()=>e("div",{className:"h-120p w-10 flex items-center justify-center",children:e("div",{className:"h-full w-1 bg-gray-900 pointer-events-none"})}),Ve=({icon:t,date:i,iconTooltip:a})=>s(v,{children:[e($e,{}),s("div",{className:"bg-gray-900 shadow text-center leading-10 absolute -left-1/2 top-11 rounded-l-md -mt-5 md:w-10 md:h-10 md:left-0 md:rounded-full",children:[i?e("div",{className:"px-4 md:hidden",children:e(oe,{date:i})}):e("div",{className:"md:hidden rounded-full w-6 h-6 left-7 top-2 leading-10 bg-gray-900 shadow absolute"}),s("div",{className:"hidden md:block",children:[i&&e("div",{className:"md:-left-28 md:absolute",children:e(oe,{date:i})}),e(Y,{icon:t,tooltip:a,tooltipPlacement:"left"})]})]})]}),Xe=t=>"techs"in t,j=({item:t,icon:i,iconTooltip:a})=>{let o="hidden md:block";return s("div",{className:"flex md:contents",children:[e("div",{className:`${t.date?"":o} col-start-3 col-end-4 mr-10 ml-5 md:mx-auto relative`,children:e(Ve,{date:t.date,icon:i,iconTooltip:a})}),e("div",{className:"col-start-4 col-end-11",children:e(l,{id:t.title.toLowerCase().replaceAll(" ","-"),children:e(p,{title:t.title,text:t.text,icon:i,iconTooltip:a,techs:Xe(t)?t.techs:void 0})})})]})},Ye=({item:t})=>Ge(t)?e(Je,{item:t}):He(t)?e(Ue,{item:t}):Oe(t)?e(Fe,{item:t}):qe(t)?e(Qe,{item:t}):ze(t)?e(_e,{item:t}):e(v,{}),Ze=({items:t})=>e("div",{className:"container",children:e("div",{className:"flex flex-col md:grid grid-cols-12 text-gray-50",children:t.map(i=>e(Ye,{item:i},i.title+(i.date?i.date.toString():"")))})}),et=()=>e(Ze,{items:[{type:"upgrade",title:"Promoted to Senior Consultant",text:"",tooltip:"Promotion",date:new Date("2021-12-15")},{type:"project",title:"Electric Vehicles Charging Management",text:"Control of charging and battery analytics for fleets of fully electric buses and trucks",techs:["Kotlin","React","Typescript","AWS Fargate","AWS RDS Aurora","AWS Cloudformation","AWS Codepipeline","AWS Codebuild"]},{type:"project",title:"Vehicle Telemetry Collection",text:"Stream processing of telemetry from millions of cars",techs:["Scala","Akka","Kafka Streams","React","Javascript"]},{type:"upgrade",title:"Certified Kubernetes Administrator by CNCF",text:"CKA-2000-006435-0100 , scored 94%",tooltip:"Certification",date:new Date("2020-03-13")},{type:"project",title:"Smart City Analytics Platform",text:"Streaming data from integrations into data lake and real time analytics",techs:["Golang","RabbitMQ","Kafka","AWS S3"]},{type:"project",title:"City Traffic Control Platform",text:"Displaying live data from city traffic control system",techs:["React","Typescript","Java","Spring Boot","RabbitMQ","Kafka"]},{type:"project",title:"Streetlighting",text:"Central control of city smart streetlights infrastracture via LoraWAN",techs:["LoraWAN","Vue.js","Java","Spring Boot","RabbitMQ"]},{type:"newJob",title:"Concept Reply GmbH",text:"Started working as IoT Backend Developer (Consultant)",date:new Date("2019-03-01")},{type:"project",title:"Database as a Service",text:"Automated provision and maintenance of databases on-demand",techs:["Java","Spring Boot","Golang","Openshift/Kubernetes","Docker","Postgresql","MongoDB"]},{type:"project",title:"Digital Marketplace",text:"SAAS solution to sell automated digital services",techs:["Java","Spring Boot","Openshift/Kubernetes","Docker","Postgresql","Python"]},{type:"project",title:"Core Cloud Platform Automation",text:"Automated provision of services and integrations",techs:["Java","Spring Boot","Openshift/Kubernetes","Docker","Postgresql","Python","MongoDB"]},{type:"newJob",title:"Netcracker Technology Corp.",text:"Returned to work as a Senior Software Developer",date:new Date("2016-09-01")},{type:"newJob",title:"Mandatory military service",text:"Served as a Senior Computer Operator in science division",date:new Date("2015-06-29")},{type:"graduation",title:"Degree of Master of Applied Math and Physics",text:"Thesis: Selection of informative feature in the nolinear regression problem",date:new Date("2015-06-01")},{type:"project",title:"Telecom Operations and Management Solutions",text:"Operations support for internet service providers",techs:["Java EE","JDBC","Weblogic","Oracle SQL","plsql","Spring"]},{type:"newJob",title:"Netcracker Technology Corp.",text:"Started working as Java Software Developer",date:new Date("2013-08-01")},{type:"graduation",title:"Degree of Bachelor of Applied Math and Physics",text:"Thesis: Detection of biological signs in spectral analysis of a radio-electronic scan",date:new Date("2013-06-01")}]});const tt=()=>s("div",{className:"container mx-auto max-w-prose",children:[e(R,{children:"This site"}),e(n,{children:"This is resume as code written as a React SPA based on vite framework and using tailwind to style it."}),e(n,{children:"It is built with Gitlab CI in containerized environment and deployed to Gitlab Pages, where it is distributed as a static site."}),e(n,{children:"I am mostly doing this for fun, but also to try these technologies while making something interesting. This is a primary way of learning for me - through making stuff."}),e(R,{children:"Me"}),e(n,{children:"I have been born in Russia, raised in regional capital and then moved to Moscow for education. During university years I have started working as a software developer."}),e(n,{children:"After graduating with master degree from MIPT (Moscow Institute of Physics and Technology) I served one year in army and two years later moved to Germany, Munich, where I live presently."}),e(n,{children:"My mothertongue is Russian. I have learned English from books, documentation, films and work. I did learn a bit of Spanish in unversity and Japanese myself. Currently I am learning German."}),e(n,{children:"When possible, I prefer to learn technology by doing rather than going through tutorials, workshops, books, etc."}),e(n,{children:'When tech stack choice is available, I prefer tools, which reduce cognitive load as much as possible, while remain flexible. For example I would rather use strong statically typed programming language, because in the end IMO it helps to save a lot of "brain power" by preventing bugs through more clear structure of code and compiler checks.'}),e(n,{children:"I am not afraid of exploring new technologies and approaches if using them clearly improves the quality or other metrics of project success. However, I am driven by impact of my work and would rather choose [boring technology](https://mcfunley.com/choose-boring-technology) for the majority of cases over chasing shiny things. Say, for example, before chasing things like datalakes or super scalable nosql distributed databases, I would ask if the task could be faster and easier solved by good-old well understood SQL database."})]}),it={mobile:0,tablet:768,desktop:1280},at=({swiper:t,currentTab:i,tabs:a,setNavSwiper:o})=>{const{breakpoint:r}=fe(it),h=r=="desktop",u=r=="tablet";return s("nav",{className:"px-4 flex flex-row text-4xl text-center font-semibold pb-8 border-b-4 border-gray-900",children:[e(ne,{onClick:()=>{t==null||t.slidePrev()},icon:be}),e($,{modules:[V],onSwiper:o,enabled:!1,slidesPerView:h?3:u?2:1,children:a.map((b,k)=>e(X,{children:e(ot,{onClick:()=>{t==null||t.slideTo(k)},isCurrent:k===i,tab:b})},b.title))}),e(ne,{onClick:()=>{t==null||t.slideNext()},icon:ye})]})},ot=({onClick:t,isCurrent:i,tab:a})=>e("button",{className:`font-semibold py-1 px-4 ${!i&&"text-gray-500"} rounded-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-gray-100 duration-300`,onClick:t,children:e("h2",{className:`text-4xl font-semibold pb-2 border-b-4 ${i?"border-purple-500":"border-gray-900"}`,children:a.title})},a.title),ne=({onClick:t,icon:i})=>e("button",{className:"md:mx-4 w-16 h-16 text-gray-500 rounded-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-gray-100 duration-300",onClick:t,children:e(T,{icon:i})}),A=({children:t,name:i})=>s("div",{className:"my-2 bg-gray-50 dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-md",children:[e("dt",{className:"text-sm font-medium text-gray-500 dark:text-gray-100",children:i}),e("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:t})]}),re=`
I have been using Scala on [one project](/timeline#vehicle-telemetry-collection) for 
several months. We were developing several existing services based on Kafka 
Streams and partially Akka Streams. New services we would usually base on Akka Streams
due to their simplicity. Instead of sbt we were using Maven and heavilty relied on
scalatest for all kinds of testing. Akka Http was used as well for those services,
which needed to expose API to frontend. Mostly work that services were doing involved
stream processing of huge amounts of data, while applying filters based on configurations
set by users from frontend.`,nt=`
For Seed framework I have built an [interactive playground](https://ide.play-seed.dev/), where you
could try out some simple scenarios. Rust is used there for backend, where I based my work
on existing Rust Playground backend. For frontend this system is forking WebAssemblyStudio, 
which was made outside of Rust ecosystem as a playground for WebAssembly specifically. 
I managed to make those two projects to work together in the place where they intersect - 
building Rust application and then running it using WebAssembly directly in browser.

I made some other projects with Seed, such as [seed-icons](https://strwrite.gitlab.io/seed-icons-browser/)
- library for typed icons importing from Font Awesome and Material Icons and corresponding
browser of those icons. Website of [git-compose](http://git-compose.gitlab.io/) tool was
also made using Seed framework (though tool itself is on Golang ATM).
`,se=`I have been using Spring Boot in many projects, 
usually in microservices using database via Spring Data. I am
comfortable writing applications of any complexity, solving any
concurrency issues, write unit or integration tests, deploy and
maintain Java based services in the cloud. I have been working in
existing big applications based only on Spring as well as creating
new Spring Boot based services from scratch. One one of projects
I was also developing several libraries exposing functionality 
to Spring Boot based services, which could automatically wire into
context once developer had included "starter" dependency.`,rt=()=>s(v,{children:[e(l,{id:"java",children:e(d,{title:"Java",children:e(n,{text:`
I have been working with Java from the start of my career. During
[university days](/timeline#degree-of-bachelor-of-applied-math-and-physics) my future employer Netcracker Technologies have
been organizing a special classes, which I have attended. We learned
about JavaSE for one semester and JavaEE (mostly EJB 3) for another.


When I started working in that company, for couple of years me and
my team have been supporting a big monolith solution based on
Weblogic, which heavily relied on both EJB 2 and 3, with some
additional usage of jsp. Later when I started working with cloud
platform, I received a lot of Spring Boot knowledge in microservice
architecture. 

${se}

If possible I prefer to use Gradle to Maven, but if need be I 
can manage either one ofthose. 
I have started using Java, while Ant was still popular, then
learned a lot of Maven and was using it mostly, however since I have
tried Gradle, I've always felt it superior.
            `})})}),e(l,{id:"typescript",children:e(d,{title:"Typescript",children:e(n,{text:`
I have started working with Typescript within one of React frontend 
SPA's. I liked using it much more than Javascript, thanks to advanced
type system. I have used it in several frontend projects, as well as 
made a couple of NodeJS based applications using Typescript.
One of those was using Express framework to provide HTTP API and 
another one providing custom logic as AWS Lambda, terminating one
of AWS API Gateway endpoints.
            `})})}),e(l,{id:"kotlin",children:e(d,{title:"Kotlin",children:e(n,{text:`
The first time I was exposed to Kotlin when developers of
that language were showing it on the conference of Java programmers.
I was interested in several features they presented and tried to make 
a small application, which would be working in browser (complied to JS)
as well as installable as desktop app (with JavaFX based UI).

At some later point I had a production experience with Kotlin developing
several backend services for about a year total. Those services were
based on Spring Boot, used various Spring libraries to interface with
PostgreSQL database (Spring Data) and Kafka (Spring Kafka, Spring Cloud Kafka Binder),
as well as some small interface with AWS (using AWS SSM Parameters to pass configs).
            `})})}),e(l,{id:"scala",children:e(d,{title:"Scala",children:e(n,{text:re})})}),e(l,{id:"go",children:e(d,{title:"Golang",children:e(n,{text:`
I really like writing on Golang, it is quite simple and fun, while still preserving
certain guarantees from static type system. I have started using it for one of 
microservices within [database as a service](/timeline#database-as-a-service) platform.
The microservice was responsible for managing elasticsearch cluster. All service 
functionality was very thoroughly tested with help of goconvey library, which allows
to run tests automatically on each changed file and see results conveniently presented
in browser. Automatic run of tests is quite effective due to golang simplicity and 
compiler's heavy focus on optimization.

Later I would use Golang to build a small tool for automatic testing of an 
[IoT application](/timeline#streetlighting), connecting street lights to cloud based
smart city platform. Auto tests were implemented in e2e fashion - the tool I made
was able to preconfigure actual device with certain parameters (such as f.e. current time)
before instructing one of microservices to upload configuration of required dimness
based on time. Then tool would gradually change time, so that developer could visually
confirm that light dimness is changing correctly according to schedule. Tool would 
check the changing values as well, however we often needed manual observation made too,
while chasing bugs and inconsistencies. Some time later I was using this tool for 
demonstration of platform on one of fares organized by Reply AG.

Another use of Golang was for bigger [smart city platform](/timeline#smart-city-analytics-platform),
where it was a main language for a bunch of microservices ingesting data in a similar
structured fashion from several very different sources of sensor values supplying 
current or historical information about situation in city: weather, air pollution,
auto traffic on roads, etc. I was actively involved in making first of those microservices
(for air pollution data) and made a lot for setting up data pipeline, which would later
be a base for several other similarly structured data ingestors. Our ingestors usually 
buffer incoming raw data in RabbitMQ queues and transfer it to later to Kafka after
enriching with some additional metadata. The way information was structured was important
for later data engineering and we were using International Data Spaces abstractions for
that. For serializing data-points internally we would use protobuf and later JSON when 
finally ingesting to Kafka. JSON serialization, however, was using same 'proto' specification.

I also used Golang to make a [small CLI tool of my own](http://git-compose.gitlab.io/) to manage 
a bunch of local repositories
using format similar to docker-compose yaml files: git-compose.yaml. I did not work much on 
that tool recently and I know it still has one bug coming from underlying library. I have 
a plan to rewrite that tool to rust eventually.
            `})})}),e(l,{id:"rust",children:e(d,{title:"Rust",children:e(n,{text:`
Rust is my favoring language, as it is for many many other developers. I have only worked 
with Rust on my own unfortunately, never on my day job. I find Rust type system one of the 
most superior as well as its approach to memory management, immutability, etc.

I have started playing around with one of frontend frameworks based on Rust, called Seed.
One of interesting Rust features is a lot of support for WebAssembly, which allows to use
that language in browsers. Seed is one but many frameworks leveraging this. 
${nt}

One of activities I was involved in my day job is organizing IoT workshop for students.
To simplify process of going through workshop I have prepared cloud-based coding space
using one of VSCode for Web distributions. The workshop requires certain management to
rollout infrastructure (such as creating k8s namespaces, sending emails with access
to participants). Those management activities are partially automated with the use
of Rust-based CLI tool I have made specifically for this purpose.

            `})})}),e(l,{id:"lua",children:e(d,{title:"Lua",children:e(n,{text:`
I have played with Lua Script while making games in my free time. There is some info about
those within [this website](/open-source#games). 
You could see all published [games I have made here](https://play.crayta.com/users/e4f7b13e-fcdc-423e-9544-e1f6a6272862).
            `})})}),e(l,{id:"spring-boot",children:e(d,{title:"Spring Boot",children:e(n,{text:se})})}),e(l,{id:"react",children:e(d,{title:"React",children:e(n,{text:`
React is one of my favorite choices for frontend development. In fact this website is made
using React (using vite, react-router, tailwind and storybook). 

I find React in a very convenient place between flexibility and complexity. It has a great
ecosystem and is normally quite convenient to work with. Compared to vue, it might look
more complex to start working in, but it quite nicely scales with number of developers 
and increasing complexity of application. For most of new projects I would choose React as
an SPA framework.

I made several production frontend apps on React, mostly using Typescript, though one was 
already using Javascript and we did not have time to type it, unfortunately.
One of the [first apps](/timeline#city-traffic-control-platform) was a control system to
manage traffic lights and display data from sensors detecting speed, type and amount of cars
moving above it. Application was displaying available assets on the map and in table, 
updating information real-time (redux was feeded from websocket connected to RabbitMQ) 
and was able to show some historical data as well. 
I have started that app from scratch and made most of it, while later collaborating with the 
team when more features were developed after I have left the project.
Most of styles were using Material UI in this app, while some had to be slightly customized.

Another big application 
      `})})}),e(l,{id:"akka",children:e(d,{title:"Akka",children:e(n,{text:re})})}),e(l,{id:"vue.js",children:e(d,{title:"vue.js",children:e(n,{text:`
I have made only [one application](/timeline#streetlighting) using vue.js. At first my work was
to wire it with backend, because customer have prepared the layout before we started the project.
CSS part was made with Bulma. Several features required to make new components from scratch though,
for example access management, which initially was not planned, but we identified that it is required.
System was designed as SAAS platform, so access management had corresponding requirements to support
role based access control. For state management and interaction with backend this app was using VueX.

I like Vue for its simplicity, but if application is not very small and/or requires several frontend 
developers, I would prefer to use React.
    `})})}),e(l,{id:"docker",children:e(d,{title:"Docker",children:e(n,{text:`
I used docker in some or other capacity now routinely in almost every project in the last 6 or so years.
I have experience using docker for delivery and running of backend services, for containerized CI/CD
and just simply for quickly getting a necessary technology I need to test on my machine.

When making local environments I prefer using docker-compose. In couple of projects I had very good 
experience of making production-grade images specific for Java using jib library. I also have some 
experience making multi-stage builds with statically compiled Golang-based images. Though I prefer 
images to be based on alpine, in certain situations I have made some images from scratch base.
`})})}),e(l,{id:"aws",children:e(d,{title:"AWS",children:e(n,{text:`
I have extensive experience working with various AWS services, such as ECS (Fargate or EC2 based),
EKS, DynamoDB, RDS (usually Postgres, Aurora), Lambda, Cloudformation, S3, MSK, API Gateway and others. 

I have been building services deployed on AWS for several projects different in sizes and certain
specifics, such as serverless or not, ECS-based or EKS, etc. I am comfortable using AWS Webconsole
or AWS CLI, depending on the task at hand.

When I can intergate with AWS from different systems, for example here you can see the 
[PR I made for jenkins plugin](https://github.com/jenkinsci/pipeline-aws-plugin/pull/251), 
which had issues when I was rolling out project infrastructure on China partition.
`})})}),e(l,{id:"kubernetes",children:e(d,{title:"Kubernetes",children:e(n,{text:`
I am a certified Kubernetes administrator (CKA by CNCF). 

I started working with Kubernetes under Openshift some years ago and since then used it in
different installations and situations, cloud based (EKS, AKS, custom based on EC2 or Openstack,
custom made over GKE compute) and not (k3s, k3d, minikube, half-manual installation with kubeadm 
or fully manual aka "Kuberenetes the hard way"). 

I could relatively quickly diagnose issues, administer clusters, build an architecture, develop or
help other do the same in k8s environment. I have certain experience in helm, including 
[open source contribution](https://github.com/coder/code-server/pull/3393) to one of public charts. 
On most of projects with k8s I would use helm for managing IaC, sometimes combined with 
terraform. I have used kustomize as well once. 
`})})}),e(l,{id:"terraform",children:e(d,{title:"Terraform",children:e(n,{text:`
I have been using terraform on a several projects, sometimes defining all resources directly
(with help of providers of course), sometimes through public modules. I can design IaC of any
complexity using terraform, analyze and fix any issues that could happen (f.e. figure out
what to do when state management got fixed on lock being stuck due to ungraceful termination, etc).
`})})}),e(l,{id:"cloudformation",children:e(d,{title:"Cloudformation",children:e(n,{text:`
I have been using vanilla Cloudformation via standard YAML templates on several projects,
though nowadays I would prefer to describe CF based IaC using CDK. I can support complex 
stacks if needed, correct any issues, like stacks stuck in UPDATE_ROLLBACK_FAILED state.
In different projects I have experience of defininig stacks with ECS services, RDS databases,
S3 buckets, MSK clusters, API Gateways, etc.
`})})}),e(l,{id:"cdk",children:e(d,{title:"CDK",children:e(n,{text:`
Mostly I have experience with CDK via Typescript, though I have tried couple of times
Java-based CDK apps as well. I used CDK on two different projects and found it
one of the most convenient tools for IaC so far, except for its vendor-lock on AWS.
I have experience making CDK based Codepipelines in AWS deploying Fargate services
with databases in RDS and/or DynamoDB as well as serverless applications on AWS Lambda, 
using escape-hatches to adjust resources with AOP when needed, defining custom resources,
such as f.e. Datadog monitors tracking some of metrics from AWS, or Kafka topics, etc.
`})})}),e(l,{id:"kafka",children:e(d,{title:"Kafka",children:e(n,{text:`
Almost all IoT projects I have been working so far had been using Kafka as a bus
for devices to write to and services to communicate with each other. I have some experience
of using Event Sourcing approach on Kafka as well, though not so extensive.
On [one of projects](/timeline#vehicle-telemetry-collection) I have been also using
a lot of Kafka Streams, wrapping business logic into stream processing, using KTables
and their changelog topics for further processing, etc.
I am comfortable integrating Kafka into Spring Boot based services with Kotlin and Java,
Akka based services with Scala, Golang services, using CLIs such as standard tools 
kafka-topics, kafka-consumer-groups or kcat (kafkacat). I understand core concepts such
as topics, partitions, consumer groups, rebalancing, keys, etc. I am able to diagnose 
and fix common issues of various complexity, such as f.e. slow consumer causing offset
commits to fail due to client missing hearbeat after timeout on batch processing and such.
`})})}),e(l,{id:"rabbitmq",children:e(d,{title:"RabbitMQ",children:e(n,{text:`
I have used RabbitMQ on several projects, I am used to designing structure of exchanges
and queues from scratch as well as getting into existing structure if needed. 
I prefer to keep somewhere well documented structure connecting exchanges and 
queues in order to have a better understanding of how the pipeline is. 
I have experience with using RabbitMQ from services development side as well as
deploying and managing it (f.e. with helm/k8s or Fargate on AWS). I have used 
RabbitMQ from Spring Boot (Java), Golang and with other tools such as benthos.

On one [interesting project](/timeline#city-traffic-control-platform) I have built a
system for live-updates in React SPA, where SPA was securely connecting to RabbitMQ
via Stomp over Websocket and getting new data from queues connected to exchanges
with support of access management, which was using roles in the format of RabbitMQ
key bindings, f.e. '<country code>.<region code>.\\*.\\*.\\*' would designate permission
to be able to access any object within certain country region. Backend supported updating
key bindings whenever roles were changed in Keycloak (which had a plugin notifying
about changed roles through the same RabbitMQ, though on separately secured host).
Ensuring that whole system was properly secured, including configuring the right
access within RabbitMQ itself, creating users within RabbitMQ corresponding to 
OIDC registered users in Keycloak, and so on - was quite a challenge.
`})})}),e(l,{id:"aws-iot",children:e(d,{title:"AWS IoT",children:e(n,{text:`
I only have a passing experience with AWS IoT in two projects, which I have not
been involved in 100 percent. One of those was workshop for students, where AWS
IoT was used to expose secured MQTT broker connecting to Raspberry PI device,
talking to which was the main task of the workshop. I was in charge of managing
EKS-based interactive cloud coding environment (based on VS Code for Web).
Coding environment had mounted TLS credentials tied to certificate managed by AWS IoT.

Another time I was working with AWS IoT was for one of Edge computing projects,
where I was helping another colleague to figure out how AWS Greengrass is working
and establish testing bench for experiments with that system. I was doing it maybe
for several days, it was kinda fun. I had some experience with Azure IoT Edge,
so I partly knew what to expect, though some AWS specifics took time to adjust to.
`})})}),e(l,{id:"lorawan",children:e(d,{title:"LoraWAN",children:e(n,{text:"TBU"})})}),e(l,{id:"gitlab",children:e(d,{title:"Gitlab",children:e(n,{text:"TBU"})})}),e(l,{id:"jenkins",children:e(d,{title:"Jenkins",children:e(n,{text:"TBU"})})}),e(l,{id:"aws-codepipeline",children:e(d,{title:"AWS Codepipeline",children:e(n,{text:"TBU"})})}),e(l,{id:"aws-codebuild",children:e(d,{title:"AWS Codebuild",children:e(n,{text:"TBU"})})}),e(l,{id:"redux",children:e(d,{title:"Redux",children:e(n,{text:"TBU"})})}),e(l,{id:"mobx",children:e(d,{title:"MobX",children:e(n,{text:"TBU"})})}),e(l,{id:"cypress",children:e(d,{title:"Cypress",children:e(n,{text:"TBU"})})}),e(l,{id:"junit",children:e(d,{title:"Junit",children:e(n,{text:"TBU"})})}),e(l,{id:"scalatest",children:e(d,{title:"Scalatest",children:e(n,{text:"TBU"})})}),e(l,{id:"arquillian",children:e(d,{title:"Arquillian",children:e(n,{text:"TBU"})})})]}),d=({title:t,children:i})=>s(v,{children:[e("h3",{className:"text-center pt-5 pb-3 text-xl leading-6 font-medium text-gray-900 dark:text-gray-100",children:t}),i]}),st=()=>s(v,{children:[s(A,{name:"Languages",children:[e(c,{value:"Java"}),e(c,{value:"Typescript"}),e(c,{value:"Kotlin"}),e(c,{value:"Scala"}),e(c,{value:"Go"}),e(c,{value:"Rust"}),e(c,{value:"Lua"})]}),s(A,{name:"Frameworks",children:[e(c,{value:"Spring Boot"}),e(c,{value:"React"}),e(c,{value:"Akka"}),e(c,{value:"vue.js"}),e(c,{value:"seed-rs"})]}),s(A,{name:"Cloud",children:[e(c,{value:"Docker"}),e(c,{value:"AWS"}),e(c,{value:"Kubernetes"}),e(c,{value:"terraform"}),e(c,{value:"Cloudformation"}),e(c,{value:"CDK"})]}),s(A,{name:"Middleware",children:[e(c,{value:"Kafka"}),e(c,{value:"RabbitMQ"}),e(c,{value:"AWS IoT"}),e(c,{value:"LoraWAN"})]}),s(A,{name:"CI/CD",children:[e(c,{value:"Gitlab"}),e(c,{value:"Jenkins"}),e(c,{value:"AWS Codepipeline"}),e(c,{value:"AWS Codebuild"})]}),s(A,{name:"Misc",children:[e(c,{value:"Redux"}),e(c,{value:"MobX"}),e(c,{value:"Cypress"}),e(c,{value:"Junit"}),e(c,{value:"scalatest"}),e(c,{value:"arquillian"})]}),e(n,{children:"This is not a complete list of technologies I have skills to work with, but just the ones most recent/relevant. In a lot of situations I have found that having experience with similar tool is helping to quickly get used to another."}),e(rt,{})]}),lt=()=>{const t=[{title:"Tech",node:e("div",{className:"bg-white dark:bg-gray-800 dark:text-gray-200 px-1 pb-4 pt-4",children:e(st,{})}),route:"/tech"},{title:"Timeline",node:e("div",{className:"bg-white dark:bg-gray-800 dark:text-gray-200 px-1 pb-4",children:e(et,{})}),route:"/timeline"},{title:"Open Source",node:e("div",{className:"bg-white dark:bg-gray-800 dark:text-gray-200 px-1 pb-4",children:e(Be,{})}),route:"/open-source"},{title:"About",node:e("div",{className:"bg-white dark:bg-gray-800 dark:text-gray-200 px-4 pb-4",children:e(tt,{})}),route:"/about"}],[i,a]=m.exports.useState(0),[o,r]=m.exports.useState(),[h,u]=m.exports.useState();return e(De,{children:e(ct,{currentTab:i,swiper:h,tabs:t,setNavSwiper:r,navSwiper:o,setSwiper:u,setCurrentTab:a})})},ct=({currentTab:t,swiper:i,tabs:a,setNavSwiper:o,navSwiper:r,setSwiper:h,setCurrentTab:u})=>{const b=U(),k=ve(),[E,M]=m.exports.useState(!1),P=ie();m.exports.useEffect(()=>{if(!E){M(!0);return}let f=a[t];console.log("navigating to",f.route),b.pathname!==f.route&&k(f.route)},[t]);const L=()=>{P.hash!==b.hash&&P.setHash(b.hash)},D=f=>{console.log(`nav is ${b.pathname}`);let K=a.findIndex(le=>le.route==b.pathname);K>=0&&t!==K?f==null||f.slideTo(K):L()};return m.exports.useEffect(()=>{D(i)},[i,b]),s(v,{children:[e(at,{currentTab:t,swiper:i,tabs:a,setNavSwiper:o}),e($,{modules:[V,we],shortSwipes:!1,spaceBetween:10,controller:{control:r},effect:"coverflow",onSwiper:f=>{h(f)},onSlideChangeTransitionEnd:()=>{L()},onSlideChange:f=>{u(f.activeIndex)},children:a.map(f=>e(X,{children:f.node},f.title))})]})},dt=()=>s("section",{className:"p-6 rounded-tl-3xl bg-gray-800 overflow-x-clip",children:[e("h3",{className:"pt-5 pb-3 text-lg leading-6 font-medium text-gray-900 dark:text-gray-100",children:"Timur Sultanaev is"}),s("ul",{className:"list-disc list-inside text-gray-700 dark:text-gray-200",children:[e("li",{children:"a full-stack developer"}),e("li",{children:", who is focused on complete cycle of delivering cloud-based services"}),e("li",{children:"using DevOps practices and Agile methodology"}),e("li",{children:", with 8 years of working experience"}),e("li",{children:". Currently living in Munich (Germany)"}),e("li",{children:", not looking for a job change"})]}),e(l,{id:"contacts",children:s("div",{className:"mt-3 max-w-prose",children:["About all opportunities, job suggestions, etc, please contact me via LinkedIn only:",e("p",{children:s("a",{href:"https://www.linkedin.com/in/sultanaev-timur",target:"_blank",children:[e(T,{icon:ke})," ","www.linkedin.com/in/sultanaev-timur"]})})]})})]}),ht=i=>{var t=B(i,[]);return e("div",x(y({className:"bg-gray-50 dark:bg-gray-900"},t),{children:s("div",{className:"container mx-auto",children:[s("div",{className:"grid grid-flow-col md:grid-cols-3 grid-cols-2 bg-white dark:bg-gray-800",children:[e("div",{className:"col-start-1 row-span-1 col-span-1 rounded-br-3xl bg-gray-50 dark:bg-gray-900 hidden md:flex justify-center items-center",children:e("div",{className:"h-48 md:transition-[width] w-1 md:w-48",children:e("img",{className:"object-contain h-48 rounded-3xl",src:Ae})})}),e("div",{className:"dark:text-gray-200 md:col-start-2 col-span-2 col-start-1 bg-gray-900",children:e(dt,{})})]}),e("div",{className:"bg-white dark:bg-gray-800 dark:text-gray-200 md:pt-6 md:rounded-tl-3xl",children:e(lt,{})}),e("div",{children:e(G,{to:"#contacts",children:"Contacts"})})]})}))};function ut(){return e("div",{children:e(xe,{children:e(ht,{})})})}Ie.render(e(Se.StrictMode,{children:e(ut,{})}),document.getElementById("root"));
