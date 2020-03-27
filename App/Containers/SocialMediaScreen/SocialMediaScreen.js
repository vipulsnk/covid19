import React, { Component } from 'react'
import { View } from 'react-native'
import Tweets from 'App/Components/Tweets'
import style from './SocialMediaScreenStyle';
export default class SocialMediaScreen extends Component {
  render() {
    return (
      <View style={style.topContainer}>
        <Tweets />
      </View>
    )
  }
}
