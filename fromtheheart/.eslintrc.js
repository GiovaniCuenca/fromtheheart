module.exports = {
  parser: 'babel-eslint',
  extends: 'eslint:recommended',
  env: {
      browser: false,
      node: true,
      es6: true
  },
  plugins: [
      'react',
      'react-native'
  ],
  rules: {
      'indent': ['error', 4],
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'no-unused-vars': 'warn',
      'linebreak-style': 'off',
      'no-console': 'warn',
      'no-async-promise-executor': 'off'
  },
  globals: {
      "__DEV__": true
  }
};
