import React from "react";
import { connect } from "react-redux";
import { getAllPlaces } from "../store";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      values: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  componentDidMount() {
    this.props.getAllPlaces();
  }

  render() {
    console.log(">>> ", this.state.places);
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleChange} />
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
    getAllPlaces: () => dispatch(getAllPlaces())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
