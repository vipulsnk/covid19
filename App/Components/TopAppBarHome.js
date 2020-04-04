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
    screen: 'General',
  }
  toggle(screen) {
    this.setState({ screen: screen })
    this.props.toggle(screen)
  }
  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.tabItem} onPress={() => this.toggle('FAQS')}>
          <Text style={this.state.screen === 'FAQS' ? styles.tabTitleHighlighted : styles.tabTitle}>
            FAQS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => this.toggle('General')}>
          <Text
            style={this.state.screen === 'General' ? styles.tabTitleHighlighted : styles.tabTitle}
          >
            General
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => this.toggle('Policies')}>
          <Text
            style={this.state.screen === 'Policies' ? styles.tabTitleHighlighted : styles.tabTitle}
          >
            Policies
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
