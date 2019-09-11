
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
import DeckListItem from './DeckListItem'

class AllDecks extends Component {
  render() {
    return (
      <View>
        <Text>All Decks!</Text>

        <DeckListItem deckTitle={'Speak French'}
                      numCards={3}
                      />

        <DeckListItem deckTitle={'Speak Russian'}
                      numCards={7}
                      />

        <DeckListItem deckTitle={'Earth Science'}
                      numCards={12}
                      />

      </View>
    );
  }
}

export default AllDecks
