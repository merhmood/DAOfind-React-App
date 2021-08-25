import React from "react";
import AppContextProvider from "./components/AppContext";
import Index from "./pages/Index";
import Add from "./pages/Add";
import Learn from "./pages/Learn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <AppContextProvider>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Index />
            </Route>
            <Route path="/add" exact>
              <Add />
            </Route>
            <Route path="/learn" exact>
              <Learn />
            </Route>
            <Route path="*" exact>
              <p
                style={{
                  height: "100Vh",
                  textAlign: "center",
                  fontSize: "5rem",
                  color: "white",
                }}
              >
                Page not Available
              </p>
            </Route>
          </Switch>
        </Router>
      </AppContextProvider>
    </div>
  );
};

export default App;
