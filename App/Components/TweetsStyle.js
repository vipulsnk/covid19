import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  loadingWrap: {
    flex: 1,
    // backgroundColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
  },
  webviewWrap: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#999',
  },
  webview: {
    flex: 1,
  },
});