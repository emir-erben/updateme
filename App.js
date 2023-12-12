import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import BoxedComponent from './components/Userbox.js'; // Adjust the path accordingly


export default function App() {

  const profileImage = require('./images/profile.png');
  const optionalPhoto = require('./images/bighouse.png');

  return (
    <View style={styles.boxesContainer}>
      <BoxedComponent
        profileImage={profileImage}
        userName="Theo Haddad"
        userText="Went back to Ann Arbor for a tailgate 😢"
      />
      <BoxedComponent
        profileImage={profileImage}
        userName="Marco Pajaro"
        userText="Tested new batteries at work  💼"
        userText2="Tried Blank Slate for the first time 🍦"
      />
      <BoxedComponent
        profileImage={profileImage}
        userName="Roy Keros"
        userText="Went back to Ann Arbor for a tailgate 😢"
        optionalPhoto={optionalPhoto}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  boxesContainer : {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
