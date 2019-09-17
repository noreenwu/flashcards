import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
import QuizCard from './QuizCard'

class Quiz extends Component {

  render() {
    console.log("Quiz Me")
    const { deck, name } = this.props.navigation.state.params;
    // const deck = params.deck

    // const { navigation } = this.props.state.params.navigate;

    console.log("Quiz Me deck: navigate function ", this.props.navigation.navigate)
    const numQuestions = deck.questions.length

    if (deck.questions.length === 0) {
        return (
           <View>
              <Text>Sorry, there aren't any cards in the {name} deck. Create some cards first!</Text>
           </View>
        )
    }

    return (
        <View>
           <Text>{deck.title}</Text>
           <Text>{numQuestions} cards</Text>

           <QuizCard deck={deck} navFxn={this.props.navigation.navigate} />


        </View>

    );
  }
}


export default Quiz
