
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
// import { connect } from 'react-redux'
import DeckListItem from './DeckListItem'


class AllDecks extends Component {


  render() {

    console.log("AllDecks!")
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

// function mapStateToProps ({decks}) {
//   return {
//     decks
//   }
// }

export default AllDecks
// export default connect(mapStateToProps)(AllDecks)
