module.exports = {
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    node: true,
    mocha: true,
    browser: true,
    es6: true
  },
  extends: [
    "eslint-config-safelayer/rules/possible-errors",
    "eslint-config-safelayer/rules/best-practices",
    "eslint-config-safelayer/rules/variables",
    "eslint-config-safelayer/rules/node",
    "eslint-config-safelayer/rules/es6",
    "eslint-config-safelayer/rules/strict",
    "eslint-config-safelayer/rules/style"
  ]
};
