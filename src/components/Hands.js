import React from 'react';

const Hands = (props) => {

    const allHands = props.hands.map((hand, index) => {

        if (props.playerHand === null) {
            return(
                <div key={index}>
                     <p className="hand_option" onClick={selectHand.bind(this, hand)} >{hand.name}</p>
                </div>
               
            )
        } else {

            console.log("Test!!!!");
            
        }

        
    })

    function selectHand(hand) {
        props.setHand(hand)  
    }
    
    
    // selectHand = (hand) => {
    //     console.log(hand);
    // }

    return(
        <div>
            {allHands}
        </div>
        
    )

}
export default Hands