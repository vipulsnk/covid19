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
} = ReactNative

export default class TopAppBar extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.tabItem} onPress={() => this.props.toggle('FAQS')}>
          <Text style={styles.tabTitle}>FAQS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => this.props.toggle('Guidelines')}>
          <Text style={styles.tabTitle}>Guidelines</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => this.props.toggle('Policies')}>
          <Text style={styles.tabTitle}>Policies</Text>
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
  tabTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#3c3c3c',
    paddingTop: 4,
    fontFamily: 'montserrat',
  },
  headerContainer: {
    backgroundColor: '#EEEEEE',
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
