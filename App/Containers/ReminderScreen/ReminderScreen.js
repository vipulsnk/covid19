import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Hand from './Hand'
import Drink from './Drink'
export default class ReminderScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Hand name={'hand wash'} />
        <View
          style={{
            borderBottomColor: '#D3D3D3',
            borderBottomWidth: 1.2,
            width: "80%",
            alignSelf: 'center'
          }}
        />
        <Drink name={'drink water'} />
      </View>
    )
  }
}
