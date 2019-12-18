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
    //fetches bots off function written in requests.js
    requests.fetchBots()
      .then(bots => this.setState({ bots: bots }))
  }

  enlistBot = (bot) => {
    //passed down to botspecs to onclick the enlist button
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
    //passed down to botcollection to register on click of bot div
    this.setState({selectedBot: bot})
  }

  goBack = () => {
    //passed down to botspecs to rerender botcollection. could not figure out how to save the scroll position
    this.setState({selectedBot: null})
  }

  render() {
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
