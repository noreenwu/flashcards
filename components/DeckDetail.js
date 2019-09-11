import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
// import PropTypes from 'prop-types'

class DeckDetail extends Component {

  render() {
    return (
        <View>
           <Text>Deck Detail Page: Deck Name</Text>
           <Text>num cards</Text>

           <Button
              title="Add Card"
              onPress={() => this.props.navigation.navigate('NewCard')}
            >
           </Button>
           <Button
              title="Quiz Me"
              onPress={() => this.props.navigation.navigate('Quiz')}
            >
           </Button>
           <Button
              title="Delete Deck"
              onPress={() => this.props.navigation.navigate('AllDecks')}
            >
           </Button>
        </View>

    );
  }
}

// DeckDetail.propTypes = {
//   deckId: PropTypes.number.isRequired,
// }

export default DeckDetail
