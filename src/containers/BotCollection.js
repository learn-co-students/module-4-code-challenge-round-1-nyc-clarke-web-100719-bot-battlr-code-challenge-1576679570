import React from "react";
import BotCard from "../components/BotCard";
import PropTypes from 'prop-types';


class BotCollection extends React.Component {
    //your code here

    static defaultProps = {
        bots: []
    };

    static propTypes = {
        bots: PropTypes.array
    };

    render() {

        // console.log(`BOTS ${JSON.stringify(this.props.bots)}`);

        return (
            <div className="ui four column grid">
                <div className="row">
                    {/*...and here..*/}
                    Collection of all bots

                    {
                        this.props.bots.map((bot, index) => {
                            return <BotCard key={index}
                                            bot={bot}
                                            onClickBotID={this.props.onClickBotID}/>
                        })
                    }
                </div>
            </div>
        );
    }

};

export default BotCollection;
