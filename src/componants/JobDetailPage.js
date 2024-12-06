import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeadingComponant from './HeadingComponant';
import Colors from '../styles/Colors';
import ApplyNowButton from './ApplyNowButton';
import Button from './Button';

const JobDetailPage = ({route}) => {
  const {
    id,
    title,
    location,
    companyName,
    companyLogo,
    experienceDetails,
    salary,
    KeySkills,
    elligibiltyCriteria,
    employmentType,
    industryType,
    functionalArea,
    jobDescription,
    postedOn,
    vancancy,
  } = route.params;
  return (
    <ScrollView>
      <View style={styles.MainContainer}>
        <HeadingComponant icon={require('../assets/left.png')} />
        <View style={styles.HeadingContainer}>
          <View style={styles.HeadingAndLogoContainer}>
            <View style={{width: '60%'}}>
              <Text style={styles.titleTxt}>{title}</Text>
            </View>
            <View style={{width: '35%'}}>
              <Image source={companyLogo} style={styles.companyLogo} />
            </View>
          </View>
          <View>
            <Text style={styles.companyName}>{companyName}</Text>
            <Text style={styles.vacancy}>{vancancy} Vacancy</Text>
          </View>
          <View>
            <Button type={'Apply'} />
            
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default JobDetailPage;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    margin: 10,
  },
  HeadingContainer: {
    borderWidth: 1,
  },
  HeadingAndLogoContainer: {
    flexDirection: 'row',
    width: '100%',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    // flexWrap: 'wrap',
    alignItems: 'center',
  },
  companyLogo: {
    height: 70,
    width: 120,
    resizeMode: 'contain',
  },
  titleTxt: {
    fontSize: 25,
  },
  companyName: {
    fontWeight: '600',
    color: Colors.Grey,
  },
  vacancy: {
    color: Colors.Grey,
  },
});
