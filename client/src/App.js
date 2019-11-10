import React from "react";
import "./sass/main.scss";

import City from "./components/City";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <City city="London" />;
      </>
    );
  }
}

export default App;
