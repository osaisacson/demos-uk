import React, { Component } from "react";
import Postcode from "./Postcode";

export default class City extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let cityBackgroundImage =
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80";
    // Placeholder image for now. Add a function here that connects to unsplash API and pulls in an img url that matches this.props.city.

    return (
      <>
        <div class="center">
          <h1>Great, you're in {this.props.city}</h1>
          <img alt="city" className="city" src={cityBackgroundImage} />
          <h1>Now what's your postcode</h1>
          <Postcode />
        </div>
      </>
    );
  }
}
