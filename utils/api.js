import { AsyncStorage } from '@react-native-community/async-storage'
import { _getDecks } from './DATA.js'


export function submitEntry ({ entry, key }) {

}

export function getInitialData () {
  return Promise.all([
    _getDecks(),
  ]).then(decks) => ({
      decks
    })    
}
