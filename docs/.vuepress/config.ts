module.exports = {
  // 页面标题
  title: 'EasyDataBaseExport',
  // 网页描述
  description: 'EasyDataBaseExport说明文档',
  head: [
    // 页面icon
    ['link', { rel: 'icon', href: '/images/logo.svg' }],
    //添加百度统计
    ["script", {},
    `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?689bb9de546fd0008a340e87aa9c3f66";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    `
    ]
  ],
  // 端口号
  port: 3000,
  themeConfig: {
    docsDir: 'docs',
    // 所有页面自动生成侧边栏
    //sidebar: 'auto',
    // 最后更新时间
    //lastUpdated: true,
    // 编辑链接
    //editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    // 仓库地址
    repo: 'Zhuoyuan1/EasyDataBaseExport',
    // 仓库链接label
    repoLabel: 'Github',

    docsRepo: "Zhuoyuan1/vuepress-next",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "帮助我们改善此页面！",
    
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
      { text: 'Gitee', link: 'https://gitee.com/lzy549876/EasyDataBaseExport'}
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
    ]
  ]
}