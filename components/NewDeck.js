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

  submit(createDeckFxn, navFxn, deleteDeck, updateDeck) {

    console.log("this.state ", this.state)
    if ( Object.keys(this.state).length != 0 ) {
        // use fxn to update AllDecks' state which will also update AsyncStorage
        createDeckFxn(this.state.text)


        const newTitle = this.state.text
        const newDeck = { title: newTitle,
                          questions:[] }

        this.setState( { text: '' })    // this clears the state and field on the screen for Create New Deck
        navFxn('DeckDetail', { deleteDeck: deleteDeck,
                               updateDeck: updateDeck,
                               deck: newDeck } )
                               // navFxn('DeckDetail', { deleteDeck: deleteDeck,
                               //                        name: this.state.text,
                               //                        numCards: 0,
                               //                        deck: newDeck } )



    }

  }


  render() {

    const { params} = this.props.navigation.state;
    let createDeckFxn = params.createNewDeck
    let deleteDeck = params.deleteDeck
    let updateDeck = params.updateDeck
    console.log ("NewDeck updateDeck fxn is ", params.updateDeck)

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
                     this.submit(createDeckFxn, this.props.navigation.navigate, deleteDeck, updateDeck)
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
