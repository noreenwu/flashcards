import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types'

class DeckDetail extends Component {

  deleteThisDeck(deleteFxn, deckName, navFxn) {

    deleteFxn(deckName)

    navFxn('AllDecks')    // navigate back to main screen

  }

  render() {
    const { navigation } = this.props   // used for Delete Deck
    const { params } = this.props.navigation.state;

    const { deck, deleteDeck } = params
    const numCards = deck.questions.length
    // const name = params.name
    // const numCards = params.numCards
    // let deleteDeck = params.deleteDeck

    return (
        <View>
           <Text>Deck Detail Page: Deck Name: {deck.title}</Text>
           <Text>{numCards} cards</Text>

           <Button
              title="Add Card"
              onPress={() => this.props.navigation.navigate('NewCard')}
            >
           </Button>

           <Button
             title="Quiz Me"
             onPress={() => this.props.navigation.navigate('Quiz',
                                                          { deck: deck,
                                                            deleteDeck: params.deleteDeck })}

           />

           <Button
              title="Delete Deck"
              onPress={() => { this.deleteThisDeck(params.deleteDeck, deck.title, navigation.navigate)
              }}/>

        </View>

    );
  }
}

// DeckDetail.propTypes = {
//   name: PropTypes.name.isRequired,
// }

export default DeckDetail
