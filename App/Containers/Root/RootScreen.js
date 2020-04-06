import React, { Component } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View, SafeAreaView, AppState } from 'react-native'
import { connect } from 'react-redux'
import StartupActions from 'App/Stores/Startup/Actions'
import { PropTypes } from 'prop-types'
import { Helpers } from 'App/Theme'
import BottomTabBar from 'App/Components/BottomTabBar'
import CollectInfo from '../../Components/CollectInfo'
import { getData, storeData } from 'App/Components/AsyncStorage'

class RootScreen extends Component {
  state = {
    appState: AppState.currentState,
  }

  componentDidMount() {
    // Run the startup saga when the application is starting
    console.log('mounting')
    this.props.startup()
    AppState.addEventListener('change', this._handleAppStateChange)
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange)
    console.log('unmounting from outside')
  }

  _handleAppStateChange = async  (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!')
      await storeData('killed', 'no')
      console.log(
        '###############################################################################################################################################################################'
      )
    } else if (nextAppState === 'background') {
      console.log('background')
      await storeData('killed', 'yes')
    }
    console.log(nextAppState)
    this.setState({ appState: nextAppState })
  }

  render() {
    return (
      <View style={Helpers.fill}>
        {/* <SafeAreaView> */}
        <AppNavigator
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
        <BottomTabBar />
        {/* </SafeAreaView> */}
      </View>
    )
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)
