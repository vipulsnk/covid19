import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  floatMain: {
    height: 100,
    paddingTop: 10,
    flexDirection: 'row',
    // backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  floatCol: {
    // flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'red',
    justifyContent: 'space-around',
    width: 180,
  },
  title: {
    color: 'black'
  },
  floaters: {
    // flex: 1,
    flexDirection: 'column',
    backgroundColor: '#4EB151',
    borderRadius: 3,
    height: 33,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
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
