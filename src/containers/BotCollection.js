import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render(){
	// console.log(this.props.allBots)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.allBots.map(bot => {
				   return <BotCard 
					clickedBot={this.props.clickedBot}
					collectedBots={this.props.collectedBots}
					bot={bot}
				   />
			  })}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
