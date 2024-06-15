export interface SiteConfig {
  name?: string,
  description?: string,
  keywords?: string[],
  sns?: Sns,
}

export interface Sns {
  twitter?: string,
  github?: string,
}