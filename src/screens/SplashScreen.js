import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Colors from '../styles/Colors';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn');
    }, 2000);
  }, []);
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

export default SplashScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    backgroundColor: '#ffff',
  },
  Logo: {
    height: 280,
    width: 280,
  },
  LogoContainer: {
    alignItems: 'center',
    // borderWidth: 2,
    padding: 10,
    height: 300,
    width: 350,
    // marginTop: 45,
  },
  TitleText: {
    fontSize: 38,
    color: '#0094DA',
    fontWeight: '500',
  },
  TitleTextContainer: {
    // borderWidth: 2,
    padding: 10,
    flexDirection: 'row',
  },
  TitleTextSnap: {
    fontSize: 38,
    color: '#134090',
    fontWeight: '500',
  },
});
