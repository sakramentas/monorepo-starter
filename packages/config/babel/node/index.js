/* eslint-disable global-require */
module.exports = api => {
  api.cache(true);

  return {
    presets: ['@babel/preset-env', '@babel/preset-flow'],
  };
};
