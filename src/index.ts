import { Extension } from 'src/types/extension'
import { Language } from 'src/types/language'
import { formattingRules } from './formatting-rules/formatting-rules'
import handleFile from './handle-file/handle-file'
import { translateData } from './translate-data/translate-data'

async function translateFile(
  inputFile: string,
  sourceLang: Language | 'auto',
  targetLang: Language,
  outputFile?: string,
  encoding?: BufferEncoding
): Promise<boolean> {
  const inputFileInfo = handleFile.getFileInfo(inputFile)
  inputFile = handleFile.createFilePath(inputFileInfo)

  // Read data from input file
  const fileData = handleFile.readFile(inputFile, encoding)
  if (typeof fileData !== 'string') {
    console.log('ERROR: Error while reading input file data.')
    return false
  }

  // Translate data
  const translatedData = await translateData(fileData, sourceLang, targetLang)
  if (typeof translatedData !== 'string') {
    console.log('ERROR: Error while translating input file data.')
    return false
  }

  // Format data
  let formattedData: string | undefined = translatedData
  formattedData = formattingRules['default'](formattedData)

  if (formattingRules[inputFileInfo.ext as Extension]) {
    formattedData =
      formattingRules[inputFileInfo.ext as Extension]?.['default'](
        formattedData
      )

    if (formattingRules[inputFileInfo.ext as Extension]?.[targetLang]) {
      formattedData = formattingRules[inputFileInfo.ext as Extension]?.[
        targetLang
      ]?.(formattedData as string)
    }
  }

  if (typeof formattedData !== 'string') {
    console.log('ERROR: Error while formatting translated data.')
    return false
  }

  // Save data on output file
  if (outputFile) {
    outputFile = handleFile.getAbsolutePath(outputFile)
  } else {
    outputFile = handleFile.createFilePath({
      root: inputFileInfo.root,
      dir: inputFileInfo.dir,
      name: inputFileInfo.name + `_${targetLang}`,
      ext: inputFileInfo.ext
    })
  }

  if (!handleFile.writeFile(outputFile, formattedData, encoding)) {
    console.log('ERROR: Error while saving output file.')
    return false
  }

  return true
}

;(async () => {
  await translateFile('../../arquivo.xml', 'pt', 'en')
})()

export { translateFile }
