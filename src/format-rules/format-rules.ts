const formatRules = {
  '.txt': {},
  '.md': {
    en: (data: string): string => data,
    pt: (data: string): string =>
      data
        .replace(' relevant', '')
        .replace('[versão padrão]', '[standard-version]'),
    es: (data: string): string => data.replace(' relevant', ''),
    default: (data: string): string => data.replace('] (', '](')
  },
  default: {}
}

export { formatRules }
