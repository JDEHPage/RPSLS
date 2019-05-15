import React, { Component } from "react";
import PlayerHand from '../components/PlayerHand'
import CompHand from '../components/CompHand'
import Results from '../components/Results'


class Game extends Component {
    constructor(props){
        super(props);
        this.state = {   
            hands:[
                {name: 'rock', 
                message: {'lizard': 'Rock crushes Lizard', 'scissors': 'Rock crushes Scissors'} },

                {name: 'paper', 
                message: {'rock': 'Paper covers Rock ', 'spock': 'Paper disproves Spock'} },

                {name: 'scissors', 
                message: {'lizard': 'Scissors decapitates Lizard ', 'paper': 'Scissors cuts Paper'} },

                {name: 'lizard', 
                message: {'paper': 'Lizard eats Paper', 'spock': 'Lizard poisons Spock'} },

                {name: 'spock', 
                message: {'rock': 'Spock vaporizes Rock', 'scissors': 'Spock smashes Scissors'} }
            ],

            playerHand: [],
            compHand: null,
            winMessage: null,
            playerScore: 0,
            compScore: 0
            
        }
        this.selectHand = this.selectHand.bind(this) 
        this.calcWin = this.calcWin.bind(this)
        this.playAgain = this.playAgain.bind(this)
        this.resetGame = this.resetGame.bind(this)
    }

    componentDidMount() {
       this.setState({playerHand: this.state.hands})   
    }

   selectHand(hand){
        this.setState({playerHand: [hand]}) 
        var randomHand = hand
        while (randomHand.name === hand.name) {
            randomHand = this.state.hands[Math.floor(Math.random() * this.state.hands.length)];  
        }
        this.setState({compHand: randomHand})
        this.calcWin(hand, randomHand)
   }


   calcWin(pHand, cHand) {
        // console.log(pHand.win);
        // console.log(cHand.name);
        var winner = ""
        var message = ""
        for (const key in pHand.message) {
            if (cHand.name === key) {
                message = pHand.message[key] 
                winner = "player"  
            }
        }

        for (const key in cHand.message) {
            if (pHand.name === key) {
                message = cHand.message[key]  
                winner = "comp" 
            }
        }
        console.log(message);
        this.setState({winMessage: message})

        if (winner === "player") {
            this.setState(prevState => {
                return {playerScore: prevState.playerScore + 1}
             })
        } else if(winner === "comp"){
            this.setState(prevState => {
                return {compScore: prevState.compScore + 1}
             })
        }
   }

   playAgain(){
        this.setState({playerHand: this.state.hands, compHand: null, winMessage: null}) 
   }

   resetGame(){
        this.setState({playerHand: this.state.hands, compHand: null, winMessage: null, playerScore: 0, compScore: 0}) 
   }
   


    
    render(){
        return(
    
           
         <div className="game">
            <div>
                <PlayerHand
                playerHand={this.state.playerHand} 
                hands={this.state.hands} 
                selectHand={this.selectHand}
                compHand={this.state.compHand}
                />
            </div>
            <div>
                <Results
                winMessage={this.state.winMessage}
                />
            </div>
            <div>
                <CompHand
                compHand={this.state.compHand}
                />
            </div>
        
            <div>
                <button onClick={this.playAgain}>
                    Play Again
                </button>
            </div>

            <div>
                <p>Player</p>
                <p>{this.state.playerScore}</p>
                <p>Comp</p>
                <p>{this.state.compScore}</p>
            </div>
            
            <div>
                <button onClick={this.resetGame}>
                    Reset Game
                </button>
            </div>
            

         </div>
        
        )
    }

}
export default Game;