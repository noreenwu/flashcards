import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native';


class NewDeck extends Component {

  render() {
    return (
        <View>
           <Text>New Deck: What is the name of your new deck?</Text>
           <TextInput
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
             placeholder="Name of your new deck here!"
             // onChangeText={(text) => this.setState({text})}
             // value={this.state.text}
           />
           <Button
              title="Submit"
              onPress={() => this.props.navigation.navigate('AllDecks')}
            >
           </Button>
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
