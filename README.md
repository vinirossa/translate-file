<h1 align="center" style="font-weight:bold">Translate File</h1>

<span align="center">

<!-- [![GitHub version](https://img.shields.io/github/package-json/v/vinirossa/translate-file/main?label=version)](https://github.com/vinirossa/translate-file)
[![GitHub downloads](https://img.shields.io/github/downloads/vinirossa/translate-file/total?color=41BC14)](https://github.com/vinirossa/translate-file)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/vinirossa/translate-file/blob/main/LICENSE)
[![GitHub Actions](https://github.com/vinirossa/translate-file/actions/workflows/ci.yml/badge.svg?name=push)](https://github.com/vinirossa/translate-file/actions/workflows/ci.yml) -->

[![npm version](https://img.shields.io/npm/v/translate-file.svg?logo=npm&logoColor=fff&label=npm&color=b22323)](https://www.npmjs.com/package/translate-file)
[![npm downloads](https://img.shields.io/npm/dt/translate-file?color=success)](https://www.npmjs.com/package/translate-file)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/vinirossa/translate-file/blob/main/LICENSE) 
[![GitHub Actions](https://github.com/vinirossa/translate-file/actions/workflows/ci.yml/badge.svg?name=push)](https://github.com/vinirossa/translate-file/actions/workflows/ci.yml)

</span>

<span align="center">

A command line wizard to translate files using Google Translate API.

</span>

<h2>Table of Contents</h2>

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [License](#license)

## Installation

```
npm install -D translate-file
```

## Usage

How to use.

## Examples

Translate CHANGELOG.md to Spanish as CHANGELOG.es.md.

```
translate-file -i CHANGELOG.md -t es
```

Translate README.md to Italian as README_it.md and overwrite file if existent.

```
translate-file -i ../README.md -t it -o README_it.md -ow
```

Translate RELEASE_NOTES.md to Portuguese as RELEASE_NOTES.pt.md to C:\Dev\my-package.

```
translate-file -i RELEASENOTES.md -t pt -d C:\Dev\my-package -a
```

Translate CONTRIBUTING.txt from Spanish to Dutch as CONTRIBUTING_nl.txt.

```
translate-file -i CONTRIBUTING.txt -s es -t nl -o CONTRIBUTING_nl.txt
```

Translate LICENSE to German as LICENSE.de overwriting existent file and auto detecting language.

```
translate-file -i LICENSE -t de -ow -a
```

Translate 'French Class Notes.md' to French.

```
translate-file -i "../../French Class Notes.txt" -t fr -ow
```

## Contributing

Contributions of any kind are welcome! Please read our [Contributing Guide](https://github.com/vinirossa/translate-file/blob/main/CONTRIBUTING.md) before submitting a pull request to the project.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/vinirossa"><img src="https://avatars.githubusercontent.com/u/72560319?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vinícius Pereira</b></sub></a><br /><a href="#maintenance-vinirossa" title="Maintenance">🚧</a> <a href="https://github.com/vinirossa/translate-file/commits?author=vinirossa" title="Code">💻</a> <a href="#infra-vinirossa" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/vinirossa/translate-file/commits?author=vinirossa" title="Documentation">📖</a> <a href="https://github.com/vinirossa/translate-file/pulls?q=is%3Apr+reviewed-by%3Avinirossa" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

See the [LICENSE](https://github.com/vinirossa/translate-file/blob/main/LICENSE) file for licensing information.

MIT © [Vinícius Pereira](https://github.com/vinirossa)

***Do you like this repo? Give us a star***⭐💛
