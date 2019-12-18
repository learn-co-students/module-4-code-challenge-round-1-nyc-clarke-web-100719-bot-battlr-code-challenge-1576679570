import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  botsToRender = () => {
	  return (
		  this.props.bots.map(bot => 
	  		<BotCard 
				key={bot.id+"-"+bot.name}
				bot={bot}
				clickHandle={this.props.clickToShowSpecs}
			/>	
	  ));
  }

  render(){
  	return (
  	  <div className="ui four column grid">
		{/* <button>Sort By Health</button> */}
    		<div className="row">
    		  {/*...and here..*/}
    		  Collection of all bots
			  
			  {this.botsToRender()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
