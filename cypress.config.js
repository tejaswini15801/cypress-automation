const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

async function setupNodeEvents(on, config) {
  // Required for the preprocessor to generate JSON reports after each run
  await addCucumberPreprocessorPlugin(on, config);

  // Use esbuild plugin directly instead of createBundler
  on("file:preprocessor", createEsbuildPlugin(config));

  // Ensure the config object is returned, as it might have been modified
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    video: true,
    videoUploadOnPasses: true, // Ensures videos are saved even for passing tests
  },
  env: {
    url: "https://rahulshettyacademy.com",
  },
  retries: {
    runMode: 1, // Runs test one more time on failure
  },
  projectId: "trg78e",
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      return config;
    }
  }});


