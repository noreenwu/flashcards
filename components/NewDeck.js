import React, { Component } from 'react'
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { submitEntry, removeEntry, saveDeckTitle, getDecks } from '../utils/api'


function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}>
        <Text>SUBMIT</Text>
    </TouchableOpacity>
  )
}


class NewDeck extends Component {

  state = {}

  submit(updateFxn, navFxn, deleteDeck) {

    console.log("this.state ", this.state)
    if ( Object.keys(this.state).length != 0 ) {
        // use fxn to update AllDecks' state which will also update AsyncStorage
        updateFxn(this.state.text)


        const newTitle = this.state.text
        const newDeck = { title: newTitle,
                          questions:[] }

        this.setState( { text: '' })    // this clears the state and field on the screen for Create New Deck
        navFxn('DeckDetail', { deleteDeck: deleteDeck,
                               name: this.state.text,   // you must receive deleteDeck and pass it on to DeckDetail
                               numCards: 0,
                               deck: newDeck } )

    }

  }


  render() {

    const { params} = this.props.navigation.state;
    let updateFxn = params.updateDecks
    let deleteDeck = params.deleteDeck

    return (
        <View>
           <Text>New Deck: What is the name of your new deck?</Text>
           <TextInput
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
             placeholder="Name of your new deck here!"
             onChangeText={(text) => this.setState({text})}
             value={this.state.text}
           />

           <Button title='Create New Deck'
                   onPress={() =>{
                     this.submit(updateFxn, this.props.navigation.navigate, deleteDeck)
            }} />


           <Button
              title="Cancel"
              onPress={() => this.props.navigation.navigate('AllDecks')}
            >
           </Button>
        </View>

    );
  }
}


export default NewDeck
