import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createAppContainer  } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import AllDecks from './components/AllDecks'
import NewDeck from './components/NewDeck'
import DeckDetail from './components/DeckDetail'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'



export const AppNavigator = createStackNavigator(
  {
    AllDecks: {
      screen: AllDecks
    },

    NewDeck: {
      screen: NewDeck
    },

    DeckDetail: {
      screen: DeckDetail
    },

    NewCard: {
      screen: NewCard
    },

    Quiz: {
      screen: Quiz
    }
  },

);


const BottomTabNav = createBottomTabNavigator(
  {
    'All Decks': AppNavigator
  }
)

const Navigator = createAppContainer(BottomTabNav);

class App extends React.Component {
  componentDidMount() {
     console.log("App: componentDidMount")
  }
  render() {
    return (
        <Provider store={createStore(reducer)}>
            <Navigator/>

        </Provider>
    );
  }
}




export default Navigator;
