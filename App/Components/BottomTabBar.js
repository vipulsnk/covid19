import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './BottomTabBarStyle'
export default class BottomTabBar extends Component {
  render() {
    return (
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => this.props.onToggle('MyProfile')}>
          <Icon name="insert-chart" size={25} />
          {/* <Text style={styles.tabTitle}>Statistics</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => this.props.onToggle('MyProfile')}>
          <Icon name="alarm" size={25} />
          {/* <Text style={styles.tabTitle}>Reminders</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => this.props.onToggle('Home')}>
          <Icon name="home" size={25} />
          {/* <Text style={styles.tabTitle}>Home</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => this.props.onToggle('Challenges')}>
          <Icon name="whatshot" size={25} />
          {/* <Text style={styles.tabTitle}>News</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => this.props.onToggle('MyProfile')}>
          <Icon name="public" size={25} />
          {/* <Text style={styles.tabTitle}>Global</Text> */}
        </TouchableOpacity>
      </View>
    )
  }
}
