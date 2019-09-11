import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';

class Quiz extends Component {

  render() {
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
        </View>

    );
  }
}


export default Quiz
