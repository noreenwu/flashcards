
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { ListItem } from 'react-native-elements'
import PropTypes from 'prop-types'


class DeckListItem extends Component {


  render() {
    console.log("DeckListItem ", this.props.deck)
    const { name, deck } = this.props
    console.log("DeckListItem name ", this.props.deleteDeck)

    return (
        <View>
            <ListItem
               key={this.props.name}
               title={this.props.name}
            />
           <Text>Deck num cards: {this.props.deck.questions.length}</Text>
           <Button
              title="Deck Detail"
              onPress={() => this.props.navigate('DeckDetail',
                                                  { deleteDeck: this.props.deleteDeck,
                                                    name: this.props.name,
                                                    numCards: `${deck.questions.length}`}
                                                  )}
            >
            </Button>
        </View>

    );
  }
}

DeckListItem.propTypes = {
  deck: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
}

export default DeckListItem
