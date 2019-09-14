
import React, { Component } from 'react'
import { Text, View, Button, FlatList } from 'react-native';
import { connect } from 'react-redux'
import DeckListItem from './DeckListItem'
import { initDecks, getDecks } from '../utils/api'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/dummyReducer'


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

  updateDecks(data){
        // this.setState({
        //     showModal:true
        // });
        console.log("updateDecks", data)
    }

  render() {
        console.log("AllDecks!")
        const deckNames = Object.keys(this.state.decks)
        let thisDeck = this.state.decks['React']
        return (
          <Provider store={createStore(reducer)}>
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
                onPress={() => this.props.navigation.navigate('NewDeck',
                                                             { updateDecks: this.updateDecks.bind(this) } )}
              />

            </View>
      </Provider>
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
