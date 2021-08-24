import React, { useContext } from "react";
import AppContextProvider from "./components/AppContext";
import Index from "./pages/Index";
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
            <Route path="*" exact>
              <p>error page</p>
            </Route>
          </Switch>
        </Router>
      </AppContextProvider>
    </div>
  );
};

export default App;
