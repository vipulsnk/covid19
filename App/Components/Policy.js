import React, { useCallback } from 'react'
import { Alert, Button, Linking, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Avatar, Card, Title, Paragraph } from 'react-native-paper'
const OpenURLButton = ({ url, children }) => {
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
    <TouchableOpacity onPress={handlePress}>
      <Paragraph >{children}</Paragraph>
    </TouchableOpacity>
  )
}

const FaqCard = (props) => {
  const data = props.data
  return (
    <Card style={styles.card}>
      <Card.Content>
        <OpenURLButton url={data.link}>{data.title}</OpenURLButton>
        <Text style={{ color: '#0f70ce', alignSelf: 'flex-end' }}>{data.date}</Text>
      </Card.Content>
    </Card>
  )
}
export default FaqCard
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#efefef',
    borderRadius: 5,
    width: 370,
    elevation: 5,
    marginTop: 20,
  },
})
