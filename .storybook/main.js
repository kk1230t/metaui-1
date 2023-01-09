const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    // path.resolve(__dirname, 'pugCode'),
    "storybook-addon-preview/register",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    
    {
      name: 'storypug/preset',
      options: {
        babel: true, //use babel-loader
        include:'/\.pug?\$/'
      },
      globals: {
        'pug-jest': {
          basedir: '<rootDir>',
        },
      },
      transform: {
        '\\.pug$': 'storypug/lib/pug-jest.js',
      },
    },
  ],
  "framework": "@storybook/html",
  webpackFinal: (config) => {
    config.node = { fs: 'empty' }
    return config;
  },
}