import React from 'react';

const CompHand = (props) => {

    return(
        <div className="comp-hand">
            <p>CompHand</p>
            <div>
                {props.compHand.name}
            </div>
        </div>

    )
    
}
export default CompHand