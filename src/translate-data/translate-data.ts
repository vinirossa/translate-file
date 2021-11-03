import { Language } from 'src/types/language'
import axios from 'axios'
import { URL } from 'url'

function createTranslatorURL(
  text: string,
  sourceLang: Language | 'auto',
  targetLang: Language
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
  translatorURL.searchParams.append('q', text)

  return translatorURL.href
}

async function translateData(
  text: string,
  sourceLang: Language | 'auto',
  targetLang: Language
): Promise<string | boolean> {
  const translatorURL = createTranslatorURL(text, sourceLang, targetLang)
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
