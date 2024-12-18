import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.profileContainer}>
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <View style={styles.ImageContainer}>
            <Image
              source={require('../assets/yashDiwali.jpg')}
              style={styles.ProfileImage}
            />
          </View>

          <View style={styles.NameContainer}>
            <Text style={styles.ProfileName}>Yash Salave</Text>
            <Text style={styles.WorkingAtTXT}>
              Software Developer DeveloperDeveloperDeveloperDeveloper
            </Text>
          </View>
        </View>

        <View style={styles.EditIconContainer}>
          <Image
            source={require('../assets/edit.png')}
            style={styles.EditIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  profileContainer: {
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  ImageContainer: {},

  ProfileImage: {
    height: 70,
    width: 70,
  },
  EditIcon: {
    height: 23,
    width: 23,
  },
  EditIconContainer: {},
  NameContainer: {
    flexWrap: 'wrap',
  },
  ProfileName: {
    fontSize: 25,
  },
  WorkingAtTXT: {
    fontSize: 15,
    top: -7,
    flexWrap: 'wrap',
    borderWidth: 1,
    width: 200,
  },
});
