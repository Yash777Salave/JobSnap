import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeadingComponant from './HeadingComponant';
import Colors from '../styles/Colors';
import Button from './Button';

const JobDetailPage = ({route}) => {
  const [showMore, setShowMore] = useState(false);
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
    employerDetails,
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
        <View style={styles.InfoContainerMain}>
          <View style={styles.BasicInfoContainer}>
            <View style={styles.ExpContainer}>
              <Image
                source={require('../assets/CardIcons/portfolio.png')}
                style={[styles.Icons, {tintColor: Colors.Grey}]}
              />
              <Text style={styles.InfoTXT}>{experienceDetails}</Text>
            </View>
            <View style={styles.ExpContainer}>
              <Image
                source={require('../assets/CardIcons/location.png')}
                style={[styles.Icons, {tintColor: Colors.Grey}]}
              />
              <Text style={styles.InfoTXT}>{location}</Text>
            </View>
            <View style={styles.ExpContainer}>
              <Image
                source={require('../assets/wallet.png')}
                style={[styles.Icons, {tintColor: Colors.Grey}]}
              />
              <Text style={styles.InfoTXT}>{salary}</Text>
            </View>
            <Text style={styles.PostedOnTXT}>Posted on {postedOn}</Text>
          </View>

          <View style={styles.jobDescriptionContainer}>
            <View style={styles.DescriptionHeadings}>
              <Text style={styles.JobDescriptionHeadingTXT}>
                Job Description
              </Text>
              <Text style={styles.JobDescriptionHeadingTXT}>
                Roles & Responsibilities
              </Text>
            </View>
            <View style={styles.DescriptionTextsContainer}>
              <Text style={styles.DescriptionTexts}>{jobDescription}</Text>
            </View>
            <View style={styles.DesireProfileContainer}>
              <Text style={styles.JobDescriptionHeadingTXT}>
                Desired Candidate Profile
              </Text>
              <View style={styles.ExpContainer}>
                <Image
                  source={require('../assets/graduate.png')}
                  style={[styles.Icons, {tintColor: Colors.Grey}]}
                />
                <Text style={styles.InfoTXT}>{elligibiltyCriteria.title}</Text>
              </View>
              <View style={styles.ExpContainer}>
                <Image
                  source={require('../assets/nation.png')}
                  style={[styles.Icons, {tintColor: Colors.Grey}]}
                />
                <Text style={styles.InfoTXT}>
                  {elligibiltyCriteria.nationality}
                </Text>
              </View>
              <View style={styles.ExpContainer}>
                <Image
                  source={require('../assets/gender.png')}
                  style={[styles.Icons, {tintColor: Colors.Grey}]}
                />
                <Text style={styles.InfoTXT}>{elligibiltyCriteria.gender}</Text>
              </View>
              <View style={styles.IndustryInfoContainer}>
                <View>
                  <Text style={styles.HeadingTXT}>Employment Type</Text>
                  <Text style={styles.HeadingValues}>{employmentType}</Text>
                </View>
                <View style={styles.IndustryInfoContainer}>
                  <Text style={styles.HeadingTXT}>Industry Type</Text>
                  <Text style={styles.HeadingValues}>{industryType}</Text>
                </View>
                <View style={styles.IndustryInfoContainer}>
                  <Text style={styles.HeadingTXT}>Functional Area</Text>
                  <Text style={styles.HeadingValues}>{functionalArea}</Text>
                </View>
                <View style={styles.IndustryInfoContainer}>
                  <Text style={styles.HeadingTXT}>Key skills</Text>
                  <Text style={styles.HeadingValues}>{KeySkills}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.employerDetailsContainer}>
          <Text style={[styles.HeadingTXT, {marginVertical: 10}]}>
            Employer Details
          </Text>
          {showMore ? (
            <Text style={styles.DescriptionTexts}>{employerDetails}</Text>
          ) : (
            <Text style={styles.DescriptionTexts}>{`${employerDetails.slice(
              0,
              71,
            )}`}</Text>
          )}
          <TouchableOpacity
            onPress={() => {
              setShowMore(!showMore);
            }}
            style={styles.ShowMoreContainer}>
            <Text style={styles.showMoreTXT}>
              {showMore ? 'Show Less' : '...Show More'}
            </Text>
          </TouchableOpacity>
        </View>
        <Button type={'Apply'} />
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
  Icons: {
    height: 22,
    width: 22,
    color: Colors.Grey,
  },

  BasicInfoContainer: {
    // borderWidth: 1,
    margin: 10,
  },
  ExpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  InfoTXT: {
    fontSize: 17,
    marginVertical: 2,
    color: '#696969',
    // color: Colors.Grey,
  },
  PostedOnTXT: {
    fontSize: 12,
    color: '#505050',
  },

  DescriptionHeadings: {
    // borderWidth: 1,
  },
  JobDescriptionHeadingTXT: {
    fontSize: 20,
    marginVertical: 10,
  },
  jobDescriptionContainer: {
    margin: 10,
  },
  DescriptionTextsContainer: {
    // borderWidth:1
  },
  DescriptionTexts: {
    fontSize: 18,
    // marginVertical:10,
    lineHeight: 22,
    color: '#696969',
  },
  DesireProfileContainer: {
    // margin: 10,
  },
  HeadingValues: {
    fontSize: 17,
    color: '#696969',
  },
  HeadingTXT: {
    fontSize: 20,
  },
  IndustryInfoContainer: {
    marginTop: 17,
  },
  employerDetailsContainer: {
    margin: 15,
    padding: 12,
    borderRadius: 10,
    borderRadius: 12,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: -10},
    shadowOpacity: 0.3,
    shadowRadius: 15,

    elevation: 7,
    backgroundColor: '#ffff',
  },
  showMoreTXT: {
    fontSize: 17,
    color: Colors.Primary_Color,
    fontWeight: 'bold',
  },
  ShowMoreContainer: {
    width: '35%',
  },
});
