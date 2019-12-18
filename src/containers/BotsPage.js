import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"
class BotsPage extends React.Component {
  //start here with your code for step one
  // STEP ONE : Fetch from bots API, render bots data on page as soon as page loads with component did mount
  // Set initial state of all bots data (array) to pass down to bot collection and bot army componenets
  // the bots array should be stored here in state because both bot collection and bot army need acess to the data
  
  state = {
    bots: []
  }

  componentDidMount() {
    fetch(API)
      .then(res=>res.json())
      .then((bots)=>{
        this.setState({bots})
      })
  }

  // STEP THREE : Adding and Removing Bot functionality

  addBot = (id) => {
    let newBots = this.state.bots.map((bot)=>{
      if(bot.id === id) {
        // if the bot id matches the id of the card you clicked on...
        // add a new key (inMyArmy)
        return {...bot, inMyArmy: true}
      } else {
        // otherwise return the bot obj without any key
        return bot
      }
    })
    // reset state to hold the new bots 
    this.setState({bots:newBots})
  }

  // same logic as above... should work on abstracting
  // pass to botArmy component because I can only remove from there
  removeBot = (id) => {
    let removedBots = this.state.bots.map((bot)=> {
      if(bot.id === id){
        return { ...bot, inMyArmy: false } 
      } else {
        return bot
      }
    })
    this.setState({bots:removedBots})
  }

  render() {
    // console.log(this.state.bots)
    return (
      <div>
       <YourBotArmy bots={this.state.bots} removeBot={this.removeBot}/>
        <BotCollection bots={this.state.bots} addBot={this.addBot}/>
      </div>
    );
  }

}

export default BotsPage;
