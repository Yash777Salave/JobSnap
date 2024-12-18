import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../styles/Colors';

const Profile = () => {
  return (
    <View style={styles.MainContainer}>
      <View style={{borderWidth: 3}}>
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
        <View style={styles.BasicInfoContainer}>
          <View style={styles.IconTextContainer}>
            <Image
              source={require('../assets/CardIcons/location.png')}
              style={[styles.Icons, {tintColor: Colors.Grey}]}
            />
            <Text style={styles.IconText}>Pune,India</Text>
          </View>

          <View
            style={[
              styles.IconTextContainer,
              {flexDirection: 'row', borderWidth: 3},
            ]}>
            <Image
              source={require('../assets/CardIcons/mail.png')}
              style={[styles.Icons, {tintColor: Colors.Grey}]}
            />
            <Text style={styles.IconText}>yashsalve999@gmail.com</Text>
            <View>
              <Text
                style={{
                  color: 'red',
                  alignSelf: 'flex-end',
                  borderWidth: 2,
                }}>
                Verified
              </Text>
            </View>
          </View>
          <View style={styles.IconTextContainer}>
            <Image
              source={require('../assets/CardIcons/telephone.png')}
              style={[styles.Icons, {tintColor: Colors.Grey}]}
            />
            <Text style={styles.IconText}>+91 7770089444</Text>
          </View>
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
    // borderWidth: 2,
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
  BasicInfoContainer: {},
  Icons: {
    height: 22,
    width: 22,
    color: Colors.Grey,
  },
  IconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  IconText: {
    fontSize: 14,
    color: Colors.Grey,
  },
});
