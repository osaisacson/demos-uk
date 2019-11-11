import React, { Component } from "react";
import YourVote from "./YourVote";

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
            <div className="voting-section">
              <div key={item.id}>
                <p>{item.text}</p>
              </div>
              <YourVote />
            </div>
          );
        })}
      </div>
    );
  }
}
