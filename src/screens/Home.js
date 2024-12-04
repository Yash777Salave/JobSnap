import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Colors from '../styles/Colors';
import HeadingComponant from '../componants/HeadingComponant';

const Home = () => {
  return (
    <View style={styles.MainContainer}>
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
        <View style={styles.ProfileContainer}>
          <Image
            source={require('../assets/CompanyLogo/CompanyLogo1.webp')}
            style={styles.ProfileLogo}
          />
        </View>
      </View>
      <View style={styles.QuickLinkHeadingComponant}>
        <Text style={styles.QuickLinkHeadingTXT}>Quick links for you</Text>
      </View>
      <View style={styles.LinksCardsContainer}>
        <View style={styles.EmployerCardContainer}>
          <View style={styles.IconsContainer}>
            <Image
              source={require('../assets/comment.png')}
              style={styles.Icons}
            />
          </View>

          <Text style={styles.IconTXT}>Employer</Text>
          <Text style={styles.IconChildTXT}>invites</Text>
        </View>

        <View style={styles.EmployerCardContainer}>
          <View style={styles.IconsContainer}>
            <Image
              source={require('../assets/send.png')}
              style={styles.Icons}
            />
          </View>
          <Text style={styles.IconTXT}>Apply</Text>
          <Text style={styles.IconChildTXT}>status</Text>
        </View>

        <View style={styles.EmployerCardContainer}>
          <View style={styles.IconsContainer}>
            <Image
              source={require('../assets/bookmark.png')}
              style={styles.Icons}
            />
          </View>
          <Text style={styles.IconTXT}>Saved</Text>
          <Text style={styles.IconChildTXT}>jobs</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    // alignItems: 'center',
    margin: 10,
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
    borderWidth: 1,
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
    borderWidth: 2,
    margin: 10,
    alignItems: 'center',
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
  },
  IconTXT: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
  },
  IconChildTXT: {
    fontSize: 15,
    textAlign: 'center',
  },
});
