module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/main/**'],
  coverageDirectory: 'coverage',
  preset: '@shelf/jest-mongodb',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$$': 'ts-jest'
  }
}
