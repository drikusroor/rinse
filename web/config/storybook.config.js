const { merge } = require('webpack-merge')

module.exports = {
  /**
   * This line adds all of Storybook's essential addons.
   *
   * @see {@link https://storybook.js.org/addons/tag/essentials}
   */
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async (config) =>
    merge(config, {
      module: {
        rules: [
          {
            resourceQuery: /asset/,
            type: 'asset',
          },
          {
            test: /\.wav$/,
            type: 'asset',
            use: ['file-loader'],
          },
        ],
      },
    }),
}
