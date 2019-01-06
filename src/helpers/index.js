export const convertResponseFilters = data =>
  Object.keys(data).reduce((f, shelf) => {
    data[shelf].map(item => {
      f[item] = shelf;
      return f[item];
    });
    return f;
  }, {});
