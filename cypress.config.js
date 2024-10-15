const { defineConfig } = require('cypress');
const { testGenAICypressTasksSetup } = require("@applitools/testgenai-cypress/tasks");

module.exports = defineConfig({
  env: {
    applitoolsTestGenAI: {
      autohealDataFolders: ['cypress/testgenai/autoheal'],
      waitForNetworkCalls: {
        isEnabled: false
      },
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      testGenAICypressTasksSetup(on)
    },
  },
});
