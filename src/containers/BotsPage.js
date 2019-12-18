import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor() {
    super();

    this.state = {
      bots: [],
      armyBotsListed: []
    }
  }



  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
        .then(data => data.json())
        .then(data => this.setState({bots: data}))
        .catch(console.error)
  }

  onClickBotID = (botID) => {
    console.log(botID);

    // let botListed = this.state.bots.filter( bot => bot.id === botID);
    let botsListed = this.state.armyBotsListed;

    if (this.state.armyBotsListed.length === 0) {
      botsListed += this.state.bots.filter( bot => bot.id === botID);
    } else {
      // botsListed = this.state
    }



    // botsListed = [...this.state.armyBotsListed];
    // botsListed +=

    // let botsListed = [...this.state.armyBotsListed];
    // botsListed += this.state.bots.filter(bot => bot.id === botID);

    // console.log(JSON.stringify(botsListed));

    // if (this.state.armyBotsListed.length === 0 ) {
    //   let botsListed = []
    // }

    // let botsListed = this.state.armyBotsListed.map((bot) => {
    //
    //   if (bot.id === botID) { return} else {
    //     return this.state.
    //   }
    //
    //
    // });

    // let botsListed = [...this.state.armyBotsListed];

    // if ()

    // botsListed.push(this.state.bots.filter( bot => bot.id === botID));
    // console.log([...this.state.armyBotsListed, botListed]);

    console.log(JSON.stringify(botsListed));

    this.setState({
      armyBotsListed: botsListed
    })


    // const bots = this.state.bots.f
  };


  render() {
    return (
      <div>
        {/* put your components here */}
        {/*{this.ar}*/}
        <YourBotArmy armyBotsListed={this.state.armyBotsListed} />
        <BotCollection bots={this.state.bots} onClickBotID={this.onClickBotID} />
      </div>
    );
  }

}

export default BotsPage;
