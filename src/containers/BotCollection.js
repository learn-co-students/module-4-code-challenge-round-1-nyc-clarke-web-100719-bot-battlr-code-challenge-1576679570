import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
	state = {
		army: false
	}

  render(){
		const {robots, addToArmy, handleShowPageClick} = this.props
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {robots.map(robot => <BotCard key={robot.id} bot={robot} addToArmy={addToArmy} army={this.state.army} handleShowPageClick={handleShowPageClick} />)}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
