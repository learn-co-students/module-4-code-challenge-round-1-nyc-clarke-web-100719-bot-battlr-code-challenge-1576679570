import React from 'react';


const SortBotForm = (props) => {
    return(
        <form style={{margin: '10px'}}>
            <h2>Sort Robots By: </h2>
            <lable>
                health: 
                <input name="sort" type='radio' value="health" checked={null} onChange={(e) => props.handleSortChange(e)} />
            </lable>
            <label>
                damage: 
                <input name="sort" type='radio' value="damage" checked={null} onChange={(e) => props.handleSortChange(e)} />
            </label>
            <label>
                armor:
                <input name="sort" type='radio' value="armor" checked={null} onChange={(e) => props.handleSortChange(e)} />
            </label>
            
        </form>
    )
}

export default SortBotForm