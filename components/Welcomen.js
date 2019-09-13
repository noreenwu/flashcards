import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/index'

class Welcomen extends Component {

  componentDidMount() {
      this.props.dispatch(handleInitialData())
  }

  render() {
    console.log("Welcome ");

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen: Welcome</Text>
        <Text>hi</Text>
        <Button
          title="All Decks"
          onPress={() => this.props.navigate('AllDecks')}
        />
      </View>
    )
  }
}

// Welcomen.propTypes = {
//   navigate: PropTypes.func.isRequired
// }

function mapStateToProps ({decks}) {
  return {
    hello: 1
  }
}

// export default Welcomen
export default connect(mapStateToProps)(Welcomen)
