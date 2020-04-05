import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
const cheerio = require('react-native-cheerio')
export default class Status extends Component {
  state = {
    data: {},
  }
  async componentDidMount() {
    const searchUrl = `https://www.mohfw.gov.in/`
    const response = await fetch(searchUrl) // fetch page
    const htmlString = await response.text() // get response text
    const $ = cheerio.load(htmlString) // parse HTML string
    let table = $('#site-dashboard').find('ul')
    // console.log(table.find('li').first().find('strong').text());
    const data = {
      active: table
        .find('li')
        .first()
        .find('strong')
        .text(),
      cured: table
        .find('li')
        .next()
        .first()
        .find('strong')
        .text(),
      death: table
        .find('li')
        .next()
        .next()
        .first()
        .find('strong')
        .text(),
      migrated: table
        .find('li')
        .next()
        .next()
        .next()
        .first()
        .find('strong')
        .text(),
    }
    console.log(data)
    this.setState({ data: data })
  }
  render() {
    return (
      <View style={styles.floatMain}>
        <View style={styles.floater}>
          <LinearGradient
            colors={[
              '#a5c9fd',
              '#a5c9fd',
              '#a7cbff',
              '#a5c9fd',
              '#a7cbff',
              '#aacffc',
              '#b0d5ff',
              '#b0d6fb',
              '#b5dbff',
              '#b4dbfc',
              '#b8dffe',
              '#bae2fb',
              '#bce4fe',
              '#bde6fa',
              '#bee7fd',
            ]}
            style={styles.linearGradient}
          >
            <Image
              style={styles.tinyLogo}
              source={require('App/Assets/Images/icon-infected.png')}
            />
            <View>
              <Text style={styles.value}>{this.state.data.active}</Text>
              <Text style={styles.caption}>Active Cases</Text>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.floater}>
          <LinearGradient
            colors={[
              '#9ae69c',
              '#9ce999',
              '#9cea9e',
              '#9cea9e',
              '#a0e99a',
              '#a3eb95',
              '#adee92',
              '#adee90',
              '#b3ef8f',
              '#b0f08f',
              '#b4f18a',
              '#b7f18d',
              '#b6f08a',
              '#baf18b',
              '#c4f780',
              '#c9f681',
              '#ccfa7e',
              '#cbf77c',
              '#cff87e',
              '#cff87e',
            ]}
            style={styles.linearGradient}
          >
            <Image
              style={styles.tinyLogo}
              source={require('App/Assets/Images/icon-inactive.png')}
            />
            <View>
              <Text style={styles.value}>{this.state.data.cured}</Text>
              <Text style={styles.caption}>Recovered</Text>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.floater}>
          <LinearGradient
            colors={[
              '#ff8582',
              '#fe8685',
              '#ff908e',
              '#fe908f',
              '#ff9692',
              '#ff9597',
              '#ff9a98',
              '#ff9b9b',
              '#fe9c9d',
              '#ff9e98',
              '#ff9d9c',
              '#ff9e9d',
            ]}
            style={styles.linearGradient}
          >
            <Image style={styles.tinyLogo} source={require('App/Assets/Images/icon-death.png')} />
            <View>
              <Text style={styles.value}>{this.state.data.death}</Text>
              <Text style={styles.caption}>Deaths</Text>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.floater}>
          <LinearGradient
            colors={[
              '#f5ce67',
              '#f8cd67',
              '#f6cc66',
              '#f7cb6c',
              '#f5c66c',
              '#f8c76b',
              '#f7c570',
              '#f7c36f',
              '#f9c174',
              '#f8bf72',
              '#f9ba73',
              '#f9ba77',
              '#fdb877',
              '#fab677',
              '#f9b479',
              '#fab17c',
              '#fcb17a',
              '#fbaf7e',
              '#fcab7c',
              '#fcab7e',
              '#fdaa82',
              '#fca683',
            ]}
            style={styles.linearGradient}
          >
            <Image style={styles.tinyLogo} source={require('App/Assets/Images/icon-active.png')} />
            <View>
              <Text style={styles.value}>{this.state.data.migrated}</Text>
              <Text style={styles.caption}>Migrated</Text>
            </View>
          </LinearGradient>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  floatMain: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // backgroundColor: 'red',
    height: 90,
  },
  floater: {
    width: 90,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor: 'orange',
    borderRadius: 5,
  },
  linearGradient: {
    flex: 1,
    width: 90,
    width: 90,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // paddingLeft: 10,
    // paddingRight: 1,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  tinyLogo: {
    width: 35,
    height: 35,
  },
  caption: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
})
