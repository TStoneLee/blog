module.exports = {
  title: '前端摘抄',
  base: '/',
  description: '个人博客网站',
  // search: false,
  lastUpdated: '最新更新：',
  // head: [
  //   ['link', {rel: 'icon', href: '/logo.png'}]
  // ],
  locales: { '/': { lang: 'zh-CN' }}
  themeConfig: {
    logo: '/tongyang.jpeg',
    lastUpdated: '更新于：', 
    activeHeaderLinks: false, // 默认值：true
    nav: [
      { text: '首页', link: '/'},
      { text: '进阶笔记', link: '/pages/advanced/test.md'},
      { 
        text: '项目笔记', 
        ariaLabel: '项目笔记菜单',
        // link: '/pages/development/test.md',
        items: [
          { text: 'uniapp开发', link: '/pages/development/uniapp/'},
          { text: '其他项目',  link: '/pages/development/other/'}
        ]
      },
      { text: '算法笔记', link: '/pages/algorithm/test.md'},
      { text: '读书笔记', link: '/pages/read/test.md'},
      { text: 'GitHub', link: 'https://github.com/ThreeStonesLee'}
    ],
    sidebar: {
      '/pages/advanced/': [
        {
          title: 'JavaScript',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['test.md', '子菜单2']
          ]
        },
        {
          title: 'CSS',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['test.md', '子菜单2']
          ]
        },
        {
          title: 'HTML',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['test.md', '子菜单1'],
            ['test2.md', '子菜单2']
          ]
        }
      ],
      '/pages/development/uniapp/': [
        // '',
        ['uni-icon.md', 'uniapp图标'],
        // {
        //   title: 'uniapp图标',
        //   collapsable: true,
        //   sidebarDepth: 1,
        //   children: [
        //     []
        //   ]
        // },
      ],
      '/pages/development/other/': [
        ['mention.md', '富文本@功能'],
        ['vuepress.md', '搭建博客']
        // {
        //   title: 'uniapp图标',
        //   collapsable: true,
        //   sidebarDepth: 1,
        //   children: [
        //     []
        //   ]
        // },
      ],
      '/pages/development/': [
        // {
        //   title: '其他开发',
        //   collapsable: true,
        //   sidebarDepth: 1,
        //   children: [
        //     ['mention.md', '富文本@功能'],
        //     ['vuepress.md', '搭建博客']
        //   ]
        // }
        // 'mention.md'
      ],
      '/pages/algorithm/': [],
      '/pages/read/': []
    }
  }
}