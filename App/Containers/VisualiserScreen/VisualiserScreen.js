import React, { Component } from 'react'
import CovidVisualiser from 'App/Components/CovidVisualiser'
import { View, Text } from 'react-native'
import style from './VisualiserScreenStyle'
export default class VisualiserScreen extends Component {
  render() {
    return (
      <View style={style.topContainer}>
        {/* <TopTabBar /> */}
        <CovidVisualiser />        
      </View>
    )
  }
}
