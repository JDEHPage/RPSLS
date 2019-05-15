import React from 'react'

const Results = (props) => {
    

    return(
        <div className="results">
            <div>
                {props.winMessage}
            </div>
            <div>
                <p>Player</p>
                <p>{props.playerScore}</p>
                <p>Comp</p>
                <p>{props.compScore}</p>
            </div>
        </div>
    )
}
export default Results