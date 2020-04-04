import React, { Component } from 'react'
import ReactNative, { Button } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { WebView } from 'react-native-webview'

const {
  RefreshControl,
  ViewStyle,
  ScrollView,
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} = ReactNative

export default class TopAppBarTweets extends Component {
  
  render() {
    return (
      // <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftHeaderContainer}>
          <Text>hii</Text>
        </View>
        <View style={styles.rightHeaderContainer}>
          <TouchableOpacity
            style={styles.tabItem}
            onPress={this.props.onToggle}
          >
            <Icon name="more-vert" size={25} />
            {/* <Text style={styles.tabTitle}>Statistics</Text> */}
          </TouchableOpacity>
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
