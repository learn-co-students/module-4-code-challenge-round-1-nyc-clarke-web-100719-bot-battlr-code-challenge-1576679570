import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";



class BotsPage extends React.Component {

  state = {
    bots: [],
    collectedBots: []
  }

  //functions

  clickedBot = (e) => {
    e.persist()
    console.log(e)
    let grabBot = this.state.bots.find(bot => bot.id === parseInt(e.target.id))
    if (this.state.collectedBots.find(bot=>bot.id === parseInt(e.target.id))){
      this.deleteBot(e)
    } else
    this.setState({
      collectedBots: this.state.collectedBots.concat(grabBot)
    })
  }

  deleteBot = (e) => {
    console.log("exists")
    let update = this.state.collectedBots.filter(bot=>bot.id !== parseInt(e.target.id))
    console.log(update)
    this.setState({
      collectedBots: update
    })
  }

  componentDidMount(){
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`).then(resp => resp.json()).then(data => {
      this.setState({
        bots: data
      })
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy 
        collectedBots={this.state.collectedBots}
        clickedBot={this.clickedBot}
        bots={this.state.collectedBots}
        />
        <BotCollection 
          collectedBots={this.state.collectedBots}
          clickedBot={this.clickedBot}
          allBots={this.state.bots}
        />
      </div>
    );
  }
}

export default BotsPage;
