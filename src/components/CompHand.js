import React from 'react';
import './CompHand.css';

const CompHand = (props) => {


if (props.compHand !== null) {
    return(
        <div className="comp-hand">
           
            <div>
                <img className="hands" src={require(`../assets/${props.compHand.name}.png`)} alt={props.compHand.name} />
            </div>
        </div>
    )
} else {
    return(
        null
    )
}
    
    
}
export default CompHand