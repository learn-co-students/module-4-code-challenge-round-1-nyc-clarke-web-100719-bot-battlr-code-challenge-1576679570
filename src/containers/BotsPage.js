import React from "react";
import * as requests from '../requests.js'
import YourBotArmy from "./YourBotArmy.js";
import BotCollection from "./BotCollection.js";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    enlistedBots: []
  }

  componentDidMount() {
    requests.fetchBots()
      .then(bots => this.setState({ bots: bots }))
  }

  enlistBot = (botId) => {
    this.setState(prevState => {
      const enlistedBot = prevState.bots.find(bot => bot.id === botId)
      if (!prevState.enlistedBots.includes(enlistedBot)) {
        return {
          enlistedBots: [...prevState.enlistedBots, enlistedBot]
        }
      }
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy enlistedBots={this.state.enlistedBots} />
        <BotCollection bots={this.state.bots} enlistBot={this.enlistBot} />
      </div>
    );
  }

}

export default BotsPage;
