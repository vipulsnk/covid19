import React from 'react'
import styles from './HomeScreenStyle'
import { Helpers } from 'App/Theme'
import { View, Text } from 'react-native'
import BottomTabBar from 'App/Components/BottomTabBar'
import TopTabBar from 'App/Components/TopTabBar'
import CovidVisualiser from 'App/Components/CovidVisualiser'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        {/* <TopTabBar /> */}
        <CovidVisualiser />
        <BottomTabBar />
      </View>
    )
  }
}
