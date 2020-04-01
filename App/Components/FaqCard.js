import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View, Text } from "react-native";
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
const OpenURLButton = ({ url, children }) => {
const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);
    if (supported) {
    // Opening the link with some app, if the URL scheme is "http" the web link should be opened
    // by some browser in the mobile
    await Linking.openURL(url);
    } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
    }
}, [url]);
return <Button title={children} onPress={handlePress} />;
};
const FaqCard = (props) => {
const obj = props.data["links"]
return (
    <Card>
            <Card.Content>
            <Title>{props.data["title"]}</Title>
            <Paragraph>{props.data["content"]}</Paragraph>
            {/* <View style={styles.container}> */}
            {Object.keys(obj).map(key => <OpenURLButton url={obj[key]}>{key}</OpenURLButton>)}
            {/* </View> */}
            </Card.Content>
    </Card>

);
};
export default FaqCard;
const styles = StyleSheet.create({
container: { flex: 1, justifyContent: "center", alignItems: "center" },
});