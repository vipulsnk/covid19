import React, { Component } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import StartupActions from 'App/Stores/Startup/Actions'
import { PropTypes } from 'prop-types'
import { Helpers } from 'App/Theme'
import BottomTabBar from 'App/Components/BottomTabBar'

export default class Root2 extends Component {
  
  render() {
    return (
      <View style={Helpers.fill}>
        
      </View>
    )
  }
}
