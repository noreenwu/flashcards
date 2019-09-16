import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';

class Quiz extends Component {

  render() {

    console.log("Quiz Me")
    const { params} = this.props.navigation.state;
    const deck = params.deck
    console.log("Quiz Me deck: ", deck)
    if (deck.questions.length === 0) {
        return (
           <View>
              <Text>Sorry, there aren't any cards in this deck. Create some cards first!</Text>
           </View>
        )
    }

    return (
        <View>
           <Text>Quiz: Deck Name</Text>
           <Text>num cards</Text>


           <Text>Question (click for Answer)</Text>
           <Button
              title="Correct"
                // navigates to next question or Quiz summary
            >
           </Button>
           <Button
              title="Incorrect"
              // navigates to next question or Quiz summary
            >
           </Button>
           <Text>7 of 15 cards</Text>

           <Button
              title="Cancel Quiz"
              onPress={() => this.props.navigation.navigate('DeckDetail')}

            >
            </Button>
        </View>

    );
  }
}


export default Quiz
