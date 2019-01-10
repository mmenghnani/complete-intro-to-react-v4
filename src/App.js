import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Results from "./Results";
import Details from "./Details";
import { Link } from "@reach/router";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/results">
            <h4>Adopt Me!</h4>
          </Link>
        </header>
        <Router>
          <Results path="/results" />
          <Details path="/details/:id" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
