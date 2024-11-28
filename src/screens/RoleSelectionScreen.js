import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LogoContainer from '../componants/LogoContainer';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import Colors from '../styles/Colors';

const RoleSelectionScreen = () => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.AppLogoContainer}>
        <LogoContainer />
      </View>
      <View style={styles.LowerContainer}>
        <View style={styles.UserProfileLogoContainer}>
          <Image
            source={require('../assets/ChooseRole/person.png')}
            style={styles.UserProfileLogo}
          />
          <Text style={styles.WhatLookingTXT}>What are you looking for?</Text>
        </View>
        <View style={styles.OptionMainContainer}>
          <TouchableOpacity style={styles.ChoosingContainer}>
            <View style={styles.LogoContainer}>
              <Image
                source={require('../assets/ChooseRole/reading-book.png')}
                style={styles.ReadingBookLogo}
              />
            </View>

            <Text style={styles.ChooseBoxTXT}>I want a job</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ChoosingContainer}>
            <View style={styles.LogoContainer}>
              <Image
                source={require('../assets/ChooseRole/user-profile.png')}
                style={styles.ReadingBookLogo}
              />
            </View>
            <Text style={styles.ChooseBoxTXT}>I want an Employee</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RoleSelectionScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  LowerContainer: {
    borderWidth: 0.6,
    width: '100%',
    borderColor: Colors.Primary_Color,
    height: 330,
    backgroundColor: '#ffff',
    //justifyContent: 'center',
    //alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
    borderTopLeftRadius: 39,
    borderTopRightRadius: 39,
    borderBottomWidth: 0,
  },
  UserProfileLogo: {
    height: 60,
    width: 60,
  },
  UserProfileLogoContainer: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  WhatLookingTXT: {
    fontSize: 20,
    marginTop: 10,
  },
  OptionMainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    margin: 15,
    marginTop: 35,
  },
  ReadingBookLogo: {
    height: 45,
    width: 45,
  },
  LogoContainer: {
    backgroundColor: '#E0FFFF',
    borderRadius: 100,
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ChoosingContainer: {
    borderWidth: 0.7,
    height: 130,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: Colors.Grey,
  },
  ChooseBoxTXT: {
    fontSize: 15,
  },
  AppLogoContainer: {marginTop: 30},
});
