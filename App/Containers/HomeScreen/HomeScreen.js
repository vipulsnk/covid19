import React from 'react'
import styles from './HomeScreenStyle'
import { Helpers } from 'App/Theme'
import { View, Text, PermissionsAndroid } from 'react-native'
import BottomTabBar from 'App/Components/BottomTabBar'
import TopTabBar from 'App/Components/TopTabBar'
import CovidVisualiser from 'App/Components/CovidVisualiser'
import style from './HomeScreenStyle'
import Geolocation from '@react-native-community/geolocation';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={style.topContainer}>
        {/* <TopTabBar /> */}
        {/* <CovidVisualiser />         */}
        {/* <Text>HomeScreen</Text> */}
        <Text>HOme </Text>
      </View>
    )
  }
}
