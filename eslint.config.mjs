import neostandard from 'neostandard'

export default [
  ...neostandard({
    env: ['browser', 'node'],
    ignores: [
      'dist/**',
      'lib/marknote/typst-math.mjs'
    ]
  }),

  {
    rules: {
      camelcase: 'off'
    }
  }
]
