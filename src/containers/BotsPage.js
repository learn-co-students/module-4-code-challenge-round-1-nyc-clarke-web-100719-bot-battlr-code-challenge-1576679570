import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from '../components/BotSpecs';

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    robots: [],
    army: [],
    showPageClicked: false,
    bot: {}
  }

  addToArmy = bot => {
    this.setState({
      army: [...this.state.army, bot],
      showPageClicked: false
    })
  }

  dischargeBot = bot => {
    let botArmyWithoutDischargedBot = this.state.army.filter(botSoldier => botSoldier.id !== bot.id);
    this.setState({
      army: botArmyWithoutDischargedBot
    })
  }

  handleShowPageClick = (bot) => {
    this.setState(prevState => ({
      showPageClicked: true,
      bot: bot
    }))
  }

  hideShowPage = () => {
    this.setState({
      showPageClicked: false,
      bot: {}
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
        {this.state.showPageClicked ? <BotSpecs bot={this.state.bot} addToArmy={this.addToArmy} hideShowPage={this.hideShowPage} /> : <BotCollection robots={this.state.robots} addToArmy={this.addToArmy} handleShowPageClick={this.handleShowPageClick} />}
        
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
