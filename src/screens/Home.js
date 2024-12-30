import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../styles/Colors';
import HeadingComponant from '../componants/HeadingComponant';
import JobCard from '../componants/JobCard';
import {JobInformation} from '../componants/ProgrammingJobs';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={styles.MainContainer}
      showsVerticalScrollIndicator={false}>
      <View style={{margin: 10}}>
        <View style={styles.SearchBarAndProfileContainer}>
          <View style={styles.SearchBarContainer}>
            <Image
              source={require('../assets/Search.png')}
              style={styles.SearchIcon}
            />
            <TextInput
              placeholder="Enter Skills,Designation"
              style={styles.SearchBar}
            />
          </View>
          <TouchableOpacity
            style={styles.ProfileContainer}
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Image
              source={require('../assets/yashDiwali.jpg')}
              style={styles.ProfileImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.QuickLinkHeadingComponant}>
          <Text style={styles.QuickLinkHeadingTXT}>Quick links for you</Text>
        </View>
        <View style={styles.LinksCardsContainer}>
          <TouchableOpacity
            style={styles.EmployerCardContainer}
            onPress={() => {
              navigation.navigate('EmployerInvites');
            }}>
            <View style={styles.IconsContainer}>
              <Image
                source={require('../assets/comment.png')}
                style={styles.Icons}
              />
            </View>

            <Text style={styles.IconTXT}>Employer</Text>
            <Text style={styles.IconChildTXT}>invites</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.EmployerCardContainer}
            onPress={() => {
              navigation.navigate('ApplyStatus');
            }}>
            <View style={styles.IconsContainer}>
              <Image
                source={require('../assets/send.png')}
                style={styles.Icons}
              />
            </View>
            <Text style={styles.IconTXT}>Apply</Text>
            <Text style={styles.IconChildTXT}>status</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.EmployerCardContainer}
            onPress={() => {
              navigation.navigate('SavedJobs');
            }}>
            <View style={styles.IconsContainer}>
              <Image
                source={require('../assets/bookmark.png')}
                style={styles.Icons}
              />
            </View>
            <Text style={styles.IconTXT}>Saved</Text>
            <Text style={styles.IconChildTXT}>jobs</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.QuickLinkHeadingComponant}>
          <Text style={styles.QuickLinkHeadingTXT}>Jobs based on</Text>
        </View>
        <View style={{marginBottom: 50}}>
          <JobCard JobInformation={JobInformation} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    // alignItems: 'center',
    // margin: 10,
    backgroundColor: '#ffff',
  },
  SearchBarAndProfileContainer: {
    flexDirection: 'row',
    // borderWidth: 2,
    width: '100%',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    // margin: 10,
    alignItems: 'center',
  },
  SearchBarContainer: {
    borderWidth: 0.5,
    width: '82%',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: Colors.lightBlue,
    borderColor: Colors.Primary_Color,
  },
  SearchBar: {
    // borderWidth: 2,
    // borderRadius: 30,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  ProfileLogo: {
    height: 50,
    width: 50,
    // borderWidth: 2,
    borderRadius: 100,
  },
  SearchIcon: {
    height: 20,
    width: 20,
  },
  QuickLinkHeadingComponant: {
    marginTop: 15,
  },
  QuickLinkHeadingTXT: {
    fontSize: 22,
    fontWeight: '600',
  },
  LinksCardsContainer: {
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // gap: 5,
    marginTop: 14,
    width: '100%',
    // backgroundColor:"red"
  },
  EmployerCardContainer: {
    height: 120,
    width: '29%',
    // borderWidth: 2,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#ffff',

    borderRadius: 10,
    borderRadius: 12,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: -10},
    shadowOpacity: 0.3,
    shadowRadius: 15,

    elevation: 7,
  },

  Icons: {
    height: 22,
    width: 22,
    // borderWidth: 2,
  },
  IconsContainer: {
    // borderWidth: 1,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: Colors.lightBlue,
    marginTop: 10,
  },
  IconTXT: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
    color: Colors.Grey,
  },
  IconChildTXT: {
    fontSize: 15,
    textAlign: 'center',
    color: Colors.Grey,
  },
  ProfileImage: {
    height: 50,
    width: 50,
    // borderWidth: 2,
    borderRadius: 100,
  },
});
