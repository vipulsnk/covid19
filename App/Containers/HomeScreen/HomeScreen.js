import React from 'react'
import { View, Text } from 'react-native'
import style from './HomeScreenStyle'
import General from 'App/Components/General'
import FAQS from 'App/Components/FAQS'
import Policies from 'App/Components/Policies'
import TopAppBarHome from 'App/Components/TopAppBarHome'
export default class HomeScreen extends React.Component {
  state = {
    screen: 'General',
  }
  toggle(screen) {
    this.setState({ screen: screen })
  }
  render() {
    return (
      <View style={style.topContainer}>
        <TopAppBarHome toggle={this.toggle.bind(this)} />
        {this.state.screen === 'General' ? (
          <General />
        ) : this.state.screen === 'FAQS' ? (
          <FAQS />
        ) : this.state.screen === 'Policies' ? (
          <Policies />
        ) : (
          <></>
        )}
      </View>
    )
  }
}
