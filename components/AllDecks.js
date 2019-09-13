
import React, { Component } from 'react'
import { Text, View, Button, FlatList } from 'react-native';
import { connect } from 'react-redux'
import DeckListItem from './DeckListItem'


class AllDecks extends Component {

  componentDidMount() {
    // ultimately, load the data in from AsyncStorage
  }

  state = {
    decks: {
      React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    }
  }
  render() {

    console.log("AllDecks!")
    const deckNames = Object.keys(this.state.decks)
    let thisDeck = this.state.decks['React']
    console.log("deckNames is ", deckNames)
    return (
        <View>
          <Text>All Decks!</Text>
          <View>

          { deckNames.map(name => (
            <DeckListItem
                key={name}
                id={name}
                name={name}
                navigate={this.props.navigation.navigate}
                deck={this.state.decks[`${name}`]}
            />
          ))
          }


          </View>


          <Button
            title="New Deck"
            onPress={() => this.props.navigation.navigate('NewDeck')}
          />

        </View>

    );
  }
}

// function mapStateToProps ({decks}) {
//   return {
//     decks
//   }
// }

export default AllDecks
// export default connect(mapStateToProps)(AllDecks)
