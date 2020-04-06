import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import FaqCard from './FaqCard.js'
import NavigationService from 'App/Services/NavigationService'
var faq1 = require('App/Assets/Jsons/faq_mohfw.json')

export default class FAQS extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.floatMain}>
          <View style={styles.floatCol}>
            <TouchableOpacity
              style={styles.floaters}
              onPress={() => NavigationService.navigate('UM')}
            >
              <Text style={styles.title}>Using Masks</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.floaters}
              onPress={() => NavigationService.navigate('MB')}
            >
              <Text style={styles.title}>Myth-Busters</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.floatCol}>
            <TouchableOpacity
              style={styles.floaters}
              onPress={async () =>
                await Linking.openURL(
                  'https://www.who.int/docs/default-source/coronaviruse/advice-for-workplace-clean-19-03-2020.pdf'
                )
              }
            >
              <Text style={styles.title}>Getting Workplace Ready</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.floaters}
              onPress={() => NavigationService.navigate('HP')}
            >
              <Text style={styles.title}>Healthy Parenting</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          {faq1.map((ar) => (
            <FaqCard key={ar.id} data={ar} />
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
