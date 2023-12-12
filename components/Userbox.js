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
    paddingVertical: 24,
    paddingHorizontal: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: '#DDD4FC',
    shadowOffset: {
      width: 0,
      height: 1.93,
    },
    shadowRadius: 193.048,
    shadowOpacity: 6.073,
    elevation: 5, // Android shadow
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userText: {
    fontSize: 14,
    marginBottom: 8,
  },
  optionalPhoto: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginTop: 8,
  },
});

export default BoxedComponent;
