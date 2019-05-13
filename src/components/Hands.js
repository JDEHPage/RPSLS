import React from 'react';

const Hands = (props) => {


    function allHands(props) {
        if (props.playerHand === null) {
            return(props.hands.map((hand, index) => {
                return(
                    <div key={index}>
                         <p className="hand_option" onClick={selectHand.bind(this, hand)} >{hand.name}</p>
                    </div>  
                ) 
            }))
        } else {
            for (const hand of props.hands) {
                if (hand.name === props.playerHand.name) {
                    var index = props.hands.indexOf(hand)
                    return(
                        <div key={index}>
                             <p className="hand_option" >{hand.name}</p>
                        </div> 
                    )
                }   
            }
        }
    }

    function selectHand(hand) {
        props.setHand(hand)  
    }
    

    return(
        <div>
            {allHands(props)}
        </div>
        
    )

}
export default Hands