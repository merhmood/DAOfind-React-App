import React, { useReducer } from "react";
import { reducerFunction } from "../controllers/reducerFunction";
import { dataSort } from "../controllers/dataSort";
import { dataSortStrip } from "../controllers/dataSortStrip";

export const AppContext = React.createContext();

const AppContextProvider = (props) => {
  const daoListInitialData = dataSortStrip(dataSort);

  console.log(daoListInitialData);
  const [appStateManager, dispatch] = useReducer(reducerFunction, {
    showDao: {
      bool: false,
      click: 0,
      showId: "",
    },
    daoList: daoListInitialData,
    navClick: "home",
    filtered: {
      data: [],
      name: "All",
    },
    searchValue: "",
  });
  return (
    <AppContext.Provider value={{ appStateManager, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
