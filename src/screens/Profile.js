import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../styles/Colors';
import {ProgressBar} from 'react-native-paper';
import {user} from '../componants/User';
import {employmentDetails} from '../componants/EmployementDetails';
import {educationalDetails} from '../componants/EducationalDetails';
import DocumentPicker from '../componants/DocumentPicker';
import DocumentPickerr from '../componants/DocumentPicker';
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

            <View style={styles.tagContainerTXT}>
              <Text style={styles.tagTXT}>Total Work Experience</Text>
              <Text style={styles.tagValueTXT}>
                {item.professionalDetails.experience}
              </Text>
            </View>

            <View style={styles.tagContainerTXT}>
              <Text style={styles.tagTXT}>Industry</Text>
              <Text style={styles.tagValueTXT}>
                {item.professionalDetails.industry}
              </Text>
            </View>

            <View style={styles.tagContainerTXT}>
              <Text style={styles.tagTXT}>Functional Area</Text>
              <Text style={styles.tagValueTXT}>
                {item.professionalDetails.functionalArea}
              </Text>
            </View>

            <View style={styles.tagContainerTXT}>
              <Text style={styles.tagTXT}>Current Work Level</Text>
              <Text style={styles.tagValueTXT}>
                {item.professionalDetails.currentWorkLevel}
              </Text>
            </View>

            <View style={styles.tagContainerTXT}>
              <Text style={styles.tagTXT}>Monthly Salary</Text>
              <Text style={styles.tagValueTXT}>
                {item.professionalDetails.monthlySalary}
              </Text>
            </View>

            <View style={styles.tagContainerTXT}>
              <Text style={styles.tagTXT}>Availability to join</Text>
              <Text style={styles.tagValueTXT}>
                {item.professionalDetails.availableJoin}
              </Text>
            </View>
          </View>
        ))}
      </View>
      <View style={{alignItems: 'center'}}>
        {employmentDetails.map(item => (
          <View key={item.id} style={styles.CvHeadlineContainer}>
            <View style={styles.HeadlineTXTContainer}>
              <View>
                <Text style={styles.HeadlineTXT}>Employment Details</Text>
              </View>
            </View>
            <View style={styles.employNameContainer}>
              <View style={styles.expIconContainer}>
                <Image
                  source={require('../assets/CardIcons/portfolio.png')}
                  style={[styles.EditIcon, {tintColor: '#51C1A9'}]}
                />
              </View>

              <View style={styles.jobProfileContainer}>
                <View>
                  <Text style={styles.jobProfile}>{item.jobProfile}</Text>
                </View>
                <View style={styles.EditIconContainer}>
                  <Image
                    source={require('../assets/edit.png')}
                    style={styles.EditIcon}
                  />
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.currentCompanyTXT}>
                {item.currentCompany}
              </Text>
              <Text style={styles.currentCompanyTXT}>
                {item.startDate}-{item.endDate}
              </Text>
            </View>

            <View style={styles.SecondJobContainer}>
              <View style={styles.employNameContainer}>
                <View style={styles.expIconContainer}>
                  <Image
                    source={require('../assets/CardIcons/portfolio.png')}
                    style={[styles.EditIcon, {tintColor: '#51C1A9'}]}
                  />
                </View>

                <View style={styles.jobProfileContainer}>
                  <View>
                    <Text style={styles.jobProfile}>{item.jobProfile2}</Text>
                  </View>
                  <View style={styles.EditIconContainer}>
                    <Image
                      source={require('../assets/edit.png')}
                      style={styles.EditIcon}
                    />
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.currentCompanyTXT}>
                  {item.currentCompany2}
                </Text>

                <Text style={styles.currentCompanyTXT}>
                  {item.startDate2}-{item.endDate2}
                </Text>
              </View>
            </View>
            <View style={styles.AddExpMainContainer}>
              <TouchableOpacity style={styles.AddExpContainer}>
                <Text style={styles.AddExpTXT}>Add Experience</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <View style={{alignItems: 'center'}}>
        {educationalDetails.map(item => (
          <View key={item.id} style={styles.CvHeadlineContainer}>
            <View style={styles.HeadlineTXTContainer}>
              <View>
                <Text style={styles.HeadlineTXT}>Educational Details</Text>
              </View>
            </View>
            <View style={styles.employNameContainer}>
              <View
                style={[styles.expIconContainer, {backgroundColor: '#ffc9c9'}]}>
                <Image
                  source={require('../assets/CardIcons/edu2.png')}
                  style={[styles.EditIcon]}
                />
              </View>

              <View style={styles.jobProfileContainer}>
                <View>
                  <Text style={styles.jobProfile}>
                    {item.highestGraduation}
                  </Text>
                </View>
                <View style={styles.EditIconContainer}>
                  <Image
                    source={require('../assets/edit.png')}
                    style={styles.EditIcon}
                  />
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.currentCompanyTXT}>{item.Institute}</Text>
            </View>
            <View>
              <Text style={styles.dates}>
                {item.startDate}-{item.endDate}
              </Text>
            </View>

            <View style={styles.SecondJobContainer}>
              <View style={styles.employNameContainer}>
                <View
                  style={[
                    styles.expIconContainer,
                    {backgroundColor: '#ffc9c9'},
                  ]}>
                  <Image
                    source={require('../assets/CardIcons/edu2.png')}
                    style={[styles.EditIcon]}
                  />
                </View>

                <View style={styles.jobProfileContainer}>
                  <View>
                    <Text style={styles.jobProfile}>
                      {item.highestGraduation2}
                    </Text>
                  </View>
                  <View style={styles.EditIconContainer}>
                    <Image
                      source={require('../assets/edit.png')}
                      style={styles.EditIcon}
                    />
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.currentCompanyTXT}>{item.Institute2}</Text>

                {/* <Text style={styles.currentCompanyTXT}>{item.course2}</Text> */}
              </View>
              <View>
                <Text style={styles.dates}>
                  {item.startDate2}-{item.endDate2}
                </Text>
              </View>
            </View>
            <View style={styles.AddExpMainContainer}>
              <TouchableOpacity style={styles.AddExpContainer}>
                <Text style={styles.AddExpTXT}>Add Experience</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
      <View style={{alignItems: 'center'}}>
        {user.map(item => (
          <View key={item.id} style={styles.CvHeadlineContainer}>
            <View style={styles.HeadlineTXTContainer}>
              <View>
                <Text style={styles.HeadlineTXT}>Profile Summary</Text>
              </View>
              <View style={styles.EditIconContainer}>
                <Image
                  source={require('../assets/edit.png')}
                  style={styles.EditIcon}
                />
              </View>
            </View>
            <Text style={styles.profileSummaryTXT}>{item.profileSummary}</Text>
          </View>
        ))}
      </View>

      <View style={{alignItems: 'center'}}>
        {user.map(item => (
          <View key={item.id} style={styles.CvHeadlineContainer}>
            <View style={styles.HeadlineTXTContainer}>
              <View>
                <Text style={styles.HeadlineTXT}>Personal Details</Text>
              </View>
              <View style={styles.EditIconContainer}>
                <Image
                  source={require('../assets/edit.png')}
                  style={styles.EditIcon}
                />
              </View>
            </View>

            <View style={styles.tagContainerTXT}>
              <Text style={styles.tagTXT}>Date of Birth</Text>
              <Text style={styles.tagValueTXT}>{item.DOB}</Text>
            </View>

            <View style={styles.tagContainerTXT}>
              <Text style={styles.tagTXT}>Gender</Text>
              <Text style={styles.tagValueTXT}>{item.Gender}</Text>
            </View>

            <View style={styles.tagContainerTXT}>
              <Text style={styles.tagTXT}>Nationality</Text>
              <Text style={styles.tagValueTXT}>{item.Nationality}</Text>
            </View>

            <View style={styles.tagContainerTXT}>
              <Text style={styles.tagTXT}>Current Work Level</Text>
              <Text style={styles.tagValueTXT}>
                {item.professionalDetails.currentWorkLevel}
              </Text>
            </View>

            <View style={styles.tagContainerTXT}>
              <Text style={styles.tagTXT}>Religion</Text>
              <Text style={styles.tagValueTXT}>{item.Religion}</Text>
            </View>

            <View style={styles.tagContainerTXT}>
              <Text style={styles.tagTXT}>Marital Status</Text>
              <Text style={styles.tagValueTXT}>{item.MaritialStatus}</Text>
            </View>
            <View style={styles.tagContainerTXT}>
              <Text style={styles.tagTXT}>Current City</Text>
              <Text style={styles.tagValueTXT}>{item.currentCity}</Text>
            </View>
            <View style={styles.tagContainerTXT}>
              <Text style={styles.tagTXT}>Languages Known</Text>
              <Text style={styles.tagValueTXT}>{item.languageKnown}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={{alignItems: 'center'}}>
        {user.map(item => (
          <View key={item.id} style={styles.CvHeadlineContainer}>
            <View style={styles.HeadlineTXTContainer}>
              <View>
                <Text style={styles.HeadlineTXT}>Desired Jobs</Text>
              </View>
              <View style={styles.EditIconContainer}>
                <Image
                  source={require('../assets/edit.png')}
                  style={styles.EditIcon}
                />
              </View>
            </View>

            <View style={styles.tagContainerTXT}>
              <Text style={styles.tagTXT}>Preferred Designations</Text>
              <Text style={styles.tagValueTXT}>
                {item.desiredJobs.preferredDesignation}
              </Text>
            </View>

            <View style={styles.tagContainerTXT}>
              <Text style={styles.tagTXT}>Preferred Location</Text>
              <Text style={styles.tagValueTXT}>
                {item.desiredJobs.preferredLocation}
              </Text>
            </View>

            <View style={styles.tagContainerTXT}>
              <Text style={styles.tagTXT}>Preferred Industry</Text>
              <Text style={styles.tagValueTXT}>
                {item.desiredJobs.preferredIndustry}
              </Text>
            </View>
          </View>
        ))}
      </View>
      <View style={{ marginBottom: 50}}>
        <DocumentPickerr />
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
    fontSize: 19,
    color: '#414a4c',
  },
  employNameContainer: {
    flexDirection: 'row',
    // width: '100%',
    // backgroundColor: 'red',
    alignItems: 'center',
    gap: 8,
    padding: 10,
    marginTop: 12,
  },
  currentCompanyTXT: {
    fontSize: 16,
    color: Colors.Grey,
    paddingHorizontal: 50,
    bottom: 8,
  },
  expIconContainer: {
    backgroundColor: '#E6FFFA',
    padding: 6,
    borderRadius: 100,
  },
  jobProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '89%',
  },
  SecondJobContainer: {
    borderTopWidth: 0.4,
    borderTopEndRadius: 22,
    borderTopStartRadius: 22,
    marginBottom: 10,
    marginTop: 20,
  },
  tagTXT: {
    fontSize: 17,
    color: Colors.Grey,
  },
  tagValueTXT: {
    fontSize: 17,
    color: '#414a4c',
  },
  tagContainerTXT: {
    margin: 8,
    marginTop: 10,
  },
  AddExpContainer: {
    // borderWidth: 1,
    width: '45%',
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  AddExpTXT: {
    fontSize: 17,
    color: Colors.Primary_Color,
    textAlign: 'center',
    margin: 10,
  },
  AddExpMainContainer: {
    borderTopWidth: 0.4,
    borderTopEndRadius: 22,
    borderTopStartRadius: 22,
  },
  dates: {
    fontSize: 12,
    color: Colors.Grey,
    paddingHorizontal: 50,
    bottom: 8,
  },
  profileSummaryTXT: {
    fontSize: 16,
    color: Colors.Grey,
    marginTop: 6,
    lineHeight: 20,
  },
});
