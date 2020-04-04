import React, { Component } from 'react'
import DataVisualiser from 'App/Components/DataVisualiser'
import { View, Text, StyleSheet } from 'react-native'

export default class VisualiserScreen extends Component {
  render() {
    return (
      <View style={styles.topContainer}>
        {/* <TopTabBar /> */}
        <DataVisualiser />        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1
  }
});