/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // This will setup the prerequisites for the tests to run
  // globalSetup: './test/tests-setup.ts',
  testTimeout: 360000,
}
