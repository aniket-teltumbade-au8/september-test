import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { clearCurrentUser } from "../redux/actions/authActions";
import firebase from "firebase";

export class NavMenu extends Component {
  state = {
    user: null
  };
  handleClick = () => {
    firebase.auth().signOut();
    clearCurrentUser();
  };
  render() {
    return this.state.user === null ? (
      <div>
        <Link to="/login">Login </Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/todo">To do List</Link>
        <Link to="/gallery">Gallery</Link>
        <button onClick={this.handleClick}>Logout </button>
      </div>
    ) : (
      <div>{/* {{JSON.parse(this.state.user)['displayName']}} */}</div>
    );
  }
}

const mapsStatesToProps = (storeState) => {
  return { userDetail: storeState.authState.user };
};
export default connect(mapsStatesToProps, { clearCurrentUser })(NavMenu);
