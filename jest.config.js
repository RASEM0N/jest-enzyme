/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    roots: ['<rootDir>/src/store/__tests__'],
    testRegex: '(/.*\\.test)\\.(ts|js)$',
    clearMocks: true,
    coverageDirectory: 'coverage',
    preset: 'ts-jest',
    testEnvironment: 'node',
}
