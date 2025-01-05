"use strict";(self.webpackChunkgickup_docusaurus=self.webpackChunkgickup_docusaurus||[]).push([[5715],{2055:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"configuration/source_docu/bitbucket","title":"Bitbucket","description":"- url//bitbucket.org is used.","source":"@site/docs/configuration/source_docu/bitbucket.md","sourceDirName":"configuration/source_docu","slug":"/configuration/source_docu/bitbucket","permalink":"/gickup-documentation/configuration/source_docu/bitbucket","draft":false,"unlisted":false,"editUrl":"https://github.com/cooperspencer/gickup-documentation/blob/main/docs/docs/configuration/source_docu/bitbucket.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Sourcehut","permalink":"/gickup-documentation/configuration/source_docu/sourcehut"},"next":{"title":"Any","permalink":"/gickup-documentation/configuration/source_docu/any"}}');var i=s(4848),r=s(8453);const t={sidebar_position:6},c="Bitbucket",u={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"bitbucket",children:"Bitbucket"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="config"',children:'source:\n  bitbucket:\n    - url: http(s)://url-to-bitbucket\n      user: some-user\n      token: your-token # basically the app password\n      token_file: token.txt\n      username: your-user\n      password: your-password\n      ssh: true\n      sshkey: /path/to/key\n      exclude: # this excludes the repos "foo" and "bar"\n        - foo\n        - bar\n      include: # this includes the repo "foobar"\n        - foobar\n      excludeorgs: # this excludes repos from the workspaces "foo" and "bar"\n        - foo\n        - bar\n      includeorgs: # this includes repos from the workspaces "foo1" and "bar1"\n        - foo1\n        - bar1\n      filter:\n        lastactivity: 1y\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"url"}),": if empty, ",(0,i.jsx)(n.a,{href:"https://bitbucket.org",children:"https://bitbucket.org"})," is used."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"user"}),": the user you want to clone the repositories from."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["if you want to get everything from your user, leave out the ",(0,i.jsx)(n.code,{children:"user"})," parameter and just use the token."]})}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsx)(n.p,{children:"for the clone process, either use:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"username + password"}),"\n",(0,i.jsx)(n.li,{children:"sshkey"}),"\n",(0,i.jsx)(n.li,{children:"nothing, if you only clone public repositories"}),"\n"]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"username"}),": user that will be used for the clone process."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"password"}),": password for said user."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"token"}),": this is an app password."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"token_file"}),": alternatively, specify the token in a file, relative to current working directory when executed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ssh"}),": boolean value if the clone should be done via ssh."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sshkey"}),": if empty, it uses your home directories' .ssh/id_rsa."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"exclude"}),": you can exclude repositories."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"include"}),": only clone those specific repositories."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"excludeorgs"}),": leave out specific workspaces of the user."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"includeorgs"}),": only clone those specific workspace repositories."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"filter"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lastactivity"}),": only repos that were active in this time frame are cloned (y, M, d, h, m, s)"]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var o=s(6540);const i={},r=o.createContext(i);function t(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);