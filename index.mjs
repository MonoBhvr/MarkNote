import hljs from 'highlight.js'

import MarkdownIt from './lib/index.mjs'
import { escapeHtml } from './lib/common/utils.mjs'
import marknotePlugin from './lib/marknote/index.mjs'

const markdownIt = new MarkdownIt({
  html: false,
  linkify: false,
  typographer: false,
  highlight (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
    }

    return escapeHtml(str)
  }
})

markdownIt.use(marknotePlugin)

export function renderMarkdownToHtml (markdown) {
  if (typeof markdown !== 'string') {
    throw new TypeError('Input data should be a String')
  }

  return markdownIt.render(markdown)
}

export default { renderMarkdownToHtml }
