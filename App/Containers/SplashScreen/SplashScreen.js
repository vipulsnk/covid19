import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from './SplashScreenStyle'
import { Helpers, Images } from 'App/Theme'

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={[Helpers.fillRowCenter, styles.container]}>
        <View style={[Helpers.center, styles.logo]}>
          {/* You will probably want to insert your logo here */}
              <Image  source={Images.logo}  />
        </View>
      </View>
    )
  }
}
