import React from 'react';
import './root.css';
import Map from './Map';
import { Link } from 'react-router-dom';
import Venues from './Venues'

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
          <Link to="/map">
            <img id="search-icon" src="https://i.imgur.com/rPXnctN.png" />
          </Link>
        </div>
      </div>
      <main>
        <Venues />
        <div id="places" />
      </main>
    </div>
  );
};

export default Root;
