module.exports = {
  preset: 'jest-preset-angular',
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  transform: {
    '^.+\\.(ts|mjs|html|js)$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  reporters: ['default'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};