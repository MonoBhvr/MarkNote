import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import converter, { renderMarkdownToHtml } from '../../index.mjs'

describe('converter public API', function () {
  it('exports only the markdown renderer', function () {
    assert.deepEqual(Object.keys(converter), ['renderMarkdownToHtml'])
    assert.strictEqual(converter.renderMarkdownToHtml, renderMarkdownToHtml)
  })

  it('renders headings', function () {
    assert.strictEqual(renderMarkdownToHtml('# Title'), '<h1>Title</h1>\n')
  })

  it('preserves GFM tables', function () {
    assert.strictEqual(
      renderMarkdownToHtml('| A | B |\n| - | - |\n| 1 | 2 |'),
      '<table>\n<thead>\n<tr>\n<th>A</th>\n<th>B</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>2</td>\n</tr>\n</tbody>\n</table>\n'
    )
  })

  it('preserves GFM strikethrough', function () {
    assert.strictEqual(renderMarkdownToHtml('~~deleted~~'), '<p><s>deleted</s></p>\n')
  })

  it('highlights fenced JavaScript code', function () {
    const html = renderMarkdownToHtml('```js\nconst answer = 42\n```')

    assert.match(html, /^<pre><code class="language-js">/)
    assert.match(html, /hljs-keyword/)
    assert.match(html, /const/)
    assert.match(html, /answer/)
  })

  it('escapes raw HTML', function () {
    assert.strictEqual(renderMarkdownToHtml('<script>alert(1)</script>'), '<p>&lt;script&gt;alert(1)&lt;/script&gt;</p>\n')
  })

  it('does not linkify bare URLs', function () {
    assert.strictEqual(renderMarkdownToHtml('https://example.com'), '<p>https://example.com</p>\n')
  })

  it('does not typograph quotes or dashes', function () {
    assert.strictEqual(renderMarkdownToHtml('"quote" -- dash'), '<p>&quot;quote&quot; -- dash</p>\n')
  })

  it('rejects non-string input', function () {
    assert.throws(function () {
      renderMarkdownToHtml(null)
    }, TypeError)
  })
})
