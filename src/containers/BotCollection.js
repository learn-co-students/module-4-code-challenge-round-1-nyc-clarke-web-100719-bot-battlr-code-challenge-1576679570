import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
	const { bots, enlistBot } = this.props
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
    		  {/* Collection of all bots */}
			  { bots.map(bot => <BotCard bot={bot} key={bot.id} enlistBot={enlistBot} />) }

    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
