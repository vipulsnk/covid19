import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
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
          {/* <Text style={styles.tabTitle}>Reports</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => NavigationService.navigate('Reminder')}>
          <Icon2 name="alarm-multiple" size={25} />
          {/* <Text style={styles.tabTitle}>Alarms</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => NavigationService.navigate('MainScreen')}>
          <Icon name="home" color='#536DFE' size={25} />
          {/* <Text style={{...styles.tabTitle, color: '#536DFE', fontWeight: "bold"}}>Home</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => NavigationService.navigate('SocialMedia')}>
          <Icon1 name="logo-twitter"   size={25} />
          {/* <Text style={styles.tabTitle}>Tweets</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => NavigationService.navigate('Visualiser')}>
          <Icon name="public"  size={25} />
          {/* <Text style={styles.tabTitle}>Global</Text> */}
        </TouchableOpacity>
      </View>
    )
  }
}
