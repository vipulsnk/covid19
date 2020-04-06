import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native'
import NavigationService from 'App/Services/NavigationService'
export default class Donation extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.floaters}
          onPress={async () =>
            await Linking.openURL(
              'https://www.investindia.gov.in/bip/resources/state-and-national-relief-funds-accepting-donations-covid-19'
            )
          }
        >
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
