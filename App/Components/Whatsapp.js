import React, { Component } from 'react'
import {Alert, View, Text, Image, StyleSheet, Linking } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const handlePress = async () => {
  // Checking if the link is supported for links with custom URL scheme.
  const url = 'whatsapp://send?text=Namaste&phone=919013151515'
  const supported = await Linking.canOpenURL(url)
  if (supported) {
    // Opening the link with some app, if the URL scheme is "http" the web link should be opened
    // by some browser in the mobile
    await Linking.openURL(url)
  } else {
    Alert.alert(`Some error occured: ${url}`)
  }
}
export default class Whatsapp extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <Image style={styles.tinyLogo}
              source={require('App/Assets/Images/icons8-whatsapp-48.png')}>

        </Image>
        <Text style={styles.text}>
          Join Whatsapp Channel
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 40,
    height: 40,
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: "#ffed75"
  },
  text: {
    fontSize: 13,
    color: '#b51714',
  },
})