const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Set @ to point to the src directory
    },
  },
};
