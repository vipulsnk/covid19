import React, { Component } from 'react'
import ReactNative, { Button } from 'react-native'
import { WebView } from 'react-native-webview'
const { RefreshControl, ViewStyle, ScrollView, View, StyleSheet, ActivityIndicator } = ReactNative

// prettier-ignore
const INJECTED_JS = `
  window.onscroll = function() {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        scrollTop: document.documentElement.scrollTop || document.body.scrollTop
      }),     
    )
  }
`

const SCROLLVIEW_CONTAINER = {
  flex: 1,
  height: '100%',
}

const WEBVIEW = (height) => ({
  width: '100%',
  height,
})

export default class Tweets extends Component {
  webview = null
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      embedHtml: null,
      html: `<!DOCTYPE html>\
      <html>\
        <head>\
          <meta charset="utf-8">\
          <meta name="viewport" content="width=device-width, initial-scale=1.0">\
          </head>\
          <body>\
            <h1>And I am not null</h1>\
          </body>\
      </html>`,
      isPullToRefreshEnabled: false,
      scrollViewHeight: 0,
    }
  }

  setWebViewRef = (ref) => {
    console.log('called setWebview ref')
    this.webView = ref
  }

  onRefresh = async () => {
    console.log('before')
    await this.setupEmbed()
    console.log('after')
    this.webview && this.webview.reload()
  }

  onWebViewMessage = (e) => {
    const { data } = e.nativeEvent
    console.log('inside onWebViewMessage')
    try {
      const { scrollTop } = JSON.parse(data)
      this.setState({ isPullToRefreshEnabled: scrollTop === 0 },  () => console.log("onWebViewMessage callback") )
    } catch (error) {}
  }

  componentDidMount() {
    this.setupEmbed()
  }

  async setupEmbed() {
    try {
      let tweetUrl =
        'https://publish.twitter.com/oembed?url=' +
        encodeURIComponent('https://twitter.com/who?lang=en')
      const resp = await fetch(tweetUrl, {
        method: 'GET',
        headers: { Accepts: 'application/json' },
      })
      const json = await resp.json()
      let embedHtml = json.html
      let html = `<!DOCTYPE html>\
    <html>\
      <head>\
        <meta charset="utf-8">\
        <meta name="viewport" content="width=device-width, initial-scale=1.0">\
        </head>\
        <body>\
          ${embedHtml}\
        </body>\
    </html>`
      console.log('Before Done')
      this.setState(
        {
          loading: false,
          embedHtml: embedHtml,
          html: html,
        },
        () => console.log("setupEmbed callback")
      )
      console.log('after Done')
    } catch (error) {
      console.warn("some error occured, couldn't refresh!", error)
    }
  }

  renderLoading() {
    if (this.state.loading) {
      console.log("loading!")
      return (
        <View style={styles.loadingWrap}>
          <ActivityIndicator />
        </View>
      )
    }
  }

  renderEmbed() {
    if (this.state.embedHtml) {
      return (
          <WebView
            source={{ html: this.state.html }}
            ref={this.setWebViewRef}
            style={WEBVIEW(this.state.scrollViewHeight)}
            onMessage={this.onWebViewMessage}
            injectedJavaScript={INJECTED_JS}
          />
      )
    }
  }

  render() {
    console.log("render method called!")
    const { scrollViewHeight, isPullToRefreshEnabled } = this.state
    return (
      <ScrollView
        style={SCROLLVIEW_CONTAINER}
        onLayout={(e) => this.setState({ scrollViewHeight: e.nativeEvent.layout.height }, () => console.log("onlayout callback") )}
        refreshControl={
          <RefreshControl
            refreshing={false}
            enabled={isPullToRefreshEnabled}
            onRefresh={this.onRefresh}
            tintColor="red"
            colors={['blue']}
            style={{ backgroundColor: 'black' }}
          />
        }
      >
        {this.renderLoading()}
        {this.renderEmbed()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  loadingWrap: {
    flex: 1,
    backgroundColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
  },
  webviewWrap: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#999',
  },
  webview: {
    flex: 1,
  },
})
