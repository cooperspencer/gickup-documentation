"use strict";(self.webpackChunkgickup_docusaurus=self.webpackChunkgickup_docusaurus||[]).push([[2906],{8768:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=t(4848),s=t(8453);const i={sidebar_position:9},c="S3",r={id:"configuration/destination_docu/s3",title:"S3",description:"- endpoint: the endpoint of your s3 storage.",source:"@site/docs/configuration/destination_docu/s3.md",sourceDirName:"configuration/destination_docu",slug:"/configuration/destination_docu/s3",permalink:"/gickup-documentation/configuration/destination_docu/s3",draft:!1,unlisted:!1,editUrl:"https://github.com/cooperspencer/gickup-documentation/blob/main/docs/docs/configuration/destination_docu/s3.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Sourcehut",permalink:"/gickup-documentation/configuration/destination_docu/sourcehut"},next:{title:"Miscellaneous",permalink:"/gickup-documentation/configuration/miscellaneous"}},u={},d=[];function a(e){const n={code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"s3",children:"S3"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="config"',children:"  s3:\n   - endpoint: somewhere:9000\n     structured: true\n     bucket: your-bucket-name\n     accesskey: your-access-key\n     secretkey: your-secret-key\n     usessl: true\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"endpoint"}),": the endpoint of your s3 storage."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"structured"}),": if set to ",(0,o.jsx)(n.code,{children:"true"}),", it checks out the repos in a more structured way, like ",(0,o.jsx)(n.code,{children:"hoster/user|organization/repository"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"bucket"}),": the name of your bucket."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"accesskey"}),": the access key for your bucket. This can be an environment variable, just leave out the ",(0,o.jsx)(n.code,{children:"$"}),"-sign."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"secretkey"}),": the secret key for your bucket. This can be an environment variable, just leave out the ",(0,o.jsx)(n.code,{children:"$"}),"-sign."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"usessl"}),": wheter you use ssl or not."]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(6540);const s={},i=o.createContext(s);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);