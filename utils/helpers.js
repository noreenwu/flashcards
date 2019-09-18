import { _saveDeckTitle } from './api'

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


export function saveDeckTitle(title) {
  let formattedDeck = formatNewDeck(title)
  _saveDeckTitle(formattedDeck)

  return formattedDeck   // this will facilitate updating the state in the component
}


export function addCardToDeck(title, card) {

}
