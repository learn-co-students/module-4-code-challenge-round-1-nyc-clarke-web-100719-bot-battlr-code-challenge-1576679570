import React from "react";

import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state={
    fetchBots:[]
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(res =>{
      res = res.map(e => ({...e,inArmy:false}))
      this.setState({
        fetchBots: res
      })
    })
  }

  inArmy = () =>{
    let filterBots = [...this.state.fetchBots]
    return filterBots.filter(bot => bot.inArmy)
  }

  addArmy =(id) =>{
    let newBots = [...this.state.fetchBots]
    newBots = newBots.map(bot =>{
      if(bot.id === id) bot.inArmy = true
      return bot
    })
    this.setState({fetchBots: newBots})
  }

  removeArmy = id =>{
    let newBots = [...this.state.fetchBots]
    newBots = newBots.map(bot =>{
      if(bot.id === id) bot.inArmy = false
      return bot
    })
    this.setState({fetchBots: newBots})
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy removeArmy={this.removeArmy} bots={this.inArmy()}/>
        <BotCollection addArmy={this.addArmy} bots={this.state.fetchBots}/>
      </div>
    );
  }

}

export default BotsPage;
