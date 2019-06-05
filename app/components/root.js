<<<<<<< HEAD
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
=======
import React from 'react';
import './root.css';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
import Map from './Map';
import { Link } from 'react-router-dom'

const Root = () => {
  return (
    <div id="nav-bar">
      <div id="nav">
        <div>
          <img id="menu-button" src="https://i.imgur.com/VJBsV5k.png" />
        </div>
        <div>
          <h1>Word of Mouth</h1>
        </div>
        <div>
          <Link to="/map" component={Map}>
            <img id="search-icon" src="https://i.imgur.com/rPXnctN.png" />
          </Link>
>>>>>>> ba839b7c228af39c2dc40b02d6aa379835129e21
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
<<<<<<< HEAD
    </Router>
=======
      <main>
        <SearchBar />
        <p>Your Recent Places</p>
        <SearchList />
        <div id="places" />
      </main>
    </div>
>>>>>>> ba839b7c228af39c2dc40b02d6aa379835129e21
  );
};

export default Root;
