module.exports = api => {
  api.cache(false);
  return {
    retainLines: true,
    presets: ['@mono/babel-preset/client'],
  };
};
