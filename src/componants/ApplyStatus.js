import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeadingComponant from './HeadingComponant';

const ApplyStatus = () => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.HeadingContainer}>
        <HeadingComponant icon={require('../assets/left.png')} />
        <Text style={styles.HeadingTXT}>Apply status</Text>
      </View>
    </View>
  );
};

export default ApplyStatus;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  HeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // margin: 15,
    // borderWidth: 1,
    padding: 10,
    borderBottomLeftRadius: 30,
    elevation: 5,
    backgroundColor: '#ffff',
    paddingHorizontal: 12,
  },
  HeadingTXT: {
    fontSize: 22,
  },
});
