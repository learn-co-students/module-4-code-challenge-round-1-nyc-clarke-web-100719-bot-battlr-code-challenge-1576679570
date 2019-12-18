import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

const URI = "https://bot-battler-api.herokuapp.com/api/v1/bots";


class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: [],
    uniqChecker: {},
    showAllBots: true,
    botToShow: {}
  }

  fetchBots = () => {
    fetch(URI)
    .then(resp=>resp.json())
    .then(jsonData=>{
      console.log(jsonData);
      this.setState({
        bots: jsonData
      })
    })
  };

  addToArmy = (bot) => {
    if (!this.state.uniqChecker[bot.id])
    {
      this.setState({
        uniqChecker: {...this.state.uniqChecker, [bot.id]: true},
        army: [...this.state.army, bot]
      });
    }
    else {
      alert("You already recruited this bot!");
    }
  };

  removeFromArmy = (bot) => {
    let nonStateArr = [...this.state.army];
    let index = nonStateArr.indexOf(bot);
    if (index > -1) {
      nonStateArr.splice(index,1);
      this.setState({
        army: nonStateArr,
        uniqChecker: {...this.state.uniqChecker, [bot.id]:false}
      });
    }
    else {
      alert("If you see this message, it means I didn't pass bot arg correctly");
    }
  };

  showDetails = (bot) =>{
    this.setState({
      showAllBots: false,
      botToShow: bot
    });
  };

  hideDetails = () =>{
    this.setState({
      showAllBots: true,
      botToShow: {}
    });
  };

  //For debugging
  componentDidUpdate(){
    console.log(this.state.army);
  };

  componentDidMount() {
    this.fetchBots();
  };

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy bots={this.state.army} clickToFire={this.removeFromArmy}/>
        {
          this.state.showAllBots 
          ? <BotCollection bots={this.state.bots} clickToShowSpecs={this.showDetails}/>
          : <BotSpecs bot={this.state.botToShow} clickToAddToArmy={this.addToArmy} clickToHideSpecs={this.hideDetails} />
        }
      </div>
    );
  };

}

export default BotsPage;
