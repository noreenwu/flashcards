
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { ListItem } from 'react-native-elements'
import PropTypes from 'prop-types'


class DeckListItem extends Component {


  cardOrCards(len) {
    if (len === 1) {
      return 'card'
    }
    else {
      return 'cards'
    }
  }

  render() {

    const { name, deck, deleteDeck, updateDeck } = this.props

    return (
        <View>
            <ListItem
               key={name}
               title={name}
               subtitle={`${deck.questions.length} ${this.cardOrCards(deck.questions.length)}`}

               onPress={() => this.props.navigate('DeckDetail',
                                                   { deleteDeck: this.props.deleteDeck,
                                                     updateDeck: this.props.updateDeck,
                                                     deck: this.props.deck }
                                                   )}
            />

        </View>

    );
  }
}

DeckListItem.propTypes = {
  deck: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  deleteDeck: PropTypes.func.isRequired,
  updateDeck: PropTypes.func.isRequired
}

export default DeckListItem
