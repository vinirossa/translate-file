const extensions = ['.txt', '.md'] as const

export type Extension = typeof extensions[number]

export function isExtension(key: string): key is Extension {
  return extensions.includes(key as Extension)
}
