import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from './src/styles/Colors';
import SplashScreen from './src/screens/SplashScreen';
import StackNavigation from './src/navigation/StackNavigation';

const App = () => {
  return (
    // <View style={styles.mainContainer}>
    <StackNavigation />
    // </View>
  );
};

export default App;

const styles = StyleSheet.create({
  // mainContainer: {
  //   backgroundColor: Colors.Primary_Color,
  //   flex: 1,
  // },
});
