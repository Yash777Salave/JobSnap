import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../styles/Colors';
import {ProgressBar} from 'react-native-paper';

const Profile = () => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.ProfileMainContainer}>
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

          <View style={styles.MailIconContainer}>
            <View style={styles.IconTextContainer}>
              <Image
                source={require('../assets/CardIcons/mail.png')}
                style={[styles.Icons, {tintColor: Colors.Grey}]}
              />
              <Text style={styles.IconText}>yashsalve999@gmail.com</Text>
            </View>

            <View>
              <Text style={styles.VerifiedTXT}>Verified</Text>
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
        <View style={styles.ProgressBarContainer}>
          <View style={styles.ProgressBarTxtContainer}>
            <View>
              <Text style={styles.ProgressBarTXT}>90% Profile Completed</Text>
            </View>
            <View>
              <Text style={styles.UpdatedOnTXT}>Updated on 09 Dec</Text>
            </View>
          </View>

          <ProgressBar
            progress={0.90}
            theme={{colors: {primary: '#008000'}}}
            style={styles.progressBarStyle}
            fillStyle={styles.fillStyle}
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
    // alignItems: 'center',
  },
  profileContainer: {
    // borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: '90%',
    marginTop: 10,
  },
  ProfileMainContainer: {
    // borderWidth: 3,
    padding: 15,
    borderBottomLeftRadius: 26,
    backgroundColor: '#ffff',
    elevation: 2,
    shadowColor: '#000',
    elevation: 9,
  },

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
    // borderWidth: 1,
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
  MailIconContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  VerifiedTXT: {
    fontSize: 14,
    backgroundColor: '#C1E1C1',
    padding: 4,
    paddingHorizontal: 5,
    borderRadius: 7,
    color: '#008000',
    textAlign: 'center',
    alignItems: 'center',
  },
  progressBarStyle: {
    backgroundColor: '#C1E1C1',
    height: 8,
    borderRadius: 64,
    marginTop: 7,
  },
  fillStyle: {
    borderRadius: 64,
  },
  ProgressBarContainer: {
    marginTop: 15,
  },
  ProgressBarTXT: {
    fontSize: 14,
    marginBottom: 9,
    color: Colors.Grey,
  },
  UpdatedOnTXT: {fontSize: 11, color: Colors.Grey},
  ProgressBarTxtContainer: {
    flexDirection: 'row',
    width: '99%',
    // borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
