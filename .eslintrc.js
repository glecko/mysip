module.exports = {
  root: true,
  extends: ['airbnb-typescript'],
  plugins: [
    'react',
    'react-native'
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    "react/destructuring-assignment": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "import/prefer-default-export": "off",
    "max-len": ["error", { "code": 140 }],
    "comma-dangle": "off",
  },
};
