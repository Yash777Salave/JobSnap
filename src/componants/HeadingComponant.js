import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../styles/Colors';
import {useNavigation} from '@react-navigation/native';

const HeadingComponant = ({headingTXT, icon}) => {
  //console.log('-----------', headingTXT);
  const navigation = useNavigation();
  return (
    <View style={styles.MainConatiner}>
      <View style={styles.HeaderContainer}>
        <View>
          <TouchableOpacity
            style={styles.LeftIconContainer}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={icon} style={styles.LeftIcon} />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.HeadingTXT}>{headingTXT}</Text>
        </View>
      </View>
    </View>
  );
};

export default HeadingComponant;

const styles = StyleSheet.create({
  //   MainConatiner: {
  //     flex: 1,
  //   },
  LeftIcon: {
    height: 29,
    width: 29,
    backgroundColor: Colors.lightBlue,
    // alignItems:'center',
    // alignContent:'center',
    // justifyContent:"center"
    borderRadius: 12,
  },
  LeftIconContainer: {
    //padding: 12,
  },
  HeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    //padding: 10,
    // borderWidth: 1,
  },
  HeadingTXT: {
    fontSize: 22,
    fontWeight: '600',
  },
});
