import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  
  state = {
	  //how bots are sorted
	  sortBy: "none",

	  //how bots are filtered
	  filter: "none"
  }

//   Lifecycle method for debugging purposes only
//   componentDidUpdate() {
// 	  console.log(this.state);
//   }

  //onChange callback used to set filter/sort on bots
  handleChange = (type, value) => {
	  this.setState({
		  [type]: value
	  })
  }

  //Returns all bots to be rendered per filter and/or sort specified by user
  botsToRender = () => {
	let toRender = this.props.bots;

	//Filtered
	if(this.state.filter !== 'none'){
		toRender = toRender.filter((bot)=>
				bot['bot_class'].toLowerCase()===this.state.filter
			);
	}

	//UnSorted
	if(this.state.sortBy ==='none'){
		return (
			toRender.map(bot => 
				<BotCard 
					key={bot.id+"-"+bot.name}
					bot={bot}
					clickHandle={this.props.clickToShowSpecs}
				/>	
		));	
	}
	//Sorted
	else{
		let nonStateArr = [...toRender];
		nonStateArr.sort((botA,botB)=>{
			return (botB[this.state.sortBy]-botA[this.state.sortBy])
		});
		return (
			nonStateArr.map(bot => 
				<BotCard 
					key={bot.id+"-"+bot.name}
					bot={bot}
					clickHandle={this.props.clickToShowSpecs}
				/>
		));
	}
  }

  //Renders two select forms for user to specify Sort and Filter for bots, as well as the bots themselves
  render(){
  	return (
  	  <div className="ui four column grid">
		{/*Sort and Filter Select Forms*/}
		Sort By: <select
				onChange={(e)=>this.handleChange('sortBy',e.target.value)}
				value={this.state.sortBy}
			>
			<option value="none">No Sort</option>
			<option value="health">Health</option>
			<option value="damage">Damage</option>
			<option value="armor">Armor</option>
			</select>
		Filter: <select
				onChange={(e)=>this.handleChange('filter',e.target.value)}
				value={this.state.filter}
			>
			<option value="none">No Filter</option>
			<option value="support">Support Only</option>
			<option value="assault">Assault Only</option>
			<option value="defender">Defender Only</option>
			</select>
			{/* Bots to be Rendered */}
    		<div className="row">
    		  Collection of all bots
			  {this.botsToRender()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
