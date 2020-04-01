import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import style from './GuidelinesStyle'
import { ScrollView } from 'react-native-gesture-handler'
import YoutuberItem from 'App/Components/YoutuberItem'
import YouTube from 'react-native-youtube'
import NavigationService from 'App/Services/NavigationService'
export default class Guidelines extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          {/* <Text style={style.h1}>Quick References</Text> */}
          <View style={style.floatMain}>
            <View style={style.floatCol}>
              <TouchableOpacity style={style.floaters} onPress={() => NavigationService.navigate('UM')}>
                <Text style={style.title}>Using Masks</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.floaters} onPress={() =>  NavigationService.navigate('MB')}>
                <Text style={style.title}>Myth-Busters</Text>
              </TouchableOpacity>
            </View>
            <View style={style.floatCol}>
              <TouchableOpacity style={style.floaters} onPress={() =>  NavigationService.navigate('GWP')}>
                <Text style={style.title}>Getting Workplace Ready</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.floaters} onPress={() =>  NavigationService.navigate('HP')}>
                <Text style={style.title}>Healthy Parenting</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.infoContainer}>
            <View>
              <View>
                <Text style={style.h1}>Basic protective measures against the new coronavirus</Text>
                <Text style={style.p}>
                  Stay aware of the latest information on the COVID-19 outbreak, available on the
                  WHO website and through your national and local public health authority. Most
                  people who become infected experience mild illness and recover, but it can be more
                  severe for others. Take care of your health and protect others by doing the
                  following:
                </Text>
              </View>
              <YoutuberItem vId="bPITHEiFWLc" />
            </View>
            <View>
              <Text style={style.h1}>Basic protective measures against the new coronavirus</Text>
              <Text style={style.p}>
                Stay aware of the latest information on the COVID-19 outbreak, available on the WHO
                website and through your national and local public health authority. Most people who
                become infected experience mild illness and recover, but it can be more severe for
                others. Take care of your health and protect others by doing the following:
              </Text>
            </View>
            <View>
              <Text style={style.h1}>Basic protective measures against the new coronavirus</Text>
              <Text style={style.p}>
                Stay aware of the latest information on the COVID-19 outbreak, available on the WHO
                website and through your national and local public health authority. Most people who
                become infected experience mild illness and recover, but it can be more severe for
                others. Take care of your health and protect others by doing the following:
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
