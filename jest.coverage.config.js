module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.+\\.(test|spec))\\.tsx?$",
  collectCoverage: true,
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "collectCoverageFrom": [
    "**/*.{ts, tsx}",
    "!**/node_modules/**",
    "!**/__tests__/**"
  ]
}