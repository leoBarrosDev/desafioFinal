module.exports = {
  env: { es6: true, jest: true, node: true },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: { ecmaVersion: 2018, sourceType: 'module' },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    camelcase: 'off',
    'new-cap': 1,
    'no-console': 'off',
    'no-param-reassign': ['off', { props: false }],
    'no-plusplus': ['off', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': 'off',
    'no-useless-escape': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'consistent-return': 'off',
    radix: 'off',
    'import/order': 'off',
    'func-names': 'off'
  }
};
