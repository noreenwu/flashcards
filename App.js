import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AllDecks from './components/AllDecks'
import NewDeck from './components/NewDeck'
import DeckDetail from './components/DeckDetail'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="All Decks"
          onPress={() => this.props.navigation.navigate('AllDecks')}
        />
        <Button
          title="New Deck"
          onPress={() => this.props.navigation.navigate('NewDeck')}
        />
        <Button
          title="Deck Detail"
          onPress={() => this.props.navigation.navigate('DeckDetail')}
        />
        <Button
          title="New Card"
          onPress={() => this.props.navigation.navigate('NewCard')}
        />
        <Button
          title="Quiz"
          onPress={() => this.props.navigation.navigate('Quiz')}
        />
      </View>
    );
  }
}

export const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    AllDecks: AllDecks,
    NewDeck: NewDeck,
    DeckDetail: DeckDetail,
    NewCard: NewCard,
    Quiz: Quiz
  },
  {
    initialRouteName: 'Home',
  }
);


export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
