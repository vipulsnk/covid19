import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Policy from './Policy.js'
import { ActivityIndicator } from 'react-native-paper'
const cheerio = require('react-native-cheerio')
export default class Policies extends Component {
  state = {
    highlight: [],
    loader: true,
  }
  async componentDidMount() {
    const searchUrl = `https://www.mohfw.gov.in/`
    const response = await fetch(searchUrl) // fetch page
    const htmlString = await response.text() // get response text
    const $ = cheerio.load(htmlString) // parse HTML string
    const highlight = []
    let section = $('#latest-update')
      .find('.row')
      .next()
      .find('div')
    let index = 0
    while (section.find('a').html() !== null) {
      highlight.push({
        key: index + 1,
        date: section
          .find('p')
          .find('strong')
          .html(),
        link: section.find('a').attr('href'),
        title: section.find('a').html(),
      })
      index += 1
      section = section.next()
    }
    this.setState({ highlight: highlight, loader: false })
  }
  render() {
    return (
      <>
        {this.state.loader ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ActivityIndicator color="#536DFE"/>
          </View>
        ) : (
          <ScrollView>
            <View style={styles.container}>
              {this.state.highlight.map((update) => (
                <Policy data={update} key={update.id}/>
              ))}
            </View>
          </ScrollView>
        )}
      </>
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
})
