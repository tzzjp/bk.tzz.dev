export interface SiteConfig {
  name?: string,
  description?: string,
  keywords?: string[],
  github?: string,
  sns?: Sns,
}

export interface Sns {
  twitter?: string,
  github?: string,
}

interface Link {
  title: string,
  href: string,
  target?: string,
}
export interface NavMenu {
  links?: Link[]
}