import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
//   state={
// 	  bots: this.props.bots
//   }

  render(){
	//   console.log("from collection", this.props.bots);
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(bot => { return <BotCard bot={bot} key={bot.id} handleClick={this.props.handleClick}/>})}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
