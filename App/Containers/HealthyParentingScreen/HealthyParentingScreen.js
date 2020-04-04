import React, { Component } from 'react'
import { View, Text } from 'react-native'
import GallerySwiper from 'react-native-gallery-swiper'
export default class HealthyParentingScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <Text>UsingMasks</Text> */}
        {/* <GallerySwiperItem /> */}
        <GallerySwiper
          images={[
            {
              source: require('App/Assets/Images/english-tipsheet1-updated.jpg'),
              dimensions: { width: 1080, height: 1920 },
            },

            {
              source: require('App/Assets/Images/english-tip-2-covid-19-parenting.jpg'),
              dimensions: { width: 1080, height: 1920 },
            },
            {
              source: require('App/Assets/Images/english-tip-3-covid-19-parenting.jpg'),
              dimensions: { width: 1080, height: 1920 },
            },
            {
              source: require('App/Assets/Images/english-tipsheet4-updated.jpg'),
              dimensions: { width: 1080, height: 1920 },
            },
            {
              source: require('App/Assets/Images/english-tip-5-covid-19-parenting.jpg'),
              dimensions: { width: 1080, height: 1920 },
            },
            {
              source: require('App/Assets/Images/english-tip-6-covid-19-parenting.jpg'),
              dimensions: { width: 1080, height: 1920 },
            },
            // ...
            // ...
            // ...
          ]}
          // Version *1.15.0 update
          // onEndReached={() => {
          //     // add more images when scroll reaches end
          // }}
          // Change this to render how many items before it.
          initialNumToRender={2}
          pageMargin={3}
          // Turning this off will make it feel faster
          // and prevent the scroller to slow down
          // on fast swipes.
          sensitiveScroll={false}
          style={{ backgroundColor: 'white' }}
        />
      </View>
    )
  }
}
