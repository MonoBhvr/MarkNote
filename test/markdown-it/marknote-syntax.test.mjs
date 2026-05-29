import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { renderMarkdownToHtml } from '../../index.mjs'
import MarkdownIt from '../../lib/index.mjs'
import marknotePlugin from '../../lib/marknote/index.mjs'

describe('MarkNote syntax', function () {
  it('renders inline and block Typst math through KaTeX', function () {
    const inline = renderMarkdownToHtml('$x^2$')
    assert.match(inline, /class="katex"/)
    assert.match(inline, /mathnormal/)

    const block = renderMarkdownToHtml('$$\nx^2\n$$')
    assert.match(block, /marknote-math-block/)
    assert.match(block, /class="katex-display"/)
  })

  it('keeps unpaired dollars as text', function () {
    assert.strictEqual(renderMarkdownToHtml('This costs $2.'), '<p>This costs $2.</p>\n')
  })

  it('renders weak and strong highlights', function () {
    assert.strictEqual(renderMarkdownToHtml('a ==weak== b'), '<p>a <mark class="marknote-highlight">weak</mark> b</p>\n')
    assert.strictEqual(renderMarkdownToHtml('a ===strong=== b'), '<p>a <mark class="marknote-highlight-strong">strong</mark> b</p>\n')
  })

  it('removes line and block comments outside fenced code', function () {
    assert.strictEqual(renderMarkdownToHtml('A\n// hidden\nB'), '<p>A\nB</p>\n')
    assert.strictEqual(renderMarkdownToHtml('A /* hidden */ B'), '<p>A  B</p>\n')
    assert.match(renderMarkdownToHtml('```js\n// visible\n```'), /\/\/ visible/)
  })

  it('supports custom escapes', function () {
    assert.strictEqual(renderMarkdownToHtml('a\\nb'), '<p>a\nb</p>\n')
    assert.strictEqual(renderMarkdownToHtml('a\\tb'), '<p>a\tb</p>\n')
    assert.strictEqual(renderMarkdownToHtml('\\// not comment'), '<p>// not comment</p>\n')
    assert.strictEqual(renderMarkdownToHtml('\\{==literal==\\}'), '<p>==literal==</p>\n')
  })

  it('renders fold blocks and generic bordered blocks', function () {
    const fold = renderMarkdownToHtml('[fold[\nFold title\n**inside**\n]]')
    assert.match(fold, /<details class="marknote-fold">/)
    assert.match(fold, /<summary>Fold title<\/summary>/)
    assert.match(fold, /<strong>inside<\/strong>/)
    assert.doesNotMatch(fold, /<p>Fold title<\/p>/)

    const generic = renderMarkdownToHtml('[note[\n==inside==\n]]')
    assert.match(generic, /<div class="marknote-block">/)
    assert.match(generic, /marknote-highlight/)

    const emptyAttr = renderMarkdownToHtml('[[\n**plain block**\n]]')
    assert.match(emptyAttr, /<div class="marknote-block">/)
    assert.match(emptyAttr, /<strong>plain block<\/strong>/)
  })

  it('renders nested blocks with generic block wrappers', function () {
    const nested = renderMarkdownToHtml('[fold[\nOuter title\n[note[\n==inner==\n]]\n]]')
    assert.match(nested, /<details class="marknote-fold">/)
    assert.match(nested, /<summary>Outer title<\/summary>/)
    assert.match(nested, /marknote-highlight/)
    assert.doesNotMatch(nested, /\[fold\[/)
    assert.doesNotMatch(nested, /\]\]/)

    const unknown = renderMarkdownToHtml('[unknown[\n**plain**\n]]')
    assert.match(unknown, /<strong>plain<\/strong>/)
    assert.match(unknown, /<div class="marknote-block">/)
  })

  it('renders embeds with safe html iframe', function () {
    assert.match(renderMarkdownToHtml('[image[./a.png | Caption]]'), /<img src="\.\/a\.png" alt="Caption">/)
    assert.match(renderMarkdownToHtml('[web[https://example.com | Web]]'), /<iframe sandbox="allow-same-origin allow-scripts" src="https:\/\/example\.com"/)
    assert.match(renderMarkdownToHtml('[html[<script>alert(1)</script>]]'), /<iframe class="marknote-embed marknote-embed-html" sandbox srcdoc="&lt;script&gt;alert\(1\)&lt;\/script&gt;">/)
    assert.match(renderMarkdownToHtml('[card[https://example.com | Example]]'), /<a class="marknote-card" href="https:\/\/example\.com">Example<\/a>/)
  })

  it('renders inline footnotes and appends footnote section', function () {
    const html = renderMarkdownToHtml('Sentence[^ note]\n\nNamed[^(memo) named note]')
    assert.match(html, /marknote-footnote-ref/)
    assert.match(html, /<section class="marknote-footnotes"><ol>/)
    assert.match(html, /note/)
    assert.match(html, /named note/)
  })

  it('renders markdown inside footnotes and keeps raw html escaped', function () {
    const html = renderMarkdownToHtml('Sentence[^ **bold** [link](https://example.com) <b>x</b>]')
    assert.match(html, /<strong>bold<\/strong>/)
    assert.match(html, /<a href="https:\/\/example\.com">link<\/a>/)
    assert.match(html, /&lt;b&gt;x&lt;\/b&gt;/)
  })

  it('applies top-of-file dictionary tooltips', function () {
    const html = renderMarkdownToHtml('@MarkNote : markup language\n\nMarkNote is here.')
    assert.doesNotMatch(html, /@MarkNote/)
    assert.match(html, /<span class="marknote-term" title="markup language">MarkNote<\/span>/)
  })

  it('applies dictionary terms longest-first without matching inside words', function () {
    const html = renderMarkdownToHtml('@Mark : short\n@MarkNote : long\n\nMarkNote and Mark, not Markup.')
    assert.match(html, /title="long">MarkNote<\/span>/)
    assert.match(html, /title="short">Mark<\/span>/)
    assert.match(html, /not Markup/)
  })

  it('adds heading and inline anchors without rendering marker text', function () {
    const heading = renderMarkdownToHtml('# Title {#}')
    assert.match(heading, /<h1 id="Title">Title<\/h1>/)
    assert.doesNotMatch(heading, /\{#\}/)

    const inline = renderMarkdownToHtml('before {#spot} after')
    assert.match(inline, /before <span id="spot"><\/span> after/)
  })

  it('uses explicit heading anchors as heading ids and consumes duplicates', function () {
    const explicit = renderMarkdownToHtml('# Title {#name}')
    assert.match(explicit, /<h1 id="name">Title<\/h1>/)
    assert.doesNotMatch(explicit, /<span id="name">/)

    const duplicate = renderMarkdownToHtml('# A {#same}\n\n# B {#same}\n\none {#same} two')
    assert.equal((duplicate.match(/id="same"/g) || []).length, 1)
    assert.doesNotMatch(duplicate, /same-2/)
    assert.doesNotMatch(duplicate, /\{#same\}/)
  })

  it('records table-of-contents metadata for anchored headings', function () {
    const md = new MarkdownIt({ html: false })
    md.use(marknotePlugin)
    const env = {}
    md.render('# One {#}\n\n## Two {#two}\n\nbody {#spot}', env)
    assert.deepEqual(env.marknoteToc, [
      { level: 1, id: 'One', title: 'One' },
      { level: 2, id: 'two', title: 'Two' }
    ])
  })

  it('escapes markdown and MarkNote syntax characters', function () {
    assert.strictEqual(renderMarkdownToHtml('\\$2 and $x$').startsWith('<p>$2 and <span class="katex">'), true)
    assert.strictEqual(renderMarkdownToHtml('\\==no highlight\\=='), '<p>==no highlight==</p>\n')
    assert.strictEqual(renderMarkdownToHtml('\\# no heading'), '<p># no heading</p>\n')
    assert.strictEqual(renderMarkdownToHtml('\\* no list'), '<p>* no list</p>\n')
    assert.strictEqual(renderMarkdownToHtml('\\{==literal==\\}'), '<p>==literal==</p>\n')
  })
})
