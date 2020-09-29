import React, { Component } from "react";

export class HomePage extends Component {
  handleClick = () => {
    this.props.history.push("/login");
  };
  render() {
    return <h1>Welcome </h1>;
  }
}
export default HomePage;
