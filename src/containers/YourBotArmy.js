import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  // stat={
  //   bot: this.props.bot
  // }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {<BotCard bot= {this.props.bot}/>}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
