
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
// import PropTypes from 'prop-types'


class DeckListItem extends Component {

  render() {
    console.log("DeckListItem ", this.props.decks)
    return (
        <View>
           <Text>{this.props.name}</Text>
           <Text>Deck num cards</Text>
           <Button
              title="Deck Detail"
              onPress={() => this.props.navigate('DeckDetail')}
            >
           </Button>
        </View>

    );
  }
}

// DeckListItem.propTypes = {
//   deckTitle: PropTypes.string.isRequired,
//   numCards: PropTypes.number.isRequired,
// }

export default DeckListItem
