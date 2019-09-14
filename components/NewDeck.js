import React, { Component } from 'react'
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { submitEntry, removeEntry, saveDeckTitle } from '../utils/api'


function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}>
        <Text>SUBMIT</Text>
    </TouchableOpacity>
  )
}


class NewDeck extends Component {

  state = {
    cat: 'blue',
    dog: 'green'
  }
  submit = () => {
    console.log("New Deck submit")
    // const key = '123'
    // const entry = this.state
    // submitEntry({key, entry})
    saveDeckTitle('hi')
  }

  remove = () => {
    console.log("New Deck remove")
    key = '123'
    removeEntry(key)
  }

  render() {
    console.log("New Deck")
    return (
        <View>
           <Text>New Deck: What is the name of your new deck?</Text>
           <TextInput
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
             placeholder="Name of your new deck here!"
             // onChangeText={(text) => this.setState({text})}
             // value={this.state.text}
           />


           <SubmitBtn onPress={this.submit} />
           <SubmitBtn onPress={this.remove} />

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
