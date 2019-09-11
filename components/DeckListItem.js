
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types'


class DeckListItem extends Component {

  render() {

    return (
        <View>
           <Text>{this.props.deckTitle}</Text>
           <Text>{this.props.numCards} cards</Text>
           <Button
              title="Submit"

            >
           </Button>
        </View>

    );
  }
}

DeckListItem.propTypes = {
  deckTitle: PropTypes.string.isRequired,
  numCards: PropTypes.number.isRequired,
}

export default DeckListItem
