import React, { Component } from "react";
import PlayerHand from '../components/PlayerHand'
import CompHand from '../components/CompHand'


class Game extends Component {
    constructor(props){
        super(props);
        this.state = {   
            hands:[
                {name: 'rock', 
                message: {'lizard': 'Rock crushes Lizard', 'scissors': 'Rock crushes Scissors'},
                win: ['lizard', 'scissors'] },

                {name: 'paper', 
                message: {'rock': 'Paper covers Rock ', 'spock': 'Paper disproves Spock'}, 
                win: ['rock', 'spock'] },

                {name: 'scissors', 
                message: {'lizard': 'Scissors decapitates Lizard ', 'paper': 'Scissors cuts Paper'}, 
                win: ['lizard', 'paper'] },

                {name: 'lizard', 
                message: {'paper': 'Lizard eats Paper', 'spock': 'Lizard poisons Spock'}, 
                win: ['paper', 'spock'] },

                {name: 'spock', 
                message: {'rock': 'Spock vaporizes Rock', 'scissors': 'Spock smashes Scissors'}, 
                win: ['rock', 'scissors'] }
            ],
            playerHand: []
            
        }
        // this.setPlayerHand = this.setPlayerHand.bind(this)   
    }

    componentDidMount() {
       this.setState({playerHand: this.state.hands})
   }


    
    render(){
        return(
    
           
         <div className="game">

            <PlayerHand  symbol="Rock" playerHand={this.state.playerHand} hands={this.state.hands} />
            <CompHand symbol="Paper"/>

         </div>
        
        )
    }

}
export default Game;