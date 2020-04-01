import React, { Component } from 'react'
import { View, Text,ScrollView } from 'react-native'
import FaqCard from './FaqCard.js'
import App from '../App.js';
var faq1=require('../Assets/Jsons/faq.json')
var faq2=require('../Assets/Jsons/faq2.json')
var faq3=require('../Assets/Jsons/faq3.json')

export default class FAQS extends Component {
  render() {
    return (
      <View>
        <ScrollView>
        {faq1.map(ar => <FaqCard data={ar} />)}
        {faq2.map(ar => <FaqCard data={ar} />)}
        {faq3.map(ar => <FaqCard data={ar} />)}
        </ScrollView>
      </View>
    )
  }
}
