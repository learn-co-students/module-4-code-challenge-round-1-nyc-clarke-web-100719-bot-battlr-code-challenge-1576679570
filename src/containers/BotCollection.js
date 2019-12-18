import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
    		  {/* Collection Of All Bots */}
			  {this.props.allBots.map(bot => <BotCard key={bot.id} {...bot} addOrRemove={this.props.addToArmy} />)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
