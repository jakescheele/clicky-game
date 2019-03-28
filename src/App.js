import React from 'react';
import Header from "./components/header";
import Jumbotron from "./components/jumbotron";
import Card from "./components/card";
// import Characters from "chacters.json"
import experiments from "../public/experiments.json";
import "./App.css";

class App extends React.Component {
  state = {
    score: 0,
    cards: experiments

  }


  shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
    return array
  }

  clickHandler = (id) => {
    // console.log(event);
    // if card has already been clicked, gameOver
    let cardClicked = this.state.cards.find(card => (card.id === id));
    if (cardClicked.clicked)
      this.gameOver()
    // else change image state to clicked and shuffle and increase score
    else {
      let newArray = this.state.cards.map(card => {
        if (card.id === id) {
          card.clicked = true
        }
        return card
      })
      this.setState({
        score: this.state.score + 1,
        cards: this.shuffle(newArray)
      })
      if (this.state.score >= 16) {
        this.gameOver(true);
      }
    }
  }

  gameOver = (gameResults) => {
    console.log(experiments)
    // make all clicked values false
    let newArray = this.state.cards.map(card => {
      card.clicked = false
      return card
    })
    // set score to 0 and shuffle
    this.setState({
      score: 0,
      cards: newArray
    })
    if (gameResults)
      alert("You win!")
    else
      alert("You lose! Try again!")
  }

  render() {
    return (
      <>
        <div className="container">
        <Header
          score={this.state.score}
        />
        <Jumbotron />
          <div className="grid">
            {this.state.cards.map(card => {
              return (
                <Card
                  key={card.id}
                  id={card.id}
                  src={card.src}
                  clicked={card.clicked}
                  clickHandler={this.clickHandler}
                />
              )
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
