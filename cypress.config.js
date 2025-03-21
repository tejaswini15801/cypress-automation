const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", createBundler({
    plugins: [createEsbuildPlugin(config)]
  }));

  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com",
  },
  reporter: "cypress-mochawesome-reporter",
  retries: {
    runMode: 1,
  },
  projectId: "nodpcq",

  e2e: {
    setupNodeEvents,
    specPattern: "cypress/integration/examples/*.js", // Ensure your test files match this pattern
    supportFile: "cypress/support/e2e.js", // Ensure this file exists
    downloadsFolder: "cypress/downloads"
  },

  compilerOptions: {
    types: ["cypress"],
  },
});
