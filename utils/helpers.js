import { _saveDeckTitle, _saveDeck, _getDeck, _deleteDeck } from './api'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'
import { AsyncStorage } from 'react-native'


const NOTIFICATION_KEY = 'Flashcards:notifications'


export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: 'Time to study!',
    body: "👋 don't forget to study your Flashcards today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              // tomorrow.setDate(tomorrow.getDate() + 1)
              // tomorrow.setHours(20)
              tomorrow.setMinutes(2)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}

export function cardOrCards(len) {
  if (len === 1) {
    return 'card'
  }
  else {
    return 'cards'
  }
}

export function formatNewDeck(newDeckTitle) {
  let formattedDeck = { [newDeckTitle] : { title: newDeckTitle,
                                           questions: [] }}

  return formattedDeck
}

export function formatChangedDeck(deck) {

  let formattedDeck = { [deck.title] : deck }
  return formattedDeck
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
