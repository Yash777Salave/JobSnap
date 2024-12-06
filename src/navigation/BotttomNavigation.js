import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import AllJobs from '../screens/AllJobs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../styles/Colors';

const BotttomNavigation = () => {
  const Bottom = createBottomTabNavigator();
  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          height: 60, // Custom height for the tab bar
          position: 'absolute',
          // bottom: 16,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffff',
          // borderRadius: 15,
          ...styles.shadow,
        },
      }}>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
                flexDirection: 'row',
                gap: 5,
                backgroundColor: Colors.Primary_Color,
                width: 80,
                padding: 6,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/BottomBarIcons/home.png')}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? Colors.lightBlue : '#ffff',
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.lightBlue : '#ffff',
                  fontSize: 12,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      {/* <Bottom.Screen name="JobCard" component={JobCard} /> */}
      <Bottom.Screen
        name="AllJobs"
        component={AllJobs}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
                // borderWidth: 1,
                width: 50,
              }}>
              <Image
                source={require('../assets/BottomBarIcons/suitcase.png')}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? Colors.Primary_Color : Colors.Grey,
                }}
              />
              {/* <Text
                style={{
                  color: focused ? Colors.Primary_Color : Colors.Grey,
                  fontSize: 12,
                }}>
                All Jobs
              </Text> */}
            </View>
          ),
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/BottomBarIcons/user.png')}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? Colors.Primary_Color : Colors.Grey,
                }}
              />
              {/* <Text
                style={{
                  color: focused ? Colors.Primary_Color : Colors.Grey,
                  // fontSize: 12,
                }}>
                User
              </Text> */}
            </View>
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BotttomNavigation;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
