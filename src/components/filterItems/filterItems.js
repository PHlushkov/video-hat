export function filterItems(query, list, setFilteredItems) {
  if (query.length === 0) {
    setFilteredItems(null);
  } else {
    const filtered = list.find(function (el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
    setFilteredItems(filtered !== undefined ? filtered : null);
  }
}
