import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';

const RESULTS = 'results'

class QuizResults extends Component {


  render() {
    const { mode } = this.props

    if ( mode === RESULTS ) {
      return (
        <Text>Quiz Results!</Text>
      )
    }
    return(
      <Text>nothing yet</Text>

    )
  }
}


export default QuizResults
