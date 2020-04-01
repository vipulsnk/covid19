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
import TimePicker24 from 'App/Components/TimePicker24'
import Icon from 'react-native-vector-icons/MaterialIcons'
export default class ReminderComponent extends Component {
  state = {
    selectedHoursHands: 2,
    selectedMinutesHands: 0,
    selectedHoursFood: 4,
    selectedMinutesFood: 0,
    selectedHoursDrink: 0,
    selectedMinutesDrink: 30,
    open: false,
  }
  render() {
    return (
      <View style={styles.subContainer}>
        {/* <View
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: 'white',
          }}
        >
          
        </View> */}
        <View
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            // backgroundColor: 'white',
          }}
        >
          <TimePicker24
            hrs={this.state.selectedHoursHands}
            mins={this.state.selectedMinutesHands}
            onSet={(hrs, mins) => {
              this.setState({ selectedHoursHands: hrs, selectedMinutesHands: mins })
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              // backgroundColor: 'white',
            }}
          >
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() =>
                this.props.setAlarm(
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
                this.props.stopAndSetAlarm(
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
              <Icon name="snooze" size={40}  backgroundColor="#efefef"/>
              <Text style={styles.tabTitle}>Snooze</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={this.props.stopAlarm}>
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
    backgroundColor: '#efefef',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 20,
  },
  tabItem: {
    // backgroundColor: "#efefef"
  }
})
