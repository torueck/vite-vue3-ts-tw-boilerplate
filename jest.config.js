module.exports = {
  // process .ts files with ts-jest
  // https://kulshekhar.github.io/ts-jest/docs/getting-started/presets
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    // '^vue$': 'vue/dist/vue.common.js',
    // '^@icons/(.*)$': '<rootDir>/src/assets/$1',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    // '^.+\\.ts$': 'babel-jest',
    // '^.+\\.ts$': 'ts-jest',
    // '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue3-jest',
    // '^.+\\.(css|scss)$': 'jest-transform-css',
    // '^.+\\.(svg)$': '<rootDir>/jest-svg-transform.js',
  },
  collectCoverageFrom: [
    // we explicitly exclude *.vue files here because they get a high coverage just by importing them
    // see for example https://gitlab.com/gitlab-org/gitlab/-/issues/20581
    '<rootDir>/apps/**/*.ts',
    '<rootDir>/shared/**/*.ts',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/.nuxt/',
    '\\.interface\\.ts$',
  ],
  coverageReporters: ['text-summary', 'lcov', 'cobertura'],
};
