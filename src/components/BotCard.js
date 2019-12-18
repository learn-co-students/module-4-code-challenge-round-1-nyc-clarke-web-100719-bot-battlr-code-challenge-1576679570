import React from "react";

const BotCard = props => {

  // const { bot } = props;

  let botType;

  // switch (bot.bot_class) {
  //   case "Assault":
  //     botType = <i className="icon military" />;
  //     break;
  //   case "Defender":
  //     botType = <i className="icon shield" />;
  //     break;
  //   case "Support":
  //     botType = <i className="icon ambulance" />;
  //     break;
  //   default:
  //     botType = <div />;
  // }

  switch (props.bot_class) {
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
        // key={bot.id}
        key={props.id}
        onClick={() => props.removeOrToggle(props)}
        // onClick={() => props.addOrRemove(props)}
      >
        <div className="image">
          {/* <img alt="oh no!" src={bot.avatar_url} /> */}
          <img alt="oh no!" src={props.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {/* {bot.name} {botType} */}
            {props.name} {botType}
          </div>

          <div className="meta text-wrap">
            {/* <small>{bot.catchphrase}</small> */}
            <small>{props.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {/* {bot.health} */}
            {props.health}
          </span>

          <span>
            <i className="icon lightning" />
            {/* {bot.damage} */}
            {props.damage}
          </span>
          <span>
            <i className="icon shield" />
            {/* {bot.armor} */}
            {props.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;
