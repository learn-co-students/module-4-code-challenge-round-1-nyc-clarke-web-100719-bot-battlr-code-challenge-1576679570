import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  botsToRender = () => {
	  return (
		  this.props.bots.map(bot => 
	  		<BotCard 
				key={bot.id+"-"+bot.name}
				bot={bot}
				clickHandle={this.props.clickToFire}
			/>	
	  ));
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
            {this.botsToRender()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
