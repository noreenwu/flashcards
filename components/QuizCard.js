import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
export const QUESTION = 'question'
export const ANSWER = 'answer'
export const RESULTS = 'results'
import QuizResults from './QuizResults'
class QuizCard extends Component {


  state = {
     idx: 0,
     mode: QUESTION
  }

  showAnswer(numQuestions) {
    let newIndex = this.state.idx
    let newMode = this.state.mode

    if (this.state.mode === QUESTION) {
        newIndex = this.state.idx
        newMode = ANSWER
    }
    else { // ANSWER mode
        if ( this.state.idx < numQuestions - 1) {
          newIndex = this.state.idx + 1
          newMode = QUESTION
        }
        else { // no more questions
          newMode = RESULTS
          newIndex = this.state.idx
        }
    }

    this.setState({
      idx: newIndex,
      mode: newMode
    })
    console.log("state should be updated with ", newIndex, newMode)
  }

  render() {

    const { deck } = this.props
    const question = deck.questions[this.state.idx].question
    const answer = deck.questions[this.state.idx].answer
    console.log("state of QuizCard ", this.state)

    console.log("the first question: ", question)
    return(
      <View>


            { ( this.state.mode === QUESTION  )
               ?  <View>
                    <Text>Question
                    { question }
                      <Text
                        onPress={() => this.showAnswer(deck.questions.length)}
                      >(click for Answer)</Text>
                    </Text>
                  </View>
                : <View><Text>Answer {answer}</Text>

                    <Button
                       title="Correct"
                         // navigates to next question or Quiz summary
                     >
                    </Button>
                    <Button
                       title="Incorrect"
                       // navigates to next question or Quiz summary
                     >
                    </Button>

                  <QuizResults mode={this.state.mode}/>
                  </View>

             }

      </View>

    )
  }

}

export default QuizCard
