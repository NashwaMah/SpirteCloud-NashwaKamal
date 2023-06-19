const { defineConfig } = require("cypress");

module.exports = defineConfig({
   projectId: "sfuueb",
  e2e: {

    baseUrl:'http://www.uitestingplayground.com/',

    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
