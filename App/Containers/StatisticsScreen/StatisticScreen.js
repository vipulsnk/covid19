import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
} from 'react-native'
import { Table, TableWrapper, Row } from 'react-native-table-component'
const cheerio = require('react-native-cheerio')
export default class ExampleThree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableHead: ['S. No.', 'State/ UT', 'Confirmed Cases', 'Cured Cases', 'Death'],
      widthArr: [40, 180, 80, 40, 40],
      data: [],
    }
  }
  Meow = async () => {
    const searchUrl = `https://www.mohfw.gov.in/`
    const response = await fetch(searchUrl) // fetch page
    const htmlString = await response.text() // get response text
    const $ = cheerio.load(htmlString) // parse HTML string
    let table = $('#state-data').find('tr')
    const data = []
    const svgs = ['#d35400', '#f5b041', '#58d68d', '#45b39d', '#a569bd', '#2874a6', '#6e2c00']
    for (let index = 0; index < 27; index++) {
      data.push([
        table.find('td').html(),
        table
          .find('td')
          .next()
          .html(),
        table
          .find('td')
          .next()
          .next()
          .html(),
        table
          .find('td')
          .next()
          .next()
          .next()
          .html(),
        table
          .find('td')
          .next()
          .next()
          .next()
          .next()
          .html(),
      ])
      table = table.next()
    }
    console.log(data)
    this.setState({ async_done: true })
    this.setState({ data: data })
    const highlight = []
    let section = $('#latest-update')
      .find('.row')
      .next()
      .find('div')
    for (let index = 0; index < 25; index++) {
      highlight.push({
        key: index + 1,
        date: section
          .find('p')
          .find('strong')
          .html(),
        link: section.find('a').attr('href'),
        title: section.find('a').html(),
      })
      section = section.next()
    }
  }
  render() {
    const state = this.state
    if (this.state.async_done) {
      return (
        <ScrollView style={styles.dataWrapper}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              paddingLeft: 16,
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              onPress={async () => {
                await Linking.openURL('https://www.mohfw.gov.in/pdf/DistrictWiseList324.pdf')
              }}
            >
              <Text style={{ color: '#536DFE' }}>District Wise Reports</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <ScrollView horizontal={true}>
              <View>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                  <Row
                    data={state.tableHead}
                    widthArr={state.widthArr}
                    style={styles.header}
                    textStyle={styles.text}
                  />
                </Table>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                  {this.state.data.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
                      textStyle={styles.text}
                    />
                  ))}
                </Table>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      )
    } else {
      this.Meow()
      return (
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      )
    }
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff', borderRadius: 5 },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' },
  loader: { display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' },
})