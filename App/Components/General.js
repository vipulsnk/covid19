import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import style from './GeneralStyle'
import { ScrollView } from 'react-native-gesture-handler'
import YoutuberItem from 'App/Components/YoutuberItem'
import YouTube from 'react-native-youtube'
import Status from 'App/Components/Status'
import Helpline from 'App/Components/Helpline'
import Whatsapp from 'App/Components/Whatsapp'
import Donation from 'App/Components/Donation'
import GeneralCard from 'App/Components/GeneralCard'
var faq1 = require('App/Assets/Jsons/faq_mohfw.json')
export default class General extends Component {
  render() {
    return (
      <ScrollView>
        {/* <Text style={style.h1}>Quick References</Text> */}
        <View style={{ paddingHorizontal: 18 }}>
          <View>
            <Status />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <Helpline />
            <Whatsapp />
          </View>
          <Donation />
          <View style={style.infoContainer}>
            {faq1.map((ar) => (
              <GeneralCard key={ar.id} data={ar} />
            ))}
          </View>
        </View>
      </ScrollView>
    )
  }
}
