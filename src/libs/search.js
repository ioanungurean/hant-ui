const search = (term, array, by) => {
  let searchTerm = term.trim().toLowerCase();

  if (searchTerm.length > 0) {
    return array.filter((item) => {
      return item[by].toLowerCase().match(searchTerm);
    });
  }

  return array;
};

export default search;
