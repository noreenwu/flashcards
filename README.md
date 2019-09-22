# Project: Mobile Flashcards
# Noreen Wu
# Udacity React: September 2019

# Overview

This Native React app allows the user to create decks of flashcards that s/he can then use
as a study aide. Cards, consisting of a question and an answer, may be added to a deck.
The user can then quiz him/herself, as each previously entered question and answer in the
selected deck is shown. The user receives a score at the end of each deck's quiz, based
on whether his/her answers match the ones that were entered into the deck. The user may
retake the quizzes as often as s/he likes.


## Installation

This project is being submitted through the github repo, located at
https://github.com/noreenwu/flashcards. It should require only npm install and npm start to launch.
However, there was an issue in my environment which required that I run "expo start -c"
in order to import the "expo" libraries.


## Implementation Notes

There are 4 main Views in the application:

  o the Home screen (All Decks)
  o the Deck Detail screen (individual Deck view)
  o the New Deck screen (to create a new Deck)
  o the Add Card screen (to add a card to a specific Deck)
  o the Quiz Me screen (to run through the cards of a Deck, allowing the user to grade him/herself)

There are 2 error Views:

  o there are no Decks in the app to display
  o there are no Cards in this Deck from which to run a quiz


Two starter decks are provided at App-startup (React, JavaScript). When the App loads, these
are written and then read from AsyncStorage. Thereafter, changes made (new decks, cards added
to decks, deleted decks), are made both to the app's primary state (in the AllDecks component)
and to AsyncStorage.

A TabNavigator contains a single link which can return the user Home (the All Decks screen)
from any point in the App. A StackNavigator allows the user to retrace her steps using
a Back button.

Navigation between screens primarily occurs through the Stack Navigator. If an entity (TouchableOpacity or
LinkItem) is clicked ("pressed"), then navigation.navigate brings the user to the specified screen,
defined in StackNavigator. It is through the onPress method that properties, such as objects containing
data and functions in top-level components (AllDecks) that need to be called to maintain state,
are passed from one View to another. The bulk of the application's state is kept in AllDecks,
while small slices of the state, such as a single deck, may be passed down for updating by
child components, like NewCard.


## Required Files
