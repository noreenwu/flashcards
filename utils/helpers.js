import { _saveDeckTitle, _saveDeck, _getDeck, _deleteDeck } from './api'


export function formatNewDeck(newDeckTitle) {
  let formattedDeck = { [newDeckTitle] : { title: newDeckTitle,
                                           questions: [] }}

  return formattedDeck
}

export function formatChangedDeck(deck) {

  let formattedDeck = { [deck.title] : deck }
  return formattedDeck
}


// export function getDecks() {
// }



export function saveDeck(deck) {
  let formattedDeck = formatChangedDeck(deck)
  // call api to save info to AsyncStorage
  _saveDeck(formattedDeck)
  return formattedDeck
}

export function saveDeckTitle(title) {
  let formattedDeck = formatNewDeck(title)
  _saveDeck(formattedDeck)

  return formattedDeck   // this will facilitate updating the state in the component
}

export function deleteDeck(deckTitle) {

  return _deleteDeck(deckTitle)
}


export function getDeck(id) {
  console.log("getDeck id ", id)

  return _getDeck(id).
    then((results) => {
      console.log("deckData", results)
    })

}



export function saveCardToDeck(deckTitle, card) {

  console.log("saveCardToDeck")

   _getDeck(deckTitle).
    then((results) => {
      console.log("deckData", results.questions)
      // let resultsCopy = Object.assign(resultsCopy, results)
      // resultsCopy.questions.push(card)
      // let formattedDeck = formatChangedDeck(resultsCopy)
      // console.log("formattedDeck ", formattedDeck)
      // _saveDeck(formattedDeck)
    }).catch((err) => {
        console.log("error saving card to deck", err)
    })

}
