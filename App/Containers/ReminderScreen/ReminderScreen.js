import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  DeviceEventEmitter,
  TouchableOpacity,
} from 'react-native'
import moment from 'moment'
import TimePicker24 from 'App/Components/TimePicker24'
import ReactNativeAN from 'react-native-alarm-notification'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class ReminderScreen extends Component {
  state = {
    selectedHoursHands: 2,
    selectedMinutesHands: 0,
    selectedHoursFood: 4,
    selectedMinutesFood: 0,
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
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              backgroundColor: 'red',
            }}
          >
            <Text style={styles.title}>Set Reminder for Washing Hands</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              backgroundColor: 'orange',
            }}
          >
            <TimePicker24
              hrs={this.state.selectedHoursHands}
              mins={this.state.selectedMinutesHands}
              onSet={(hrs, mins) => {
                this.setState({ selectedHoursHands: hrs, selectedMinutesHands: mins })
              }}
            />
          </View>

          <View
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              backgroundColor: 'blue',
            }}
          >
            {/* <Button title={'Set Reminder'} onPress={this.setAlarm.bind(this)} /> */}
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() =>
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
            >
              <Icon name="alarm-on" size={40} />
              <Text style={styles.tabTitle}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() =>
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
            >
              <Icon name="snooze" size={40} />
              <Text style={styles.tabTitle}>Snooze</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={this.stopAlarm.bind(this)}>
              <Icon name="alarm-off" size={40} />
              <Text style={styles.tabTitle}>Dismiss</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.subContainer}>
          <View
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              backgroundColor: 'red',
            }}
          >
            <Text style={styles.title}>Set Reminder for Washing Hands</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              backgroundColor: 'orange',
            }}
          >
            <TimePicker24
              hrs={this.state.selectedHoursHands}
              mins={this.state.selectedMinutesHands}
              onSet={(hrs, mins) => {
                this.setState({ selectedHoursHands: hrs, selectedMinutesHands: mins })
              }}
            />
          </View>

          <View
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              backgroundColor: 'blue',
            }}
          >
            {/* <Button title={'Set Reminder'} onPress={this.setAlarm.bind(this)} /> */}
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() =>
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
            >
              <Icon name="alarm-on" size={40} />
              <Text style={styles.tabTitle}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={this.stopAndSetAlarm.bind(this)}>
              <Icon name="snooze" size={40} />
              <Text style={styles.tabTitle}>Snooze</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={this.stopAlarm.bind(this)}>
              <Icon name="alarm-off" size={40} />
              <Text style={styles.tabTitle}>Dismiss</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.subContainer}>
          <View
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              backgroundColor: 'red',
            }}
          >
            <Text style={styles.title}>Set Reminder for Washing Hands</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              backgroundColor: 'orange',
            }}
          >
            <TimePicker24
              hrs={this.state.selectedHoursHands}
              mins={this.state.selectedMinutesHands}
              onSet={(hrs, mins) => {
                this.setState({ selectedHoursHands: hrs, selectedMinutesHands: mins })
              }}
            />
          </View>

          <View
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              backgroundColor: 'blue',
            }}
          >
            {/* <Button title={'Set Reminder'} onPress={this.setAlarm.bind(this)} /> */}
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() =>
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
            >
              <Icon name="alarm-on" size={40} />
              <Text style={styles.tabTitle}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={this.stopAndSetAlarm.bind(this)}>
              <Icon name="snooze" size={40} />
              <Text style={styles.tabTitle}>Snooze</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={this.stopAlarm.bind(this)}>
              <Icon name="alarm-off" size={40} />
              <Text style={styles.tabTitle}>Dismiss</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subContainer: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 20,
  },
})
