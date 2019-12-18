import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  state = {
    bots: [],
    renderedbots: [],
    YourBotArmy: []
  }

  componentDidMount = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(response => response.json())
      .then(data => {
        this.setState({
          bots: data,
          renderedbots: data
        })
      })
  }

  addBotToArmy = (id) => {
    let botToAdd = this.state.renderedbots.find(bot => bot.id === id)
    if (!this.state.YourBotArmy.find(bot => bot.id === id)) {
      this.setState({
        YourBotArmy: [...this.state.YourBotArmy, botToAdd]
      })
    }
  }
  
  removeBotFromArmy = (id) => {
    let botToRemove = this.state.YourBotArmy.findIndex(bot => bot.id === id)
    this.setState({
      YourBotArmy: (this.state.YourBotArmy.slice(0, botToRemove).concat(this.state.YourBotArmy.slice(botToRemove + 1, this.state.YourBotArmy.length)))
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy yourBotArmy={this.state.YourBotArmy} removeBotFromArmy={this.removeBotFromArmy}/> 
        <BotCollection bots={this.state.renderedbots} addBotToArmy={this.addBotToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
