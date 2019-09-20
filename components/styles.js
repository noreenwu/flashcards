import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',

  },
  greenLarge: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 40
  },
  greenMedium: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20,
    textAlign: 'center'
  },
  center: {
    textAlign: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    margin: 10,
    padding: 10,
    opacity: 3,
    borderRadius: 15
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})
