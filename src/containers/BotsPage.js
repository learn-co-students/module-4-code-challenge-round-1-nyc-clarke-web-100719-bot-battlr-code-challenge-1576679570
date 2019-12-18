import React from "react";

import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {


  state={
    fetchBots:[],
    displayBot:{},
    specs: false
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

  // updates to display specs of the bot that was click on the collection

  updateDisplayBot = id =>{
    let bot = [...this.state.fetchBots]
    bot = bot.find(bot => bot.id === id)
    this.setState({
      displayBot:bot,
      specs: true
    })
  }

  //filters the bots that are in YourBotArmy Component

  inArmy = () =>{
    let filterBots = [...this.state.fetchBots]
    return filterBots.filter(bot => bot.inArmy)
  }

  // v:1 handle Army --- Previously used to handle adding/deleting a bot from YourArmy
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // addArmy =(id) =>{
  //   let newBots = [...this.state.fetchBots]
  //   newBots = newBots.map(bot =>{
  //     if(bot.id === id) bot.inArmy = true
  //     return bot
  //   })
  //   this.setState({fetchBots: newBots})
  // }

  // removeArmy = id =>{
  //   let newBots = [...this.state.fetchBots]
  //   newBots = newBots.map(bot =>{
  //     if(bot.id === id) bot.inArmy = false
  //     return bot
  //   })
  //   this.setState({fetchBots: newBots})
  // }
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //v:2 handleArmy
  handleArmy = (id,status) => {
    let newBots = [...this.state.fetchBots]
    newBots = newBots.map(bot =>{
      if(bot.id === id) bot.inArmy = status
      return bot
    })
    this.setState({fetchBots: newBots})
  }

  //handles buttons' actions for the botSpec Component

  handleAction = (status,id) =>{
    //status use to check if go back or enlist
    if(status){
      this.handleArmy(id,true)
    }

    this.setState({specs:false})
  }

  render() {
    // To implement: Abstract YourBotArmy and BotCollection into one component
    // Add feature of displaying bot specs on the yourArmy
    return (
      <div>
        <YourBotArmy removeArmy={this.handleArmy} bots={this.inArmy()}/>

        {/* conditional to render all bots or bot specs for selected one */}

          {this.state.specs?
            <BotSpecs handleAction={this.handleAction} bot={this.state.displayBot}/> 
            :
            <BotCollection handleDisplay={this.updateDisplayBot} bots={this.state.fetchBots}/>
          }

      </div>
    );
  }

}

export default BotsPage;
