const path = require("path");
const SvgIconsPath = path.resolve(__dirname, '../src/assests/icons');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/preset-create-react-app",
    // { TODO: use DocsPage
    //   name: '@storybook/addon-docs',
    //   options: {
    //     configureJSX: true,
    //   },
    // },
    // "@storybook/addon-postcss",
  ],
  babel: async (options) => {
    return {
      ...options,
    };
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Add SVGR Loader
    // ========================================================
    // Remove svg rules from existing webpack rule
    const fileLoaderRule  = config.module.rules.find(({ test }) => test.test(".svg"));
    fileLoaderRule.exclude = SvgIconsPath;

    const assetLoader = {
      loader: fileLoaderRule.loader,
      options: fileLoaderRule.options || fileLoaderRule.query
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          icon: true,
        },
      }],
    });

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    //config.stats = 'verbose';
    //config.resolve.extensions.push('.scss');

    // Return the altered config
    return config;
  },
}