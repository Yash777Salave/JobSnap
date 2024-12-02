// import {ScrollView, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import HeadingComponant from '../componants/HeadingComponant';
// import Colors from '../styles/Colors';
// import ChooseBox from '../componants/ChooseBox';

// const JobCategories = () => {
//   const jobCategories = [
//     {
//       id: '1',
//       jobTitle: 'Content Writer',
//       icon: require('../assets/ChooseRole/user-profile.png'),
//     },
//     {
//       id: '2',
//       jobTitle: 'Art & Design',
//       icon: require('../assets/ChooseRole/user-profile.png'),
//     },
//     {
//       id: '3',
//       jobTitle: 'Programmer',
//       icon: require('../assets/ChooseRole/user-profile.png'),
//     },
//     {
//       id: '4',
//       jobTitle: 'Finance',
//       icon: require('../assets/ChooseRole/user-profile.png'),
//     },
//     {
//       id: '5',
//       jobTitle: 'Customer Service',
//       icon: require('../assets/ChooseRole/user-profile.png'),
//     },
//     {
//       id: '6',
//       jobTitle: 'Music Producer',
//       icon: require('../assets/ChooseRole/user-profile.png'),
//     },
//     {
//       id: '7',
//       jobTitle: 'Food & Restraurant',
//       icon: require('../assets/ChooseRole/user-profile.png'),
//     },
//     {
//       id: '8',
//       jobTitle: 'Teaching',
//       icon: require('../assets/ChooseRole/user-profile.png'),
//     },
//   ];
//   return (
//     <ScrollView style={styles.MainContainer}>
//       <HeadingComponant
//         headingTXT={'What job you want?'}
//         icon={require('../assets/left.png')}
//       />

//       <View>
//         <Text style={styles.HeadingTXT}>
//           Choose 3-5job categories and we'll optimize the job vacancy for you
//         </Text>
//       </View>

//       {jobCategories.map(item => (
//         <View key={item.id} style={styles.OptionMainContainer}>
//           <ChooseBox iconHeading={item.jobTitle} icon={item.icon} />
//         </View>
//       ))}
//       {/* <ChooseBox
//         iconHeading={'Content Writer'}
//         icon={require('../assets/ChooseRole/user-profile.png')}
//       /> */}
//     </ScrollView>
//   );
// };

// export default JobCategories;

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     margin: 12,
//   },
//   HeadingTXT: {
//     fontSize: 16,
//     marginTop: 20,
//     // color:Colors.Grey
//   },
//   OptionMainContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 10,
//     margin: 15,
//     marginTop: 25,
//   },
// });

import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeadingComponant from '../componants/HeadingComponant';
import ChooseBox from '../componants/ChooseBox';
import Button from '../componants/Button';

const JobCategories = () => {
  const jobCategories = [
    {
      id: '1',
      jobTitle: 'Content Writer',
      icon: require('../assets/JobCategories/writing.png'),
    },
    {
      id: '2',
      jobTitle: 'Art & Design',
      icon: require('../assets/JobCategories/art-studies.png'),
    },
    {
      id: '3',
      jobTitle: 'Programmer',
      icon: require('../assets/JobCategories/programming-code.png'),
    },
    {
      id: '4',
      jobTitle: 'Finance',
      icon: require('../assets/JobCategories/profit.png'),
    },
    {
      id: '5',
      jobTitle: 'Customer Service',
      icon: require('../assets/JobCategories/customer-support.png'),
    },
    {
      id: '6',
      jobTitle: 'Music Producer',
      icon: require('../assets/JobCategories/headphone.png'),
    },
    {
      id: '7',
      jobTitle: 'Food & Restaurant',
      icon: require('../assets/JobCategories/cutlery.png'),
    },
    {
      id: '8',
      jobTitle: 'Teaching',
      icon: require('../assets/JobCategories/school.png'),
    },
  ];

  return (
    <ScrollView
      style={styles.MainContainer}
      showsVerticalScrollIndicator={false}>
      <HeadingComponant
        headingTXT={'What job you want?'}
        icon={require('../assets/left.png')}
      />
      <View>
        <Text style={styles.HeadingTXT}>
          Choose 3-5 job categories and we'll optimize the job vacancy for you
        </Text>
      </View>

      {/* Container for job category cards */}
      <View style={styles.CategoriesContainer}>
        {jobCategories.map(item => (
          <View style={styles.CardWrapper} key={item.id}>
            <ChooseBox iconHeading={item.jobTitle} icon={item.icon} />
          </View>
        ))}
      </View>
      <Button type={'Next'} />
    </ScrollView>
  );
};

export default JobCategories;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 12,
  },
  HeadingTXT: {
    fontSize: 16,
    marginTop: 20,
  },
  CategoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // This ensures that the cards wrap into rows when they run out of space
    justifyContent: 'space-between', // Distribute the space between the cards
    marginTop: 20,
  },
  CardWrapper: {
    width: '48%', // Adjust the width to make sure 2 cards fit per row
    marginBottom: 10, // Add spacing between cards in a row
  },
});
