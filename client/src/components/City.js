import React, { Component } from 'react';

export default class City extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <h1>Great, you're in {this.props.city}</h1>
      </>
    );
  }
}
