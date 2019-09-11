
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
import DeckListItem from './DeckListItem'
// import DeckDetail from './DeckDetail'

class AllDecks extends Component {
  render() {
    return (
      <View>
        <Text>All Decks!</Text>

        <DeckListItem
                      />
                      <Button
                         title="Deck Detail"
                         onPress={() => this.props.navigation.navigate('DeckDetail')}
                       >
                      </Button>

        <DeckListItem
                      />

        <DeckListItem
                      />

        <Button
          title="New Deck"
          onPress={() => this.props.navigation.navigate('NewDeck')}
        />

      </View>
    );
  }
}

export default AllDecks
