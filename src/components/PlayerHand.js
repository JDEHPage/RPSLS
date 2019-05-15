import React from 'react';

const PlayerHand = (props) => {

    const setHand = (hand) => {
        if (props.playerHand.length > 1) {
            props.selectHand(hand)
        }
    }

    const allHands = props.playerHand.map((hand, index) => {
        return(
            <p key={index} onClick={setHand.bind(this, hand)}>{hand.name} </p>
          ); 
      })

    

    return(

        <div className="player-hand"> 
            <p>PlayerHand</p>
            <div>
                {allHands}
            </div>
        </div>
    )

}
export default PlayerHand