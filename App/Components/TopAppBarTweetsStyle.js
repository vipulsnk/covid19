import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  navButton: {
    flex: 1,
  },
  tabItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});