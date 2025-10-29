const { defineConfig } = require("cypress");
const build = require('@bahmutov/cypress-esbuild-preprocessor')
const addCucumberpreprocessor = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const createEsbuild = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const builder = build({
        plugins: [createEsbuild(config)]
      })
      on('file:preprocessor', builder)
      addCucumberpreprocessor(on, config)
      return config
    },
//    specPattern: "C:/Users/Benjamin/Documents/BlazeDemo_Automate_Updated_ 3/cypress/features/*",
    supportFile: false
  },
});
