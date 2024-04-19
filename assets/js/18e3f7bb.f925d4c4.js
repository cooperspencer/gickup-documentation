"use strict";(self.webpackChunkgickup_docusaurus=self.webpackChunkgickup_docusaurus||[]).push([[2309],{1689:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"codeberg-mirror","metadata":{"permalink":"/gickup-documentation/blog/codeberg-mirror","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-04-19-codeberg/index.md","source":"@site/blog/2024-04-19-codeberg/index.md","title":"Mirror to Codeberg","description":"Codeberg is an alternative to Github, powered by open source. They use Forgejo, which is also developed by them.","date":"2024-04-19T00:00:00.000Z","tags":[{"label":"gickup","permalink":"/gickup-documentation/blog/tags/gickup"},{"label":"mirror","permalink":"/gickup-documentation/blog/tags/mirror"},{"label":"codeberg","permalink":"/gickup-documentation/blog/tags/codeberg"}],"readingTime":0.77,"hasTruncateMarker":false,"authors":[{"name":"Andreas Wachter","title":"Developer of Gickup","url":"https://github.com/cooperspencer","imageURL":"https://github.com/cooperspencer.png","key":"cooperspencer"}],"frontMatter":{"slug":"codeberg-mirror","title":"Mirror to Codeberg","authors":["cooperspencer"],"tags":["gickup","mirror","codeberg"]},"unlisted":false,"nextItem":{"title":"Welcome","permalink":"/gickup-documentation/blog/welcome"}},"content":"[Codeberg](https://codeberg.org) is an alternative to Github, powered by open source. They use [Forgejo](https://forgejo.org), which is also developed by them.\\n\\nBy default, the mirroring feature is disabled on Codeberg, but with the latest changes in Gickup you can still mirror your repository to Codeberg.\\nFor this example, I\'ll try to mirror gickup to Codeberg.\\n\\nAs for now, I have no repositories on Codeberg.\\n![No Repos](./pictures/codeberg_empty.png)\\n\\nFirst of all we need to create a token for Gickup.\\n\\"Read and Write\\" for user and repository should suffice.\\n![Token](./pictures/generate_token.png)\\n\\nThis configuration will show that mirrors are disabled by default.\\n```yaml title=conf.yml\\nsource:\\n  github:\\n    - include: [\\"gickup\\"]\\ndestination:\\n  gitea:\\n    - url: https://codeberg.org/\\n      token: <Top Secret>\\n```\\n\\nHere is the error message.\\n![Error](./pictures/bad_attempt.png)\\n\\n\\nLet\'s fix the configuration.\\n```yaml title=conf.yml\\nsource:\\n  github:\\n    - include: [\\"gickup\\"]\\ndestination:\\n  gitea:\\n    - url: https://codeberg.org/\\n      token: <Top Secret>\\n      mirror:\\n        enabled: true\\n```\\n\\nThe second attempt looks way better.\\n![Success](./pictures/good_attempt.png)\\n\\nGickup is now **mirrored** to Codeberg.\\n![Mirrored](./pictures/codeberg_mirrored.png)"},{"id":"welcome","metadata":{"permalink":"/gickup-documentation/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-04-17-welcome/index.md","source":"@site/blog/2024-04-17-welcome/index.md","title":"Welcome","description":"Blogging is quite new for me, but I will try my best to post regular updates and ideas for Gickup.","date":"2024-04-17T00:00:00.000Z","tags":[{"label":"gickup","permalink":"/gickup-documentation/blog/tags/gickup"},{"label":"hello","permalink":"/gickup-documentation/blog/tags/hello"}],"readingTime":0.1,"hasTruncateMarker":false,"authors":[{"name":"Andreas Wachter","title":"Developer of Gickup","url":"https://github.com/cooperspencer","imageURL":"https://github.com/cooperspencer.png","key":"cooperspencer"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["cooperspencer"],"tags":["gickup","hello"]},"unlisted":false,"prevItem":{"title":"Mirror to Codeberg","permalink":"/gickup-documentation/blog/codeberg-mirror"}},"content":"Blogging is quite new for me, but I will try my best to post regular updates and ideas for Gickup."}]}')}}]);