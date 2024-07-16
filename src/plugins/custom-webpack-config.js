module.exports = (_context, _options) => ({
  configureWebpack(_config, _isServer) {
    return {
      module: {
        rules: [
          {
            test: /\.csv$/,
            loader: "csv-loader",
            options: {
              dynamicTyping: true,
              header: true,
              skipEmptyLines: true,
            },
          },
        ],
      },
      output: {
        libraryTarget: 'umd',
      },
    };
  },
});