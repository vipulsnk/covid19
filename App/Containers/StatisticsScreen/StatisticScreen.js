import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class StatisticScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'flex-end',
              alignSelf: 'flex-end',
              margin: 10,
            }}
          >
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                flexDirection: 'column',
                height: 100,
                width: 100,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'flex-start',
              alignSelf: 'flex-end',
              margin: 10,
            }}
          >
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                flexDirection: 'column',
                height: 100,
                width: 100,
              }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'flex-end',
              alignSelf: 'flex-start',
              margin: 10,
            }}
          >
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                flexDirection: 'column',
                height: 100,
                width: 100,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'flex-start',
              alignSelf: 'flex-start',
              margin: 10,
            }}
          >
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                flexDirection: 'column',
                height: 100,
                width: 100,
              }}
            />
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            position: 'absolute',
          }}
        >
          <View
            style={{
              backgroundColor: 'blue',
              borderRadius: 10,
              height: 100,
              width: 100,
              borderRadius: 100 / 2,
            }}
          />
        </View>
      </View>
    )
  }
}
