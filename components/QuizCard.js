import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
export const QUESTION = 'question'
export const ANSWER = 'answer'
export const RESULTS = 'results'
import QuizResults from './QuizResults'
import PropTypes from 'prop-types'

class QuizCard extends Component {
  state = {
     idx: 0,
     mode: QUESTION,
     numCorrect: 0,
     numIncorrect: 0
  }

  showAnswer() {
    // let newIndex = this.state.idx
    let newMode = this.state.mode

    if (this.state.mode === QUESTION) {
        // newIndex = this.state.idx
        newMode = ANSWER
    }
    // else { // ANSWER mode
    //     if ( this.state.idx < numQuestions - 1) {
    //       newIndex = this.state.idx + 1
    //       newMode = QUESTION
    //     }
    //     else { // no more questions
    //       newMode = RESULTS
    //       newIndex = this.state.idx
    //     }
    //}

    this.setState({
      mode: newMode
    })
    console.log("state should be updated with ",  newMode)
  }


  tallyCorrect(totQuestions) {
    let correctCount = this.state.numCorrect + 1

    this.setState({
      numCorrect: correctCount
    })

    this.showResults(totQuestions)

  }

  tallyIncorrect(totQuestions) {
    let incorrectCount = this.state.numIncorrect + 1

    this.setState({
      numIncorrect: incorrectCount
    })

    this.showResults(totQuestions)
  }

  showResults(totQuestions) {
    let newIndex = this.state.idx
    let newMode = this.state.mode

    if (this.state.idx < totQuestions - 1) {
      newIndex = this.state.idx + 1
      newMode = QUESTION
    }
    else {
      newMode = RESULTS
    }

    this.setState({
       idx: newIndex,
       mode: newMode
    })
  }

  reset() {
     const newIndex = 0
     const newMode = QUESTION
     const numCorrect= 0
     const numIncorrect = 0

     this.setState({
        idx: newIndex,
        mode: newMode,
        numCorrect: numCorrect,
        numIncorrect: numIncorrect
     })

  }
  render() {

    const { deck } = this.props
    const question = deck.questions[this.state.idx].question
    const answer = deck.questions[this.state.idx].answer
    const totQuestions = deck.questions.length
    const numQuestionsLeft = totQuestions - this.state.idx - 1


    return(
      <View>

            <Text>Question {this.state.idx + 1} of {totQuestions} ({numQuestionsLeft} more after this)</Text>
            { ( this.state.mode === QUESTION  )
               ?  <View>
                    <Text>Question
                    { question }
                      <Text
                        onPress={() => this.showAnswer()}
                      >(click for Answer)</Text>
                    </Text>
                  </View>
                : <View><Text>Answer {answer}</Text>

                    <Button
                       title="Correct"
                       onPress={() => this.tallyCorrect(totQuestions)}
                     >
                    </Button>
                    <Button
                       title="Incorrect"
                       onPress={() => this.tallyIncorrect(totQuestions)}
                     >
                    </Button>

                  <QuizResults mode={this.state.mode} numQuestions={deck.questions.length} numCorrect={this.state.numCorrect}/>

                  </View>


             }

             <Button
               title="Start Quiz Over"
               onPress={() => { this.reset() }}
             />



      </View>

    )
  }

}

QuizCard.propTypes = {
  deck: PropTypes.object.isRequired,
}

export default QuizCard
