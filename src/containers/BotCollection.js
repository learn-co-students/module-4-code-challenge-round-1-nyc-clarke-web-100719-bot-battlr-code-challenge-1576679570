import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {

	state = {
		view: "all",
		showBot: {}
	}

	showBot = (id) => {
		console.log(this.props.bots.find(bot => bot.id === id))
		let botToShow = this.props.bots.find(bot => bot.id === id)
		this.setState({
			view: "bot",
			showBot: botToShow
		})
	}

	goBack = () => {
		this.setState({
			view: "all"
		})
	}

	determineShow = () => {
		if (this.state.view === "all") {
			return this.props.bots.map(bot => <BotCard key={bot.id} {...bot} showBot={this.showBot} switchBot={this.props.addBotToArmy}/>)
		} else if (this.state.view === "bot") {
			return <BotSpecs key={this.state.showBot.id} {...this.state.showBot} goBack={this.goBack} switchBot={this.props.addBotToArmy}/>
		}
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			  {this.determineShow()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
