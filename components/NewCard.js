import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native';


class NewCard extends Component {

  render() {
    return (
        <View>
           <Text>New Card will be added to specified Deck</Text>
           <TextInput
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
             placeholder="Enter your question here!"
             // onChangeText={(text) => this.setState({text})}
             // value={this.state.text}
           />
           <TextInput
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
             placeholder="Enter your answer here!"
             // onChangeText={(text) => this.setState({text})}
             // value={this.state.text}
           />
           <Button
              title="Submit"
              onPress={() => this.props.navigation.navigate('DeckDetail')}
            >
           </Button>
        </View>

    );
  }
}


export default NewCard
