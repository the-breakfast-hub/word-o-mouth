import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import './Map.css';
import Root from './root';
import axios from 'axios';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "100%",
        height: "100%",
        // latitude: 40.704540,
        // longitude: -74.009468,
        latitude: 40.7587265,
        longitude: -73.9185131,
        zoom: 14
      },
      userLocation: {
        // lat: 40.704540,
        // long: -74.009468,
        lat: 40.7587265,
        long: -73.9185131,
      },
      favorites: {},
    };
    this.updateFavorites = this.updateFavorites.bind(this);
  }

  async updateFavorites() {

    const endPoint = 'https://api.foursquare.com/v2/venues/search?'
    const parameters = {
      ll: `${this.state.userLocation.lat},${this.state.userLocation.long}`,
      radius: 1000,
      intent: 'browse',
      categoryId: '4bf58dd8d48988d14e941735',
      client_id: 'LBVIQAW2E0HWIUIFFCJBXSQKEUXNNELN2GZWURVCS5QJN0ZZ',
      client_secret: 'AEU2DL0RTEDHRVT04B2XC0JADIYXZCRQZ0K1IMBQAP2RMEGH',
      v: 20190606
    }
    try {
      const { data } = await axios.get(endPoint + new URLSearchParams(parameters));
      this.setState({
        favorites: data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
      <div>
      <Root />
      </div>
      <div id="map">
        <ReactMapGL
          mapboxApiAccessToken="pk.eyJ1IjoidGFsaWFjb2RlcyIsImEiOiJjandpZTBxbWgwNDFkNDNwNnA2YjlzdGVjIn0._xfI0OnuzfDCj7IY8FkQjw" mapStyle="mapbox://styles/taliacodes/cjwif4ee60z9r1clsi43mtvjy"
          {...this.state.viewport}
          onViewportChange={viewport => {
            this.setState({ viewport });
            navigator.geolocation.getCurrentPosition(position => {
              this.setState({
                userLocation: {
                  lat: position.coords.latitude,
                  long: position.coords.longitude,
                }
              });
            });
            this.updateFavorites();
          }
        }
        >
          <Marker latitude={this.state.userLocation.lat} longitude={this.state.userLocation.long} >
            <div className="initialMarker" />
          </Marker>
          {this.state.favorites.response ? this.state.favorites.response.venues.map(curVenue => (<Marker key={curVenue.id} latitude={curVenue.location.lat} longitude={curVenue.location.lng} ><div className="marker" /></Marker>)) : null}
        </ReactMapGL>
        </div>
      <div id="app-stuff">
        <div id="search-bar-map">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="form_input"
            onChange={this.handleChange}
            name="query"
            type="text"
            placeholder="Search"
          />
          <button className="form__submit" type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
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
