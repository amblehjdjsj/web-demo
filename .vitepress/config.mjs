import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Home",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', items:[
        {text:'首页',link:"/"},
        {text:'导航1',link:'/'}
      ] },
      { text: '示例', items:[
        {text:'示例1',link:"/"},
        {text:'示例2',link:'/'}
      ] }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/amblehjdjsj' }
    ],
    footer:{
      copyright:"Dsbluestar@2024 BlueStar"

    }
  }
})
