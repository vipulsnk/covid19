import React, { Component } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import moment from 'moment'
import TimePicker24 from 'App/Components/TimePicker24'
import ReactNativeAN from 'react-native-alarm-notification'
export default class ReminderScreen extends Component {
  state = {
    min: 120,
  }

  setAlarm(time) {
    const fireDate = ReactNativeAN.parseDate(new Date(Date.now() + 5000))
    const alarmNotifData = {
      id: '12345', // Required
      title: 'My Notification Title', // Required
      message: 'My Notification Message', // Required
      channel: 'my_channel_id', // Required. Same id as specified in MainApplication's onCreate method
      ticker: 'My Notification Ticker',
      auto_cancel: true, // default: true
      vibrate: true,
      vibration: 5, // default: 100, no vibration if vibrate: false
      small_icon: 'ic_launcher', // Required
      large_icon: 'ic_launcher',
      play_sound: true,
      sound_name: null, // Plays custom notification ringtone if sound_name: null
      color: 'red',
      schedule_once: true, // Works with ReactNativeAN.scheduleAlarm so alarm fires once
      tag: 'some_tag',
      fire_date: fireDate, // Date for firing alarm, Required for ReactNativeAN.scheduleAlarm.

      // You can add any additional data that is important for the notification
      // It will be added to the PendingIntent along with the rest of the bundle.
      // e.g.
      data: { foo: 'bar' },
    }
    ReactNativeAN.scheduleAlarm(alarmNotifData)
  }
  stopAlarm() {
    //Stop Alarm
    ReactNativeAN.stopAlarm()
    alert('stopping')
  }
  render() {
    return (
      // <View>
      //   <Text>Please enter the time in minutes you want to get notified</Text>
      //   <View style={{ padding: 10 }}>
      //     <TextInput
      //       style={{ height: 40 }}
      //       placeholder="Type here to translate!"
      //       onChangeText={(text) => this.setState({min: text})}
      //       keyboardType={'numeric'}
      //       defaultValue={this.state.min}

      //     />

      //   </View>
      //   <Button title="set alarm" onPress={this.setAlarm} />
      //   <Button title="stop alarm" onPress={this.stopAlarm} />
      // </View>
      <TimePicker24 />
    )
  }
}
