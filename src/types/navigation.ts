import { NavItem, NavItemNavigationConfig } from '@docus/core'

export type DocusNavigation = {
  [language: string]: NavItem[]
}

export type DocusCurrentNav = {
  title?: string
  to?: string
  navigation?: NavItemNavigationConfig | false
  parent?: NavItem
  links: NavItem[]
}

export interface DocusNavigationGetParameters {
  depth?: number
  locale?: string
  from?: string
  all?: boolean
}
