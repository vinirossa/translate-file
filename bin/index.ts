#!/usr/bin/env node
import { Command } from 'commander'
import { translateFile } from '../src/index'
import { version } from '../package.json'
import languages from '../data/languages.json'
import { formattingRules } from '../src/formatting-rules/formatting-rules'
//
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
    console.log('Supported languages for translation (Google Translate):\n')
    console.log(
      languages
        .map(language => {
          return language.code + '\t\t' + language.name
        })
        .join('\n') + '\n'
    )
    return
  }

  // Output extensions that have formatting rules
  if (options.extensions) {
    const formattingRulesObj = Object.entries(formattingRules)

    console.log('Extensions that have formatting rules and its languages:\n')
    console.log(
      formattingRulesObj
        .map(extension => {
          if (extension[0] !== 'default') {
            const formattingRuleObj = Object.entries(extension[1])
            return (
              extension[0] +
              ':\n' +
              formattingRuleObj.map(language => {
                if (language[0] !== 'default') {
                  return '   ' + language[0] + '\n'
                }
              }) +
              '\n'
            )
          }
        })
        .join('')
        .replace(/,/g, '')
    )
    return
  }

  // Check for required options (Commander's broke the -l and -e commands)
  if (options.input === undefined) {
    process.stderr.write(
      "error: required option '-i, --input [file]' not specified\n"
    )
    process.exit(1)
  }

  if (options.target === undefined) {
    process.stderr.write(
      "error: required option '-t, --target [language]' not specified\n"
    )
    process.exit(1)
  }

  await translateFile(
    options.input,
    options.source,
    options.target,
    options.output,
    options.encoding
  )
})()
