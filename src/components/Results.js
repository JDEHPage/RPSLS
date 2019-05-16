import React from 'react'
import './Results.css';

const Results = (props) => {
    
if (props.winMessage !== null) {
    return(
        <div className="results-box">
                {props.winMessage}
        </div>
    ) 
} else {
    return(
        null
    )
}
    

}
export default Results