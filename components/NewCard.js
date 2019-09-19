import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native';

class NewCard extends Component {

  submit(updateFxn, deleteFxn, deck, navFxn, navigateAway=true) {
    console.log("NewCard: submit updateFxn ", updateFxn)
    // add card to deck
    if (( this.state.question) && (this.state.answer) ) {
       // put the card in the deck
       deck.questions.push({ question: this.state.question, answer: this.state.answer })

       updateFxn(deck)
    }

    // clear the state
    this.clearFields()

    if (navigateAway) {
      //navigate to DeckDetail
      navFxn('DeckDetail',
                  { deleteDeck: deleteFxn,
                    updateDeck: updateFxn,
                    deck: deck })

      // navFxn('DeckDetail', { deleteDeck: deleteFxn,
      //                        name: deck.title,   // you must receive deleteDeck and pass it on to DeckDetail
      //                        numCards: deck.questions.length,
      //                        deck: deck } )

    }


  }

  clearFields() {
      const question = ''
      const answer = ''

      this.setState({
          question: question,
          answer: answer
      })
  }

  state = {
    question: '',
    answer: ''
  }

  render() {
    const { params } = this.props.navigation.state;

    const { deck, deleteDeck, updateDeck } = params

    console.log("NewCard deleteDeck received: ", deleteDeck)

    return (
        <View>
           <Text>New Card will be added to specified Deck</Text>

           <TextInput
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
             placeholder="Enter your question here!"
             onChangeText={(text) => this.setState({ question: text})}
             value={this.state.question}
           />
           <TextInput
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
             placeholder="Enter your answer here!"
             onChangeText={(text) => this.setState({ answer: text})}
             value={this.state.answer}
           />
           <Button
              title="Submit"
              onPress={() => this.submit(params.updateDeck, params.deleteDeck, deck, this.props.navigation.navigate, true) }
            >
           </Button>
           <Button
              title="Submit a bunch"
              onPress={() => this.submit(params.updateDeck, params.deleteDeck, deck, this.props.navigation.navigate, false) }
            >
           </Button>
           <Button
              title="Cancel"
              onPress={() => this.props.navigation.navigate('DeckDetail')}
            >
           </Button>
        </View>

    );
  }
}


export default NewCard
