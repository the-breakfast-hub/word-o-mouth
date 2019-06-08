import React from 'react';
import './AllVenues'

const AllVenues = props => {
  const venues = props.venues
  return (
    <div>
      <ul className="list_items">
        {venues.length
          ? venues.map(venue => <li className="list_item" key={venue.id}>{venue.name}</li>)
          : false}
      </ul>
    </div>
  );
};

export default AllVenues;
