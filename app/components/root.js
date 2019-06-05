import React from "react";
import "./root.css";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";
import Map from './Map'

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
          <img id="search-icon" src="https://i.imgur.com/rPXnctN.png" />
        </div>
      </div>
      <main>
        <SearchBar />
        <p>Your Recent Places</p>
        <SearchList />
        <Map />
        <div id="places" />
      </main>
    </div>
  );
};

export default Root;
