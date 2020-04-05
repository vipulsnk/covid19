import PushNotification from 'react-native-push-notification';
import { PushNotificationIOS } from 'react-native';

const configure = () => {
 PushNotification.configure({

   onRegister: function(token) {
     //process token
   },

   onNotification: function(notification) {
     // process the notification
     // required on iOS only
     notification.finish(PushNotificationIOS.FetchResult.NoData);
   },

   permissions: {
     alert: true,
     badge: true,
     sound: true
   },

   popInitialNotification: true,
   requestPermissions: true,

 });
};



const localNotification = (bigText, title, message, color) => {
  PushNotification.localNotification({
    autoCancel: true,
    largeIcon: "ic_launcher",
    smallIcon: "ic_notification",
    bigText: bigText,
    subText: "Jaan hai to Jahan hai",
    color: color,
    vibrate: true,
    vibration: 300,
    title: title,
    message: message,
    playSound: true,
    soundName: 'default',
    // repeatType : 'time',
    // actions: '["Accept", "Reject"]',
    // repeatTime: 4000
  });
 };
 
 export {
  configure,
  localNotification,
 };