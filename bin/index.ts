#!/usr/bin/env node
import { Command } from 'commander'
import { translateFile } from '../src/index'
import { version } from '../package.json'
import languages from '../data/languages.json'

//Cli Runner
;(async () => {
  const program = new Command()

  program
    .version(version)
    .name('translate-file')
    .usage('[options]')
    .option('-i, --input [file]', 'file to be translated')
    .option('-s, --source [language]', 'source language', 'auto')
    .option('-t, --target [language]', 'target language')
    .option('-o, --output [file]', 'custom output file')
    .option('-l, --languages', 'list all supported languages')
    .option('-e, --extensions', 'list all handled extensions')

    .on('--help', () => {
      console.log('\nExamples:')
      console.log(`  $ translate-file -i CHANGELOG.md -t es`)
      console.log(`  $ translate-file -i ../README.md -t it -o README_it.md`)
      console.log(
        `  $ translate-file -i RELEASE_NOTES.md -t pt -o C:\\Dev\\my-package`
      )
      console.log(
        `  $ translate-file -i CONTRIBUTING.txt -s es -t nl -o CONTRIBUTING_nl.txt`
      )
      console.log(`  $ translate-file -i LICENSE -t de`)
      console.log(`  $ translate-file -i "../../French Class Notes.txt" -t fr`)
    })
    .parse(process.argv)

  const options = program.opts()

  // Output Google Translate supported languages
  if (options.languages) {
    console.log('Supported languages for translation:\n')
    console.log(
      languages
        .map(language => {
          return language.code + '\t\t' + language.name
        })
        .join('\n')
    )
    return
  }

  // Output the handled extensions
  // if (options.extensions) {
  //   console.log('Handled extensions and its recommended languages:\n')
  //   console.log(
  //     exts
  //       .map(extension => {
  //         return (
  //           extension.extension +
  //           '\t\t' +
  //           extension.name +
  //           '\t\t' +
  //           extension.languages.join(', ')
  //         )
  //       })
  //       .join('\n')
  //   )
  //   return
  // }

  if (options.input === undefined) {
    console.log(`error: required option '-i, --input [file]' not specified`)
    return
  }

  if (options.target === undefined) {
    console.log(
      `error: required option '-t, --target [language]' not specified`
    )
    return
  }

  await translateFile(
    options.input,
    options.source,
    options.target,
    options.output,
    options.encoding
  )
})()
