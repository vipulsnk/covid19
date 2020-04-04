import React, { Component } from 'react'
import { View } from 'react-native'
import Tweets from 'App/Components/Tweets'
import TweetsWHO from 'App/Components/TweetsWHO'
import TweetsMOIHFW from 'App/Components/TweetsMOIHFW'
import style from './SocialMediaScreenStyle'
import TopAppBarTweets from 'App/Components/TopAppBarTweets'

export default class SocialMediaScreen extends Component {
  state = {
    screen: 'WHO',
  }
  toggle(screen) {
    this.setState({ screen: screen })
  }
  render() {
    return (
      <View style={style.topContainer}>
        <TopAppBarTweets toggle={this.toggle.bind(this)} />
        {this.state.screen === 'WHO' ? (
          <TweetsWHO />
        ) : this.state.screen === 'MOIHFW' ? (
          <TweetsMOIHFW />
        ) : (
          <></>
        )}
      </View>
    )
  }
}
