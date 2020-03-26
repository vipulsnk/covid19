import React from 'react'
import styles from './HomeScreenStyle'
import { Helpers } from 'App/Theme'
import { View, Text } from 'react-native'
import BottomTabBar from 'App/Components/BottomTabBar.js'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <BottomTabBar />
      </View>
    )
  }
}
