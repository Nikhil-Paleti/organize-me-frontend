import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Welcome</h3>
        </header>
        <body>
          <p>
            please login to get started!
          </p>
        </body>
      </div>
    );
  }
}
