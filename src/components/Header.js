import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Header = () => {
  const { appStateManager, dispatch } = useContext(AppContext);
  const { searchValue } = appStateManager;
  return (
    <header>
      <div className="logo">
        {" "}
        <img src={`${process.env.PUBLIC_URL}/dao-logo.be289bfc.svg`} alt="" />
      </div>
      <div className="input">
        <img src={`${process.env.PUBLIC_URL}/assets/.png`} alt="" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => dispatch({ type: "SEARCH", name: e.target.value })}
        />
      </div>
      <div className="wallet">
        <button>Connet to wallet</button>
      </div>
    </header>
  );
};

export default Header;
