
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { ListItem } from 'react-native-elements'
import PropTypes from 'prop-types'


class DeckListItem extends Component {


  render() {

    const { name, deck, deleteDeck } = this.props

    return (
        <View>
            <ListItem
               key={this.props.name}
               title={this.props.name}
               onPress={() => this.props.navigate('DeckDetail',
                                                   { deleteDeck: this.props.deleteDeck,
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
  deleteDeck: PropTypes.func.isRequired
}

export default DeckListItem
