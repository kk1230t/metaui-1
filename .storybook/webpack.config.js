module.exports = async ({ config }) => {
    config.module.rules.push({
      test: /\.pug$/,
      use: ['storypug/lib/webpack-loader.js'],
    });
    return config;
  };