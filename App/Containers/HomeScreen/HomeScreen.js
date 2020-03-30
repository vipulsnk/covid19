import React from 'react'
import styles from './HomeScreenStyle'
import { Helpers } from 'App/Theme'
import { View, Text, PermissionsAndroid } from 'react-native'
import BottomTabBar from 'App/Components/BottomTabBar'
import TopTabBar from 'App/Components/TopTabBar'
import CovidVisualiser from 'App/Components/CovidVisualiser'
import style from './HomeScreenStyle'
import Geolocation from '@react-native-community/geolocation';

export default class HomeScreen extends React.Component {
  componentDidMount() {
    // this._interval = setInterval(() => {
    //   // Your code
    //   // requestLocationPermission();
    //   // try {
    //   //   const granted = await PermissionsAndroid.request(
    //   //   PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //   //   {
    //   //     'title': 'Location Permission',
    //   //     'message': 'MyMapApp needs access to your location'
    //   //   }
    //   //   )

    //   //  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //   //      this._getCurrentLocation()
    //   //      console.log("Location permission granted")
    //   //  } else {
    //   //      console.log("Location permission denied")
    //   //  }
    //   // } catch (err) {
    //   //   console.warn(err)
    //   // }
    //   Geolocation.getCurrentPosition(info => console.log(info),error => console.log(error),{enableHighAccuracy:true});
    //   console.log('Yeah!');
    // }, 5000);
    // Geolocation.getCurrentPosition(info => console.log(info),error => console.log(error),{enableHighAccuracy:true});
  }
  // async requestLocationPermission() {
    
  // }
  render() {
    return (
      <View style={style.topContainer}>
        {/* <TopTabBar /> */}
        {/* <CovidVisualiser />         */}
        {/* <Text>HomeScreen</Text> */}
        <Text>HOme </Text>
      </View>
    )
  }
}
