module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!vue-awesome|vuex-i18n)'
  ],
  transform: {
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}
