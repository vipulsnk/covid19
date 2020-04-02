import React, { useCallback } from 'react'
import { Alert, Button, Linking, StyleSheet, View, Text } from 'react-native'
// import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper'
const OpenURLButton = ({ url, children }) => {
  // const url = 'whatsapp://send?text=hello&phone=919013151515'
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url)
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url)
    } else {
      Alert.alert(`Some error occured: ${url}`)
    }
  }, [url])
  return (
    <Text style={{ color: '#0f70ce', alignSelf: 'flex-end' }} onPress={handlePress}>
      {children}
    </Text>
  )
}

const GeneralCard = (props) => {
  const data = props.data
  return (
    // <View style={styles.card}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>{props.data.title}</Title>
          <Paragraph>{props.data.content}</Paragraph>
          {/* <View style={styles.container}> */}
          {/* {Object.keys(obj).map((key) => (
          <OpenURLButton url={obj[key]}>{key}</OpenURLButton>
        ))} */}
          {/* </View> */}
        </Card.Content>
      </Card>
    // </View>
  )
}
export default GeneralCard
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#efefef',
    // borderWidth: 0.2,
    borderRadius: 5,
    width: 370,
    elevation: 5,
    marginTop: 20,
  },
})
