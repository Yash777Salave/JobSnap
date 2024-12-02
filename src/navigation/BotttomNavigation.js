import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import AllJobs from '../screens/AllJobs';
import JobCard from '../componants/JobCard';

const BotttomNavigation = () => {
  const Bottom = createBottomTabNavigator();
  return (
    <Bottom.Navigator
      //   initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      {/* <Bottom.Screen name="Home" component={Home} /> */}
      <Bottom.Screen name="JobCard" component={JobCard} />
      <Bottom.Screen name="Profile" component={Profile} />
      <Bottom.Screen name="AllJobs" component={AllJobs} />
    </Bottom.Navigator>
  );
};

export default BotttomNavigation;

const styles = StyleSheet.create({});
