import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types'

class DeckDetail extends Component {

  render() {
    const { navigation } = this.props
    const { params} = this.props.navigation.state;

    const name = params.name
    const numCards = params.numCards

    console.log("Deck Detail name ", name)
    console.log("Deck Detail numCards ", numCards)

    return (
        <View>
           <Text>Deck Detail Page: Deck Name: {name}</Text>
           <Text>num cards: {numCards}</Text>

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
//   name: PropTypes.name.isRequired,
// }

export default DeckDetail
