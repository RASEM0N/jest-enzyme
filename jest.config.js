/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    roots: ['<rootDir>/__tests__'],
    testRegex: '(/.*\\.test)\\.(ts|js)$',
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    preset: 'ts-jest',
    testEnvironment: 'node',
}
