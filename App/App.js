import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from 'App/Stores'
import RootScreen from './Containers/Root/RootScreen'
import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';
const { store, persistor } = createStore()
import CacheStore from 'react-native-cache-store';

export default class App extends Component {
  constructor(props) {
    CacheStore.set('name', 'Tanmay Anand');
    super(props);
    this.state = {
      region: null,
      locations: [],
      stationaries: [],
      isRunning: false
    };

  }
  componentDidMount() {
    BackgroundGeolocation.configure({
      desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
      stationaryRadius: 50,
      distanceFilter: 50,
      notificationTitle: 'Gyann Kavach',
      notificationText: 'Be Aware of Covid-19',
      debug: false,
      startOnBoot: false,
      stopOnTerminate: true,
      locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
      interval: 15*60*1000,
      fastestInterval: 5000,
      activitiesInterval: 15*60*1000,
      stopOnStillActivity: false,
      // url: 'http://54.166.69.228:5000/api/all',
      httpHeaders: {
        'X-FOO': 'bar'
      },
      // customize post properties
//       postTemplate: {
//         'locations' : this.state.locations
//  // you can also add your own properties
//       }
    });
    BackgroundGeolocation.on('location', (location) => {

      // handle your locations here
      // to perform long running operation on iOS
      // you need to create background task
      var temp=this.state.locations;
      temp.push(location);
      console.log(location);
        console.log("gere");
        this.setState({locations:temp});
        console.log(this.state.locations.length);
        
        // if(this.state.locations.length%2 == 0){

          CacheStore.get('name').then((value) => {
            fetch('http://54.166.69.228:5000/api/all', { 
          method: 'POST',
          headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
          body: JSON.stringify({
              'locations' : this.state.locations,
              'name':value
            }), 
        })
      .then((res) => console.log(res))
      .catch((err) => console.warn(err))
          });
      // }
    });

    // you can also just start without checking for status
    BackgroundGeolocation.start();
  }

  componentWillUnmount() {
    // unregister all event listeners
    BackgroundGeolocation.removeAllListeners();
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
          <RootScreen />
        </PersistGate>
      </Provider>
    )
  }
}
