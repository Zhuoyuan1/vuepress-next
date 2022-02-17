import { path } from '@vuepress/utils'

module.exports = {
  // 页面标题
  title: 'EasyConnect',
  // 网页描述
  description: 'EasyConnect说明文档',
  head: [
    // 页面icon
    ['link', { rel: 'icon', href: '/logo.svg' }],
    //添加百度统计
    ["script", {},
    `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?28f009fe9a30092a030ab728baad5349";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    `
    ]
  ],
  // 端口号
  port: 3000,
  markdown: {
    // 代码块行号
    lineNumbers: false,
    importCode: {
      handleImportPath: (str) =>
        str.replace(
          /^@vuepress/,
          path.resolve(__dirname, '../../packages/@vuepress')
        ),
    },
  },
  themeConfig: {
    docsDir: 'docs',
    // 所有页面自动生成侧边栏
    //sidebar: 'auto',
    // 最后更新时间
    //lastUpdated: true,
    // 编辑链接
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    // 仓库地址
    repo: 'https://github.com/Zhuoyuan1/vuepress-next',
    // 仓库链接label
    repoLabel: 'Github',
    
    sidebarDepth: 2,
    sidebar: [
      {link: '/', text:'首页'},
      '/index/',
      '/index/function',
      '/index/version'
    ],
    // 导航
    navbar: [
      { text: '说明文档',link: '/index/'},
      { text: '工具下载【密码1111】', link: 'https://wwz.lanzouo.com/b02c7c0cb'},
      { text: 'Gitee', link: 'https://gitee.com/lzy549876/MySQLToWordOrExcel'}
  ]},
  plugins: [
    [
      '@vuepress/container',
      {
        type: 'tip',
        locales: {
          '/': {
            defaultInfo: '提示',
          },
        },
      },
      {
        type: 'vue',
        locales: {
          '/': {
            before: () => '<pre class="vue-container"><code>',
            after: () => '</code></pre>'
          }
        }
      }
    ],
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ]
}