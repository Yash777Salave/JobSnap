import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../styles/Colors';
import SavedJobs from '../screens/SavedJobs';
import {useNavigation} from '@react-navigation/native';

const JobCard = ({JobInformation}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isId, setIsId] = useState();

  const navigation = useNavigation();

  const [savedCards, setSavedCards] = useState([]);

  const toggleSave = id => {
    setSavedCards(prev => ({
      ...prev,
      [id]: !prev[id], // Toggle the saved state for the selected card
    }));
  };
  // const toggleSave = id => {
  //   setSavedCards(prev => {
  //     if (prev.includes(id)) {
  //       return prev.filter(cardId => cardId !== id); // Remove from saved list
  //     }
  //     return [...prev, id]; // Add to saved list
  //   });
  // };

  return (
    <View style={styles.CardMainContainer}>
      <View>
        {JobInformation.map(item => (
          <TouchableOpacity
            style={styles.CardContainer}
            key={item.id}
            onPress={() => {
              navigation.navigate('JobDetailPage', {
                id: item.id,
                title: item.title,
                location: item.location,
                companyName: item.companyName,
                companyLogo: item.companyLogo,
                experienceDetails: item.experienceDetails,
                salary: item.salary,
                KeySkills: item.KeySkills,
                elligibiltyCriteria: item.elligibiltyCriteria,
                employmentType: item.employmenrType,
                industryType: item.industryType,
                functionalArea: item.functionalArea,
                jobDescription: item.jobDescription,
                postedOn: item.postedOn,
                vancancy: item.vancancy,
              });
            }}>
            <View style={{margin: 10}}>
              <View style={styles.TitleAndLogoContainer}>
                <Text style={styles.TitleTXT}>{item.title}</Text>
                <Image source={item.companyLogo} style={styles.CompanyLogo} />
              </View>
              <View style={styles.companyNameContainer}>
                <Text style={styles.companyNameTXT}>{item.companyName}</Text>
              </View>
              <View style={styles.ExpContainer}>
                <Image
                  source={require('../assets/CardIcons/portfolio.png')}
                  style={styles.Icons}
                />
                <Text style={styles.ExpTXT}>{item.experienceDetails}</Text>
              </View>
              <View style={styles.ExpContainer}>
                <Image
                  source={require('../assets/CardIcons/location.png')}
                  style={styles.Icons}
                />
                <Text style={styles.ExpTXT}>{item.location}</Text>
              </View>
              <View style={styles.PostedOnContainer}>
                <Text style={styles.PostedOnTXT}>
                  Posted on {item.postedOn}
                </Text>
                <TouchableWithoutFeedback onPress={() => toggleSave(item.id)}>
                  <Image
                    source={
                      savedCards[item.id]
                        ? require('../assets/CardIcons/starFilled.png')
                        : require('../assets/CardIcons/star.png')
                    }
                    style={styles.StarIcon}
                  />
                </TouchableWithoutFeedback>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        {/* <SavedJobs savedJobs={savedCards || []} allJobs={JobInformation} /> */}
      </View>
    </View>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  CardMainContainer: {
    // flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
  },
  CardContainer: {
    //  borderWidth: 2,
    // backgroundColor: 'red',
    margin: 10,
    width: '95%',
    borderRadius: 10,
    backgroundColor: '#ffff',
    elevation: 2,
    shadowColor: '#000',
    elevation: 9,
  },
  TitleAndLogoContainer: {
    //  borderWidth: 2,
    flexDirection: 'row',
    // margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CompanyLogo: {
    height: 50,
    width: 50,
  },
  TitleTXT: {
    fontSize: 17,
    color: '#000',
  },
  companyNameTXT: {
    fontSize: 14,
    top: -10,
    color: Colors.Grey,
  },
  Icons: {
    height: 20,
    width: 20,
    color: Colors.Grey,
  },
  ExpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  ExpTXT: {
    fontSize: 15,
    color: Colors.Grey,
  },
  PostedOnTXT: {
    color: Colors.Grey,
  },
  StarIcon: {
    height: 26,
    width: 26,
    fontWeight: 'bold',
  },
  PostedOnContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // borderWidth: 2,
    width: '100 %',
    justifyContent: 'space-between',
  },
});
