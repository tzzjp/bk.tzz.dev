import type { NavMenu, SiteConfig } from "@/types";
import { siteConfig as config } from "./site";
import { navMenu as nav } from "./navMenu";


export function defineConfig(config: SiteConfig): SiteConfig {
  const defaultConfig: SiteConfig = {
    name: 'Tzz.Dev',
    description: 'つまらない毎日を雑メモとして記録するサイト',
    keywords: [
      'tzz.dev'
    ],
    github: 'https://github.com/tzzjp/tzz.dev',
  }

  return {...defaultConfig, ...config}
}

function defineNavMenu(navMenu: NavMenu): NavMenu {
  const defaultNavMenu: NavMenu = {
    links: []
  }

  return {...defaultNavMenu, ...navMenu}
}

export const siteConfig: SiteConfig = defineConfig(config);
export const navMenu: NavMenu = defineNavMenu(nav);
