export default {
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  dir: "./",
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/mocks/**",
  ],
  snapshotSerializers: ["@emotion/jest/serializer"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  resetMocks: true,
};
