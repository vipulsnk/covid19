import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Policy from './Policy.js'

export default class FAQS extends Component {
  state = {
    updates: [],
  }
  componentDidMount() {
    //DO ALL YOUR FETCHING AND PARSING HERE, THIS EXECUTES BEFORE RENDER METHOD
    const updates = [
      {
        date: '01.01.2020',
        title:
          'Revised Webinar schedule for training of  Nursing officers on COVID-19 by AIIMS New Delhi',
        link: 'https://www.mohfw.gov.in/pdf/RevisedCOVIDWebinarforNursingofficers.pdf',
      },
      {
        date: '01.01.2020',
        title: 'Training for Nursing Personnal',
        link: 'https://www.youtube.com/watch?v=mdrK_zhHD88&feature=youtu.be',
      },
    ]
    this.setState({ updates: updates })
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.state.updates.map((update) => (
            <Policy data={update} />
          ))}
        </View>
      </ScrollView>
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
