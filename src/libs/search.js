const search = (term, array, by) => {
  let searchTerm = term.trim().toLowerCase();

  if (searchTerm.length > 0) {
    return array.filter((item) => {
      const itemBy = item[by].toString();
      return itemBy.toLowerCase().match(searchTerm);
    });
  }

  return array;
};

export default search;
