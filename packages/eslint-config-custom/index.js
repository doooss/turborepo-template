module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['simple-import-sort', '@typescript-eslint', 'react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'no-unused-expressions': 'warn',
    'react/self-closing-comp': 'warn',
    'import/first': 'warn',
    'import/no-duplicates': 'warn',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
};
