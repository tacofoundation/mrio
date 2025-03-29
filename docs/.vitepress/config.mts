import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineConfig({
  base: '/mrio/',
  title: 'mrio',
  lang: 'en-US',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: nav(),
    search: {
      provider: 'local',
    },
    sidebar: {
      '/en/specification/': { 
        base: '/en/specification/', 
        items: sidebarGuide() 
      },
      '/en/python/': { 
        base: '/en/python/', 
        items: sidebarPython() 
      }
    },
    editLink: {
      pattern: 'https://github.com/tacofoundation/mrio/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tacofoundation/mrio' },
      { icon: 'twitter', link: 'https://x.com/isp_uv_es' },
      { 
        icon: {
          svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/></svg>`
        },
        link: 'mailto:csaybar@gamil.com'
      }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2025 mrio | open source for a better tomorrow'
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "./custom.css";`
        }
      }
    }
  },

  
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Specification',
      link: '/en/specification/geotiff/',
      activeMatch: '/en/specification/'
    },
    {
      text: 'Python',
      link: '/en/python/mrio/',
      activeMatch: '/en/python/'
    },
    {
      text: 'R',
      link: '#',
    },
    {
      text: 'Julia',
      link: '#',
    },
  ]
}


function sidebarPython(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'API Reference',
      items: [
        { text: 'mrio', link: 'mrio' },
        { text: 'Validation', link: 'validation' },
        { text: 'Rasterio API', link: 'rasterio_api' },
        { text: 'Temporal API', link: 'temporal_utils' },
        { text: 'Attributes', link: 'attributes' },
        { text: 'Examples', link: 'examples' },
      ]
    },
    {
      // text: 'External',
      items: [
        { text: 'Changelog', link: 'CHANGELOG.md'},
        { text: 'Contributing', link: 'CONTRIBUTING.md'}
      
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Formats',
      collapsed: false,
      items: [
        { text: 'GeoTIFF', link: 'geotiff' },
        { text: 'GDALGeoTIFF', link: 'gdal-geotiff' },
        { text: 'COG', link: 'cog' },
        { text: 'Summary', link: 'summary' },
      ]
    },
    {
      text: 'Specification',
      collapsed: false,
      items: [
        { text: 'Introduction', link: 'introduction' },
        { text: 'Multidimensional COG', link: 'multidimensional-geotiff-specification'},
        { text: 'Temporal COG', link: 'temporal-geotiff-specification'},
        // { text: 'Best Practices', link: 'best-practices' }
      ]
    }
  ]
}


