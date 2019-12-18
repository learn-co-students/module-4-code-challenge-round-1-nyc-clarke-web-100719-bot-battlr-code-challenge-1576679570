import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

const URI = "https://bot-battler-api.herokuapp.com/api/v1/bots";


class BotsPage extends React.Component {
  
  state = {
    //holds all bots fetched from API
    bots: [], 

    //holds all bots that user recruits
    army: [], 

    //object which acts as hashmap to ensure no duplicates in user recruits
    uniqChecker: {}, 

    //boolean that render() uses to decide whether to display all bots or specific bot spec card
    showAllBots: true, 

    //specific bot's spec card to be shown
    botToShow: {} 
  }

  //Helper method to fetch bots from API 
  fetchBots = () => {
    fetch(URI)
    .then(resp=>resp.json())
    .then(jsonData=>{
      this.setState({
        bots: jsonData
      })
    })
  };

  //OnClick callback passed down to BotSpecs component to add a bot to the user army
  //Takes the bot object to be added to the army as an argument
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

  //OnClick callback passed down to YourBotArmy component to remove a bot from the user army
  //Takes the bot object to be removed from the army as an argument
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

  //Two callback methods passed to BotCollection and BotSpecs respectively, to toggle between these two components
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

  //Lifecycle method for debugging purposes only
  // componentDidUpdate(){
  //   console.log(this.state.army);
  // };

  //Fetches bots upon component mount 
  componentDidMount() {
    this.fetchBots();
  };

  //Renders the top half of the page as the user army (YourBotArmy component),
  // and conditionally renders either BotCollection or BotSpecs component
  render() {
    return (
      <div>
        {/* Top Half of Page*/}
        <YourBotArmy 
          bots={this.state.army}
          clickToFire={this.removeFromArmy}

          />
        { /* Bottom Half of Page */
          this.state.showAllBots 
          ? <BotCollection 
              bots={this.state.bots} 
              clickToShowSpecs={this.showDetails}
              />
          : <BotSpecs 
              bot={this.state.botToShow} 
              clickToAddToArmy={this.addToArmy} 
              clickToHideSpecs={this.hideDetails}
              />
        }
      </div>
    );
  };

}

export default BotsPage;
