import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Recommended from "./Components/Recommended";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Searchpage from "./Components/Searchpage";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <Header />
            <div className="App_page">
              <Sidebar />
              <Searchpage />
            </div>
          </Route>
          <Route path="/">
            <Header />
            <div className="App_page">
              <Sidebar />
              <Recommended />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
