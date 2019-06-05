import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl'
import './Map.css'


export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      viewport: {
        width: 800,
        height: 800,
        latitude: 40.754,
        longitude: -73.984,
        zoom: 14
      }
    };
  }

  render() {
    return (
      <div>
        <ReactMapGL
          mapboxApiAccessToken="pk.eyJ1IjoidGFsaWFjb2RlcyIsImEiOiJjandpZTBxbWgwNDFkNDNwNnA2YjlzdGVjIn0._xfI0OnuzfDCj7IY8FkQjw" mapStyle="mapbox://styles/taliacodes/cjwif4ee60z9r1clsi43mtvjy"
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <Marker latitude={40.754} longitude={-73.984} offsetLeft={-20} offsetTop={-10}>
            <div className="marker"/>
          </Marker>
        </ReactMapGL>
      </div>
    );
  }
}
