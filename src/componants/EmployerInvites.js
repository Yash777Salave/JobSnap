import {Image, StyleSheet, Text, View, YellowBox} from 'react-native';
import React from 'react';
import HeadingComponant from './HeadingComponant';
import Colors from '../styles/Colors';

const EmployerInvites = () => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.HeadingContainer}>
        <HeadingComponant icon={require('../assets/left.png')} />
        <Text style={styles.HeadingTXT}>Employer invites</Text>
      </View>
      <View style={styles.EmptyBoxIconContainer}>
        <Image
          source={require('../assets/EmptyStickers/empty-box.png')}
          style={styles.EmptyBoxIcon}
        />
      </View>
      <View style={styles.WarningHeadingContainer}>
        <Text style={styles.WarningHeading}>No Messages Found</Text>
      </View>
      <View style={styles.WaringBriefMessageContainer}>
        <Text style={styles.WaringBriefMessage}>
          You have not received any messages from the Employer.We will notify
          you whenever you receive a new message.
        </Text>
      </View>
    </View>
  );
};

export default EmployerInvites;

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
    top: -15,
  },
});
