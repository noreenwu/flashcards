
import React, { Component } from 'react'
import { Text, View, Button, FlatList, Fragment, StyleSheet } from 'react-native';
// import { connect } from 'react-redux'
import DeckListItem from './DeckListItem'
import { initDecks, getDecks } from '../utils/api'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import reducer from '../reducers/dummyReducer'
import { saveDeckTitle, saveDeck, getDeck, saveCardToDeck, deleteDeck } from '../utils/helpers'
import { setLocalNotification } from '../utils/helpers'

class AllDecks extends Component {

   componentDidMount() {
    setLocalNotification()

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


  createNewDeck(title){
    // being used to add a new deck. may be modified to take more general updates

        if (title) {
          let newDeck = saveDeckTitle(title)        // helper function
          console.log("createNewDeck", title)

          // update this component's state
          console.log("newDeck ", newDeck)
          let origDecks = this.state.decks

          let mergedDecks = Object.assign(origDecks, newDeck)

          console.log("mergedDecks: ", mergedDecks)

          this.setState({ decks: mergedDecks })
         }
    }



  updateDeck(deck) {

      if (! deck) {
          console.log("updateDeck: no data ")
          return
      }


      let formattedDeck = saveDeck(deck)     // calls fxn in helpers
      let origDecks = this.state.decks

      let mergedDecks = Object.assign(origDecks, formattedDeck)
      console.log("mergedDecks ", mergedDecks)

      this.setState({ decks: mergedDecks })

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
                                                                updateDeck: this.updateDeck.bind(this),
                                                                createNewDeck: this.createNewDeck.bind(this) })}
               />
            </View>
          )
        }
        return (
            <View style={styles.container}>

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
                                                                   updateDeck: this.updateDeck.bind(this),
                                                                   createNewDeck: this.createNewDeck.bind(this) })}
                  />

            </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },

})


export default AllDecks
