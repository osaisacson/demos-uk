import React, { Component } from "react";

export default class YourVote extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="flex-end">
        <button className="learn-more"> Agree</button>
        <button className="learn-more"> Disagree</button>
      </div>
    );
  }
}
