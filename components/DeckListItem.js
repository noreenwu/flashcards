
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { ListItem } from 'react-native-elements'
import PropTypes from 'prop-types'


class DeckListItem extends Component {


  render() {

    const { name, deck, deleteDeck, updateDeck } = this.props

    console.log("DeskListItem: updateDeck fxn ", updateDeck)
    return (
        <View>
            <ListItem
               key={name}
               title={name}
               onPress={() => this.props.navigate('DeckDetail',
                                                   { deleteDeck: this.props.deleteDeck,
                                                     updateDeck: this.props.updateDeck,
                                                     deck: this.props.deck }
                                                   )}
            />
           <Text>{this.props.deck.questions.length} { this.props.deck.questions.length === 1? 'card' : 'cards'} </Text>

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
