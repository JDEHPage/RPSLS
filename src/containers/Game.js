import React, { Component } from "react";
import CompSelect from '../components/Hands'
// import PlayerSelect from '../components/PlayerSelect'

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            playerHand: null,
            compHand: null,
            hands:[
                {name: 'rock', win: ['lizard', 'scissors']},
                {name: 'paper', win: ['rock', 'spock']},
                {name: 'scissors', win: ['lizard', 'paper']},
                {name: 'lizard', win: ['paper', 'spock']},
                {name: 'spock', win: ['rock', 'scissors']}
            ]
        }
    }

    selectHand(hand){

    }


    render(){
        return(
    
            <div>
                <p>Hello World</p>
                <Hands hands={this.state.hands}></Hands>
            </div>
        
        )
    }

}
export default Game;