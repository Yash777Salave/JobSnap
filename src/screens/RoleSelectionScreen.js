import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import LogoContainer from '../componants/LogoContainer';
import Colors from '../styles/Colors';
import {useNavigation} from '@react-navigation/native';

const RoleSelectionScreen = () => {
  const [isSelect, setIsSelect] = useState(null);
  const navigation = useNavigation();
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
          <TouchableOpacity
            style={[
              styles.ChoosingContainer,
              isSelect === 1 && styles.selectedContainer,
            ]}
            onPress={() => {
              setIsSelect(1);
            }}>
            <View style={styles.LogoContainer}>
              <Image
                source={require('../assets/ChooseRole/reading-book.png')}
                style={styles.ReadingBookLogo}
              />
            </View>

            <Text style={styles.ChooseBoxTXT}>I want a job</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.ChoosingContainer,
              isSelect === 2 && styles.selectedContainer,
            ]}
            onPress={() => {
              setIsSelect(2);
            }}>
            <View style={styles.LogoContainer}>
              <Image
                source={require('../assets/ChooseRole/user-profile.png')}
                style={styles.ReadingBookLogo}
              />
            </View>
            <Text style={styles.ChooseBoxTXT}>I want an Employee</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.ButtonContainer}>
          <Text
            style={styles.Button}
            onPress={() => {
              (isSelect === 1 && navigation.navigate('Home')) ||
                (isSelect === 2 && navigation.navigate('SavedJobs'));
            }}>
            Next
          </Text>
        </TouchableOpacity>
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
    marginTop: 25,
  },
  ReadingBookLogo: {
    height: 45,
    width: 45,
  },
  LogoContainer: {
    backgroundColor: '#BDDDFC',
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
  selectedContainer: {
    borderColor: Colors.Primary_Color,
    borderWidth: 4,
  },
  ButtonContainer: {
    margin: 10,
    top: -20,
    alignItems: 'flex-end',
    // alignContent: 'center',
    // justifyContent: 'center',
  },
  Button: {
    // borderWidth: 2,
    backgroundColor: Colors.Primary_Color,
    // backgroundColor:'#0094DA',
    padding: 9,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 16,
    color: '#ffff',
    width: 90,
    height: 45,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
