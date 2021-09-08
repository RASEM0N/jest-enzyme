/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    verbose: true,
    clearMocks: true,
    coverageDirectory: 'coverage',
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(js|jsx|ts|jsx)$',
    preset: 'ts-jest',
    setupFiles: ['<rootDir>/jest.setup.js'],
}
