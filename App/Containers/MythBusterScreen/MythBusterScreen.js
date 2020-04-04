import React, { Component } from 'react'
import { View, Text } from 'react-native'
import GallerySwiperItem from 'App/Components/GallerySwiperItem'
import GallerySwiper from 'react-native-gallery-swiper'
import YoutuberItem from 'App/Components/YoutuberItem'
//TODO check loader
export default class MythBusterScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <Text>UsingMasks</Text> */}
        {/* <GallerySwiperItem /> */}
        <GallerySwiper
          images={[
            {
              uri:
                'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/52.png',
              dimensions: { width: 1080, height: 720 },
            },
            {
              uri:
                'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/mb-cold-snow.png',
            },
            {
              uri:
                'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/mb-hot-bath.png',
            },
            {
              uri:
                'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/mb-mosquito-bite.png',
            },
            {
              uri:
                'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/mythbusters-27.png',
            },
            {
              uri:
                'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/mythbusters-31.png',
            },
            {
              uri:
                'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/mythbusters-25.png',
            },
            {
              uri:
                'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/mythbusters-33.png',
            },
            {
              uri:
                'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/23.png',
            },
            {
              uri:
                'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/19.png',
            },
            {
              uri:
                'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/mythbuster-3.png',
            },
            {
              uri:
                'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/mythbuster-4.png',
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
