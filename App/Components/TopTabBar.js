import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './TopTabBarStyle'
export default class TopTabBar extends Component {
  render() {
    return (
      <View style={styles.navBar}>
          {/* <Image source={require('App/Assets/Images/TOM.png')} style={{ width: 98, height: 22 }} /> */}
          <View style={styles.rightNav}>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="search" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Icon style={styles.navItem} name="account-circle" size={25} />
            </TouchableOpacity>
          </View>
        </View>
    )
  }
}
