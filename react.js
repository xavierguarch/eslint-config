module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    }
  },
  env: {
    node: true,
    mocha: true,
    browser: true,
    es6: true
  },
  settings: {
    ecmascript: 6,
    jsx: true,
    react: {
      pragma: "React",
      version: "15.0"
    }
  },
  plugins: ["react"],
  extends: [
    "eslint-config-safelayer/rules/possible-errors",
    "eslint-config-safelayer/rules/best-practices",
    "eslint-config-safelayer/rules/variables",
    "eslint-config-safelayer/rules/node",
    "eslint-config-safelayer/rules/es6",
    "eslint-config-safelayer/rules/strict",
    "eslint-config-safelayer/rules/style",
    "eslint-config-safelayer/rules/react"
  ]
};
