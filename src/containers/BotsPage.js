import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    botArmyIds: [],
    botArmy: [],
    showView: false,
    botShow: {}
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(allBots => this.setState({ allBots }))
  }

  addToArmy = (botObj) => {

    botObj = {
      ...botObj,
      inArmy: true
    };
    
    // why can't I map over this.state.botArmy and check the ids? 
    if (this.state.botArmyIds.includes(botObj.id)) {
      alert("You can only add a bot to your army once!") 
    } else {
      this.setState({ 
        botArmyIds: [...this.state.botArmyIds, botObj.id],
        botArmy: [...this.state.botArmy, botObj],
        showView: false
      })
    }
  }

  removeFromArmy = (botObj) => {  
    let remainingIds = [...this.state.botArmyIds].filter(id => id !== botObj.id);
  
    let remainingArmy = [...this.state.botArmy].filter(bot => bot.id !== botObj.id);
    
    this.setState({
      botArmyIds: remainingIds,
      botArmy: remainingArmy
    })
  }

  toggleShow = (botObj = {}) => {
    this.setState({ 
      showView: !this.state.showView,
      botShow: botObj
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} removeFromArmy={this.removeFromArmy}/>
        {this.state.showView ? 
          <BotSpecs bot={this.state.botShow} toggleShow={this.toggleShow} addToArmy={this.addToArmy} /> 
          : 
          <BotCollection allBots={this.state.allBots} toggleShow={this.toggleShow}/> 
        }
      </div>
    );
  }

}

export default BotsPage;
