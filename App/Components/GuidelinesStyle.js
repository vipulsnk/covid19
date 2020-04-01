import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  floatMain: {
    height: 100,
    paddingTop: 8,
    flexDirection: 'row',
    // backgroundColor: 'black',
    justifyContent: 'space-evenly',
  },
  floatCol: {
    // flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'red',
    justifyContent: 'space-around',
    width: 180,
  },
  title: {
    color: '#ffffff'
  },
  floaters: {
    // flex: 1,
    flexDirection: 'column',
    backgroundColor: '#536DFE',
    borderRadius: 3,
    height: 33,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 7,
    marginTop: 5,
  },
  p: {

  }
})
