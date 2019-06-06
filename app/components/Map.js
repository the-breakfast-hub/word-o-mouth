import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl'
import './Map.css'
import Root from './root'
import axios from 'axios';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 1500,
        height: 1300,
        latitude: 40.7106639,
        longitude: -74.0182495,
        zoom: 14
      },
      favorites: {},
      userLocation: {
        lat: 40.7106639,
        long: -74.0182495
      }
    };
  }

  async componentDidMount() {
    await navigator.geolocation.getCurrentPosition(position=>{
      this.setState({
        viewport: {...this.state.viewport, latitude: position.coords.latitude, longitude: position.coords.longitude},
        userLocation: {
              lat: position.coords.latitude,
              long: position.coords.longitude
            }})
          })
    try {
      const { data } = await axios.get(`https://api.foursquare.com/v2/venues/search?ll=${this.state.userLocation.lat},${this.state.userLocation.long}&radius=1000&intent=browse&categoryId=4bf58dd8d48988d14e941735&client_id=5IDUOTEW20UIMVSEBNT1UJCSCBXQQB4X55DLJDE0QCK23TKT&client_secret=QWUQ4HLZKU34TZNMSCHBMYP0NZ2TUFSQX0RPX4TOTWMZ0MPN&v=20190606`);
      this.setState({favorites: data})
      // navigator.geolocation.getCurrentPosition(position=>{
      //   this.setState({
      //     favorites: data,
      //     viewport:{...this.state.viewport, latitude: position.coords.latitude, longitude: position.coords.longitude},
      //     userLocation: {
      //       lat: position.coords.latitude,
      //       long: position.coords.longitude
      //     }
      //   })
      // })
   
    } catch(error) {
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
    console.log(this.state.favorites  )
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
          {/* <Marker latitude={40.705137} longitude={-74.01394} >
            <div className="initialMarker" />
          </Marker> */}
          <Marker latitude={this.state.userLocation.lat} longitude={this.state.userLocation.long} >
            <div className="marker" />
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
