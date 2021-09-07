/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    roots: [
        // '<rootDir>/src/store/__tests__'
        '<rootDir>/src/components/__tests__',
    ],
    testRegex: '(/.*\\.test)\\.(ts|js|tsx|jsx)$',
    clearMocks: true,
    coverageDirectory: 'coverage',
    preset: 'ts-jest',
    setupFiles: ['./setupTests.ts'],
}
