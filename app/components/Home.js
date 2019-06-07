import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { logout } from '../reducers/usersReducer';
import Root from './root';
import './Home.css';
import MyPlaces from '../components/myPlaces';
import IconButton from '@material-ui/core/IconButton';
import Favorite from '@material-ui/icons/Favorite';
import Drawer from '@material-ui/core/Drawer';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      left: false,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  toggleDrawer(open) {
    let curr = this.state.left;
    this.setState({
      left: open,
    });
  }
  render() {
    const { user, handleClick } = this.props;
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
        <IconButton onClick={() => this.toggleDrawer(true)}>
          <Favorite />
        </IconButton>
        <Drawer open={this.state.left} onClose={() => this.toggleDrawer(false)}>
          <MyPlaces toggleDrawer={this.toggleDrawer} />
        </Drawer>
      </div>
    );
  }
}

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
