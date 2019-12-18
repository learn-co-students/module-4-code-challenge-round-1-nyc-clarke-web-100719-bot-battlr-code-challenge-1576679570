import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    const { enlistedBots } = this.props
    
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            {/* Your Bot Army */}
            { enlistedBots.map(bot => <BotCard bot={bot} key={bot.id} />) }

          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
