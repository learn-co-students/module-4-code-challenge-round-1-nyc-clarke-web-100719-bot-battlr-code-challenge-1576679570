import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  // STEP THREE : Removing Bot from BotArmy
  // bots will add to army on collection bot click and be removed on army bot click (CONDITIONAL rendering needed)
  
  renderBotArmy = () => {
    return this.props.bots.map((bot)=>{
      if(bot.inMyArmy) {
        return <BotCard
          key={bot.id}
          {...bot}
          removeBot={this.props.removeBot}
        />
      } else {
        return null
      }
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            <strong> Your Bot Army</strong> 
            {this.renderBotArmy()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
