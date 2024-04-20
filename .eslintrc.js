const MINIMUM_VARIABLE_LENGTH = 2;

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:security/recommended-legacy',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'next/core-web-vitals',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  overrides: [
    {
      extends: ['plugin:vitest/recommended'],
      files: ['**/*.test.tsx', '**/*.test.ts'],
      plugins: ['vitest'],
    },
    {
      files: [
        'src/app/default.tsx',
        'src/app/error.tsx',
        'src/app/global-error.tsx',
        'src/app/layout.tsx',
        'src/app/manifest.ts',
        'src/app/not-found.tsx',
        'src/app/page.tsx',
        'src/app/**/default.tsx',
        'src/app/**/error.tsx',
        'src/app/**/layout.tsx',
        'src/app/**/not-found.tsx',
        'src/app/**/page.tsx',
        'vite.config.mts',
        'tailwind.config.ts',
      ],
      rules: {
        'no-restricted-exports': 'off',
      },
    },
    {
      files: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.tsx'],
      rules: {
        'no-magic-numbers': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  plugins: [
    'jsx-a11y',
    'import',
    'no-relative-import-paths',
    'react',
    'react-hooks',
    'validate-jsx-nesting',
    '@typescript-eslint',
    'security',
    'sentence-case',
    'sort-destructure-keys',
    'sort-keys-fix',
    'typescript-sort-keys',
    'unused-imports',
  ],
  rules: {
    '@next/next/no-server-import-in-page': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        disallowTypeAnnotations: true,
        fixStyle: 'inline-type-imports',
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-non-null-assertion': ['error'],
    '@typescript-eslint/no-unused-vars': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always'],
    'id-length': [
      MINIMUM_VARIABLE_LENGTH,
      { exceptions: ['a', 'b'], properties: 'never' },
    ],
    'import/first': 'error',
    'import/no-cycle': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'no-console': 'error',
    'no-magic-numbers': [
      'error',
      { ignore: [-1, 0, 1, '0n', '1n'], ignoreArrayIndexes: true },
    ],
    'no-nested-ternary': 'error',
    'no-relative-import-paths/no-relative-import-paths': [
      'error',
      { allowSameFolder: false, rootDir: 'src' },
    ],
    'no-restricted-exports': [
      'error',
      {
        restrictDefaultExports: {
          defaultFrom: true,
          direct: true,
          named: true,
          namedFrom: true,
          namespaceFrom: true,
        },
      },
    ],
    'object-shorthand': ['error', 'always'],
    'prefer-template': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      { children: 'never', propElementValues: 'always', props: 'never' },
    ],
    'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    'react/no-array-index-key': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'security/detect-object-injection': 'off',
    'security/detect-possible-timing-attacks': 'off',
    'sort-destructure-keys/sort-destructure-keys': [
      'error',
      { caseSensitive: false },
    ],
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
    'validate-jsx-nesting/no-invalid-jsx-nesting': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json'],
      },
    },
  },
};
