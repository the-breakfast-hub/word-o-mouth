import React from "react";
import { connect } from "react-redux";
import { addNewUser } from "../reducers/usersReducer";

class AddUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addNewUser(this.state);
  }

  render() {
    return (
      <div>
        <form
          action="/api/users/add"
          method="post"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            onChange={this.handleChange}
          />
          <label htmlFor="lastName">First Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={this.handleChange}
          />
          <label htmlFor="email">First Name</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.handleChange}
          />
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewUser: formData => dispatch(addNewUser(formData))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(AddUserPage);
