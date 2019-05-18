import React, { Component } from "react";
import PlayerHand from '../components/PlayerHand'
import CompHand from '../components/CompHand'
import Results from '../components/Results'
import './Game.css'


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
            compScore: 5,
            playing: true
            
        }
        this.selectHand = this.selectHand.bind(this) 
        this.calcWin = this.calcWin.bind(this)
        this.playAgain = this.playAgain.bind(this)
        this.resetGame = this.resetGame.bind(this)
        this.setPlaying = this.setPlaying.bind(this)
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
        var winner = ""
        var message = ""
        for (const key in pHand.message) {
            if (cHand.name === key) {
                message = pHand.message[key].toUpperCase()  
                winner = "player"  
            }
        }

        for (const key in cHand.message) {
            if (pHand.name === key) {
                message = cHand.message[key].toUpperCase()  
                winner = "comp" 
            }
        }

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

        this.setPlaying()

   }

   setPlaying(){
       if(this.state.playerScore + this.state.compScore <= 1){
           this.setState({playing: true})
       }
   }

   playAgain(){
        this.setState({playerHand: this.state.hands, 
                        compHand: null, 
                        winMessage: null}) 
   }

   resetGame(){
        this.setState({playerHand: this.state.hands, 
                        compHand: null, 
                        winMessage: null, 
                        playerScore: 0, 
                        compScore: 0,
                        playing: false
                    }) 
   }
   


    
    render(){
        return(
                <div className="game">
                        
                    {this.state.playing === false &&
                        <p className="intro">WELCOME TO RPSLS</p>
                    }
                                         
       
                       <PlayerHand
                       playerHand={this.state.playerHand} 
                       hands={this.state.hands} 
                       selectHand={this.selectHand}
                       compHand={this.state.compHand}
                       />
                   
                       <Results
                       winMessage={this.state.winMessage}
                       />
                  
                       <CompHand
                       compHand={this.state.compHand}
                       />

                    {this.state.playing === true && this.state.playerHand.length === 1 &&
                    <div>
                       <button className="game-button" onClick={this.playAgain}>
                           Play Again
                       </button>
                    </div>
                    }
                   
       
                    <div className="scoreboard">
                       <div className="score">
                           SCORE
                       </div>
       
                       <div className="scorecard">
                           <p className="playerscore">PLAYER</p>
                           <p id="numbers">{this.state.playerScore}</p>
                           <p>|</p>
                           <p id="numbers">{this.state.compScore}</p>
                           <p>HAL 9000</p> 
                       </div>
                    </div>
                   
                    {this.state.playing === true &&
                    <div>
                       <button className="game-button" id="reset" onClick={this.resetGame}>
                           Reset Game
                       </button>
                    </div>
                    }

                    <div className="infobox">
                    {this.state.playing === false &&
                        <p className="instruct">FIRST TO 5 POINTS WINS - SELECT YOUR TOOL</p>
                    }

                    <div className="hal-box">
                    {this.state.compScore === 1 && this.state.playerHand.length > 1 &&
                        <>
                        <img  className="hal-1" src={require("../assets/hal.png")} alt="HAL"/>
                        <p className="hal-talk">HELLO</p>
                        </>
                    }
                    {this.state.compScore === 2 && this.state.playerHand.length > 1 &&
                       
                        <img  className="hal-2" src={require("../assets/hal.png")} alt="HAL"/>
                        
                    }
                    {this.state.compScore === 3 && this.state.playerHand.length > 1 &&
                        <>
                        <img  className="hal-3" src={require("../assets/hal.png")} alt="HAL"/>
                        <p className="hal-talk">CAREFUL ONLY 2 LEFT</p>
                        </>
                    }
                    {this.state.compScore === 4 && this.state.playerHand.length > 1 &&
                 
                        <img  className="hal-4" src={require("../assets/hal.png")} alt="HAL"/>
                   
                    }
                    {this.state.compScore === 5 && this.state.playerHand.length > 1 &&
                 
                    <img  className="hal-5" src={require("../assets/hal.png")} alt="HAL"/>
            
                    }
                    

                    </div>

                    </div>

                </div>
               )
        } 




        
     
    }

export default Game;