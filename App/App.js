import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from 'App/Stores'
import { geolocated } from "react-geolocated";
import Geolocation from '@react-native-community/geolocation';

import BackgroundTimer from 'react-native-background-timer'
import RootScreen from './Containers/Root/RootScreen'
import { PermissionsAndroid,SafeAreaView, View, StyleSheet, StatusBar, Text } from 'react-native'
const { store, persistor } = createStore()
const THEME_COLOR = '#285E29'
export default class App extends Component {
  async componentDidMount() {
    BackgroundTimer.runBackgroundTimer(async () => {
      //code that will be called every 3 seconds
      // this.handleOnPress()
      console.log('app fs js')
      const granted =  await PermissionsAndroid.check( PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION );
      if (granted) {
        console.log( "You can use the ACCESS_FINE_LOCATION" )
        Geolocation.getCurrentPosition(info => console.log(info))
        // Geolocation.getCurrentPosition(function(info){
          //   console.log(info);
          //   fetch('http://54.166.69.228:5000/api/all', { 
          //     method: 'POST',
          //     headers: {
          //             Accept: 'application/json',
          //             'Content-Type': 'application/json',
          //           },
          //     body: JSON.stringify({
          //         'locations' : info,
          //         // 'name':value
          //       }), 
          //   })
          // .then((res) => console.log(res))
          // .catch((err) => console.warn(err))
          // }).catch(err => console.log(err));
      } 
      else {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        console.log( "ACCESS_FINE_LOCATION permission denied" )
      }
      
      
    }, 10000)
  }
  render() {
    
    return (
      /**
       * @see https://github.com/reduxjs/react-redux/blob/master/docs/api/Provider.md
       */
      <Provider store={store}>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
        <PersistGate loading={null} persistor={persistor}>
          {/* <SafeAreaView> */}
            <RootScreen />
          {/* </SafeAreaView> */}
        </PersistGate>
      </Provider>
    )
  }
}
