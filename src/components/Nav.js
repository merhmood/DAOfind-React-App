import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";

export class Nav extends Component {
  static contextType = AppContext;

  render() {
    const { appStateManager, dispatch } = this.context;
    const { navClick } = appStateManager;
    const li = "li";

    return (
      <nav>
        <ul>
          <Link to="/" className="link">
            <li
              onClick={() => dispatch({ type: "NAV-CLICK", name: "home" })}
              style={
                navClick === "home"
                  ? { textDecoration: "underline" }
                  : { textDecoration: "none" }
              }
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/home (2).png`}
                alt=""
              />{" "}
              Leaderboard
            </li>
          </Link>
          <Link to="/add" className="link">
            <li
              onClick={() => dispatch({ type: "NAV-CLICK", name: "add" })}
              style={
                navClick === "add"
                  ? { textDecoration: "underline" }
                  : { textDecoration: "none" }
              }
            >
              <img src={`${process.env.PUBLIC_URL}/assets/plus.png`} alt="" />{" "}
              Add
            </li>
          </Link>
          <Link to="/learn" className="link">
            <li
              onClick={() => dispatch({ type: "NAV-CLICK", name: "learn" })}
              style={
                navClick === "learn"
                  ? { textDecoration: "underline" }
                  : { textDecoration: "none" }
              }
            >
              <img src={`${process.env.PUBLIC_URL}/assets/book.png`} alt="" />{" "}
              Learn
            </li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
