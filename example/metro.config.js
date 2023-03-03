/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');
const rncpPath = path.resolve(__dirname + '/../.');
const rncp = {'react-native-carplay': rncpPath};
const watchFolder = [rncpPath]

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {rncp},
  watchFolder,
};
