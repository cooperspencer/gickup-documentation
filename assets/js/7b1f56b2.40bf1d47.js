"use strict";(self.webpackChunkgickup_docusaurus=self.webpackChunkgickup_docusaurus||[]).push([[2440],{8411:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>u});var o=t(4848),i=t(8453);const s={sidebar_position:0},c="Local",r={id:"configuration/destination_docu/local",title:"Local",description:"- path: path to store your backup.",source:"@site/docs/configuration/destination_docu/local.md",sourceDirName:"configuration/destination_docu",slug:"/configuration/destination_docu/local",permalink:"/gickup-documentation/configuration/destination_docu/local",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/configuration/destination_docu/local.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/gickup-documentation/configuration/destination_docu/intro"},next:{title:"Github",permalink:"/gickup-documentation/configuration/destination_docu/github"}},a={},u=[];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"local",children:"Local"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="config"',children:"  local:\n    - path: /some/path/gickup\n      structured: true\n      zip: true\n      keep: 5\n      bare: true\n      lfs: true\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"path"}),": path to store your backup."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"If you use Docker, don't forget to mount the path of your backup!"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"structured"}),": if set to ",(0,o.jsx)(n.code,{children:"true"}),", it checks out the repos in a more structured way, like ",(0,o.jsx)(n.code,{children:"hoster/user|organization/repository"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"zip"}),": zips the repository."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"keep"}),": keeps x latest backups."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"bare"}),": clones it as bare."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"lfs"}),": uses lfs to clone repositories."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"git"})," and ",(0,o.jsx)(n.code,{children:"git-lfs"})," must be installed on your system."]})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(6540);const i={},s=o.createContext(i);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);