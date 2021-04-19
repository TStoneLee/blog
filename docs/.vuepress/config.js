module.exports = {
  title: '前端技术摘抄',
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
      { text: '分类', link: '/guide/'},
      { text: '其他', link: 'https://baidu.com'}
    ],
    sidebar: {
      '/pages/test/': [
        {
          title: '菜单1',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['test.md', '子菜单1'],
            ['test2.md', '子菜单2']
          ]
        },
        {
          title: '菜单2',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['test3.md', '子菜单2']
          ]
        }
      ]
    }
  }
}