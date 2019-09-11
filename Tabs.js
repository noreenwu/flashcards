import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AllDecks from './components/AllDecks'
import NewDeck from './components/NewDeck'


const Hello = () => (
  <View>
    <Text>Hello!</Text>
  </View>
);

const Goodbye = () => (
  <View>
    <Text>Goodbye!</Text>
  </View>
);

const TabNavigator = createBottomTabNavigator({
  Decks: AllDecks,
  NewDeck: NewDeck,
  Hello: Hello
},

{
  defaultNavigationOptions: ({ navigation }) => ({
     tabBarIcon: ({ focused, horizontal, tintColor }) => {
       // const { routeName } = navigation.state;
       let IconComponent = Ionicons;
       let iconName;

       iconName = `ios-options`;

       // You can return any component that you like here!
       return <IconComponent name={iconName} size={25} color={tintColor} />;

       },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'lightgray',
      pressColor: 'green'
    },
    style: {
      backgroundColor: 'black'
    }
  }
);

export default createAppContainer(TabNavigator);
