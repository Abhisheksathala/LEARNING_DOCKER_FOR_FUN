export default [
  {
    files: ['**/*.js'], //only chakes .js files in server directory
    rules: {
      semi: 'error', //force semicolons
      'no-unused-vars': 'warn', //warn if variables are unused
    },
  },
];
