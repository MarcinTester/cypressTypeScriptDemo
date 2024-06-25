import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: "Test raport",
    embeddedScreenshots: true,
    inlineAssets: true,
    videoOnFailOnly: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    video: true,
    baseUrl: "https://automationexercise.com/",
  },
});
