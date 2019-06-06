import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl'
import './Map.css'
import Root from './root'
import axios from 'axios';

export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      viewport: {
        width: 1500,
        height: 1300,
        latitude: 40.754,
        longitude: -73.984,
        zoom: 1
      },
      favorites: {},
    };
    // this.onViewportChange = this.onViewPortChange.bind(this);
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('https://api.foursquare.com/v2/venues/search?ll=40.7047,74.0094&radius=1000&client_id=5IDUOTEW20UIMVSEBNT1UJCSCBXQQB4X55DLJDE0QCK23TKT&client_secret=QWUQ4HLZKU34TZNMSCHBMYP0NZ2TUFSQX0RPX4TOTWMZ0MPN&v=20190606');
      this.setState({
        favorites: data,
      })
    } catch (error) {
      console.error(error);
    }
  }

  // // add and bind onViewPortChange 
  // onViewportChange(viewport) {
  //   this.setState({
  //     viewport,
  //   })
  // }

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
          {/* <Marker latitude={40.705137} longitude={-74.01394} offsetLeft={-20} offsetTop={-10}> */}
          <Marker latitude={40.705137} longitude={-74.01394} >
            <div className="initialMarker" />
          </Marker>
          {this.state.favorites.response ? this.state.favorites.response.venues.map(curVenue => (<Marker key={curVenue.id} latitude={curVenue.location.lat} longitude={curVenue.location.lng} ><div className="marker" /></Marker>)) : null}
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
