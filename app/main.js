import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import "../public/style.css";
import { Provider } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { getMe } from "./reducers/usersReducer";
import Home from "./components/Home";
import Login from "./components/Login";
import NewUser from "./components/NewUser";
import Map from "./components/Map";
import myPlaces from "./components/myPlaces";
import Venues from "./components/Venues";
import UserProfile from "./components/UserProfile";

const Main = withRouter(
  class extends React.Component {
    async componentDidMount() {
      await store.dispatch(getMe());
      this.props.history.push("/");
    }
    render() {
      return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/newUser" component={NewUser} />
          <Route path="/map" component={Map} />
          <Route path="/places/:id" component={myPlaces} />
          <Route path="/search" component={Venues} />
          <Route path="/me" component={UserProfile} />
        </Switch>
      );
    }
  }
);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById("main")
);
