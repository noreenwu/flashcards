import { RECEIVE_DECKS } from '../actions'

function entries (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      console.log("decks reducer")    
      return {
        ...state,
        ...action.entries,
      }
    default :
      return state
  }
}
