import React from "react";
import { connect } from "react-redux";

const SearchList = props => {
  return (
    <div>
      {props.places.map(place => {
        return <p key={place.id}>{place.name}</p>;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    places: state.places
  };
};

export default connect(mapStateToProps)(SearchList);
