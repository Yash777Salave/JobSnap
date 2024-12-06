import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
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
    <ScrollView style={{backgroundColor: '#ffff'}}>
      <View style={styles.MainContainer}>
        <View style={styles.HeadingContainer}>
          <HeadingComponant icon={require('../assets/left.png')} />
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
          <View style={styles.ButtonAndIconContainer}>
            <TouchableOpacity style={styles.applyBTNContainer}>
              <Text style={styles.ApplyBtnTXT}>Apply</Text>
            </TouchableOpacity>
            <TouchableHighlight style={styles.shareIconContainer}>
              <Image
                source={require('../assets/share.png')}
                style={styles.shareIcon}
              />
            </TouchableHighlight>
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
    // margin: 10,
  },
  HeadingContainer: {
    // borderWidth: 1,
    borderBottomLeftRadius: 40,
    padding: 10,
    backgroundColor: '#ffff',
    shadowColor: '#000',
    elevation: 9,
  },
  HeadingAndLogoContainer: {
    flexDirection: 'row',
    width: '100%',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    // flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 10,
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
  shareIcon: {
    height: 20,
    width: 20,
  },
  shareIconContainer: {
    backgroundColor: Colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    padding: 15,
    marginRight: 20,
  },
  ButtonAndIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 17,
  },
  applyBTNContainer: {
    width: '50%',
    // height:40,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: Colors.Primary_Color,
    borderRadius: 35,
  },
  ApplyBtnTXT: {
    textAlign: 'center',
    fontSize: 17,
    color: '#ffff',
  },
});
