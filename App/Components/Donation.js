import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class Donation extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.floaters} onPress={() => console.log('Donation Made')}>
          <Text style={styles.title}>Make a Donation</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#ffffff',
  },
  floaters: {
    marginTop: 10,
    flexDirection: 'column',
    backgroundColor: '#536DFE',
    borderRadius: 3,
    height: 33,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})
