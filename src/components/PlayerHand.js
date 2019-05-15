import React from 'react';
import './PlayerHand.css';


const PlayerHand = (props) => {

    const setHand = (hand) => {
        if (props.playerHand.length > 1) {
            props.selectHand(hand)
        }
    }

    const allHands = props.playerHand.map((hand, index) => {
        return(
            <img key={index} className="hands" src={require(`../assets/${hand.name}.png`)} alt={hand.name} onClick={setHand.bind(this, hand)}/>
        ); 
      })

    

    return(
        <div className="player-hand"> 
            <p>PlayerHand</p>
            <div >
                {allHands}
            </div>
        </div>
    )

}
export default PlayerHand