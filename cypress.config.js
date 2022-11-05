const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://tes.nmbrs.nl/applications',
    viewportWidth: 1000,
  	viewportHeight: 660,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
