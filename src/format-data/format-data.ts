module.exports = function formatData(
  data: string,
  extension: string,
  language: string
): string {
  switch (extension) {
    case '.md':
      switch (language) {
        case 'en':
          data = data.split('] (').join('](')
          break
        case 'pt':
          data = data.split('] (').join('](')
          data = data.split(' relevant').join('')
          data = data.split('[versão padrão]').join('[standard-version]')
          break
        case 'es':
          data = data.split('] (').join('](')
          data = data.split(' relevant').join('')
          break
        default:
          data = data.split('] (').join('](')
      }
      break
    default:
  }

  return data
}
