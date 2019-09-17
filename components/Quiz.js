import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
import QuizCard from './QuizCard'

class Quiz extends Component {

  render() {
    const { params } = this.props.navigation.state;
    console.log("Quiz Me: the delete funcion pass in is ", params.deleteDeck)
    const { deck } = this.props.navigation.state.params;

    const numQuestions = deck.questions.length

    if (deck.questions.length === 0) {
        return (
           <View>
              <Text>Sorry, there aren't any cards in the {deck.title} deck. Create some cards first!</Text>
           </View>
        )
    }

    return (
        <View>
           <Text>{deck.title}</Text>
           <Text>{numQuestions} cards</Text>

           <QuizCard deck={deck} navFxn={this.props.navigation.navigate} />

           <Button
             title="Deck Options"
             onPress={() => this.props.navigation.navigate('DeckDetail',
                                                          { deleteDeck: params.deleteDeck,
                                                            deck: deck })}

           />
        </View>

    );
  }
}


export default Quiz
