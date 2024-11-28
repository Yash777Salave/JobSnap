import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../styles/Colors';
import {useNavigation} from '@react-navigation/native';

const SignButton = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity style={styles.ButtonContainer}>
        <Text
          style={styles.Button}
          onPress={() => {
            navigation.navigate('RoleSelectionScreen');
          }}>
          Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignButton;

const styles = StyleSheet.create({
  ButtonContainer: {
    margin: 10,
  },
  Button: {
    // borderWidth: 2,
    backgroundColor: Colors.Primary_Color,
    // backgroundColor:'#0094DA',
    padding: 9,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 16,
    color: '#ffff',
    // alignItems: 'center',
    // alignContent: 'center',
    // justifyContent: 'center',
  },
});
