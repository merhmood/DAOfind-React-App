import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Header = () => {
  const { appStateManager, dispatch } = useContext(AppContext);
  const { searchValue } = appStateManager;
  function onChange (e){
    dispatch({ type: "SEARCH", name: e.target.value })
  }
  return (
    <header>
      <div className="logo">
        {" "}
        <img src={`${process.env.PUBLIC_URL}/dao-logo.be289bfc.svg`} alt="" />
      </div>
      <div className="input">
        <input
          type="text"
          value={searchValue}
          onChange={onChange}
          placeholder="Search Dao"
        />
      </div>
      <div className="wallet">
        <button>Connet to wallet</button>
      </div>
    </header>
  );
};

export default Header;
