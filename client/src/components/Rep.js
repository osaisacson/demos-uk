import React, { Component } from "react";
import Score from "./Score";

import { TwitterTimelineEmbed } from "react-twitter-embed";

export default class Rep extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <h1>This is who speaks for you:</h1>
        <div className="flex-spread">
          <div className="rep">
            <img alt="rep" src={this.props.repData.repImg} />
          </div>

          <div>
            <p>{this.props.repData.fname}</p>
            <p>{this.props.repData.lname}</p>
          </div>
        </div>

        {this.props.repData.twitterUrl ? (
          <div className="centerContent">
            <div className="selfCenter standardWidth">
              <TwitterTimelineEmbed
                sourceType="url"
                url={this.props.repData.twitterUrl}
                options={{ height: 400 }}
              />
            </div>
          </div>
        ) : null}
        <Score repData={null} />
      </>
    );
  }
}
