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
import TestComponent from './components/TestComponent'
import Welcomen from './components/Welcomen'

export const AppNavigator = createStackNavigator(
  {
    AllDecks: AllDecks,
    NewDeck: NewDeck,
    DeckDetail: DeckDetail,
    NewCard: NewCard,
    Quiz: Quiz,
    DeckListItem: DeckListItem
  },
  // {
  //   initialRouteName: 'Home',
  // }
);

let Navigator = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    console.log("App")
    return (
        <Provider store={createStore(reducer)}>
            <Navigator/>
            <Welcomen navigate={this.props.navigation.navigate}/>
        </Provider>
    );
  }
}




export default Navigator;
// export default createAppContainer(AppNavigator);
// export default App
