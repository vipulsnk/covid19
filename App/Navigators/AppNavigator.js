import { createAppContainer, createStackNavigator } from 'react-navigation'

import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import HomeScreen from 'App/Containers/HomeScreen/HomeScreen'
import VisualiserScreen from 'App/Containers/VisualiserScreen/VisualiserScreen'
import StatisticScreen from 'App/Containers/StatisticsScreen/StatisticScreen'
import ReminderScreen from 'App/Containers/ReminderScreen/ReminderScreen'
import SocialMediaScreen from 'App/Containers/SocialMediaScreen/SocialMediaScreen'
import MythBusterScreen from 'App/Containers/MythBusterScreen/MythBusterScreen'
import GettingWorkplaceReadyScreen from 'App/Containers/GettingWorkplaceReadyScreen/GettingWorkplaceReadyScreen'
import HealthyParentingScreen from 'App/Containers/HealthyParentingScreen/HealthyParentingScreen'
import UsingMasks from 'App/Containers/UsingMaskScreen/UsingMasks'
import More1 from 'App/Components/More1'
import More2 from 'App/Components/More2'
import More3 from 'App/Components/More3'
import More4 from 'App/Components/More4'
import UPIScreen from 'App/Containers/UPIScreen/UPIScreen'
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
    SocialMedia: SocialMediaScreen,
    MB: MythBusterScreen,
    GWP: GettingWorkplaceReadyScreen,
    HP: HealthyParentingScreen,
    UM: UsingMasks,
    M1 : More1,
    M2 : More2,
    M3 : More3,
    M4 : More4,
    UPI: UPIScreen

  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
