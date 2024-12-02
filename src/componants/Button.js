import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../styles/Colors';

const Button = ({type}) => {
  return (
    <TouchableOpacity style={styles.ButtonContainer}>
      <Text style={styles.ButtonTXT}>{type}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  ButtonContainer: {
    //flex: 1,
    alignItems: 'center',
    alignContent: 'center',
  },
  ButtonTXT: {
    height: 'auto',
    width: '95%',
    textAlign: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 35,
    fontSize: 17,
    color: '#ffff',
    backgroundColor: Colors.Primary_Color,
  },
});
