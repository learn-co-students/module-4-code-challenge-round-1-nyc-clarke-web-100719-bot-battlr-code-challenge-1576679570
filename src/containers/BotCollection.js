import React from "react";
import BotCard from "../components/BotCard";
// import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {
  //STEP TWO: Indexing Bots

//  STEP FOUR: BotSpecs 
//		-Set state for a current bot
//  	-This will change based on the bot I've clicked on
// 		-I need a conditional rendering for if the bot is clicked then replace
// 		-The collection card with the spec card (which is why i need currentBot state in botPage)
//  	-Once I have the current bot set (onClick) then render that bots info
//		-Replace the bot collection with the bot spec card

	// state = {
	// 	currentBot: {}
	// }

  renderBots = () => {
	//   STEP FOUR  NOTE:  conditional rendering could be here for what to display to user

	// 	--STEP ONE,TWO,THREE--
	//  Bots will always show up on colelction (no conditional rendering needed)
	//  ** Works - Cannot add a bot more than once to army **
	
	return this.props.bots.map((bot)=>{
		  return <BotCard 
		  	key={bot.id}
			{...bot}
			addBot={this.props.addBot}
		  />
	  })
  }

//   renderCurrentBot = () => {
// 	return this.props.bots.map((bot)=>{

// 	})
//   }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				<strong> Collection of all bots </strong>
				{this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
