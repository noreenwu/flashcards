
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
// import PropTypes from 'prop-types'


class DeckListItem extends Component {

  render() {

    return (
        <View>
           <Text>Deck List Item</Text>
           <Text>Deck num cards</Text>

        </View>

    );
  }
}

// DeckListItem.propTypes = {
//   deckTitle: PropTypes.string.isRequired,
//   numCards: PropTypes.number.isRequired,
// }

export default DeckListItem
