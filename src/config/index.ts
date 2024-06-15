import type { SiteConfig } from "@/types";
import { siteConfig as config } from "./site";

export function defineConfig(config: SiteConfig): SiteConfig {
  const defaultConfig: SiteConfig = {
    name: 'Tzz.Dev',
    description: 'つまらない毎日を雑メモとして記録するサイト',
    keywords: [
      'tzz.dev'
    ]
  }

  return {...defaultConfig, ...config}
}

export const siteConfig: SiteConfig = defineConfig(config);
