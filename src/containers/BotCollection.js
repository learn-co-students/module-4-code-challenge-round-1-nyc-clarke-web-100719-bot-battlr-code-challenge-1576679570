import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //STEP TWO: Indexing Bots

  renderBots = () => {
	//   bots will always show up on colelction (no conditional rendering needed)
	//  ** works and cannot add a bot more than once to army **
	return this.props.bots.map((bot)=>{
		  return <BotCard 
		  	key={bot.id}
			{...bot}
			addBot={this.props.addBot}
		  />
	  })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
				<strong> Collection of all bots </strong>
				{this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
