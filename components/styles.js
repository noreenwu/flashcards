import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',

  },
  titleLarge: {
    color: '#1d51a2',
    fontWeight: 'bold',
    fontSize: 40
  },
  subtitleMedium: {
    color: '#1d51a2',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20,
    textAlign: 'center'
  },
  subtitleMediumPartialTop: {
    color: '#1d51a2',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    textAlign: 'center'
  },
  subtitleMediumPartialBottom: {
    color: '#1d51a2',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  clickable: {
    color: 'blue',
    textAlign: 'center'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    textAlign: 'center'
  },
  center: {
    textAlign: 'center',
    margin: 20
  },
  centerNoMargin: {
    textAlign: 'center',
  },
  centerBottomMargin: {
    textAlign: 'center',
    marginBottom: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1d51a2',
    margin: 10,
    padding: 10,
    opacity: 10,
    borderRadius: 15
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  smallButton: {
    alignItems: 'center',
    margin: 10,
    padding: 7,
    width: 100,
    borderRadius: 15,
    backgroundColor: 'green'
  }
})
