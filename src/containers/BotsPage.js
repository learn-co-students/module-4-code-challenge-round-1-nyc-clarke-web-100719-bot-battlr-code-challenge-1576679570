import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    robots: [],
    army: []
  }

  addToArmy = bot => {
    this.setState({
      army: [...this.state.army, bot]
    })
  }

  dischargeBot = bot => {
    let botArmyWithoutDischargedBot = this.state.army.filter(botSoldier => botSoldier.id !== bot.id);
    this.setState({
      army: botArmyWithoutDischargedBot
    })
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(robots => this.setState({
      robots: robots
    }))
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} dischargeBot={this.dischargeBot} />
        <BotCollection robots={this.state.robots} addToArmy={this.addToArmy} />
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
