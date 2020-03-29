import React from 'react'
import { View } from 'react-native'
import GallerySwiper from 'react-native-gallery-swiper'
export default function GallerySwiperItem() {
  return (
    <View>
      <GallerySwiper
        images={[
          {
            uri:
              'https://www.who.int/images/default-source/health-topics/coronavirus/safe-greetings.png',
            // Optional: Adding a dimensions or height and
            // width field with the actual width and height
            // for REMOTE IMAGES will help improve performance.
            dimensions: { width: 1080, height: 720 },
          },
          {
            uri:
              'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/52.png',
            // Optional: Adding a dimensions or height and
            // width field with the actual width and height
            // for REMOTE IMAGES will help improve performance.
            // dimensions: { width: 1080, height: 720 },
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
        style={{ height: 200, width: 380, backgroundColor: 'black' }}
      />
    </View>
  )
}
