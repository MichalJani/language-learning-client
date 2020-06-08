module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'consistent-return': 'off',

    /* Turn offs  */
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',

    'react/require-extension': 'off',
    'react/jsx-space-before-closing': 'off',
    'react/destructuring-assignment': 'off',
    'react/sort-comp': 'off',
    'react/no-access-state-in-setstate': 'off',

    'no-restricted-globals': 'off',
    'no-prototype-builtins': 'off',
    'no-underscore-dangle': 'off',
    'no-empty-function': 'off',
    'space-before-function-paren': 'off',
    'class-methods-use-this': 'off',
    'default-case': 'off',

    /* React */
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/no-unused-prop-types': ['error', { skipShapeProps: true }],

    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
      },
    ],

    /* Imports */
    'import/named': 'off',

    'import/export': ['error'],
    'import/default': ['error'],
    'import/namespace': [
      'error',
      {
        allowComputed: true,
      },
    ],
    'import/extensions': [
      'error',
      {
        json: 'always',
        less: 'always',
        tsx: 'never',
        ts: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'import/newline-after-import': ['error'],

    'require-path-exists/exists': 'off',

    /* Debug related */
    'no-debugger': ['error'],
    'no-alert': ['error'],

    /* Lines & spacing */
    'newline-after-var': ['error', 'always'],
    'newline-before-return': ['error'],

    /**
     * Indentation:
     * turn off default one, use one which is handling both JS and TS
     */
    '@typescript-eslint/indent': 'off',

    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',

    /* This sounds reasonable but it doesn't take into account that TS infer some types */
    '@typescript-eslint/explicit-function-return-type': 'off',

    /**
     * Those should be turned on in separate commit,
     * they should be introduced but not in scope of stack upgrade
     */
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-triple-slash-reference': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',


    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
  },
};
