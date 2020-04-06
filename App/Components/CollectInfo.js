import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

export default class CollectInfo extends Component {
  state={
    v1: "yohyo"
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: "center" }}>
        <Text>Covid Aware</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({v1: text})}
          value={this.state.v1}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({v1: text})}
          value={this.state.v1}
        />
      </View>
    )
  }
}
