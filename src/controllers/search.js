export const search = (filter, searchValue, daoList) => {
  if (filter.name === "" || filter.name === "All") {
    const newt = searchValue.charAt(0).toUpperCase() + searchValue.slice(1);
    return daoList.filter((daoListDisplayDatum) =>
      daoListDisplayDatum.name.startsWith(newt)
    );
  } else {
    const newt = searchValue.charAt(0).toUpperCase() + searchValue.slice(1);
    return filter.data.filter((daoListDisplayDatum) =>
      daoListDisplayDatum.name.startsWith(newt)
    );
  }
};
