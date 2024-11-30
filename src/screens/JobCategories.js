import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeadingComponant from '../componants/HeadingComponant';
import Colors from '../styles/Colors';

const JobCategories = () => {
  return (
    <View style={styles.MainContainer}>
      <HeadingComponant
        headingTXT={'What job you want?'}
        icon={require('../assets/left.png')}
      />

      <View>
        <Text style={styles.HeadingTXT}>
          Choose 3-5job categories and we'll optimize the job vacancy for you
        </Text>
      </View>
    </View>
  );
};

export default JobCategories;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 12,
  },
  HeadingTXT:{
    fontSize:16,
    marginTop:20,
   // color:Colors.Grey
  }
});
