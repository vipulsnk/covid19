import { createAppContainer, createStackNavigator } from 'react-navigation'

import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import HomeScreen from 'App/Containers/HomeScreen/HomeScreen'
import VisualiserScreen from 'App/Containers/VisualiserScreen/VisualiserScreen'
import StatisticScreen from 'App/Containers/StatisticsScreen/StatisticScreen'
import ReminderScreen from 'App/Containers/ReminderScreen/ReminderScreen'
import SocialMediaScreen from 'App/Containers/SocialMediaScreen/SocialMediaScreen'
/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    MainScreen: HomeScreen,
    // VisualiserScreen: VisualiserScreen,
    Visualiser: VisualiserScreen,
    Statistics: StatisticScreen,
    Reminder: ReminderScreen,
    SocialMedia: SocialMediaScreen
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
