import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import SplashScreen from '../screens/SplashScreen';
import SignIn from '../screens/SignIn';
import RoleSelectionScreen from '../screens/RoleSelectionScreen';
import JobCategories from '../screens/JobCategories';
import HeadingComponant from '../componants/HeadingComponant';
import Button from '../componants/Button';
import BotttomNavigation from './BotttomNavigation';
import JobDetailPage from '../componants/JobDetailPage';
import ApplyStatus from '../componants/ApplyStatus';
import EmployerInvites from '../componants/EmployerInvites';
import SavedJobs from '../componants/SavedJobs';
import AlertBox from '../componants/AlertBox';
const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RoleSelectionScreen"
          component={RoleSelectionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="JobCategories"
          component={JobCategories}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HeadingComponant"
          component={HeadingComponant}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Button" component={Button} />
        <Stack.Screen
          name="Bottom"
          component={BotttomNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="SavedJobs" component={SavedJobs} /> */}
        <Stack.Screen
          name="JobDetailPage"
          component={JobDetailPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ApplyStatus"
          component={ApplyStatus}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EmployerInvites"
          component={EmployerInvites}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SavedJobs"
          component={SavedJobs}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="alertBox"
          component={AlertBox}
          // options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
