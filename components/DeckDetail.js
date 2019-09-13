import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types'

class DeckDetail extends Component {

  render() {
    const { navigation } = this.props
    const name = navigation.getParam('name', 'noname')
    const numCards = navigation.getParam('numCards', 0)

    console.log("Deck Detail name ", this.props.name)
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
