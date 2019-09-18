
import React, { Component } from 'react'
import { Text, View, Button, FlatList, Fragment } from 'react-native';
import { connect } from 'react-redux'
import DeckListItem from './DeckListItem'
// import { ListItem } from 'react-native-elements'
import { initDecks, getDecks } from '../utils/api'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/dummyReducer'
import { deleteDeck } from '../utils/api'
import { saveDeckTitle } from '../utils/helpers'

class AllDecks extends Component {

   componentDidMount() {

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
     console.log("AllDecks: deleteDeck", title )
     if (title) {
        // delete deck from AsyncStorage
        deleteDeck(title)
          .then((res) => {
              console.log("deleted the deck from Storage")
          })

          // .then(getDecks()
          //     .then((newDecks) => {
          //       this.setState(() => ({
          //          decks: newDecks
          //       }))
          //     }))
          // .then(getDecks()
          //   .then((decks) => {
          //     this.setState(() => ({
          //       decks
          //     }))
          // }))

        // delete deck from this component's state
        let decksCopy = Object.assign(this.state.decks, {})

        console.log("editing the state manually: ", decksCopy)
        delete decksCopy[title]
        console.log("after the delete: ", decksCopy)

        this.setState({ decks: decksCopy })

     }
  }

  updateDecksOrig(data){
    // being used to add a new deck. may be modified to take more general updates

        if (data) {
          saveDeckTitle(data)        // update AsyncStorage
          console.log("updateDecks", data)
          // update this component's state
          let newDeck = { [data]: {title: data,
                                   questions: [] }}
          console.log("newDeck ", newDeck)
          let origDecks = this.state.decks

          let mergedDecks = Object.assign(origDecks, newDeck)

          console.log("mergedDecks: ", mergedDecks)

          this.setState({ decks: mergedDecks })
         }
    }


  updateDecks(title){
    // being used to add a new deck. may be modified to take more general updates

        if (title) {
          let newDeck = saveDeckTitle(title)        // helper function
          console.log("updateDecks", title)

          // update this component's state
          console.log("newDeck ", newDeck)
          let origDecks = this.state.decks

          let mergedDecks = Object.assign(origDecks, newDeck)

          console.log("mergedDecks: ", mergedDecks)

          this.setState({ decks: mergedDecks })
         }
    }


  updateDeck(deck) {
      // being used to add new card to a deck
      if (deck) {
        console.log("AllDecks: updateDeck ", deck)
        let origDecks = this.state.decks
        // let formattedDeck = { [deck.title] : deck }
        console.log("updateDeck origDecks", origDecks)
        console.log("incoming deck", deck)
        let mergedDecks = Object.assign(origDecks, deck)
        this.setState({ decks: mergedDecks })
      }
  }

  render() {
        const deckNames = Object.keys(this.state.decks)
        const deckValues = Object.values(this.state.decks)

        console.log("AllDecks state ", this.state)
        if (deckValues.length === 0) {
          return (
            <View>
               <Text>No Decks! Create one!</Text>
               <Button
                 title="New Deck"
                 onPress={() => this.props.navigation.navigate('NewDeck',
                                                              { deleteDeck: this.deleteDeck.bind(this),
                                                                updateDecks: this.updateDecks.bind(this) })}
               />
            </View>
          )
        }
        return (
            <View>

                  <Text>All Decks!</Text>
                      <View>
                      { deckValues.map(val => (

                        <DeckListItem
                            key={val.title}
                            name={val.title}
                            deck={this.state.decks[`${val.title}`]}
                            deleteDeck={this.deleteDeck.bind(this)}
                            updateDeck={this.updateDeck.bind(this)}
                            navigate={this.props.navigation.navigate}
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




export default AllDecks
// export default connect(mapStateToProps)(AllDecks)
