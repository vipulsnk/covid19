import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import TimePicker from 'react-native-simple-time-picker'

export default class TimePicker24 extends Component {
  constructor() {
    super()
    this.state = {
      selectedHours: 2,
      //initial Hours
      selectedMinutes: 0,
      //initial Minutes
    }
  }

  onCancel() {
    this.TimePicker.close()
  }

  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` }, () => console.log(this.state.time))

    this.TimePicker.close()
  }

  render() {
    const { selectedHours, selectedMinutes } = this.state
    return (
      <View style={styles.picker}>
        <TimePicker
          selectedHours={selectedHours}
          //initial Hourse value
          selectedMinutes={selectedMinutes}
          //initial Minutes value
          onChange={(hours, minutes) => this.props.onSet(hours, minutes)}
          hoursUnit="hrs"
          minutesUnit="mins"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 100,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#4EB151',
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 3,
    marginVertical: 50,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  picker: {
    width: 250,
    backgroundColor: 'white',
    borderRadius: 3,
  },
})
