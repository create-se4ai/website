module.exports = (_context, _options) => ({
  configureWebpack(_config, _isServer) {
    return {
      module: {
        rules: [
          {
            test: /\.js|\.jsx$/,
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