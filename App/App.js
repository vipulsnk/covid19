import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from 'App/Stores'
import RootScreen from './Containers/Root/RootScreen'
import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';
const { store, persistor } = createStore()

export default class App extends Component {
  constructor(props) {
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
      notificationTitle: 'Background tracking',
      notificationText: 'enabled',
      debug: false,
      startOnBoot: false,
      stopOnTerminate: true,
      locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
      interval: 10000,
      fastestInterval: 5000,
      activitiesInterval: 10000,
      stopOnStillActivity: false,
      // url: 'http://192.168.81.15:3000/location',
      httpHeaders: {
        'X-FOO': 'bar'
      },
      // customize post properties
      // postTemplate: {
      //   lat: '@latitude',
      //   lon: '@longitude',
      //   foo: 'bar' // you can also add your own properties
      // }
    });
    BackgroundGeolocation.on('location', (location) => {

      // handle your locations here
      // to perform long running operation on iOS
      // you need to create background task
      temp=this.state.locations;
      temp.push(location);
      console.log(location);
        console.log("gere");
        this.setState({locations:temp});
        console.log(this.state.locations.length);
        fetch('http://192.168.43.97:5000/api/all', { 
          method: 'POST',
          headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
          body: JSON.stringify({
              'locations' : this.state.locations
            }), 
        })
      .then((res) => console.log(res))
      .catch((err) => console.warn(err))
        // if(this.state.locations.length == 2){
          // var request = new XMLHttpRequest();
          // request.onreadystatechange = (e) => {
          //   if (request.readyState !== 4) {
          //     return;
          //   }

          //   if (request.status === 200) {
          //     console.log('success', request.responseText);
          //   } else {
          //     console.warn('error');
          //   }
          // };

          // request.open('POST', 'https://192.168.43.97:3000/');
          // request.send();
          // fetch('https://jsonplaceholder.typicode.com/posts/1', {
          //   method: 'GET'
          // })
          // .then((response) => response.json())
          // .then((responseJson) => {
          //   console.log(responseJson);
          //   this.setState({
          //       data: responseJson
          //   })
          // })
          // .catch((error) => {
          //   console.error(error);
          // });

        //     fetch('http://172.18.0.1:3000/', {
        //     method: 'GET',
        //     // headers: {
        //     //   Accept: 'application/json',
        //     //   'Content-Type': 'application/json',
        //     // },
        //     // body: JSON.stringify({
        //     //   locations:this.state.locations
        //     // }),
        //   }).then(function(data){
        //     console.log("success")
        //     console.log(data);
        //   }).catch((error) => {
        //     console.log(error); 
        //   });
         
        // }
      // BackgroundGeolocation.startTask(taskKey => {
        
      //   // execute long running task
      //   // eg. ajax post location
      //   // IMPORTANT: task has to be ended by endTask
      //   BackgroundGeolocation.endTask(taskKey);
      // });
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
