import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types'

class DeckDetail extends Component {


  deleteDeck() {
    // call AllDecks' deleteDeck (save state and Storage)

    // go back to AllDecks page
  }

  deleteThisDeck(deleteFxn, deckName, navFxn) {
    console.log("DeckDetail: deleteThisDeck", deleteFxn)
    console.log("DeckDetail: deckName", deckName)

    deleteFxn(deckName)
     //navFxn('AllDecks')
  }

  render() {
    const { navigation } = this.props
    const { params} = this.props.navigation.state;

    const deck = params.deck
    const name = params.name
    const numCards = params.numCards
    let deleteDeck = params.deleteDeck

    console.log("Deck Detail name ", name)
    console.log("Deck Detail numCards ", numCards)
    console.log("Deck Detail delete func", params.deleteDeck)
    console.log("Deck Detail deck ", deck)
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
