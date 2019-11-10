import React, { Component } from 'react';

export default class Score extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let comparisonScore = '28%';
    //Based on below UI which should show the issues on which the rep has voted, and let the user click agree or not agree. user agrees with all, comparisonScore is 100%, with none, 0%.

    return (
      <>
        <div className="voting">
          <div>
            <p> voted yes on x</p>
            <p> voted yes on y</p>
            <p> voted yes on z</p>
            <p> voted yes on å</p>
            <p> voted yes on ä</p>
            <p> voted yes on ö</p>
          </div>
          <div>
            <p className="agree"> Agree</p>
            <p> Dont agree</p>
            <p> Dont agree</p>
            <p> Dont agree</p>
            <p className="agree"> Agree</p>
            <p> Dont agree</p>
          </div>
        </div>
        <h1>{comparisonScore}</h1>
      </>
    );
  }
}
