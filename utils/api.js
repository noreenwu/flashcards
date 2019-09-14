// import { AsyncStorage } from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native'
// import { _getDecks } from './DATA';

const DECKS_STORAGE_KEY = 'Flashcards:decks';

let decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}


// export function submitEntry ({ entry, key }) {
//   return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
//     [key]: entry
//   }))
// }

export function submitEntry ({ entry, key }) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }), () => {
    AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
      console.log(result)
    });
  })
}

// export function removeEntry (key) {
//   return AsyncStorage.getItem(DECKS_STORAGE_KEY)
//     .then((results) => {
//       const data = JSON.parse(results)
//       data[key] = undefined
//       delete data[key]
//       AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
//     })
// }

export function removeEntry (key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data), () => {
        AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
          console.log(result)
      })
    })
})}




export function getDeck(id) {
  let ret
  AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      if (data[id]) {
         ret = data[id]
         console.log("ret is ", ret)
       }
    })
    return ret
}

let decks_delta = {
  Spanish: {
    title: 'Spanish',
    questions: []
  }
}

export function saveDeckTitle(newDeckTitle) {
  console.log("saveDeckTitle ", newDeckTitle)
  decks_delta = {
       [newDeckTitle]: {
        title: newDeckTitle,
        questions: []
      }
  }
  AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(decks_delta), () => {
    AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
      console.log(result);
    });
  });
}

export function addCardToDeck(title, card) {

}

export function initDecks() {
  return new Promise(function(resolve,reject) {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks), () => {
      AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
        console.log(result)
      });
    });
  });
}
