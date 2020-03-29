import React, { Component } from 'react'
import { View, Text } from 'react-native'
import GallerySwiperItem from 'App/Components/GallerySwiperItem'
import GallerySwiper from 'react-native-gallery-swiper'
import YoutuberItem from 'App/Components/YoutuberItem'
//TODO check loader
export default class UsingMasks extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <Text>UsingMasks</Text> */}
        {/* <GallerySwiperItem /> */}
        <GallerySwiper
          images={[
            {
              uri:
                'https://www.who.int/images/default-source/health-topics/coronavirus/masks/masks-1.png',
              dimensions: { width: 1080, height: 720 },
            },
            {
              uri:
                'https://www.who.int/images/default-source/health-topics/coronavirus/masks/masks-2.png',
            },
            {
              uri:
                'https://www.who.int/images/default-source/health-topics/coronavirus/masks/masks-3.png',
            },
            {
              uri:
                'https://www.who.int/images/default-source/health-topics/coronavirus/masks/masks-4.png',
            },
            {
              uri:
                'https://www.who.int/images/default-source/health-topics/coronavirus/masks/masks-5.png',
            },
            {
              uri:
                'https://www.who.int/images/default-source/health-topics/coronavirus/masks/masks-6.png',
            },
            {
              uri:
                'https://www.who.int/images/default-source/health-topics/coronavirus/masks/masks-7.png',
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
