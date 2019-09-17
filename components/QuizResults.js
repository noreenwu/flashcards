import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types'


const RESULTS = 'results'

class QuizResults extends Component {


  render() {
    const { mode, numQuestions, numCorrect } = this.props

    if ( mode === RESULTS ) {
      return (
        <View>
          <Text>Quiz Results!</Text>
          <Text>You got {numCorrect} right out of {numQuestions}</Text>
        </View>
      )
    }
    return (null)
  }
}

QuizResults.propTypes = {
  mode: PropTypes.string.isRequired,
  numCorrect: PropTypes.number.isRequired,
  numQuestions: PropTypes.number.isRequired,
}

export default QuizResults
