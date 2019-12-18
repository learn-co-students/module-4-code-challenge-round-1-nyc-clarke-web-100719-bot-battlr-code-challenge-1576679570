import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
	state = {
		army: false
	}
	

	renderBots = () => {

		const {robots, addToArmy, handleShowPageClick, sort} = this.props

		let robotsToDisplay = robots;

		if (sort) {
			robotsToDisplay = robotsToDisplay.sort((robotA, robotB) => robotB[sort] - robotA[sort])
		} 
		
		return robotsToDisplay.map(robot => <BotCard key={robot.id} bot={robot} addToArmy={addToArmy} army={this.state.army} handleShowPageClick={handleShowPageClick} />)
	}

  render(){
		
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
