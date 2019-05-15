import React from 'react';
import './CompHand.css';

const CompHand = (props) => {

    return(
        <div className="comp-hand">
           
            <div>
                {props.compHand.name}
            </div>
        </div>

    )
    
}
export default CompHand