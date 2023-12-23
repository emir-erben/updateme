import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const BoxedComponent = ({ profileImage, userName, userText, userText2, optionalPhoto }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Text style={styles.userText}>{userText}</Text>
      {userText2 && <Text style={styles.userText}>{userText2}</Text>}
      {optionalPhoto && <Image source={optionalPhoto} style={styles.optionalPhoto} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 8,
    width: '80%',
    borderRadius: 15,
    backgroundColor: '#FFF',
    shadowColor: '#DDD4FC',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    elevation: 2, // Android shadow
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profileImage: {
    width: 20,
    height: 20,
    borderRadius: 15,
    marginRight: 8,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  userText: {
    fontSize: 12,
    marginBottom: 4,
  },
  optionalPhoto: {
    width: '100%',
    height: 160,
    borderRadius: 4,
    marginTop: 4,
  },
});

export default BoxedComponent;
