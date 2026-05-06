export type LogoVariant =
  // Full-color, gradient-aware mark for hero & lockup use.
  | 'default'
  // Single-color black for stamps, invoices, faxable docs.
  | 'mono'
  // Single-color cream for use on dark navy / poster backdrops.
  | 'inverse'

export interface LogoMarkProps {
  size: number
  variant?: LogoVariant
  style?: React.CSSProperties
}

export interface LogoDefinition {
  id: string
  number: number
  name: string
  description: string
  Component: React.ComponentType<LogoMarkProps>
}
