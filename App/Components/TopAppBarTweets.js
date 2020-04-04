import React, { Component } from 'react'
import ReactNative, { Button } from 'react-native'
import { WebView } from 'react-native-webview'
import Icon from 'react-native-vector-icons/MaterialIcons'
const {
  RefreshControl,
  ViewStyle,
  ScrollView,
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} = ReactNative

export default class TopAppBar extends Component {
  state = {
    screen: 'WHO',
  }
  toggle(screen) {
    this.setState({ screen: screen })
    this.props.toggle(screen)
  }
  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.tabItem} onPress={() => this.toggle('MOIHFW')}>
          <Text style={this.state.screen === 'MOIHFW' ? styles.tabTitleHighlighted : styles.tabTitle}>
            MOIHFW
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => this.toggle('WHO')}>
          <Text
            style={this.state.screen === 'WHO' ? styles.tabTitleHighlighted : styles.tabTitle}
          >
            WHO
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  tabItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabTitleHighlighted: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#121212',
    paddingTop: 4,
    color: '#536DFE',
  },
  tabTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#121212',
    paddingTop: 4,
  },
  headerContainer: {
    backgroundColor: '#efefef',
    elevation: 5,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  logoText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'flex-start',
    marginLeft: 10,
  },
})
