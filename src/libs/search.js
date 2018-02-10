const search = (term, array) => {
  let searchTerm = term.trim().toLowerCase();

  if (term.length > 0) {
    return array.filter((item) => {
      return item.name.toLowerCase().match(term);
    });
  }

  return array;
};

export default search;
