import React from "react";

const BotCard = props => {

  let botType;

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
// STEP 3: On user click on bot card I want to add that card to the bot army
// Bot collection will always be the same, (no cards get removed from collection)
// Bot army will change (cards can be added and removed)
// 1. pass down a function as props from bot page for adding a bot to bot army and call it on click
// 2. pass down a function as props from bot page for removing a bot from bot army and call it on click
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={props.id}
        onClick={() => props.addBot ? props.addBot(props.id) : props.removeBot(props.id)}
      >
        <div className="image">
          <img alt="oh no!" src={props.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {props.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{props.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {props.health}
          </span>

          <span>
            <i className="icon lightning" />
            {props.damage}
          </span>
          <span>
            <i className="icon shield" />
            {props.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;
