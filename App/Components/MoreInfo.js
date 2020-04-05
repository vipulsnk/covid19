import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native'
import NavigationService from 'App/Services/NavigationService'
export default class MoreInfo extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Text>More Information</Text>
        <View style={styles.floatMain}>
            <TouchableOpacity
              style={styles.floaters}
              onPress={() => NavigationService.navigate('M1')}
            >
              <Text style={styles.title}>Infection protection and control / WASH</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.floaters}
              onPress={() => NavigationService.navigate('M2')}
            >
              <Text style={styles.title}>Guidance for schools/workplaces & institutions</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.floaters}
              onPress={() => NavigationService.navigate('M3')}
            >
              <Text style={styles.title}>Points of entry / mass gatherings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.floaters}
              onPress={() => NavigationService.navigate('M4')}
            >
              <Text style={styles.title}>Reduction of transmission from animals to humans</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.floaters}
              onPress={async () => await Linking.openURL("https://blog.trello.com/work-from-home-guides")}
            >
              <Text style={styles.title}>12 guides to help work from home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.floaters}
              onPress={async () => await Linking.openURL("https://www.mohfw.gov.in/")}
            >
              <Text style={styles.title}>MOH GOI Website</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.floaters}
              onPress={async () => await Linking.openURL("https://www.who.int/")}
            >
              <Text style={styles.title}>WHO Website</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#efefef',
    // borderWidth: 0.2,
    borderRadius: 5,
    width: 370,
    elevation: 5,
    marginTop: 20,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: "space-between"
  },
  floatMain: {
    flexDirection: 'column',
    // backgroundColor: 'black',
    justifyContent: 'space-between',
    
    width: "100%"
  },

  title: {
    color: '#536DFE',
  },
  floaters: {
    // flex: 1,
    width: "100%",
    flexDirection: 'column',
    // backgroundColor: '#536DFE',
    borderRadius: 3,
    height: 33,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
})
