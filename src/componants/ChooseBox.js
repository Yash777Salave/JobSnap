// import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React, {useState} from 'react';
// import Colors from '../styles/Colors';

// const ChooseBox = ({iconHeading, icon}) => {
//   const [isSelect, setIsSelect] = useState(null);

//   return (
//     <View style={styles.MainContainer}>
//       <View style={styles.OptionMainContainer}>
//         <TouchableOpacity
//           style={[
//             styles.ChoosingContainer,
//             isSelect === 1 && styles.selectedContainer,
//           ]}
//           onPress={() => {
//             setIsSelect(1);
//           }}>
//           <View style={styles.LogoContainer}>
//             <Image source={icon} style={styles.ReadingBookLogo} />
//           </View>

//           <Text style={styles.ChooseBoxTXT}>{iconHeading}</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ChooseBox;

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     backgroundColor: '#ffff',
//   },
//   OptionMainContainer: {
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // gap: 10,
//     // margin: 15,
//     // marginTop: 25,
//   },
//   ReadingBookLogo: {
//     height: 45,
//     width: 45,
//   },
//   LogoContainer: {
//     backgroundColor: '#BDDDFC',
//     borderRadius: 100,
//     height: 70,
//     width: 70,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   ChoosingContainer: {
//     borderWidth: 0.7,
//     height: 130,
//     // width: '50%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 10,
//     borderColor: Colors.Grey,
//     width: '100%',
//   },
//   ChooseBoxTXT: {
//     fontSize: 15,
//   },
//   AppLogoContainer: {marginTop: 30},
//   selectedContainer: {
//     borderColor: Colors.Primary_Color,
//     borderWidth: 4,
//   },
//   ButtonContainer: {
//     margin: 10,
//     top: -20,
//     alignItems: 'flex-end',
//     // alignContent: 'center',
//     // justifyContent: 'center',
//   },
//   Button: {
//     // borderWidth: 2,
//     backgroundColor: Colors.Primary_Color,
//     // backgroundColor:'#0094DA',
//     padding: 9,
//     borderRadius: 10,
//     textAlign: 'center',
//     fontSize: 16,
//     color: '#ffff',
//     width: 90,
//     height: 45,
//     alignItems: 'center',
//     alignContent: 'center',
//     justifyContent: 'center',
//   },
// });

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Colors from '../styles/Colors';

const ChooseBox = ({iconHeading, icon}) => {
  const [isSelect, setIsSelect] = useState(false);

  return (
    <View style={styles.MainContainer}>
      <TouchableOpacity
        style={[
          styles.ChoosingContainer,
          isSelect === true && styles.selectedContainer,
        ]}
        onPress={() => setIsSelect(!isSelect)}>
        <View style={styles.LogoContainer}>
          <Image source={icon} style={styles.ReadingBookLogo} />
        </View>
        <Text style={styles.ChooseBoxTXT}>{iconHeading}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChooseBox;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    marginBottom: 10, // Ensure there's space between the cards
  },
  ReadingBookLogo: {
    height: 40,
    width: 40,
  },
  LogoContainer: {
    backgroundColor: '#BDDDFC',
    borderRadius: 100,
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ChoosingContainer: {
    borderWidth: 0.7,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: Colors.Grey,
    width: '100%', // Each card takes full width of its container (but parent sets 48%)
    marginBottom: 10, // Space between rows
  },
  ChooseBoxTXT: {
    fontSize: 15,
  },
  selectedContainer: {
    borderColor: Colors.Primary_Color,
    borderWidth: 4,
  },
});
