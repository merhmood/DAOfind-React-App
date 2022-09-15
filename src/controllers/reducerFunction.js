export const reducerFunction = (state, action) => {
  if (action.type === "SHOW-TOGGLER") {
    if (action.id === state.showDao.showId) {
      if (state.showDao.click === 0) {
        return {
          ...state,
          showDao: {
            bool: true,
            click: 1,
            showId: action.id,
          },
        };
      } else {
        return {
          ...state,
          showDao: {
            bool: false,
            click: 0,
            showId: action.id,
          },
        };
      }
    }
    return {
      ...state,
      showDao: {
        ...state.showDao.click,
        bool: true,
        showId: action.id,
      },
    };
  }
  /***
   ****/
  if (action.type === "LOAD-MORE") {
    return { 
      ...state, 
      daoList: [
        ...state.daoList, 
        ...loadMore(state, action.dataSort)
      ] 
    };
  }
  if (action.type === "NAV-CLICK") {
    return { ...state, navClick: action.name };
  }
  if (action.type === "FILTER") {
    const filterData = state.daoList.filter(
      (datum) => datum.category === action.name
    );
    return {
      ...state,
      filter: {
        data: filterData,
        name: action.name,
      },
    };
  }
  if (action.type === "SEARCH") {
    return { ...state, searchValue: action.name };
  }
};

const loadMore = (state, data) => {
  const newArray = [];
  for (
    let index = state.daoList.length;
    index <= state.daoList.length + 9;
    index++
  ) {
    if (data[index]) {
      newArray.push(data[index]);
    }
  }
  return newArray;
};
