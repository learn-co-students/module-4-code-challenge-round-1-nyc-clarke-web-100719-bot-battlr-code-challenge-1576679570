import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

    static defaultProps ={
        bots: []
    };

    ifNotListed = () => {
        if (this.props.armyBotsListed !== 0) {
            return this.props.armyBotsListed.map((bot, index) => {
                return <BotCard key={index} bot={bot} />
            })
        }
    };

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
              {
                this.ifNotListed()
              }
              {/*<BotCard armyBotsListed={this.state.armyBotsListed}*/}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
