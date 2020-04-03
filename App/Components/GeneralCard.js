import React, { useCallback, Component } from 'react'
import {
  Alert,
  Button,
  Linking,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native'
// import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { Avatar, Card, Title, Paragraph, TouchableOpacity } from 'react-native-paper'
import YoutuberItem from 'App/Components/YoutuberItem'
import Icon from 'react-native-vector-icons/FontAwesome'
import YouTube from 'react-native-youtube'
import YoutubeHack from './YoutubeHack'
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

export default class GeneralCard extends Component {
  render() {
    const data = this.props.data
    return (
      <Card style={styles.card}>
        <Card.Content>
          <Title>{data.title}</Title>
          {data.video ? (
            <YoutubeHack data={data} show={this.props.show} toggleVideo={this.props.toggleVideo} />
          ) : (
            <></>
          )}
          <Paragraph>{this.props.data.content}</Paragraph>
        </Card.Content>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#efefef',
    // borderWidth: 0.2,
    borderRadius: 5,
    width: 370,
    elevation: 5,
    marginTop: 20,
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
})
