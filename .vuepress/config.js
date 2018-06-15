module.exports = {
  base: '/weekly-report/',
  title: 'Weekly Report',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      }
    ],
    sidebar: [
        '/week1',
        '/week2'
    ]
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-checkbox'))
    }
  }
}