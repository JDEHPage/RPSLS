import React from 'react';
import './CompHand.css';

const CompHand = (props) => {


if (props.compHand !== null) {
    return(
        <div className="comp-hand">
                <img className="cHand" src={require(`../assets/${props.compHand.name}.png`)} alt={props.compHand.name} />
        </div>
    )
} else {
    return(
        null
    )
}
    
    
}
export default CompHand