module.exports = {
  arrowParens: 'always',
  importOrder: ['<THIRD_PARTY_MODULES>', '^[./]'],
  importOrderGroupNamespaceSpecifiers: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  printWidth: 80,
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tailwindFunctions: ['clsx', 'cva'],
  trailingComma: 'es5',
  useTabs: false,
};
