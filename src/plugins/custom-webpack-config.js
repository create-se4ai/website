module.exports = (_context, _options) => ({
  configureWebpack(_config, _isServer) {
    return {
      module: {
        rules: [
          // Rule for CSV files
          {
            test: /\.csv$/,
            loader: "csv-loader",
            options: {
              dynamicTyping: true,
              header: true,
              skipEmptyLines: true,
            },
          },
        // Rule for binary files (images, fonts, etc.)
          {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|otf)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                },
              },
            ],
          },
        ],
      },
    };
  },
});
