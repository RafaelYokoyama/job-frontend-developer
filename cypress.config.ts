const { defineConfig } = require('cypress');

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
  e2e: {

    baseUrl: 'http://localhost:3000/',
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    env: {
      viewportWidthBreakpoint: 768,
    },
  },
});
