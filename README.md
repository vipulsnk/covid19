
# App for raising awareness for coronavirus, under IEEE Bangalore Covid-19 App contest

## Environmet setup
- [Install react native cli Quickstart](https://reactnative.dev/docs/environment-setup)

## Directory layout

- [`App/Components`](App/Components): presentational components
- [`App/Config`](App/Config): configuration of the application
- [`App/Containers`](App/Containers): container components, i.e. the application's screens
- [`App/Assets`](App/Assets): assets (image, audio files, ...) used by the application
- [`App/Navigators`](App/Navigators): react navigation navigators 
- [`App/Sagas`](App/Sagas): redux sagas
- [`App/Services`](App/Services): application services, e.g. API clients
- [`App/Stores`](App/Stores): redux [actions, reducers and stores](https://redux.js.org/basics)
- [`App/Theme`](App/Theme): base styles for the application

For more information on each directory, click the link and read the directory's README.

## Requirements

Node 8 or greater is required. Development for iOS requires a Mac and Xcode 9 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native:

- for [Android development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3)
- for [iOS development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)



## Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:
- `git clone git@github.com:vipulsnk/covid19.git` to clone th repository
- `npm install` to install the dependencies
- run the following steps for your platform

### Android

- `npx react-native run-android` to start the metro bundler, in a dedicated terminal and to run the Android application (remember to start a simulator or connect an Android phone)
- `npx react-native log-android` to get logs on the terminal

### iOS

- `cd ios`
- `pod install` to install pod dependencies
- `cd ..` to come back to the root folder
- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn ios` to run the iOS application (remember to start a simulator or connect an iPhone phone)

