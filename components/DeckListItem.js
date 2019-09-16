
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { ListItem } from 'react-native-elements'
import PropTypes from 'prop-types'


class DeckListItem extends Component {

  handleDeleteDeck() {

  }

  render() {
    console.log("DeckListItem ", this.props.deck)
    const { name, deck } = this.props
    console.log("DeckListItem name ", this.props.deleteDeck)

    return (
        <View>
            <ListItem
               key={this.props.name}
               title={this.props.name}
               onPress={() => this.props.navigate('DeckDetail',
                                                   { deleteDeck: this.handleDeleteDeck,
                                                     name: this.props.name,
                                                     numCards: `${deck.questions.length}`,
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
}

export default DeckListItem
