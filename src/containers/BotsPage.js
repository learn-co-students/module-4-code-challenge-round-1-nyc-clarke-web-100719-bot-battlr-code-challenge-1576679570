import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state={
    bots: [],
    bot: []
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp => resp.json())
    .then(data => this.setState({bots: data }))
  }

  handleClick=(event)=>{
    
    // let oldOnes = {...this.state.bot, e}
    // this.setState({
    //   bot: {...this.state.bot, event}
    // })

// this.setState({

// })
    this.setState({
      bot: event
    })
  }

  render() {
    console.log(this.state);
    
    return (
      <div>
        {/* <React.Fragment> */}
        {<YourBotArmy  bot={this.state.bot}/>  }
        {<BotCollection bots={this.state.bots} handleClick={this.handleClick}/> }
        {/* </React.Fragment> */}
      </div>
    );
  }

}

export default BotsPage;
