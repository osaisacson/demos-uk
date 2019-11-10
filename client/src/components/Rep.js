import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default class Rep extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let repImage =
      'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1479&q=80';
    // Placeholder image for now. Add a function here that connects to gov data and pulls in an img url that matches this.props.postcode.

    return (
      <>
        <h1>This is who speaks for you:</h1>
        <img alt="rep" className="rep" src={repImage} />
        <p>Likes dogs</p>
        <p>Last made an appareance two weeks ago</p>
        <p>Tweeted this yesterday</p>
        <div className="centerContent">
          <div className="selfCenter standardWidth">
            <TwitterTimelineEmbed
              sourceType="url"
              url="https://twitter.com/rahul581"
              options={{ height: 400 }}
            />
          </div>
        </div>
        <h1>...great.</h1>
      </>
    );
  }
}
