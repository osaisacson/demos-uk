import React, { Component } from "react";

export default class Score extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let comparisonScore = "28%";
    //Based on below UI which should show the issues on which the rep has voted, and let the user click agree or not agree. user agrees with all, comparisonScore is 100%, with none, 0%.

    return (
      <div className="score">
        <p>you agree</p>
        <h1>{comparisonScore}</h1>
        <p>of the time</p>
      </div>
    );
  }
}
