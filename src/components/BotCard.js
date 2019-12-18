import React from "react";

const BotCard = props => {
  const { bot } = props;

  let botType;

  //**attempted to convert the binary code catchphrases into text
  // would've called binaryAgent on the catchphrase
  
  // const binaryAgent = (str) => {
  //   let binString = '';
  //   str.split(' ').map(binary => {
  //       return binString += String.fromCharCode(parseInt(binary));
  //     });
  //   return binString;
  //   }

  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={props.army ? () => props.dischargeBot(bot) : () => props.handleShowPageClick(bot)}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;
