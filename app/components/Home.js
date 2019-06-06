import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { logout } from '../reducers/usersReducer';
import Root from './root';
import './Home.css';

const Home = props => {
  console.log(props);
  const { user, handleClick } = props;
  if (!user.id) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <h1>Welcome Back {user.firstName}!</h1> <Root />
      <Button
        className="logout_button"
        onClick={handleClick}
        type="submit"
        variant="contained"
        color="primary"
      >
        Logout
      </Button>
    </div>
  );
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    async handleClick() {
      await dispatch(logout());
      ownProps.history.push('/');
    },
  };
};
const mapStateToProps = state => ({
  user: state.users.user,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
