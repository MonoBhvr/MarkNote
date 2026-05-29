import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import converter, { renderMarkdownToHtml } from '../../dist/strict-markdown-html-converter.mjs'

describe('browser bundle public API', function () {
  it('exports only the markdown renderer', function () {
    assert.deepEqual(Object.keys(converter), ['renderMarkdownToHtml'])
    assert.strictEqual(converter.renderMarkdownToHtml, renderMarkdownToHtml)
  })

  it('renders strict markdown with retained extensions', function () {
    const html = renderMarkdownToHtml('# Title\n\n| A |\n| - |\n| 1 |\n\n~~deleted~~\n\n```js\nconst answer = 42\n```')

    assert.match(html, /<h1>Title<\/h1>/)
    assert.match(html, /<table>/)
    assert.match(html, /<s>deleted<\/s>/)
    assert.match(html, /class="language-js"/)
    assert.match(html, /hljs-keyword/)
  })

  it('keeps unsafe and non-strict sugar disabled', function () {
    assert.strictEqual(renderMarkdownToHtml('<script>alert(1)</script>'), '<p>&lt;script&gt;alert(1)&lt;/script&gt;</p>\n')
    assert.strictEqual(renderMarkdownToHtml('https://example.com'), '<p>https://example.com</p>\n')
    assert.strictEqual(renderMarkdownToHtml('"quote" -- dash'), '<p>&quot;quote&quot; -- dash</p>\n')
  })

  it('rejects non-string input', function () {
    assert.throws(function () {
      renderMarkdownToHtml(undefined)
    }, TypeError)
  })
})
