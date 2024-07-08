const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      snapshotOnly: true,
      requestMode: true,
    },
    video: true,
    baseUrl: "https://www.google.com.ar",
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
