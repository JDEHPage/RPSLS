import React from 'react';

const PlayerHand = (props) => {

    const allHands = props.hands.map((hand, index) => {
        return(
          <p key={index}>{hand.name} </p>
        );
      })


    return(

        <div className="player-hand"> 
            <p>PlayerHand</p>
            <p>{props.symbol}</p>
            <div>
                {allHands}
            </div>
        
        
        </div>
    )

}
export default PlayerHand