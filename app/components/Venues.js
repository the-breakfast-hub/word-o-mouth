import React from 'react';
import axios from 'axios';
import './Venues.css';
import AllVenues from './AllVenues';

class Venues extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      venues: []
    };
    this.searchVenues = this.searchVenues.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  searchVenues() {
    console.log('searchVenues: ');
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log('this is the query state', this.state.query);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const endPoint = 'https://api.foursquare.com/v2/venues/search?';
    const parameters = {
      near: 'Manhattan',
      query: this.state.query,
      categoryId: '4bf58dd8d48988d14e941735',
      client_id: 'LBVIQAW2E0HWIUIFFCJBXSQKEUXNNELN2GZWURVCS5QJN0ZZ',
      client_secret: 'AEU2DL0RTEDHRVT04B2XC0JADIYXZCRQZ0K1IMBQAP2RMEGH',
      v: 20190606
    };
    try {
      const { data } = await axios.get(
        endPoint + new URLSearchParams(parameters)
      );
      this.setState({
        venues: data.response.venues
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div id="search-bar">
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
        <AllVenues venues={this.state.venues} />
      </div>
    );
  }
}

export default Venues;
