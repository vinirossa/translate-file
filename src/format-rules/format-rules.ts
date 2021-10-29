const formatRules = {
  '.md': {
    en: (data: string): string => data,
    es: (data: string): string => data.replace(' relevant', ''),
    pt: (data: string): string =>
      data
        .replace(' relevant', '')
        .replace('[versão padrão]', '[standard-version]'),
    default: (data: string): string => data.replace('] (', '](')
  },
  default: (data: string): string => data
}

export { formatRules }
