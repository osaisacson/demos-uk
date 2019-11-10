import React, { Component } from "react";
import Rep from "./Rep";

export default class Postcode extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let postcodeCheck = true;
    // True for now. Add a function here that checks if the postcode is valid. If so, return true and trigger repData.

    let repData = null;
    // Add a function here that checks if the postcode matches a rep found in the gov data. If so, set this.state.rep to that data.

    return (
      <>
        <input
          className="text-center"
          type="text"
          value=""
          placeholder="Postcode"
        ></input>
        {postcodeCheck ? (
          <Rep rep={repData} />
        ) : (
          <h3>Hey your postcode does not seem to exist. Try again.</h3>
        )}
      </>
    );
  }
}
