import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BoxedComponent from '../components/Userbox.js';
import { TouchableOpacity } from 'react-native';




const HomeScreen = ({ navigation }) => {

    const profileImage1 = require('../images/pinkpp.png');
    const profileImage2 = require('../images/yellowpp.png');
    const profileImage3 = require('../images/purplepp.png');
    const optionalPhoto = require('../images/bighouse.png');
    
    return (
            <>
              <View style={styles.boxesContainer}>
                <BoxedComponent
                  profileImage={profileImage1}
                  userName="Theo Haddad"
                  userText="Went back to Ann Arbor for a tailgate 😢"
                />
                <BoxedComponent
                  profileImage={profileImage2}
                  userName="Marco Pajaro"
                  userText="Tried Blank Slate for the first time 🍦"
                  // userText2="Tested new batteries at work  💼"
                />
                <BoxedComponent
                  profileImage={profileImage3}
                  userName="Roy Keros"
                  userText="Went back to Ann Arbor for a tailgate 😢"
                  optionalPhoto={optionalPhoto}
                />
                <Text style={styles.title}>updateme</Text>
                <Text style={styles.subTitle}>Update friends about your life and never fall apart</Text>
                
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Let's go</Text>
                </TouchableOpacity>
        
              </View>
            </>
          );
        }
        
    export default HomeScreen;

    const styles = StyleSheet.create({
        boxesContainer : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 100,
        height: '100%',
        },
        title: {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal',
        marginTop: 60,
        marginBottom: 20,
        }, 
        subTitle: {
        color: '#CCC',
        fontFamily: 'Inter',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',
        textAlign: 'center',
        width: '60%',
    },
    button: {
        width: 250,
        height: 60,
        flexShrink: 0,
        borderRadius: 20,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 26,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: '600',
    }
});

