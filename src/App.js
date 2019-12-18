import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  // constructor() {
  //   super();
  //
  //   this.state = {
  //     bots: [],
  //     armyBotsListed: []
  //   }
  // }
  //
  //
  //
  // componentDidMount() {
  //   fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
  //       .then(data => data.json())
  //       .then(data => this.setState({bots: data}))
  //       .catch(console.error)
  // }

  render() {
    return (
      <div className="App">
        {/*<BotsPage bots={this.state.bots}/>*/}
        <BotsPage />
      </div>
    );
  }
}

export default App;
