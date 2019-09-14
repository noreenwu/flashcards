import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import AllDecks from './components/AllDecks'
import NewDeck from './components/NewDeck'
import DeckDetail from './components/DeckDetail'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'
import DeckListItem from './components/DeckListItem'


export const AppNavigator = createStackNavigator(
  {
    AllDecks: AllDecks,
    NewDeck: NewDeck,
    DeckDetail: DeckDetail,
    NewCard: NewCard,
    Quiz: Quiz,
    DeckListItem: DeckListItem
  },

);

const Navigator = createAppContainer(AppNavigator);

class App extends React.Component {


  render() {
    return (
        <Provider store={createStore(reducer)}>
            <Navigator/>

        </Provider>
    );
  }
}




export default Navigator;
// export default createAppContainer(AppNavigator);
// export default App
