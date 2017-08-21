module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'standard',
  plugins: [
    'html', 'babel'
  ],
  'globals': {
    'Vue': false,
  },
  'rules': {
    'arrow-parens': 0,
    "semi": [2, "never"],
    "max-len": [2, 200, 2],
    "generator-star-spacing": 0,
    "space-before-function-paren": 0,
    "padded-blocks": 0,
    "no-var": 2,
    "no-unused-vars": ["error", {
      "caughtErrors": "none",
      "argsIgnorePattern": "^_",
      "ignoreRestSiblings": true
    }, ],
    "allowEmptyReject": 0
  }
}
