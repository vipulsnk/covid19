import React, { Component } from 'react'
import { AppRegistry, StyleSheet, ScrollView, StatusBar, View } from 'react-native'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
const cheerio = require('react-native-cheerio')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
})
export default class test extends Component {
  state = {
    async_done: false,
    data: [],
  }
  async componentDidMount() {
    await this.scraper()
  }
  async scraper() {
    try {
      const searchUrl = `https://www.mohfw.gov.in/`
      const response = await fetch(searchUrl) // fetch page
      const htmlString = await response.text() // get response text
      const $ = cheerio.load(htmlString) // parse HTML string
      let table = $('div.data-table')
        .siblings()
        .find('tr')
      console.log("table")
      console.log(table)
      const data = []
      const svgs = ['#d35400', '#f5b041', '#58d68d', '#45b39d', '#a569bd', '#2874a6', '#6e2c00']
      for (let index = 0; index < 27; index++) {
        data.push({
          key: table.find('td').html(),
          state: table
            .find('td')
            .next()
            .html(),
          cases: table
            .find('td')
            .next()
            .next()
            .html(),
          cured: table
            .find('td')
            .next()
            .next()
            .next()
            .html(),
          death: table
            .find('td')
            .next()
            .next()
            .next()
            .next()
            .html(),
          svg: { fill: svgs[index % 7] },
        })
        table = table.next()
      }
      console.log("data")
      console.log(data)
      this.setState({ async_done: true })
      this.setState({ data: data })
    } catch (error) {
      console.warn(error)
    }
  }
  render() {
    const data = this.state.data
    const Labels = ({ slices, height, width }) => {
      return slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice
        if (data.cases > 80) {
          return (
            <Text
              key={index}
              x={pieCentroid[0]}
              y={pieCentroid[1]}
              fill={'white'}
              textAnchor={'middle'}
              alignmentBaseline={'middle'}
              fontSize={'90%'}
              stroke={'black'}
              strokeWidth={0.2}
            >
              {data.state + '\n' + data.cases}
            </Text>
          )
        }
      })
    }
    return (
      <PieChart
        style={{ height: '100%' }}
        valueAccessor={({ item }) => item.cases}
        data={data}
        spacing={100}
        outerRadius={'95%'}
        innerRadius={'1%'}
      >
        <Labels />
      </PieChart>
    )
  }
}
