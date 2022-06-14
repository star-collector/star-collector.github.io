const { alias, configPaths } = require('react-app-rewire-alias');
const { removeModuleScopePlugin, override } = require('customize-cra');
const { pathsToModuleNameMapper } = require('ts-jest');
const paths = require('./tsconfig.paths.json');

module.exports = {
  webpack: override((config) => {
    removeModuleScopePlugin()(config);
    return alias(configPaths(paths))(config);
  }),
  jest: override((config) => {
    config.moduleNameMapper = {
      ...config.moduleNameMapper,
      ...pathsToModuleNameMapper(paths.compilerOptions.paths),
    };
    return config;
  }),
};
