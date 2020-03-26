import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './BottomTabBarStyle'
import NavigationService from 'App/Services/NavigationService'
export default class BottomTabBar extends Component {
  render() {
    return (
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => NavigationService.navigate('Statistics')}>
          <Icon name="insert-chart" size={25} />
          {/* <Text style={styles.tabTitle}>Statistics</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => NavigationService.navigate('Reminder')}>
          <Icon name="alarm" size={25} />
          {/* <Text style={styles.tabTitle}>Reminders</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => NavigationService.navigate('MainScreen')}>
          <Icon name="home" size={25} />
          {/* <Text style={styles.tabTitle}>Home</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => NavigationService.navigate('SocialMedia')}>
          <Icon name="whatshot" size={25} />
          {/* <Text style={styles.tabTitle}>News</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => NavigationService.navigate('Visualiser')}>
          <Icon name="public" size={25} />
          {/* <Text style={styles.tabTitle}>Global</Text> */}
        </TouchableOpacity>
      </View>
    )
  }
}
