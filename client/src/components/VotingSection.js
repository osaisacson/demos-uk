import React, { Component } from "react";

export default class VotingSection extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.props.category.map(item => {
          return (
            <div key={item.id}>
              <p>{item.text}</p>
              <p>{item.voted}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
