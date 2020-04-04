import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  DeviceEventEmitter,
  TouchableOpacity,
  TouchableHighlightBase,
} from 'react-native'
import moment from 'moment'
import TimePicker24 from 'App/Components/TimePicker24'
import ReactNativeAN from 'react-native-alarm-notification'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ReminderComponent from 'App/Components/ReminderComponent'
export default class ReminderScreen extends Component {
  state = {
    selectedHoursHands: 2,
    selectedMinutesHands: 0,
    selectedHoursDrink: 0,
    selectedMinutesDrink: 30,
    open: false,
  }

  setAlarm(hrs, mins, type, id, title, msg, ticker, color) {
    const fireDate = ReactNativeAN.parseDate(
      new Date(Date.now() + hrs * 60 * 60 * 1000 + mins * 60 * 1000)
    )
    const alarmNotifData = {
      id: id, // Required
      title: title, // Required
      message: msg, // Required
      channel: 'my_channel_id', // Required. Same id as specified in MainApplication's onCreate method
      ticker: ticker,
      auto_cancel: true, // default: true
      vibrate: true,
      vibration: 5, // default: 100, no vibration if vibrate: false
      small_icon: 'ic_launcher', // Required
      large_icon: 'ic_launcher',
      play_sound: true,
      sound_name: null, // Plays custom notification ringtone if sound_name: null
      color: color,
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
  stopAndSetAlarm(hrs, mins, type, id, title, msg, ticker, color) {
    ReactNativeAN.stopAlarm()
    this.setAlarm(hrs, mins, type, id, title, msg, ticker, color)
  }
  stopAlarm(id) {
    ReactNativeAN.stopAlarm()
  }
  componentDidMount() {
    DeviceEventEmitter.addListener(
      'OnNotificationDismissed',
      (async (e) => {
        const obj = JSON.parse(e)
        console.log('Dismissing Notif')
        console.log(obj)
        try {
          this.stopAndSetAlarm()
        } catch (error) {
          console.warn('iam throwing', error)
        }
      }).bind(this)
    )

    DeviceEventEmitter.addListener(
      'OnNotificationOpened',
      (async (e) => {
        const obj = JSON.parse(e)
        console.log('Opening Notif')
        console.log(this.state)
        this.setState({ open: true })
        console.log(obj)
      }).bind(this)
    )
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeListener('OnNotificationDismissed')
    DeviceEventEmitter.removeListener('OnNotificationOpened')
  }
  setTime(hrs, mins) {
    this.setState({ selectedHoursHands: hrs, selectedMinutesHands: mins })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.desc}>
            Washing your hands with soap and water or using alcohol-based hand rub kills viruses
            that may be on your hands
          </Text>
          <ReminderComponent
            hrs={this.state.selectedHoursHands}
            mins={this.state.selectedMinutesHands}
            stopAlarm={this.stopAlarm}
            setAlarm={() =>
              this.setAlarm(
                this.state.selectedHoursHands,
                this.state.selectedMinutesHands,
                'hands',
                '1',
                'Wash Hands title',
                'Wash Hands Msg',
                'Wash Hands Ticker',
                'green'
              )
            }
            stopAndSetAlarm={() =>
              this.stopAndSetAlarm(
                this.state.selectedHoursHands,
                this.state.selectedMinutesHands,
                'hands',
                '1',
                'Wash Hands title',
                'Wash Hands Msg',
                'Wash Hands Ticker',
                'green'
              )
            }
            setTime={(hrs, mins) =>
              this.setState({ selectedHoursHands: hrs, selectedMinutesHands: mins })
            }
          />
        </View>

        <View style={styles.subContainer}>
          <Text style={styles.desc}>
            Washing your hands with soap and water or using alcohol-based hand rub kills viruses
            that may be on your hands
          </Text>
          <ReminderComponent
            hrs={this.state.selectedHoursDrink}
            mins={this.state.selectedMinutesDrink}
            stopAlarm={this.stopAlarm}
            setAlarm={() =>
              this.setAlarm(
                this.state.selectedHoursDrink,
                this.state.selectedMinutesDrink,
                'hands',
                '2',
                'Drink Warm Water title',
                'Drink Warm Water Msg',
                'Drink Warm Water Ticker',
                'green'
              )
            }
            stopAndSetAlarm={() =>
              this.stopAndSetAlarm(
                this.state.selectedHoursDrink,
                this.state.selectedMinutesDrink,
                'hands',
                '2',
                'Drink Warm Water title',
                'Drink Warm Water Msg',
                'Drink Warm Water Ticker',
                'green'
              )
            }
            setTime={(hrs, mins) =>
              this.setState({ selectedHoursHands: hrs, selectedMinutesDrink: mins })
            }
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  subContainer: {
    borderColor: 'black',
    // borderWidth: 0.5,
    borderRadius: 5,
    height: 320,
    width: 350,
    padding: 5,
    backgroundColor: '#efefef',
    elevation: 5,
    // margin: 10
  },
  title: {
    fontSize: 20,
  },
  desc: {
    fontSize: 20,
  },
})
