import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './BottomTabBarStyle'

import NavigationService from 'App/Services/NavigationService'
export default class BottomTabBar extends Component {
  state={
    screen: 'home'
  }
  render() {
    return (
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {this.setState({screen: 'stats'});NavigationService.navigate('Statistics')}}>
          <Icon name="insert-chart"  color={this.state.screen === 'stats' ? '#536DFE' : 'black'} size={25} />
          {/* <Text style={styles.tabTitle}>Reports</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {this.setState({screen: 'reminder'});NavigationService.navigate('Reminder')}}>
          <Icon2 name="alarm-multiple"  color={this.state.screen === 'reminder' ? '#536DFE' : 'black'} size={25} />
          {/* <Text style={styles.tabTitle}>Alarms</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {this.setState({screen: 'home'});NavigationService.navigate('MainScreen')}}>
          <Icon name="home"  color={this.state.screen === 'home' ? '#536DFE' : 'black'} size={25} />
          {/* <Text style={{...styles.tabTitle, color: '#536DFE', fontWeight: "bold"}}>Home</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {this.setState({screen: 'social'});NavigationService.navigate('SocialMedia')}}>
          <Icon1 name="logo-twitter"   color={this.state.screen === 'social' ? '#536DFE' : 'black'} size={25} />
          {/* <Text style={styles.tabTitle}>Tweets</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {this.setState({screen: 'visual'});NavigationService.navigate('Visualiser')}}>
          <Icon name="public"   color={this.state.screen === 'visual' ? '#536DFE' : 'black'} size={25} />
          {/* <Text style={styles.tabTitle}>Global</Text> */}
        </TouchableOpacity>
      </View>
    )
  }
}
