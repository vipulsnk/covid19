import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Helpline extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Helpline Email ID : ncov2019@gov.in</Text>
        <Text style={styles.text}>Toll Free : 1075</Text>
        <Text style={styles.text}>Helpline Number :+91-11-23978046</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ffed75',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    // alignItems: "center"
  },
  text: {
    fontSize: 13,
    color: '#b51714',
  },
  subcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})
