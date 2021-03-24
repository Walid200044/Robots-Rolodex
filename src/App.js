import React, { Component } from "react";
import { CardList } from "./components/Card-list/card-list.component";
import { SearchBox } from "./components/Search-Box/Search-BOX.Component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Robots: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ Robots: users }));
  }

  render() {
    const { Robots, searchField } = this.state;
    const RobotsFiltered = Robots.filter((Robot) =>
      Robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>ROBOTS ROLODEX</h1>
        <SearchBox
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList Robots={RobotsFiltered}></CardList>
      </div>
    );
  }
}

export default App;
