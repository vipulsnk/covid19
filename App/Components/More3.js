import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import MoreCard from './MoreCard.js'
import NavigationService from 'App/Services/NavigationService'
var faq1 = require('../Assets/Jsons/faq.json')
var faq2 = require('../Assets/Jsons/faq2.json')
var faq3 = require('../Assets/Jsons/faq3.json')

export default class More3 extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {faq3.map((ar) => (
            <MoreCard data={ar} />
          ))}

        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  floatMain: {
    height: 100,
    paddingTop: 8,
    marginTop: 12,
    flexDirection: 'row',
    // backgroundColor: 'black',
    justifyContent: 'space-evenly',
  },
  floatCol: {
    // flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'red',
    justifyContent: 'space-around',
    width: 180,
  },
  title: {
    color: '#ffffff',
  },
  floaters: {
    // flex: 1,
    flexDirection: 'column',
    backgroundColor: '#536DFE',
    borderRadius: 3,
    height: 33,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})
