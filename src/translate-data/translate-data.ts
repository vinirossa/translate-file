import axios from 'axios'
import { URL } from 'url'

function createTranslatorURL(
  sourceText: string,
  sourceLang: string,
  targetLang: string
): string {
  const translatorURL = new URL('https://example.com')

  translatorURL.protocol = 'https:'
  translatorURL.hostname = 'translate.googleapis.com'
  translatorURL.pathname = '/translate_a/single'
  translatorURL.searchParams.append('client', 'gtx')
  translatorURL.searchParams.append('ie', 'UTF-8')
  translatorURL.searchParams.append('oe', 'UTF-8')
  translatorURL.searchParams.append('sl', sourceLang)
  translatorURL.searchParams.append('tl', targetLang)
  translatorURL.searchParams.append('dt', 't')
  // translatorURL.searchParams.append('dj', '1') // For more detailed JSON response
  translatorURL.searchParams.append('q', sourceText)

  return translatorURL.href
}

async function translateData(
  sourceText: string,
  sourceLang: string,
  targetLang: string
): Promise<string | boolean> {
  // confirmar que os inputs são válidos

  const translatorURL = createTranslatorURL(sourceText, sourceLang, targetLang)
  let translatedText = ''
  let error = ''

  await axios
    .get(translatorURL)
    .then(res => {
      const sentences = res.data[0]

      sentences.forEach((sentence: string) => {
        translatedText += sentence[0]
      })
    })
    .catch(err => {
      error = err
      console.log(err.stack)
    })

  if (error) return false

  return translatedText
}

export { translateData }
