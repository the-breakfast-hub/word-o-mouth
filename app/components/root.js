import React from "react";
import "./root.css";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";
import AddUserPage from "./addUserPage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Root = () => {
  return (
    <Router>
      <div id="nav-bar">
        <div id="nav">
          <div>
            <img id="menu-button" src="https://i.imgur.com/VJBsV5k.png" />
          </div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/">
            <div>
              <h1>Word of Mouth</h1>
            </div>
          </Link>
          <div>
            <SearchBar />
          </div>
        </div>
        <main>
          <SearchList />
          <p>Your Recent Places</p>
          <div id="places" />
        </main>
        <Switch>
          <Route exact path="/signup" component={AddUserPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;
