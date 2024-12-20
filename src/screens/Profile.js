import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../styles/Colors';
import {ProgressBar} from 'react-native-paper';
import {user} from '../componants/User';
import {employmentDetails} from '../componants/EmployementDetails';
const Profile = () => {
  return (
    <ScrollView style={styles.MainContainer}>
      <View
        style={{
          backgroundColor: Colors.Primary_Color,
          // backgroundColor:Colors.lightBlue,
          borderBottomLeftRadius: 26,
        }}>
        <View style={styles.ProfileMainContainer}>
          <View style={styles.profileContainer}>
            <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
              <View style={styles.ImageContainer}>
                <Image
                  source={require('../assets/yashDiwali.jpg')}
                  style={styles.ProfileImage}
                />
              </View>

              <View style={styles.NameContainer}>
                <Text style={styles.ProfileName}>Yash Salave</Text>
                <Text style={styles.WorkingAtTXT}>
                  Software Developer at Netparam Technologies
                </Text>
              </View>
            </View>

            <View style={styles.EditIconContainer}>
              <Image
                source={require('../assets/edit.png')}
                style={styles.EditIcon}
              />
            </View>
          </View>
          <View style={styles.BasicInfoContainer}>
            <View style={styles.IconTextContainer}>
              <Image
                source={require('../assets/CardIcons/location.png')}
                style={[styles.Icons, {tintColor: Colors.Grey}]}
              />
              <Text style={styles.IconText}>Pune,India</Text>
            </View>

            <View style={styles.MailIconContainer}>
              <View style={styles.IconTextContainer}>
                <Image
                  source={require('../assets/CardIcons/mail.png')}
                  style={[styles.Icons, {tintColor: Colors.Grey}]}
                />
                <Text style={styles.IconText}>yashsalve999@gmail.com</Text>
              </View>

              <View>
                <Text style={styles.VerifiedTXT}>Verified</Text>
              </View>
            </View>
            <View style={styles.IconTextContainer}>
              <Image
                source={require('../assets/CardIcons/telephone.png')}
                style={[styles.Icons, {tintColor: Colors.Grey}]}
              />
              <Text style={styles.IconText}>+91 7770089444</Text>
            </View>
          </View>
          <View style={styles.ProgressBarContainer}>
            <View style={styles.ProgressBarTxtContainer}>
              <View>
                <Text style={styles.ProgressBarTXT}>90% Profile Completed</Text>
              </View>
              <View>
                <Text style={styles.UpdatedOnTXT}>Updated on 09 Dec</Text>
              </View>
            </View>

            <ProgressBar
              progress={0.9}
              theme={{colors: {primary: '#51C1A9'}}}
              style={styles.progressBarStyle}
              fillStyle={styles.fillStyle}
            />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          {user.map(item => (
            <View key={item.id} style={styles.CvHeadlineContainer}>
              <View style={styles.HeadlineTXTContainer}>
                <View>
                  <Text style={styles.HeadlineTXT}>CV Headline</Text>
                </View>
                <View style={styles.EditIconContainer}>
                  <Image
                    source={require('../assets/edit.png')}
                    style={styles.EditIcon}
                  />
                </View>
              </View>
              <Text style={styles.HeadlineValueTXT}>{item.cvHeadline}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        {user.map(item => (
          <View key={item.id} style={styles.CvHeadlineContainer}>
            <View style={styles.HeadlineTXTContainer}>
              <View>
                <Text style={styles.HeadlineTXT}>Key skills</Text>
              </View>
              <View style={styles.EditIconContainer}>
                <Image
                  source={require('../assets/edit.png')}
                  style={styles.EditIcon}
                />
              </View>
            </View>
            <Text style={styles.HeadlineValueTXT}>{item.keySkills}</Text>
          </View>
        ))}
      </View>
      <View style={{alignItems: 'center'}}>
        {user.map(item => (
          <View key={item.id} style={styles.CvHeadlineContainer}>
            <View style={styles.HeadlineTXTContainer}>
              <View>
                <Text style={styles.HeadlineTXT}>Professional Details</Text>
              </View>
              <View style={styles.EditIconContainer}>
                <Image
                  source={require('../assets/edit.png')}
                  style={styles.EditIcon}
                />
              </View>
            </View>
            <Text style={styles.HeadlineValueTXT}>
              {item.professionalDetails.experience}
            </Text>
            <Text style={styles.HeadlineValueTXT}>
              {item.professionalDetails.industry}
            </Text>
            <Text style={styles.HeadlineValueTXT}>
              {item.professionalDetails.functionalArea}
            </Text>
            <Text style={styles.HeadlineValueTXT}>
              {item.professionalDetails.currentWorkLevel}
            </Text>
            <Text style={styles.HeadlineValueTXT}>
              {item.professionalDetails.monthlySalary}
            </Text>
            <Text style={styles.HeadlineValueTXT}>
              {item.professionalDetails.availableJoin}
            </Text>
          </View>
        ))}
      </View>
      <View style={{alignItems: 'center', marginBottom: 50}}>
        {employmentDetails.map(item => (
          <View key={item.id} style={styles.CvHeadlineContainer}>
            <View style={styles.HeadlineTXTContainer}>
              <View>
                <Text style={styles.HeadlineTXT}>Employment Details</Text>
              </View>
              <View style={styles.EditIconContainer}>
                <Image
                  source={require('../assets/edit.png')}
                  style={styles.EditIcon}
                />
              </View>
            </View>
            <Text style={styles.jobProfile}>{item.jobProfile}</Text>
            <Text style={styles.HeadlineValueTXT}>{item.currentCompany}</Text>
            <Text style={styles.HeadlineValueTXT}>{item.startDate}</Text>
            <Text style={styles.HeadlineValueTXT}>{item.endDate}</Text>

            <Text style={styles.HeadlineValueTXT}>{item.jobProfile2}</Text>
            <Text style={styles.HeadlineValueTXT}>{item.currentCompany2}</Text>
            <Text style={styles.HeadlineValueTXT}>{item.startDate2}</Text>
            <Text style={styles.HeadlineValueTXT}>{item.endDate2}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    // alignItems: 'center',
  },
  profileContainer: {
    // borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: '90%',
    marginTop: 10,
  },
  ProfileMainContainer: {
    // borderWidth: 3,
    padding: 15,
    borderBottomLeftRadius: 26,
    backgroundColor: '#ffff',
    elevation: 2,
    shadowColor: '#000',
    elevation: 9,
  },

  ProfileImage: {
    height: 70,
    width: 70,
  },
  EditIcon: {
    height: 23,
    width: 23,
  },
  EditIconContainer: {},
  NameContainer: {
    flexWrap: 'wrap',
  },
  ProfileName: {
    fontSize: 25,
  },
  WorkingAtTXT: {
    fontSize: 14,
    top: -7,
    flexWrap: 'wrap',
    // borderWidth: 1,
    color: Colors.Grey,
    width: 200,
  },
  BasicInfoContainer: {
    // borderWidth: 1,
    marginTop: 15,
  },
  Icons: {
    height: 22,
    width: 22,
    color: Colors.Grey,
  },
  IconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  IconText: {
    fontSize: 14,
    color: Colors.Grey,
  },
  MailIconContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  VerifiedTXT: {
    fontSize: 14,
    backgroundColor: '#E6FFFA',
    padding: 4,
    paddingHorizontal: 5,
    borderRadius: 7,
    color: '#51C1A9',
    textAlign: 'center',
    alignItems: 'center',
  },
  progressBarStyle: {
    backgroundColor: '#C1E1C1',
    height: 8,
    borderRadius: 64,
    marginTop: 7,
  },
  fillStyle: {
    borderRadius: 64,
  },
  ProgressBarContainer: {
    marginTop: 15,
  },
  ProgressBarTXT: {
    fontSize: 14,
    marginBottom: 9,
    color: Colors.Grey,
  },
  UpdatedOnTXT: {fontSize: 11, color: Colors.Grey},
  ProgressBarTxtContainer: {
    flexDirection: 'row',
    width: '99%',
    // borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CvHeadlineContainer: {
    // borderWidth: 1,
    marginTop: 15,
    // margin: 10,
    backgroundColor: '#ffff',
    padding: 10,
    width: '90%',
    borderRadius: 7,
    shadowColor: '#000',
    elevation: 5,
    marginBottom: 15,
  },
  HeadlineTXT: {
    fontSize: 21,
    fontWeight: '600',
  },
  HeadlineValueTXT: {
    fontSize: 16,
    color: '#414a4c',
    marginTop: 6,
  },
  HeadlineTXTContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  jobProfile: {
    fontSize: 18,
  },
});
