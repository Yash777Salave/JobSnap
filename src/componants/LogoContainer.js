import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Colors from '../styles/Colors';

const LogoContainer = () => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.LogoContainer}>
        <Image source={require('../assets/JobLogo.png')} style={styles.Logo} />
      </View>
      <View style={styles.TitleTextContainer}>
        <Text style={styles.TitleText}>Job</Text>
        <Text style={styles.TitleTextSnap}>Snap</Text>
      </View>
    </View>
  );
};

export default LogoContainer;

const styles = StyleSheet.create({
  MainContainer: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    backgroundColor: '#ffff',
  },
  Logo: {
    height: 120,
    width: 120,
  },
  LogoContainer: {
    alignItems: 'center',
    // borderWidth: 2,
    height: 122,
    width: 200,
  },
  TitleText: {
    fontSize: 30,
    color: '#0094DA',
    // color:"#1E90FF",
    // color:Colors.Primary_Color,
    fontWeight: '500',
  },
  TitleTextContainer: {
    // borderWidth: 2,

    flexDirection: 'row',
    // bottom:10
  },
  TitleTextSnap: {
    fontSize: 30,
    color: '#134090',
    fontWeight: '500',
  },
});
