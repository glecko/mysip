module.exports = {
  root: true,
  extends: ['airbnb-typescript'],
  plugins: [
    'react',
    'react-native'
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react/destructuring-assignment': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    'import/prefer-default-export': 'off',
    'max-len': ['error', { code: 140 }],
    '@typescript-eslint/comma-dangle': 'off',
    'import/no-named-as-default': 0,
    'react/jsx-props-no-spreading': 'off'
  },
};
