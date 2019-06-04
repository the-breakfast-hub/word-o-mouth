import React from "react";
import { connect } from "react-redux";
import { getSearchPlaces } from "../reducers/placesReducer";
import './SearchBar.css'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      values: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(e) {
    if (e.target.value) {
      const queryList = await this.props.getSearchPlaces({
        query: e.target.value
      });
      this.setState({ query: queryList });
    }
  }

  render() {
    return (
      <div id="search-bar">
        <form>
          <input id="search-box" type="text" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchPlaces: formData => dispatch(getSearchPlaces(formData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
