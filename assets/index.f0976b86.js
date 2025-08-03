var se=Object.defineProperty,re=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var z=(t,i,a)=>i in t?se(t,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[i]=a,w=(t,i)=>{for(var a in i||(i={}))F.call(i,a)&&z(t,a,i[a]);if(W)for(var a of W(i))O.call(i,a)&&z(t,a,i[a]);return t},A=(t,i)=>re(t,le(i));var G=(t,i)=>{var a={};for(var o in t)F.call(t,o)&&i.indexOf(o)<0&&(a[o]=t[o]);if(t!=null&&W)for(var o of W(t))i.indexOf(o)<0&&O.call(t,o)&&(a[o]=t[o]);return a};import{r as p,u as ce,j as r,F as v,a as e,b as P,L as K,f as de,c as H,R as Q,d as j,e as L,g as C,h as T,i as N,k as M,l as E,m as $,n as x,o as he,p as ue,q as me,s as pe,S as ge,C as fe,t as be,v as we,w as ve,x as ye,y as V,z as ke,H as xe,A as Ie}from"./vendor.415a3966.js";const Se=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const h of s)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function a(s){const h={};return s.integrity&&(h.integrity=s.integrity),s.referrerpolicy&&(h.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?h.credentials="include":s.crossorigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(s){if(s.ep)return;s.ep=!0;const h=a(s);fetch(s.href,h)}};Se();var Ae="/assets/photo.df6c86e2.jpg";const Ce=({children:t,tooltip:i,placement:a="auto"})=>{const[o,s]=p.exports.useState(null),[h,f]=p.exports.useState(null),[b,I]=p.exports.useState(!1),y=()=>{I(!0)},S=()=>{I(!1)};p.exports.useEffect(()=>{o==null||o.addEventListener("mouseenter",y),o==null||o.addEventListener("mouseleave",S)},[o]);const[u,k]=p.exports.useState(null),{styles:B,attributes:ne}=ce(o,h,{placement:a,strategy:"fixed",modifiers:[{name:"arrow",options:{element:u}},{name:"flip",options:{fallbackPlacements:["bottom","right"]}}]});return r(v,{children:[e("button",{ref:s,children:t}),r("div",A(w({ref:f,style:B.popper},ne.popper),{className:`${b?"block":"hidden"} bg-black px-1 rounded-md z-10`,children:[i,e("div",{ref:k,style:B.arrow})]}))]})},_=({icon:t,tooltip:i,tooltipPlacement:a})=>e(Ce,{tooltip:i,placement:a,children:e(P,{icon:t,className:"text-white"})}),Te=(t,i)=>{let a;return()=>{a&&clearTimeout(a),a=setTimeout(()=>{a=void 0,t()},i)}},je=()=>{const[t,i]=p.exports.useState(window.innerWidth);return p.exports.useEffect(()=>{const a=Te(function(){i(window.innerWidth)},500);return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}}),t},U=t=>e("span",{className:"inline-flex items-center justify-center px-4 py-1 mt-1 mr-2 font-bold text-md text-white bg-blue-600 rounded-full",children:t}),c=({value:t})=>e(X,{value:t,linkTo:"#"+t.replaceAll(" ","-").toLowerCase()}),X=({value:t,linkTo:i})=>i?e(K,{to:i,children:U(t)}):U(t),Ne=({techs:t})=>{const i=je(),[a,o]=p.exports.useState(!1),s=a?t:Re(t,i),h=()=>{o(!0)},f=()=>{o(!1)};return r("p",{className:"mt-2",children:[s.map(b=>e(X,{value:b},b)),t.length>s.length&&e("button",{className:"inline-flex items-center justify-center px-2 py-0.5 mt-1 text-sm text-white bg-blue-800 rounded-full",onClick:h,children:`+${t.length-s.length} more`}),a&&e("button",{className:"inline-flex items-center justify-center w-8 h-8 mt-1 text-sm text-white bg-blue-800 rounded-full",onClick:f,children:e(P,{icon:de})})]})},Re=(t,i)=>{const a=i/25;let o=0;return t.filter(s=>(o+=s.length,o<a))},q={haveProvider:!1,hash:""},Y=p.exports.createContext(q),Pe=({children:t})=>{const[i,a]=p.exports.useState(q);return p.exports.useEffect(()=>{a(A(w({},q),{haveProvider:!0,setHash:o=>{a(s=>A(w({},s),{hash:o}))}}))},[a]),e(Y.Provider,{value:i,children:t})},Z=()=>p.exports.useContext(Y),ee=({id:t,children:i,hashProvider:a})=>{const o=p.exports.createRef(),s=h=>{if(h.hash===`#${t}`){const f=o.current;f&&f.scrollIntoView({behavior:"smooth"})}};return p.exports.useEffect(()=>{s(a)},[a]),e("div",{id:t,ref:o,children:i})},Le=t=>{const i=H();return e(ee,A(w({},t),{hashProvider:i}))};var l=t=>{const i=Z();return i.haveProvider?e(ee,A(w({},t),{hashProvider:i})):e(Le,w({},t))};const D=({value:t,children:i})=>e("h3",{className:"text-3xl text-center font-semibold pb-4 pt-12",children:t?e(l,{id:t.toLowerCase(),children:t}):i}),De=({value:t,children:i})=>e("h4",{className:"font-semibold text-lg mb-1",children:t?e(l,{id:t.toLowerCase(),children:t}):i}),Je=new RegExp("^(http)|(https)://"),We=t=>Je.test(t.href||"")?e("a",w({target:"_blank",className:"dark:bg-green-900"},t)):e(K,{className:"dark:bg-green-900",to:t.href||"#",children:t.children}),n=({text:t,children:i})=>{const a={a:s=>{var o=G(s,[]);return e(We,w({},o))}};return t?e(Q,{components:a,className:"pb-4 max-w-prose mx-auto",children:t}):i&&e(Q,{components:a,className:"pb-4 max-w-prose mx-auto",children:i})||e(v,{})},m=({title:t,text:i,icon:a,iconTooltip:o,techs:s,links:h,forceIcon:f=!1})=>r("div",{className:"bg-gray-900 p-4 rounded-xl mt-4 mr-auto shadow-md max-w-prose",children:[r("div",{className:"flex items-baseline",children:[e("div",{className:`${f||"md:hidden"} mr-2 mb-2`,children:e(_,{icon:a,tooltip:o,tooltipPlacement:"top"})}),e(De,{value:t})]}),e("p",{className:"leading-tight w-full",children:i}),h&&e(Ge,{links:h}),s&&e(Ne,{techs:s})]}),Ge=({links:t})=>r("div",{className:"px-1 pt-1",children:["see:",t.map(i=>r("a",{href:i.url,target:"_blank",className:"px-1 hover:bg-sky-700 whitespace-nowrap",children:["<",e(P,{icon:i.icon?i.icon:j,className:"mr-1"}),e("span",{className:"underline",children:i.title}),">"]},i.url))]}),g=({children:t})=>e("div",{className:"col-span-1 mx-2",children:t}),Ke=()=>r("div",{className:"md:px-4 mx-1",children:[e(D,{value:"Contributions"}),e(n,{children:"Features, bugfixes, libraries and tools contributed to already existing codebase or ecosystem."}),r("div",{className:"md:grid grid-cols-2",children:[e(g,{children:e(m,{title:"Play Seed",links:[{url:"https://ide.play-seed.dev/",title:"website"},{url:"https://docs.play-seed.dev/",title:"documentation",icon:C},{url:"https://github.com/MartinKavik/seed-app-todomvc/pull/2",title:"PR",icon:T}],text:"Interactive coding playground for Seed framework",icon:N,iconTooltip:"Project",techs:["Rust","seed-rs","Docker","Digital Ocean","traefik","Gitlab CI"],forceIcon:!0})}),e(g,{children:e(m,{title:"seed-icons",text:"Library with collections of icons for seed framework",links:[{url:"https://crates.io/crates/seed-icons",title:"crate",icon:C},{url:"https://strwrite.gitlab.io/seed-icons-browser/",title:"website"},{url:"https://github.com/seed-rs/awesome-seed-rs/pull/15",title:"PR",icon:T}],icon:C,iconTooltip:"Library",techs:["Rust","seed-rs","GraphQL"],forceIcon:!0})}),e(g,{children:e(m,{title:"arquillian-cube: multiple namespaces",text:"Support more than one namespace in one test",links:[{url:"https://github.com/arquillian/arquillian-cube/pull/872",title:"PR",icon:T}],icon:M,iconTooltip:"Feature",forceIcon:!0})}),e(g,{children:e(m,{title:"code-server: init containers",text:"Support extraInitContainers for helm chart",links:[{url:"https://github.com/coder/code-server/pull/3393",title:"PR",icon:T}],icon:M,iconTooltip:"Feature",forceIcon:!0})}),e(g,{children:e(m,{title:"jenkinsci/pipeline-aws-plugin: bugfix",text:"Fix wrong partition detection when assuming role",links:[{url:"https://github.com/jenkinsci/pipeline-aws-plugin/pull/251",title:"PR",icon:T}],icon:E,iconTooltip:"Bugfix",forceIcon:!0})}),e(g,{children:e(m,{title:"cypress-hmr-restarter: bugfix",text:"Fix wrong schema in url",links:[{url:"https://github.com/Svish/cypress-hmr-restarter/pull/13",title:"PR",icon:T}],icon:E,iconTooltip:"Bugfix",forceIcon:!0})})]}),e(D,{value:"Pet Projects"}),e(n,{children:"A bunch of interesting tools and stuff I made for myself, others or just for fun. In my repositories you can find a lot of stuff that I tried, but here I list only the things that actually were done to some degree."}),r("div",{className:"md:grid grid-cols-2",children:[e(g,{children:e(m,{title:"Compose for Git",text:"CLI tool and plugins to manage several local git repositories described in one yaml file",icon:N,iconTooltip:"CLI Tool",techs:["Golang","Git","VSCode Extension API","Typescript","GRPC"],forceIcon:!0})}),e(g,{children:e(m,{title:"trustmatrix",text:"Evolutionary simultaion of Prisoner's Dilemma",icon:N,iconTooltip:"Research Project",techs:["Kotlin","Game theory","Gitlab CI"],forceIcon:!0,links:[{url:"https://gitlab.com/strwrite/trustmatrix",title:"Repo",icon:$},{url:"https://strwrite.gitlab.io/trustmatrix/",title:"Demo",icon:j}]})}),e(g,{children:e(m,{title:"probranchinator",text:"Display status of conflicts between git branches in terminal",icon:N,iconTooltip:"CLI Tool",techs:["Rust","clap-rs","Git"],forceIcon:!0,links:[{url:"https://github.com/strowk/probranchinator",title:"Repo",icon:T}]})}),e(g,{children:e(m,{title:"How to transform draw.io xml to picture in Gitlab CI",text:"",icon:N,iconTooltip:"Demo",techs:["React","Material UI"],forceIcon:!0,links:[{url:"https://gitlab.com/strwrite/drawio-gitlab-ci",title:"Repo",icon:$}]})})]}),e(D,{value:"Games"}),e(n,{children:"At some point I wanted to try myself in game design and development and made a bunch of games and libraries (like packages) on a platform known as Crayta. Crayta is accessible in Stadia and in Epic Games. Game logic is implemented with Lua scripts, UI widgets on html/css/js with some specifics (Gameface engine)."}),e(n,{children:"Source code is not available as a part of version control system, however all games in the list below could be remixed, which allows to create own copy with all the same code and configurations."}),r("div",{className:"md:grid grid-cols-2",children:[e(g,{children:e(m,{title:"Nuclear Gear Snake",text:"",icon:x,iconTooltip:"Game",techs:["Lua","html","css","Javascript"],forceIcon:!0,links:[{url:"https://play.crayta.com/games/752238b5-6db0-4ade-b26f-579be485b37a",title:"Crayta",icon:x}]})}),e(g,{children:e(m,{title:"Flight and Fight",text:"",icon:x,iconTooltip:"Game",techs:["Lua","html","css","Javascript"],forceIcon:!0,links:[{url:"https://play.crayta.com/games/266de510-225e-4f3d-94f8-cba7d067a12f",title:"Crayta",icon:x}]})}),e(g,{children:e(m,{title:"Spellfire",text:"",icon:x,iconTooltip:"Game",techs:["Lua","Typescript","html","css","Javascript"],forceIcon:!0,links:[{url:"https://play.crayta.com/games/e6766b4a-2eb8-4190-8e70-5729e0daf1aa",title:"Crayta",icon:x}]})}),e(g,{children:e(m,{title:"Signs of Acryptica",text:"",icon:x,iconTooltip:"Game",techs:["Lua","Typescript","html","css","Javascript"],forceIcon:!0,links:[{url:"https://play.crayta.com/games/a73b4699-3531-41ab-97aa-870802d6bf98",title:"Crayta",icon:x}]})}),e(g,{children:e(m,{title:"Radar",text:"",icon:C,iconTooltip:"Package",techs:["Lua","html","css","Javascript"],forceIcon:!0,links:[{url:"https://forum.crayta.com/t/radar/2847",title:"Crayta",icon:j}]})}),e(g,{children:e(m,{title:"Superhex",text:"",icon:C,techs:["Lua","html","css","Javascript"],iconTooltip:"Package",forceIcon:!0,links:[{url:"https://forum.crayta.com/t/superhex/1616",title:"Crayta",icon:j}]})}),e(g,{children:e(m,{title:"TrackMouse",text:"",icon:C,iconTooltip:"Package",techs:["Lua","html","css","Javascript"],forceIcon:!0,links:[{url:"https://forum.crayta.com/t/trackmouse/1491",title:"Crayta",icon:j}]})}),e(g,{children:e(m,{title:"Holo Target Tracker",text:"",icon:C,iconTooltip:"Package",techs:["Lua","html","css","Javascript"],forceIcon:!0,links:[{url:"https://forum.crayta.com/t/holo-target-tracker/1313",title:"Crayta",icon:j}]})})]})]});var Me=L.memo(Ke);const Ee=t=>"type"in t&&t.type==="project",qe=({item:t})=>e(J,{item:t,icon:N,iconTooltip:"Project"}),Be=t=>"type"in t&&t.type==="upgrade",Fe=({item:t})=>e(J,{item:t,icon:M,iconTooltip:t.tooltip}),Oe=t=>"type"in t&&t.type==="graduation",ze=({item:t})=>e(J,{item:t,icon:he,iconTooltip:"Graduation"}),He=t=>"type"in t&&t.type==="newJob",Qe=({item:t})=>e(J,{item:t,icon:ue,iconTooltip:"New Job"}),$e=t=>"type"in t&&t.type==="finished",Ve=({item:t})=>e(J,{item:t,icon:E,iconTooltip:"Finished"}),te=({date:t})=>r(v,{children:[e("span",{children:t.toLocaleString("en-us",{month:"short"})}),"\xA0",e("span",{children:t.getFullYear()})]});const _e=()=>e("div",{className:"h-120p w-10 flex items-center justify-center",children:e("div",{className:"h-full w-1 bg-gray-900 pointer-events-none"})}),Ue=({icon:t,date:i,iconTooltip:a})=>r(v,{children:[e(_e,{}),r("div",{className:"bg-gray-900 shadow text-center leading-10 absolute -left-1/2 top-11 rounded-l-md -mt-5 md:w-10 md:h-10 md:left-0 md:rounded-full",children:[i?e("div",{className:"px-4 md:hidden",children:e(te,{date:i})}):e("div",{className:"md:hidden rounded-full w-6 h-6 left-7 top-2 leading-10 bg-gray-900 shadow absolute"}),r("div",{className:"hidden md:block",children:[i&&e("div",{className:"md:-left-28 md:absolute",children:e(te,{date:i})}),e(_,{icon:t,tooltip:a,tooltipPlacement:"left"})]})]})]}),Xe=t=>"techs"in t,J=({item:t,icon:i,iconTooltip:a})=>{const o="hidden md:block";return r("div",{className:"flex md:contents",children:[e("div",{className:`${t.date?"":o} col-start-3 col-end-4 mr-10 ml-5 md:mx-auto relative`,children:e(Ue,{date:t.date,icon:i,iconTooltip:a})}),e("div",{className:"col-start-4 col-end-11",children:e(l,{id:t.title.toLowerCase().replaceAll(" ","-"),children:e(m,{title:t.title,text:t.text,icon:i,iconTooltip:a,techs:Xe(t)?t.techs:void 0})})})]})},Ye=({item:t})=>Ee(t)?e(qe,{item:t}):He(t)?e(Qe,{item:t}):Be(t)?e(Fe,{item:t}):Oe(t)?e(ze,{item:t}):$e(t)?e(Ve,{item:t}):e(v,{}),Ze=({items:t})=>e("div",{className:"container",children:e("div",{className:"flex flex-col md:grid grid-cols-12 text-gray-50",children:t.map(i=>e(Ye,{item:i},i.title+(i.date?i.date.toString():"")))})}),et=()=>e(Ze,{items:[{type:"project",title:"Smart Farming Data Exchange",text:"Simplified data exchange, reduced administrative workload, improving farm's profitability",techs:["Golang","PostgreSQL","Kafka","Kubernetes","AWS EKS","AWS CDK","Typescript","React","Next.js"]},{type:"project",title:"Facility Management",text:"Tracking of tickets to manage offices and other facilities",techs:["Typescript","Angular","NodeJS","Azure","Azure Devops","Kubernetes"]},{type:"upgrade",title:"Promoted to Senior Consultant",text:"",tooltip:"Promotion",date:new Date("2021-12-15")},{type:"project",title:"Electric Vehicles Charging Management",text:"Control of charging and battery analytics for fleets of fully electric buses and trucks",techs:["Kotlin","React","Typescript","AWS Fargate","AWS RDS Aurora","AWS Cloudformation","AWS Codepipeline","AWS Codebuild"]},{type:"project",title:"Vehicle Telemetry Collection",text:"Stream processing of telemetry from millions of cars",techs:["Scala","Akka","Kafka Streams","React","Javascript","AWS","Jenkins"]},{type:"upgrade",title:"Certified Kubernetes Administrator by CNCF",text:"CKA-2000-006435-0100 , scored 94%",tooltip:"Certification",date:new Date("2020-03-13")},{type:"project",title:"Smart City Analytics Platform",text:"Streaming data from integrations into data lake and real time analytics",techs:["Golang","RabbitMQ","Kafka","AWS S3","Gitlab"]},{type:"project",title:"City Traffic Control Platform",text:"Displaying live data from city traffic control system",techs:["React","Typescript","Java","Spring Boot","RabbitMQ","Kafka","Gitlab"]},{type:"project",title:"Streetlighting",text:"Central control of city smart streetlights infrastracture via LoraWAN",techs:["LoraWAN","Vue.js","Java","Spring Boot","RabbitMQ"]},{type:"newJob",title:"Concept Reply GmbH",text:"Started working as IoT Backend Developer (Consultant)",date:new Date("2019-03-01")},{type:"project",title:"Database as a Service",text:"Automated provision and maintenance of databases on-demand",techs:["Java","Spring Boot","Golang","Openshift/Kubernetes","Docker","Postgresql","MongoDB"]},{type:"project",title:"Digital Marketplace",text:"SAAS solution to sell automated digital services",techs:["Java","Spring Boot","Openshift/Kubernetes","Docker","Postgresql","Python"]},{type:"project",title:"Core Cloud Platform Automation",text:"Automated provision of services and integrations",techs:["Java","Spring Boot","Openshift/Kubernetes","Docker","Postgresql","Python","MongoDB"]},{type:"newJob",title:"Netcracker Technology Corp.",text:"Returned to work as a Senior Software Developer",date:new Date("2016-09-01")},{type:"newJob",title:"Mandatory military service",text:"Served as a Senior Computer Operator in science division",date:new Date("2015-06-29")},{type:"graduation",title:"Degree of Master of Applied Math and Physics",text:"Thesis: Selection of informative feature in the nolinear regression problem",date:new Date("2015-06-01")},{type:"project",title:"Telecom Operations and Management Solutions",text:"Operations support for internet service providers",techs:["Java EE","JDBC","Weblogic","Oracle SQL","plsql","Spring"]},{type:"newJob",title:"Netcracker Technology Corp.",text:"Started working as Java Software Developer",date:new Date("2013-08-01")},{type:"graduation",title:"Degree of Bachelor of Applied Math and Physics",text:"Thesis: Detection of biological signs in spectral analysis of a radio-electronic scan",date:new Date("2013-06-01")}]});var tt=L.memo(et);const it=()=>r("div",{className:"container mx-auto max-w-prose",children:[e(D,{children:"This site"}),e(n,{children:"This is resume as code written as a React SPA based on vite framework and using tailwind to style it."}),e(n,{children:"It is built with Github Actions and deployed to Github Pages, where it is distributed as a static site."}),e(n,{children:"I am mostly doing this for fun, but also to try these technologies while making something interesting. This is a primary way of learning for me - through making stuff."}),e(D,{children:"Me"}),e(n,{children:"I have been born in Russia, raised in regional capital and then have moved to Moscow for education. During university years I have started working as a software developer."}),e(n,{children:"After graduating with master degree from MIPT (Moscow Institute of Physics and Technology) I served one year in army and two years later moved to Germany, Munich, where I live presently."}),e(n,{children:"My mothertongue is Russian. I have learned English from books, documentation, films and work. I did learn a bit of Spanish in unversity and Japanese myself. Currently I am learning German."}),e(n,{children:"When possible, I prefer to learn technology by doing rather than going through tutorials, workshops, books, etc."}),e(n,{children:'When tech stack choice is available, I prefer tools, which reduce cognitive load as much as possible, while remain flexible. For example I would rather use strong statically typed programming language, because in the end IMO it helps to save a lot of "brain power" by preventing bugs through more clear structure of code and compiler checks.'}),e(n,{children:"I am not afraid of exploring new technologies and approaches if using them clearly improves the quality or other metrics of project success. However, I am driven by impact of my work and would rather choose [boring technology](https://mcfunley.com/choose-boring-technology) for the majority of cases over chasing shiny things. Say, for example, before chasing things like datalakes or super scalable nosql distributed databases, I would ask if the task could be faster and easier solved by good-old well understood SQL database."})]});var at=L.memo(it);const ot={mobile:0,tablet:768,desktop:1280},nt=({currentTab:t,tabs:i,setNavSwiper:a,moveToNextTab:o,moveToPreviousTab:s,moveToTab:h})=>{const{breakpoint:f}=me(ot),b=f=="desktop",I=f=="tablet";return r("nav",{className:"px-4 flex flex-row text-4xl text-center font-semibold pb-8 border-b-4 border-gray-900",children:[e(ie,{onClick:()=>{s()},icon:pe}),e(ge,{modules:[fe],onSwiper:a,slidesPerView:b?3:I?2:1,children:i.map((y,S)=>e(be,{children:e(st,{onClick:()=>{h(S)},isCurrent:S===t,tab:y})},y.title))}),e(ie,{onClick:()=>{o()},icon:we})]})},st=({onClick:t,isCurrent:i,tab:a})=>e("button",{className:`font-semibold py-1 px-4 ${!i&&"text-gray-500"} rounded-md mt-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:bg-indigo-500 hover:text-gray-100 duration-300`,onClick:t,children:e("h2",{className:`text-4xl font-semibold pb-2 border-b-4 ${i?"border-purple-500":"border-gray-900"}`,children:a.title})},a.title),ie=({onClick:t,icon:i})=>e("button",{className:"md:mx-4 w-16 h-16 text-gray-500 rounded-md transition ease-in-out delay-50 hover:-translate-y-1 hover:bg-indigo-500 hover:text-gray-100 duration-300",onClick:t,children:e(P,{icon:i})}),R=({children:t,name:i})=>r("div",{className:"my-2 bg-gray-50 dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-md",children:[e("dt",{className:"text-sm font-medium text-gray-500 dark:text-gray-100",children:i}),e("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:t})]}),ae=`
I have been using Scala on [one project](/timeline#vehicle-telemetry-collection) for 
several months. We were developing several existing services based on Kafka 
Streams and partially Akka Streams. New services we would usually base on Akka Streams
due to their simplicity. Instead of sbt we were using Maven and heavilty relied on
scalatest for all kinds of testing. Akka Http was used as well for those services,
which needed to expose API to frontend. Mostly work that services were doing involved
stream processing of huge amounts of data, while applying filters based on configurations
set by users from frontend.`,rt=`
For Seed framework I have built an [interactive playground](https://gitlab.com/strwrite/seed-playground-docs/-/blob/master/src/about.md)
(currently shut down), where developers could try out some simple scenarios. 
Rust is used there for backend, where I based my work
on existing Rust Playground backend. For frontend this system is forking WebAssemblyStudio, 
which was made outside of Rust ecosystem as a playground for WebAssembly specifically. 
I managed to make those two projects to work together in the place where they intersect - 
building Rust application and then running it using WebAssembly directly in browser.

I made some other projects with Seed, such as [seed-icons](https://crates.io/crates/seed-icons)
- library for typed icons importing from Font Awesome and Material Icons and corresponding
[browser](https://strwrite.gitlab.io/seed-icons-browser/) of those icons. 
Website of [git-compose](http://git-compose.gitlab.io/) tool was
also made using Seed framework (though tool itself is on Golang ATM).
`,oe=`I have been using Spring Boot in many projects, 
usually in microservices using database via Spring Data. I am
comfortable writing applications of any complexity, solving any
concurrency issues, write unit or integration tests, deploy and
maintain Java based services in the cloud. I have been working in
existing big applications based only on Spring as well as creating
new Spring Boot based services from scratch. On one of projects
I was also developing several libraries exposing functionality 
to Spring Boot based services, which could automatically wire into
context once developer had included "starter" dependency.`,lt=()=>r(v,{children:[e(l,{id:"java",children:e(d,{title:"Java",children:e(n,{text:`
I have been working with Java from the start of my career. During
[university days](/timeline#degree-of-bachelor-of-applied-math-and-physics) my future employer Netcracker Technologies have
been organizing a special classes, which I have attended. We learned
about JavaSE for one semester and JavaEE (mostly EJB 3) for another.

When I started working in that company, for couple of years me and
my team have been supporting a big monolith solution based on
Weblogic, which heavily relied on both EJB 2 and 3, with some
additional usage of jsp. Later, when I started working with cloud
platform, I received a lot of Spring Boot knowledge in microservice
architecture. 

${oe}

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
The latest big Typescript project I have been working on is about
[facility management](/timeline#facility-management) and is 
organised as a monorepo with several NetsJS based microservices, 
frontend SPA based on Angular, shared libraries and couple NodeJS
based Azure Functions. I regularly work with all of those parts in
that project.
            `})})}),e(l,{id:"kotlin",children:e(d,{title:"Kotlin",children:e(n,{text:`
The first time I was exposed to Kotlin when developers of
that language were showing it on the conference of Java programmers.
I was interested in several features they presented and tried to make 
a [small application](/sides#trustmatrix), which would be working in 
browser (complied to JS) as well as installable as desktop app (with JavaFX based UI).

At some later point I had a [production experience](/timeline#electric-vehicles-charging-management) 
with Kotlin developing several backend services for about a year total. Those services were
based on Spring Boot, used various Spring libraries to interface with
PostgreSQL database (Spring Data) and Kafka (Spring Kafka, Spring Cloud Kafka Binder),
as well as some small interface with AWS (using AWS SSM Parameters to pass configs).
            `})})}),e(l,{id:"scala",children:e(d,{title:"Scala",children:e(n,{text:ae})})}),e(l,{id:"go",children:e(d,{title:"Golang",children:e(n,{text:`
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
${rt}

One of activities I was involved in my day job is organizing IoT workshop for students.
To simplify process of going through workshop I have prepared cloud-based coding space
using one of VSCode for Web distributions. The workshop requires certain management to
rollout infrastructure (such as creating k8s namespaces, sending emails with access
to participants). Those management activities are partially automated with the use
of Rust-based CLI tool I have made specifically for this purpose.

Another Rust project I have been working on is a [small CLI tool](/sides#probranchinator)
to get an overview of conflicts between branches in git repository. I have been
mainly using it myself due to one of my projects having a lot of active branches
and CI process was causing issues with merge conflicts, so the overview was needed.
After some short search I've come to conclusion that there is no tool which would
provide such overview in a convenient way, so I have made one myself.
            `})})}),e(l,{id:"lua",children:e(d,{title:"Lua",children:e(n,{text:`
I have played with Lua Script while making games in my free time. There is some info about
those within [this website](/sides#games). Unfortunately UGC platform I was using for
publishing those games is no longer available. I have also used Lua for some small
scripting tasks in my day job when it was needed to process requests going through
the service mesh (Istio, Envoy Proxy) and add some additional metadata to them.
I don't think my knowledge of Lua is very deep, though it is quite a simple language.
            `})})}),e(l,{id:"spring-boot",children:e(d,{title:"Spring Boot",children:e(n,{text:oe})})}),e(l,{id:"nestjs",children:e(d,{title:"NestJS",children:e(n,{text:`
On one of [recent projects](/timeline#facility-management) I have used NestJS
extensively with multiple microservices and one internal library based on 
that framework as well as several Azure Functions (serverless platfrom in Azure).

NestJS is a framework that is often used in NodeJS ecosystem. I have experience
of using it to build REST APIs and GRPC services. It is pretty simple and convenient
to use, though I would not say it is my favorite framework. I would prefer to use
Rust for backend development, but NestJS is a good choice for NodeJS.
I have also written a lot of Jest tests with NestJS, using its standard
testing library, both as a unit and integration tests. When working with databases
I have used TypeORM integrated with NestJS.`})})}),e(l,{id:"react",children:e(d,{title:"React",children:e(n,{text:`
React is one of my favorite choices for frontend development. In fact this website is made
using React (using vite, react-router, tailwind and storybook). 

I find React in a very convenient place between flexibility and complexity. It has a great
ecosystem and is normally quite convenient to work with. Compared to vue, it might look
more complex to start working in, but it scales quite nicely with number of developers 
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
I have used Redux for state management (which was not RTK at that time yet unfortunately).

Another [big React appliction](/timeline#electric-vehicles-charging-management) was
already present in the project, but I have made lots of changes to it. Specific challenge
in this case was covering that application with good testing, including running them on CI.
I have used React Testing Library and Cypress for that. Cypress was also used for
availability testing of the whole deployment, which I found very convenient.
      `})})}),e(l,{id:"akka",children:e(d,{title:"Akka",children:e(n,{text:ae})})}),e(l,{id:"vue.js",children:e(d,{title:"vue.js",children:e(n,{text:`
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
one of the most convenient tools for IaC so far, except for its vendor-lock on AWS
(I have heard of CDK TF, but never got to try it yet).
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
`})})}),e(l,{id:"lorawan",children:e(d,{title:"LoraWAN",children:e(n,{text:`
I have been using LoraWAN on my [first IoT project](/timeline#streetlighting)
in order to connect streetlights to the cloud. I have experience integrating
with Loraserver (nowadays called Chirpstack) and writing Java based service
able to marshal and unmarshal data from LoraWAN devices, pass it forward to
application layer and complete the whole cycle by integrating with frontend SPA.`})})}),e(l,{id:"gitlab",children:e(d,{title:"Gitlab",children:e(n,{text:`
I have a lot of experience working with Gitlab CI/CD, writing customized pipelines,
optimizing them, integrating with various tools. 
Example pipelines I have made:
- [git-compose](https://gitlab.com/git-compose/git-compose/-/blob/master/.gitlab-ci.yml)
- [drawio-gitlab-ci](https://gitlab.com/strwrite/drawio-gitlab-ci/-/blob/master/.gitlab-ci.yml)
- [seed-icons-browser](https://gitlab.com/strwrite/seed-icons-browser/-/blob/master/.gitlab-ci.yml)
- [seed-icons](https://gitlab.com/strwrite/seed-icons/-/blob/master/.gitlab-ci.yml)
- [trustmatrix](https://gitlab.com/strwrite/trustmatrix/-/blob/master/.gitlab-ci.yml)
- [seed-playground-site](https://gitlab.com/strwrite/seed-playground-site/-/blob/master/.gitlab-ci.yml)

These are mostly for my own projects, but I have also been working with Gitlab CI/CD
on [several enterprise projects](/timeline#smart-city-analytics-platform), 
where I have setup pipelines for complete cycle of building, testing, deploying
and managing infrastructure. I have been using Gitlab CI/CD with Docker, Kubernetes,
AWS, Terraform, Helm, Java (both Maven and Gradle), Golang, Python, etc. 
`})})}),e(l,{id:"jenkins",children:e(d,{title:"Jenkins",children:e(n,{text:`
I have a lot of experience with Jenkins, on several [projects](/timeline#vehicle-telemetry-collection).
Generally I prefer if possible to use Gitlab CI/CD, but if it is required, dealing
with Jenkins is also possible, as long as pipeline can be conveniently containerized
and cluster is not too stretched. I have some experience making custom plugins for Jenkins
too, as well as a  
[small open source contribution](https://github.com/jenkinsci/pipeline-aws-plugin/pull/251).
I haven't done much with Jenkins lately, but I am sure I can get back to it if needed.
`})})}),e(l,{id:"aws-codepipeline",children:e(d,{title:"AWS Codepipeline",children:e(n,{text:`
[One of IoT projects](/timeline#electric-vehicles-charging-management) 
heavily used AWS Codepipeline and I was responsible
for keeping it up and running, as well as adding new additional stages to it
when needed and improving the time it took from developers flow.
I find the whole experience somewhat more clunky than Gitlab CI/CD, but it can
do its job if proper care taken. I have setup vanilla pipelines and CDK ones (which
update themselves based on changes in CDK code).
In that project AWS Codebuild was also used, which is a natural choice for AWS Codepipeline,
but for keeping source, project was already using Bitbucket.
`})})}),e(l,{id:"redux",children:e(d,{title:"Redux",children:e(n,{text:`
I have used Redux on several projects, in [one of them](/timeline#city-traffic-control-platform)
I have setup the whole frontend structure from the scratch and used Redux within
React to application central state. Actions to Redux store would be
dispatched from several places, one of them was websocket client (with stomp.js on top).

In [another project](/timeline#electric-vehicles-charging-management) the state was
already managed by Redux, but I have added some new actions and reducers to it as
well as connected it to new React components. `})})}),e(l,{id:"mobx",children:e(d,{title:"MobX",children:e(n,{text:`
I have used MobX mostly on couple personal projects and additionally helped
colleagues to set it up together with a lot of other frontend structure in
one of new projects, which I have only worked on during its starting phase.`})})}),e(l,{id:"cypress",children:e(d,{title:"Cypress",children:e(n,{text:`
I used Cypress in most of frontend projects where I was working with a
team. I have written a lot of tests, modified and refactored some of
tests that were broken, integrated Cypress into pipelines on several
projects. I often guide other team members on how to write tests using
Cypress, structure them and how to make them more robust (data-testid and such).
I also have some experience using plugins that compare screenshots (snapshots),
such as percy.io and cypress-image-snapshot.`})})}),e(l,{id:"junit",children:e(d,{title:"Junit",children:e(n,{text:`
I used Junit in almost every JVM project I have been working in 
(except Scala ones, where there is more convenient scalatest).
I have experience with both Junit 4 and 5 as well as migrating
to the newer one. I used Junit for both unit and integration tests
(with arquillian and not).`})})}),e(l,{id:"scalatest",children:e(d,{title:"Scalatest",children:e(n,{text:`
Scalatest is a very convenient testing framework for Scala-based
applications, which I have used in [one of projects](/timeline#vehicle-telemetry-collection)
quite extensively.`})})}),e(l,{id:"arquillian",children:e(d,{title:"Arquillian",children:e(n,{text:`
I have been using arquillian to make several integration tests for
various microservices, though that was in the [project](/timeline#database-as-a-service)
quite awhile ago.

I have also [contributed](https://github.com/arquillian/arquillian-cube/pull/872) a
feature to one of arquillian components, which I needed because our project
was deployed to several Openshift namespaces and within the test I needed to
interact with several of them.`})})})]}),d=({title:t,children:i})=>r(v,{children:[e("h3",{className:"text-center pt-5 pb-3 text-xl leading-6 font-medium text-gray-900 dark:text-gray-100",children:t}),i]});var ct=L.memo(lt);const dt=()=>r(v,{children:[r(R,{name:"Languages",children:[e(c,{value:"Java"}),e(c,{value:"Typescript"}),e(c,{value:"Kotlin"}),e(c,{value:"Scala"}),e(c,{value:"Go"}),e(c,{value:"Rust"}),e(c,{value:"Lua"})]}),r(R,{name:"Frameworks",children:[e(c,{value:"Spring Boot"}),e(c,{value:"React"}),e(c,{value:"Akka"}),e(c,{value:"vue.js"}),e(c,{value:"seed-rs"}),e(c,{value:"NestJS"})]}),r(R,{name:"Cloud",children:[e(c,{value:"Docker"}),e(c,{value:"AWS"}),e(c,{value:"Kubernetes"}),e(c,{value:"terraform"}),e(c,{value:"Cloudformation"}),e(c,{value:"CDK"})]}),r(R,{name:"Middleware",children:[e(c,{value:"Kafka"}),e(c,{value:"RabbitMQ"}),e(c,{value:"AWS IoT"}),e(c,{value:"Azure Servicebus"}),e(c,{value:"LoraWAN"})]}),r(R,{name:"CI/CD",children:[e(c,{value:"Gitlab"}),e(c,{value:"Jenkins"}),e(c,{value:"AWS Codepipeline"}),e(c,{value:"AWS Codebuild"})]}),r(R,{name:"Misc",children:[e(c,{value:"Redux"}),e(c,{value:"MobX"}),e(c,{value:"Cypress"}),e(c,{value:"Junit"}),e(c,{value:"scalatest"}),e(c,{value:"arquillian"})]}),e(n,{children:"This is not a complete list of technologies I have skills to work with, but just the ones most relevant. In a lot of situations I have found that having experience with similar tool is helping to quickly get used to another."}),e(ct,{})]}),ht=()=>{const t=[{title:"Tech",node:e("div",{className:"animate-fade-in bg-white dark:bg-gray-800 dark:text-gray-200 px-1 pb-4 pt-4",children:e(dt,{})},"tech-skills"),route:"/tech"},{title:"Timeline",node:e("div",{className:"animate-fade-in bg-white dark:bg-gray-800 dark:text-gray-200 px-1 pb-4",children:e(tt,{})},"history"),route:"/timeline"},{title:"Side Gigs",node:e("div",{className:"animate-fade-in bg-white dark:bg-gray-800 dark:text-gray-200 px-1 pb-4",children:e(Me,{})},"side-gigs"),route:"/sides"},{title:"About",node:e("div",{className:"animate-fade-in bg-white dark:bg-gray-800 dark:text-gray-200 px-4 pb-4",children:e(at,{})},"about"),route:"/about"}],[i,a]=p.exports.useState(0),[o,s]=p.exports.useState();return e(Pe,{children:e(ut,{currentTab:i,tabs:t,setNavSwiper:s,navSwiper:o,setCurrentTab:a})})},ut=({currentTab:t,tabs:i,setNavSwiper:a,navSwiper:o,setCurrentTab:s})=>{var S;const h=H(),f=ve(),b=Z(),I=u=>{(o==null?void 0:o.activeIndex)!==u&&(o==null||o.slideTo(u))};p.exports.useEffect(()=>{const u=i.findIndex(k=>k.route===h.pathname);u>=0&&u!==t&&(s(u),I(u)),b.hash!==h.hash&&b.setHash&&b.setHash(h.hash)},[h]),p.exports.useEffect(()=>{I(t)},[t]);const y=u=>{const k=i.at(u);k&&f(k.route)};return r(v,{children:[e(nt,{currentTab:t,moveToNextTab:()=>{const u=t+1;u<i.length&&y(u)},moveToPreviousTab:()=>{const u=t-1;u>=0&&y(u)},moveToTab:y,tabs:i,setNavSwiper:a}),r(ye,{children:[e(V,{path:"/",element:(S=i.at(0))==null?void 0:S.node}),i.map((u,k)=>e(V,{path:u.route,element:u.node},k))]})]})},mt=()=>r("section",{className:"p-6 rounded-tl-3xl bg-gray-800 overflow-x-clip",children:[e("h3",{className:"pt-5 pb-3 text-lg leading-6 font-medium text-gray-900 dark:text-gray-100",children:"Timur Sultanaev is"}),r("ul",{className:"list-disc list-inside text-gray-700 dark:text-gray-200",children:[e("li",{children:"a full-stack developer"}),e("li",{children:"who is focused on complete cycle of delivering cloud-based services"}),e("li",{children:"using DevOps practices and Agile methodology"}),e("li",{children:"with 12 years of working experience"}),e("li",{children:"currently living in Munich"})]}),e(l,{id:"contacts",children:r("div",{className:"mt-3 max-w-prose",children:["About all opportunities, job suggestions, etc, please contact me via LinkedIn only:",e("p",{children:r("a",{href:"https://www.linkedin.com/in/sultanaev-timur",target:"_blank",children:[e(P,{icon:ke})," ","www.linkedin.com/in/sultanaev-timur"]})})]})})]}),pt=i=>{var t=G(i,[]);return e("div",A(w({className:"bg-gray-50 dark:bg-gray-900"},t),{children:r("div",{className:"container mx-auto",children:[r("div",{className:"grid grid-flow-col md:grid-cols-3 grid-cols-2 bg-white dark:bg-gray-800",children:[e("div",{className:"col-start-1 row-span-1 col-span-1 rounded-br-3xl bg-gray-50 dark:bg-gray-900 hidden md:flex justify-center items-center",children:e("div",{className:"h-48 md:transition-[width] w-1 md:w-48",children:e("img",{className:"object-contain h-48 rounded-3xl",src:Ae})})}),e("div",{className:"dark:text-gray-200 md:col-start-2 col-span-2 col-start-1 bg-gray-900",children:e(mt,{})})]}),e("div",{className:"bg-white dark:bg-gray-800 dark:text-gray-200 md:pt-6 md:rounded-tl-3xl",children:e(ht,{})}),e("div",{children:e(K,{to:"#contacts",children:"Contacts"})})]})}))};function gt(){return e("div",{children:e(xe,{children:e(pt,{})})})}Ie.render(e(L.StrictMode,{children:e(gt,{})}),document.getElementById("root"));
