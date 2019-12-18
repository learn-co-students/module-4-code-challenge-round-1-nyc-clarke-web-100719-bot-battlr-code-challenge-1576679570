import React from "react";
import * as requests from '../requests.js'
import YourBotArmy from "./YourBotArmy.js";
import BotSpecs from "../components/BotSpecs.js";
import BotCollection from "./BotCollection.js";

class BotsPage extends React.Component {
  //start here with your code for step one
  
  state = {
    bots: [],
    enlistedBots: [],
    selectedBot: null
  }

  componentDidMount() {
    requests.fetchBots()
      .then(bots => this.setState({ bots: bots }))
  }



  enlistBot = (bot) => {
    this.setState(prevState => {
      if (!prevState.enlistedBots.includes(bot)) {
        return {
          enlistedBots: [...prevState.enlistedBots, bot],
          selectedBot: null
        }
      } else {
        alert("You've already enlisted this bot!")
      }
    })
  }

  selectBot = (bot) => {
    this.setState({selectedBot: bot})
  }

  goBack = () => {
    this.setState({selectedBot: null})
  }

  render() {
    console.log(this.state)
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy enlistedBots={this.state.enlistedBots} />
        { this.state.selectedBot
          ? <BotSpecs bot={this.state.selectedBot} enlistBot={this.enlistBot} goBack={this.goBack}/> 
          : <BotCollection bots={this.state.bots} selectBot={this.selectBot} />
        }
      </div>
    );
  }

}

export default BotsPage;
