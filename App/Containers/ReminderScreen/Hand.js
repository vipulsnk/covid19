import React, { Component } from 'react'
import { Text, View, Button, TextInput, AppState } from 'react-native'
import { configure, localNotification } from './pushNotification'
import BackgroundTimer from 'react-native-background-timer'
import { getData, storeData } from 'App/Components/AsyncStorage'
import { ActivityIndicator } from 'react-native-paper'

export default class Hand extends Component {
  state = {
    hrs: '0',
    mins: '00',
    secs: '00',
    set: false,
    loading: true,
  }
  async componentDidMount() {
    try {
      const killed = await getData('killed')
      if (killed == '\"yes\"') {
        const data = {
          hrs: '0',
          mins: '00',
          secs: '00',
          set: false,
        }
        await storeData('hand_wash_time', data)
      }
    } catch (error) {
      console.warn(error)
    }
    try {
      data_string = await getData('hand_wash_time')
      const data = JSON.parse(data_string)
      console.log(data)
      if (data !== null) {
        this.setState({
          hrs: data.hrs,
          mins: data.mins,
          secs: data.secs,
          set: data.set,
        })
      }
    } catch (error) {
      console.warn(error)
    }
    this.setState({ loading: false })
  }
  componentWillUnmount() {
    console.log('unmounting')
  }
  handleOnPress() {
    localNotification(
      'Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands',
      'Wash Your Hands',
      '20 seconds',
      'blue'
    )
  }

  async setReminder(v) {
    try {
      const duration =
        parseInt(this.state.hrs) * 60 * 60 * 1000 +
        parseInt(this.state.mins) * 60 * 1000 +
        parseInt(this.state.secs) * 1000
      if (duration <= 0) {
        alert('Please enter a valid value')
        return false
      } else {
        const data = {
          hrs: this.state.hrs,
          mins: this.state.mins,
          secs: this.state.secs,
          set: true,
        }
        await storeData('hand_wash_time', data)
        BackgroundTimer.runBackgroundTimer(() => {
          //code that will be called every 3 seconds
          this.handleOnPress()
          console.log('Hand 1, emmited event by ', this.props.name)
        }, duration)
        this.setState({ set: true })
        if (v === 2)
          alert(
            'Reminder set for ' +
              this.state.hrs +
              ' hours ' +
              this.state.mins +
              ' minutes ' +
              this.state.secs +
              ' seconds '
          )
        return true
      }
    } catch (error) {
      console.warn(error)
    }
  }
  async stop(v) {
    try {
      if (!this.state.set) alert('No Reminder Set')
      else {
        const data = {
          hrs: '0',
          mins: '00',
          secs: '00',
          set: false,
        }
        await storeData('hand_wash_time', data)
        BackgroundTimer.stopBackgroundTimer() //after this call all code on background stop run.

        this.setState({ hrs: '0', mins: '00', secs: '00', set: false })
        if (v === 2) alert('Reminder turned off')
      }
    } catch (error) {
      console.warn(error)
    }
  }
  async updateReminder() {
    await this.stop(1)

    if (await this.setReminder(1)) alert('Update Succesful')
  }
  render() {
    return (
      <>
        {this.state.loading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator />
          </View>
        ) : (
          <View style={{ flex: 1, justifyContent: 'space-evenly', paddingHorizontal: 15 }}>
            <View>
              <Text style={{ fontSize: 23 }}>Regularly Wash Hands</Text>
              <Text style={{ fontSize: 15 }}>
                Washing your hands with soap and water or using alcohol-based hand rub kills viruses
                that may be on your hands
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                alignSelf: 'center',
                // backgroundColor: 'blue',
              }}
            >
              <Text style={{ fontSize: 15 }}>Set Interval : </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  // backgroundColor: 'red',
                  width: '50%',
                  justifyContent: 'space-around',
                  alignSelf: 'center',
                }}
              >
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={(text) => this.setState({ hrs: text })}
                  value={this.state.hrs}
                  keyboardType="numeric"
                  maxLength={1}
                  textAlign="center"
                  keyboardAppearance="dark"
                />
                <Text>H</Text>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={(text) => this.setState({ mins: text })}
                  value={this.state.mins}
                  keyboardType="numeric"
                  maxLength={2}
                  textAlign="center"
                  keyboardAppearance="dark"
                />
                <Text>M</Text>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={(text) => this.setState({ secs: text })}
                  value={this.state.secs}
                  keyboardType="numeric"
                  maxLength={2}
                  textAlign="center"
                  keyboardAppearance="dark"
                />
                <Text>S</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: '40%',
                alignSelf: 'center',
              }}
            >
              {this.state.set ? (
                <Button title={'Update'} color="#536DFE" onPress={this.updateReminder.bind(this)} />
              ) : (
                <Button
                  title={'Set'}
                  color="#228B22"
                  onPress={async () => await this.setReminder(2)}
                />
              )}
              <Button title={'Turn Off'} color="#B22222" onPress={async () => await this.stop(2)} />
              {/* <Button title={'Save'} color="#232323" onPress={storeData} />
              <Button title={'Get'} color="#232323" onPress={() => getData('hand_wash_time')} /> */}
            </View>
          </View>
        )}
      </>
    )
  }
}
