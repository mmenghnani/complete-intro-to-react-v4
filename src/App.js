import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Results from "./Results";
import Details from "./Details";
import { Link } from "@reach/router";
import SearchBox from "./SearchBox";
import pf from "petfinder-client";
import { Provider } from "./SearchContext";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Seattle,WA",
      animal: "",
      breed: "",
      breeds: [],
      handleAnimalChange: this.handleAnimalChange,
      handleLocationChange: this.handleLocationChange,
      handleBreedChange: this.handleBreedChange,
      getBreeds: this.getBreeds
    };
    this.handleAnimalChange = this.handleAnimalChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleBreedChange = this.handleBreedChange.bind(this);
    this.getBreeds = this.getBreeds.bind(this);
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  handleAnimalChange(event) {
    this.setState(
      {
        animal: event.target.value
      },
      this.getBreeds
    );
  }

  handleBreedChange(event) {
    this.setState({
      breed: event.target.value
    });
  }

  getBreeds() {
    if (this.state.animal) {
      petfinder.breed.list({ animal: this.state.animal }).then(data => {
        if (
          data.petfinder &&
          data.petfinder.breeds &&
          Array.isArray(data.petfinder.breeds.breed)
        ) {
          this.setState({
            breeds: data.petfinder.breeds.breed
          });
        } else {
          this.setState({
            breeds: []
          });
        }
      });
    } else {
      this.setState({
        breeds: []
      });
    }
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/results">
            <h4>Adopt Me!</h4>
          </Link>
        </header>
        <Provider value={this.state}>
          <Router>
            <Results path="/results" />
            <Details path="/details/:id" />
            <SearchBox path="/search" />
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
