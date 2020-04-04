import React, { Component } from 'react'
import { View } from 'react-native'
import YouTube from 'react-native-youtube'
export default class YoutuberItem extends Component {
  render() {
    return (
      <View>
        <YouTube
          videoId={this.props.vId}// The YouTube video ID
          apiKey="AIzaSyDX_yILQOpdLFGdbn3p1w6_Zf60VcFhuWA"
          play={false} // control playback of video with true/false
          fullscreen={false} // control whether the video should play in fullscreen or inline
          loop // control whether the video should loop when ended
          onReady={(e) => this.setState({ isReady: true })}
          onChangeState={(e) => this.setState({ status: e.state })}
          onChangeQuality={(e) => this.setState({ quality: e.quality })}
          onError={(e) => this.setState({ error: e.error })}
          style={{ height: 300 }}
        />
      </View>
    )
  }
}
