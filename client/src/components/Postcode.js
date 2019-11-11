import React, { Component } from "react";

export default class Postcode extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <form onSubmit={this.props.passPostcodeToParent}>
          <input
            placeholder="your postcode (eg. BS3 1QP)"
            type="text"
            name="username"
            data-lpignore="true"
            autoComplete="off"
            ref={node => (this.inputNode = node)}
          />
        </form>
      </>
    );
  }
}
