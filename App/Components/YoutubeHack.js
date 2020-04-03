import React, { Component } from 'react'
import { View, ImageBackground, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import YoutuberItem from 'App/Components/YoutuberItem'
const uri1 = require('App/Assets/Images/hqdefault1.jpg')
const uri2 = require('App/Assets/Images/hqdefault2.jpg')
const uri3 = require('App/Assets/Images/hqdefault3.jpg')
export default class YoutubeHack extends Component {
  render() {
    const data = this.props.data
    const v = data.v
    let uri
    if (v === 1) {
      uri = uri1
    } else if (v === 2) {
      uri = uri2
    } else if (v === 3) {
      uri = uri3
    }
    return (
      <View>
        {this.props.show === data.vId ? (
          <YoutuberItem vId={data.vId} />
        ) : (
          <ImageBackground
            source={uri}
            style={{
              width: 330,
              height: 300,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity onPress={() => this.props.toggleVideo(data.vId)}>
              <Icon name="play" size={35} color="white" />
            </TouchableOpacity>
          </ImageBackground>
        )}
      </View>
    )
  }
}
