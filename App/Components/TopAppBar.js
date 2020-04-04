import React, { Component } from 'react'
import ReactNative, { Button } from 'react-native'
import { WebView } from 'react-native-webview'
const {
  RefreshControl,
  ViewStyle,
  ScrollView,
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
} = ReactNative

export default class TopAppBar extends Component {
  render() {
    return (
      // <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftHeaderContainer}>
          <Text>hii</Text>
        </View>

        <View style={styles.rightHeaderContainer}>
          <Text>bye</Text>
        </View>
      </View>
      // <View style={styles.contentContainer} />
      // </View>
    )
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 24,
  },
  headerContainer: {
    backgroundColor: '#EEEEEE',
    elevation: 5,
    alignItems: 'center',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftHeaderContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  rightHeaderContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingRight: 10,
  },
  contentContainer: {
    flex: 6,
  },
  logoText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'flex-start',
    marginLeft: 10,
  },
})
