"use strict";(self.webpackChunkgickup_docusaurus=self.webpackChunkgickup_docusaurus||[]).push([[3499],{7881:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var o=t(1809),n=t(4848),i=t(8453);const s={slug:"codeberg-mirror",title:"Mirror to Codeberg",authors:["cooperspencer"],tags:["gickup","mirror","codeberg"]},c=void 0,a={authorsImageUrls:[void 0]},d=[];function g(e){const r={a:"a",code:"code",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://codeberg.org",children:"Codeberg"})," is an alternative to Github, powered by open source. They use ",(0,n.jsx)(r.a,{href:"https://forgejo.org",children:"Forgejo"}),", which is also developed by them."]}),"\n",(0,n.jsx)(r.p,{children:"By default, the mirroring feature is disabled on Codeberg, but with the latest changes in Gickup you can still mirror your repository to Codeberg.\nFor this example, I'll try to mirror gickup to Codeberg."}),"\n",(0,n.jsxs)(r.p,{children:["As for now, I have no repositories on Codeberg.\n",(0,n.jsx)(r.img,{alt:"No Repos",src:t(6014).A+"",width:"1918",height:"988"})]}),"\n",(0,n.jsxs)(r.p,{children:['First of all we need to create a token for Gickup.\n"Read and Write" for user and repository should suffice.\n',(0,n.jsx)(r.img,{alt:"Token",src:t(8746).A+"",width:"1920",height:"988"})]}),"\n",(0,n.jsx)(r.p,{children:"This configuration will show that mirrors are disabled by default."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",metastring:"title=conf.yml",children:'source:\n  github:\n    - include: ["gickup"]\ndestination:\n  gitea:\n    - url: https://codeberg.org/\n      token: <Top Secret>\n'})}),"\n",(0,n.jsxs)(r.p,{children:["Here is the error message.\n",(0,n.jsx)(r.img,{alt:"Error",src:t(2050).A+"",width:"989",height:"188"})]}),"\n",(0,n.jsx)(r.p,{children:"Let's fix the configuration."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",metastring:"title=conf.yml",children:'source:\n  github:\n    - include: ["gickup"]\ndestination:\n  gitea:\n    - url: https://codeberg.org/\n      token: <Top Secret>\n      mirror:\n        enabled: true\n'})}),"\n",(0,n.jsxs)(r.p,{children:["The second attempt looks way better.\n",(0,n.jsx)(r.img,{alt:"Success",src:t(1396).A+"",width:"989",height:"139"})]}),"\n",(0,n.jsxs)(r.p,{children:["Gickup is now ",(0,n.jsx)(r.strong,{children:"mirrored"})," to Codeberg.\n",(0,n.jsx)(r.img,{alt:"Mirrored",src:t(4063).A+"",width:"1920",height:"986"})]})]})}function l(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},2050:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/bad_attempt-110eb1bf3a7acd64c23bd4ae48e06f42.png"},6014:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/codeberg_empty-4e87a04edde117fa58e701d32f87fb48.png"},4063:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/codeberg_mirrored-1c3964a46d28735508d09575d90b95c7.png"},8746:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/generate_token-bbbbff7aa1770b2b7af606231358bb13.png"},1396:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/good_attempt-eaa4564b7ba055eb8c05e7a79bb723f3.png"},8453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>c});var o=t(6540);const n={},i=o.createContext(n);function s(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:r},e.children)}},1809:e=>{e.exports=JSON.parse('{"permalink":"/gickup-documentation/blog/codeberg-mirror","editUrl":"https://github.com/cooperspencer/gickup-documentation/blob/main/blog/blog/2024-04-19-codeberg/index.md","source":"@site/blog/2024-04-19-codeberg/index.md","title":"Mirror to Codeberg","description":"Codeberg is an alternative to Github, powered by open source. They use Forgejo, which is also developed by them.","date":"2024-04-19T00:00:00.000Z","tags":[{"inline":true,"label":"gickup","permalink":"/gickup-documentation/blog/tags/gickup"},{"inline":true,"label":"mirror","permalink":"/gickup-documentation/blog/tags/mirror"},{"inline":true,"label":"codeberg","permalink":"/gickup-documentation/blog/tags/codeberg"}],"readingTime":0.77,"hasTruncateMarker":false,"authors":[{"name":"Andreas Wachter","title":"Developer of Gickup","url":"https://github.com/cooperspencer","imageURL":"https://github.com/cooperspencer.png","key":"cooperspencer","page":null}],"frontMatter":{"slug":"codeberg-mirror","title":"Mirror to Codeberg","authors":["cooperspencer"],"tags":["gickup","mirror","codeberg"]},"unlisted":false,"nextItem":{"title":"Welcome","permalink":"/gickup-documentation/blog/welcome"}}')}}]);