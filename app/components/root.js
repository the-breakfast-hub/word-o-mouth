import React from 'react';
import './root.css';

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
        <p>Your Recent Places</p>
        <div id="places" />
      </main>
    </div>
  );
};

export default Root;
