import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import vm from 'node:vm'
import { describe, it } from 'node:test'

describe('browser global bundle', function () {
  it('exposes the markdown renderer for classic script tags', async function () {
    const source = await readFile(new URL('../../dist/strict-markdown-html-converter.js', import.meta.url), 'utf8')
    const sandbox = {}

    vm.runInNewContext(source, sandbox)

    assert.equal(typeof sandbox.StrictMarkdownHtmlConverter.renderMarkdownToHtml, 'function')

    const html = sandbox.StrictMarkdownHtmlConverter.renderMarkdownToHtml('# Title\n\n| A |\n| - |\n| 1 |\n\n~~deleted~~\n\n```js\nconst answer = 42\n```')

    assert.match(html, /<h1>Title<\/h1>/)
    assert.match(html, /<table>/)
    assert.match(html, /<s>deleted<\/s>/)
    assert.match(html, /hljs-keyword/)
  })
})
