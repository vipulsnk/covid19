import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { WebView } from 'react-native-webview'

export default class CovidVisualiser extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <WebView
          source={{
            uri: 'https://coronavirus.jhu.edu/map.html',
          }}
          startInLoadingState={true}
          scalesPageToFit={true}
        />
      </View>
    )
  }
}
