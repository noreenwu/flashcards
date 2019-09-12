import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AllDecks from './components/AllDecks'
import NewDeck from './components/NewDeck'
import DeckDetail from './components/DeckDetail'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'
import DeckListItem from './components/DeckListItem'


class App extends React.Component {
  render() {
    console.log("App")
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen: Welcome</Text>
          <Button
            title="All Decks"
            onPress={() => this.props.navigation.navigate('AllDecks')}
          />
        </View>
    );
  }
}



export const AppNavigator = createStackNavigator(
  {
    Home: App,
    AllDecks: AllDecks,
    NewDeck: NewDeck,
    DeckDetail: DeckDetail,
    NewCard: NewCard,
    Quiz: Quiz,
    DeckListItem: DeckListItem
  },
  {
    initialRouteName: 'Home',
  }
);


// export default createAppContainer(AppNavigator);
export default App
