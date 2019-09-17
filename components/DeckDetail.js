import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types'

class DeckDetail extends Component {

  deleteThisDeck(deleteFxn, deckName, navFxn) {

    deleteFxn(deckName)

    navFxn('AllDecks')    // navigate back to main screen

  }

  render() {
    const { navigation } = this.props
    const { params} = this.props.navigation.state;

    const deck = params.deck
    const name = params.name
    const numCards = params.numCards
    let deleteDeck = params.deleteDeck

    return (
        <View>
           <Text>Deck Detail Page: Deck Name: {name}</Text>
           <Text>num cards: {numCards}</Text>

           <Button
              title="Add Card"
              onPress={() => this.props.navigation.navigate('NewCard')}
            >
           </Button>

           <Button
             title="New Quiz Me"
             onPress={() => this.props.navigation.navigate('Quiz',
                                                          { name: name,
                                                            deck: deck })}

           />

           <Button
              title="Delete Deck"
              onPress={() => { this.deleteThisDeck(params.deleteDeck, name, navigation.navigate)
              }}/>

        </View>

    );
  }
}

// DeckDetail.propTypes = {
//   name: PropTypes.name.isRequired,
// }

export default DeckDetail
