
import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import PropTypes from 'prop-types'
import { cardOrCards } from '../utils/helpers'

class DeckListItem extends Component {


  render() {

    const { name, deck, deleteDeck, updateDeck } = this.props

    return (
        <View>
            <ListItem style={styles.listItem}
               key={name}
               title={name}
               subtitle={`${deck.questions.length} ${cardOrCards(deck.questions.length)}`}

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

const styles = StyleSheet.create({
  listItem: {
    marginTop: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#cbd2d9',
    borderBottomColor: '#cbd2d9'
  },
});
