import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl'
import './Map.css'
import Root from './root'

export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      viewport: {
        width: 1500,
        height: 1300,
        latitude: 40.754,
        longitude: -73.984,
        zoom: 14
      }
    };
  }

  render() {
    return (
      <div>
      <div>
      <Root />
      </div>
      <div id="app">
        <div id="map">
        <ReactMapGL
          mapboxApiAccessToken="pk.eyJ1IjoidGFsaWFjb2RlcyIsImEiOiJjandpZTBxbWgwNDFkNDNwNnA2YjlzdGVjIn0._xfI0OnuzfDCj7IY8FkQjw" mapStyle="mapbox://styles/taliacodes/cjwif4ee60z9r1clsi43mtvjy"
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <Marker latitude={40.754} longitude={-73.984} offsetLeft={-20} offsetTop={-10}>
            <div className="marker" />
          </Marker>
        </ReactMapGL>
        </div>

        <aside>

          <div className="panel" id="options-panel">

            <div>
              <h2>Hotels</h2>
              <select id="hotels-choices">
                <option>An Hotel</option>
              </select>
              <button type="submit" id="hotels-add" className="options-btn">+</button>
            </div>

            <div>
              <h2>Restaurants</h2>
              <select id="restaurants-choices">
                <option>A Restaurant</option>
              </select>
              <button type="submit" id="restaurants-add" className="options-btn">+</button>
            </div>

            <div>
              <h2>Activities</h2>
              <select id="activities-choices">
                <option>An Activity</option>
              </select>
              <button type="submit" id="activities-add" className="options-btn">+</button>
            </div>

          </div>

          <div className="panel" id="itinerary">

            <div>
              <h2>My Hotel</h2>
              <ul className="list-group" id="hotels-list"/>
            </div>

            <div>
              <h2>My Restaurants</h2>
              <ul className="list-group" id="restaurants-list" />
            </div>

            <div>
              <h2>My Activities</h2>
              <ul className="list-group" id="activities-list" />
            </div>

          </div>

        </aside>
      </div>
      </div>
    );
  }
}
