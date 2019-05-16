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
            <div key={index} className={`${hand.name}`}>
                <img  className="hand-img" src={require(`../assets/${hand.name}.png`)} alt={hand.name} onClick={setHand.bind(this, hand)}/>
            </div>
        ); 
      })

    
    if (props.playerHand.length > 1) {
        return(
            <div className="pHandBox">
                <div className="select-hand"> 
                    {allHands}
                </div>
            </div>
        )  
    } else {
        return(
            <div className="player-hand"> 
                    {allHands}
            </div>
        )
    }


}
export default PlayerHand