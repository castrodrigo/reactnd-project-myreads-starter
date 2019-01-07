export const convertResponseFilters = data =>
  Object.keys(data).reduce((f, shelf) => {
    data[shelf].map(item => {
      f[item] = shelf;
      return f[item];
    });
    return f;
  }, {});

export const generateFilters = books =>
  books.reduce((f, book) => {
    f[book.shelf] ? f[book.shelf].push(book.id) : (f[book.shelf] = [book.id]);
    return f;
  }, {});

export const popBookList = (list, book) => {
  return [...list.filter(item => item.id !== book.id)];
};

export const updateBookList = (list, book) => {
  return [...list.filter(item => item.id !== book.id), book];
};
