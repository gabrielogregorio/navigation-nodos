module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'airbnb',
    'prettier',
  ],

  env: {
    browser: true,
    es6: true,
    node: true,
  },

  globals: {
    cy: true,
  },

  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  root: true,
  rules: {
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    'id-length': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'react/require-default-props': [2, { functions: 'defaultArguments' }],
    indent: ['error', 2],
    'no-shadow': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [0],
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
