
import React, { Component } from 'react'
import { Text, View, Button, FlatList, Fragment } from 'react-native';
import { connect } from 'react-redux'
import DeckListItem from './DeckListItem'
// import { ListItem } from 'react-native-elements'
import { initDecks, getDecks } from '../utils/api'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/dummyReducer'
import { saveDeckTitle } from '../utils/api'

class AllDecks extends Component {

   componentDidMount() {
    console.log("AllDecks: ComponentDidMount")

    initDecks()
      .then(getDecks()
        .then((decks) => {
          this.setState(() => ({
            decks
          }))
      }
    ))}

  state = {
    decks: {}           // initial state

  }

  deleteDeck(title) {
     console.log("AllDecks: deleteDeck")
     if (title) {
        // delete deck from this component's state

        // delete deck from AsyncStorage

        console.log("AllDecks: deleteDeck state ", this.state)
        // let decksCopy = Object.assign(this.state.decks, {})
        //
        // decksCopy[title] = undefined
        // delete decksCopy[title]
        //
        // this.setState({ decks: decksCopy })
     }
  }

  updateDecks(data){
    // being used to add a new deck. may be modified to take more general updates

        if (data) {
          saveDeckTitle(data)        // update AsyncStorage
          console.log("updateDecks", data)
          // update this component's state
          let newDeck = { [data]: {title: data,
                                   questions: [] }}
          let origDecks = this.state.decks

          let mergedDecks = Object.assign(origDecks, newDeck)

          console.log("mergedDecks: ", mergedDecks)

          this.setState({ decks: mergedDecks })
         }
    }

  render() {
        const deckNames = Object.keys(this.state.decks)
        const deckValues = Object.values(this.state.decks)
        console.log("deckValues", deckValues)
        console.log("deckNames", deckNames)
        return (
            <View>

                  <Text>All Decks!</Text>
                      <View>
                      { deckValues.map(val => (

                        <DeckListItem
                            key={val.title}
                            deleteDeck={this.deleteDeck.bind(this)}
                            name={val.title}
                            navigate={this.props.navigation.navigate}
                            deck={this.state.decks[`${val.title}`]}
                        />

                      ))
                      }
                  </View>
                  <Button
                    title="New Deck"
                    onPress={() => this.props.navigation.navigate('NewDeck',
                                                                 { deleteDeck: this.deleteDeck.bind(this),
                                                                   updateDecks: this.updateDecks.bind(this) })}
                  />

            </View>
    )
  }
}

function mapStateToProps ({decks}) {
  return {
    hello: 1
  }
}


export default AllDecks
// export default connect(mapStateToProps)(AllDecks)
