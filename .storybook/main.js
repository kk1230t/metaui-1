module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: 'storypug',
      options: {
        babel: true, //use babel-loader
        include:'/\.pug?\$/'
      },
    },
  ],
  "framework": "@storybook/html"
}