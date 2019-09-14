
import React, { Component } from 'react'
import { Text, View, Button, FlatList } from 'react-native';
import { connect } from 'react-redux'
import DeckListItem from './DeckListItem'
import { initDecks, getDeck } from '../utils/api'

class AllDecks extends Component {

  componentDidMount() {

    // initDecks().then(function(response) {
    //   console.log("Success", response);
    // }, function(error) {
    //   console.log("error", error);
    // })
let d;
    initDecks().then(function(response) {
      console.log("Success!", response);
      d = getDeck('React')
    }, function(error) {
      console.error("Failed!", error);
    })
    d = getDeck('React')
    console.log("component did mount")
    // let d = retrieveItem('React');
    console.log("d", d)

  }

  state = {
    decks: {}

  }
  render() {

    console.log("AllDecks!")
    const deckNames = Object.keys(this.state.decks)
    let thisDeck = this.state.decks['React']
    console.log("Hello deckNames is ", deckNames)
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
