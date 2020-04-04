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
  render() {
    return (
      <View style={styles.subContainer}>
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
          {console.log(this.props.hrs)}
          <TimePicker24
            hrs={this.props.hrs}
            mins={this.props.mins}
            onSet={(hrs, mins) => {
              this.props.setTime(hrs, mins)
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
            <TouchableOpacity style={styles.tabItem} onPress={this.props.setAlarm}>
              <Icon name="alarm-on" size={25} />
              <Text style={styles.tabTitle}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={this.props.stopAndSetAlarm}>
              <Icon name="snooze" size={25} backgroundColor="#efefef" />
              <Text style={styles.tabTitle}>Snooze</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={this.props.stopAlarm}>
              <Icon name="alarm-off" size={25} />
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
    flexDirection: "column",
    alignItems: "center"
  },
})