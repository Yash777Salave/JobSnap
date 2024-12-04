import {
  Image,
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

const JobCard = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isId, setIsId] = useState();

  const JobInformation = [
    {
      id: '1',
      title: 'React Native Developer',
      location: 'Mumbai',
      vancancy: '2',
      companyName: 'Vistara Pvt Ltd.',
      companyLogo: require('../assets/CompanyLogo/CompanyLogo1.webp'),
      jobDescription:
        'We are looking for a great JavaScript developer who is proficient with React.js. Your primary focus will be on developing user interface components and implementing them following well-known React.js workflows (such as Flux or Redux). You will ensure that these components and the overall application are robust and easy to maintain. You will coordinate with the rest of the team working on different layers of the infrastructure. Therefore, a commitment to collaborative problem solving, sophisticated design, and quality product is important.',
      elligibiltyCriteria: {
        title: 'Bachelor of Technology/Engine',
        nationality: 'Indian',
      },
      industryType: 'IT-Software Services',
      functionalArea: 'IT-Softwre',
      KeySkills: 'React Native & TypeScript/JavaScript,Redux,Hooks,Navigations',
      employmenrType: 'Full Time',
      experienceDetails: '2-3 years',
      salary: '100k-200k',
      postedOn: '13 Nov',
    },
    {
      id: '2',
      title: 'Wordpress Developer',
      location: 'Bhuwneshwar',
      vancancy: '2',
      companyName: 'Harness Digitech.',
      companyLogo: require('../assets/CompanyLogo/CompanyLogo1.webp'),
      jobDescription:
        'We are looking for a great Wordpress developer who is proficient with Wordpress. Your primary focus will be on developing user interface components and implementing them following well-known React.js workflows (such as Flux or Redux). You will ensure that these components and the overall application are robust and easy to maintain. You will coordinate with the rest of the team working on different layers of the infrastructure. Therefore, a commitment to collaborative problem solving, sophisticated design, and quality product is important.',
      elligibiltyCriteria: {
        title: 'Bachelor of Technology/Engineering',
        nationality: 'Indian',
      },
      industryType: 'IT-Software Services',
      functionalArea: 'IT-Softwre',
      KeySkills: 'Wordpress & TypeScript/JavaScript,Redux',
      employmenrType: 'Full Time',
      experienceDetails: '2-5 years',
      salary: '100k-200k',
      postedOn: '1 Dec',
    },
    {
      id: '3',
      title: 'Laravel Developer',
      location: 'Mumbai',
      vancancy: '2',
      companyName: 'MadeEasy Softwares.',
      companyLogo: require('../assets/CompanyLogo/CompanyLogo1.webp'),
      jobDescription:
        'We are looking for a great Laravel developer who is proficient with Laravel. Your primary focus will be on developing user interface components and implementing them following well-known React.js workflows (such as Flux or Redux). You will ensure that these components and the overall application are robust and easy to maintain. You will coordinate with the rest of the team working on different layers of the infrastructure. Therefore, a commitment to collaborative problem solving, sophisticated design, and quality product is important.',
      elligibiltyCriteria: {
        title: 'Bachelor of Technology/Engineering',
        nationality: 'Indian',
      },
      industryType: 'IT-Software Services',
      functionalArea: 'IT-Softwre',
      KeySkills: 'Laravel , knowledge of DSA is plus',
      employmenrType: 'Full Time',
      experienceDetails: '0-5 years',
      salary: '100k-200k',
      postedOn: '23 Nov',
    },
    {
      id: '4',
      title: 'React Developer',
      location: 'Mumbai',
      vancancy: '2',
      companyName: 'ClickKart Pvt Ltd.',
      companyLogo: require('../assets/CompanyLogo/CompanyLogo1.webp'),
      jobDescription:
        'We are looking for a great JavaScript developer who is proficient with React.js. Your primary focus will be on developing user interface components and implementing them following well-known React.js workflows (such as Flux or Redux). You will ensure that these components and the overall application are robust and easy to maintain. You will coordinate with the rest of the team working on different layers of the infrastructure. Therefore, a commitment to collaborative problem solving, sophisticated design, and quality product is important.',
      elligibiltyCriteria: {
        title: 'Bachelor of Technology/Engineering',
        nationality: 'Indian',
      },
      industryType: 'IT-Software Services',
      functionalArea: 'IT-Softwre',
      KeySkills: 'React Native & TypeScript/JavaScript,Redux,Hooks,Navigations',
      employmenrType: 'Full Time',
      experienceDetails: '2-5 years',
      salary: '100k-200k',
      postedOn: '23 Jan',
    },
    {
      id: '5',
      title: 'Angular Developer',
      location: 'Mumbai',
      vancancy: '2',
      companyName: 'Elexi Software solutions',
      companyLogo: require('../assets/CompanyLogo/CompanyLogo1.webp'),
      jobDescription:
        'We are looking for a great Angular developer who is proficient with Angular. Your primary focus will be on developing user interface components and implementing them following well-known React.js workflows (such as Flux or Redux). You will ensure that these components and the overall application are robust and easy to maintain. You will coordinate with the rest of the team working on different layers of the infrastructure. Therefore, a commitment to collaborative problem solving, sophisticated design, and quality product is important.',
      elligibiltyCriteria: {
        title: 'Bachelor of Technology/Engineering',
        nationality: 'Indian',
      },
      industryType: 'IT-Software Services',
      functionalArea: 'IT-Softwre',
      KeySkills: 'Angular & TypeScript/JavaScript,Redux',
      employmenrType: 'Full Time',
      experienceDetails: '2-5 years',
      salary: '100k-200k',
      postedOn: '13 Aug',
    },
    {
      id: '6',
      title: 'JavaScript Developer',
      location: 'Luckhnow',
      vancancy: '2',
      companyName: 'Purnima Pvt Ltd.',
      companyLogo: require('../assets/CompanyLogo/CompanyLogo1.webp'),
      jobDescription:
        'We are looking for a great JavaScript developer who is proficient with React.js. Your primary focus will be on developing user interface components and implementing them following well-known React.js workflows (such as Flux or Redux). You will ensure that these components and the overall application are robust and easy to maintain. You will coordinate with the rest of the team working on different layers of the infrastructure. Therefore, a commitment to collaborative problem solving, sophisticated design, and quality product is important.',
      elligibiltyCriteria: {
        title: 'Bachelor of Technology/Engineering',
        nationality: 'Indian',
      },
      industryType: 'IT-Software Services',
      functionalArea: 'IT-Softwre',
      KeySkills: 'JavaScript,problem solving skills, knowledge of DSA',
      employmenrType: 'Full Time',
      experienceDetails: '5-10 years',
      salary: '100k-200k',
      postedOn: '13 April',
    },
    {
      id: '7',
      title: 'Java Developer',
      location: 'Mumbai',
      vancancy: '1',
      companyName: 'Apex Techno.',
      companyLogo: require('../assets/CompanyLogo/CompanyLogo1.webp'),
      jobDescription:
        'We are looking for a great Java developer who is proficient with React.js. Your primary focus will be on developing user interface components and implementing them following well-known React.js workflows (such as Flux or Redux). You will ensure that these components and the overall application are robust and easy to maintain. You will coordinate with the rest of the team working on different layers of the infrastructure. Therefore, a commitment to collaborative problem solving, sophisticated design, and quality product is important.',
      elligibiltyCriteria: {
        title: 'Bachelor of Technology/Engineering',
        nationality: 'Indian',
      },
      industryType: 'IT-Software Services',
      functionalArea: 'IT-Softwre',
      KeySkills: 'React , Java & TypeScript/JavaScript,Redux,Hooks,Navigations',
      employmenrType: 'Full Time',
      experienceDetails: '5-7 years',
      salary: '100k-200k',
      postedOn: '14 Feb',
    },
    {
      id: '8',
      title: 'Full Stack Developer',
      location: 'Jaipur',
      vancancy: '1',
      companyName: 'Netparam Pvt Ltd.',
      companyLogo: require('../assets/CompanyLogo/CompanyLogo1.webp'),
      jobDescription:
        'We are looking for a great JavaScript developer who is proficient with React.js. Your primary focus will be on developing user interface components and implementing them following well-known React.js workflows (such as Flux or Redux). You will ensure that these components and the overall application are robust and easy to maintain. You will coordinate with the rest of the team working on different layers of the infrastructure. Therefore, a commitment to collaborative problem solving, sophisticated design, and quality product is important.',
      elligibiltyCriteria: {
        title: 'Bachelor of Technology/Engineering',
        nationality: 'Indian',
      },
      industryType: 'IT-Software Services',
      functionalArea: 'IT-Softwre',
      KeySkills: 'React Native & TypeScript/JavaScript,Redux,Hooks,Navigations',
      employmenrType: 'Full Time',
      experienceDetails: '0-1 years',
      salary: '100k-200k',
      postedOn: '12 March',
    },
    {
      id: '9',
      title: '.Net Developer',
      location: 'Banglore',
      vancancy: '2',
      companyName: 'Gurukul Softwares.',
      companyLogo: require('../assets/CompanyLogo/CompanyLogo1.webp'),
      jobDescription:
        'We are looking for a great Angular developer who is proficient with .Net . Your primary focus will be on developing user interface components and implementing them following well-known React.js workflows (such as Flux or Redux). You will ensure that these components and the overall application are robust and easy to maintain. You will coordinate with the rest of the team working on different layers of the infrastructure. Therefore, a commitment to collaborative problem solving, sophisticated design, and quality product is important.',
      elligibiltyCriteria: {
        title: 'Bachelor of Technology/Engineering',
        nationality: 'Indian',
      },
      industryType: 'IT-Software Services',
      functionalArea: 'IT-Softwre',
      KeySkills: '.Net & TypeScript,Angular,Redux',
      employmenrType: 'Full Time',
      experienceDetails: '4-5 years',
      salary: '100k-200k',
      postedOn: '11 Jully',
    },
    {
      id: '10',
      title: 'React Developer',
      location: 'Pune',
      vancancy: '2',
      companyName: 'Kongo Techno Pvt Ltd.',
      companyLogo: require('../assets/CompanyLogo/CompanyLogo1.webp'),
      jobDescription:
        'We are looking for a great JavaScript developer who is proficient with React.js. Your primary focus will be on developing user interface components and implementing them following well-known React.js workflows (such as Flux or Redux). You will ensure that these components and the overall application are robust and easy to maintain. You will coordinate with the rest of the team working on different layers of the infrastructure. Therefore, a commitment to collaborative problem solving, sophisticated design, and quality product is important.',
      elligibiltyCriteria: {
        title: 'Bachelor of Technology/Engineering',
        nationality: 'Indian',
      },
      industryType: 'IT-Software Services',
      functionalArea: 'IT-Softwre',
      KeySkills: 'React & TypeScript/JavaScript,Redux,Hooks',
      employmenrType: 'Full Time',
      experienceDetails: '5+ years',
      salary: '100k-200k',
      postedOn: '13 May',
    },
    {
      id: '11',
      title: 'PHP Developer',
      location: 'Pune',
      vancancy: '2',
      companyName: 'Sudoku Pvt Ltd.',
      companyLogo: require('../assets/CompanyLogo/CompanyLogo1.webp'),
      jobDescription:
        'We are looking for a great PHP developer who is proficient with React.js. Your primary focus will be on developing user interface components and implementing them following well-known React.js workflows (such as Flux or Redux). You will ensure that these components and the overall application are robust and easy to maintain. You will coordinate with the rest of the team working on different layers of the infrastructure. Therefore, a commitment to collaborative problem solving, sophisticated design, and quality product is important.',
      elligibiltyCriteria: {
        title: 'Bachelor of Technology/Engineering',
        nationality: 'Indian',
      },
      industryType: 'IT-Software Services',
      functionalArea: 'IT-Softwre',
      KeySkills: 'PHP ',
      employmenrType: 'Full Time',
      experienceDetails: '3 years',
      salary: '100k-200k',
      postedOn: '18 June',
    },
  ];

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
    <ScrollView>
      <View style={styles.CardMainContainer}>
        {JobInformation.map(item => (
          <View style={styles.CardContainer} key={item.id}>
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
          </View>
        ))}
        {/* <SavedJobs savedJobs={savedCards || []} allJobs={JobInformation} /> */}
      </View>
    </ScrollView>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  CardMainContainer: {
    flex: 1,
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
