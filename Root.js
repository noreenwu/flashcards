import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import App from './App'
import { Text, View, Button } from 'react-native';

class Root extends Component {
   render() {
      return (
        // <Provider store={createStore(reducer)}>
          <View>
            <App/>
          </View>
        // </Provider>

      )
   }
}

export default Root
