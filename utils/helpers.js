import { _saveDeckTitle, _saveDeck } from './api'

export function formatNewDeck(newDeckTitle) {
  let formattedDeck = { [newDeckTitle] : { title: newDeckTitle,
                                           questions: [] }}

  return formattedDeck
}

export function formatChangedDeck(deck) {

  let formattedDeck = { [deck.title] : deck }
  return formattedDeck
}


export function getDecks() {
}


async function getDeck(id) {

}

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


export function addCardToDeck(title, card) {

}
