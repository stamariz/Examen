const { defineConfig } = require("cypress");
const addCucumberPreprocessorPlugin = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  projectId: 'fvyno4',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', addCucumberPreprocessorPlugin())
    },
    specPattern: "cypress/e2e/**/*.feature",
    chromeWebSecurity: false,
  },
});

