import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeadingComponant from './HeadingComponant';

const SavedJobs = () => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.HeadingContainer}>
        <HeadingComponant icon={require('../assets/left.png')} />
        <Text style={styles.HeadingTXT}>Employer invites</Text>
      </View>
      <View style={styles.EmptyBoxIconContainer}>
        <Image
          source={require('../assets/EmptyStickers/man.png')}
          style={styles.EmptyBoxIcon}
        />
      </View>
      <View style={styles.WarningHeadingContainer}>
        <Text style={styles.WarningHeading}>You have not saved any jobs!</Text>
      </View>
      <View style={styles.WaringBriefMessageContainer}>
        <Text style={styles.WaringBriefMessage}>
          Start saving jobs you might want to consider applying.Browse from your
          job recommendation now
        </Text>
      </View>
    </View>
  );
};

export default SavedJobs;

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
  EmptyBoxIcon: {
    height: 172,
    width: 172,
  },
  EmptyBoxIconContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  WarningHeadingContainer: {
    // borderWidth: 1,
    margin: 10,
  },
  WarningHeading: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
    padding: 5,
  },
  WaringBriefMessage: {
    fontSize: 17,
    textAlign: 'center',
    padding: 5,
    lineHeight: 22,
    color: '#696969',
  },
  WaringBriefMessageContainer: {
    margin: 10,
    top: -20,
  },
});
