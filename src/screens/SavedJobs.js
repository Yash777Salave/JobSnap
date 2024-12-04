// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const SavedJobs = ({savedCards, allCardsData}) => {
//   const savedData = allCardsData.filter(card => savedCards.includes(card.id));

//   return (
//     <View>
//       {savedData.length > 0 ? (
//         <FlatList
//           data={savedData}
//           keyExtractor={item => item.id.toString()}
//           renderItem={({item}) => (
//             <View style={{flexDirection: 'row', marginBottom: 10}}>
//               <Image
//                 source={{uri: item.image}}
//                 style={{width: 50, height: 50}}
//               />
//               <Text>{item.name}</Text>
//             </View>
//           )}
//         />
//       ) : (
//         <Text>No saved cards</Text>
//       )}
//     </View>
//   );
// };

// export default SavedJobs;

// const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SavedJobs = () => {
  return (
    <View>
      <Text>SavedJobs</Text>
    </View>
  );
};

export default SavedJobs;

const styles = StyleSheet.create({});
