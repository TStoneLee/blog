module.exports = {
  title: '前端摘抄',
  base: '/',
  description: '个人博客网站',
  // search: false,
  lastUpdated: '最新更新：',
  // head: [
  //   ['link', {rel: 'icon', href: '/logo.png'}]
  // ],
  themeConfig: {
    logo: '/tongyang.jpeg',
    nav: [
      { text: '首页', link: '/'},
      { text: '进阶笔记', link: '/pages/advancedNotes/test.md'},
      { text: '项目笔记', link: '/pages/developmentNotes/test.md'},
      { text: '算法笔记', link: '/pages/algorithmNotes/test.md'},
      { text: '读书笔记', link: '/pages/readNotes/test.md'},
      { text: 'GitHub', link: 'https://github.com/ThreeStonesLee'}
    ],
    sidebar: {
      '/pages/advancedNotes/': [
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
      '/pages/developmentNotes/': [
        'mention.md'
      ],
      '/pages/algorithmNotes/': [],
      '/pages/readNotes/': []
    }
  }
}