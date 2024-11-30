import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ChooseBox = ({iconHeading, icon ,}) => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.OptionMainContainer}>
        <TouchableOpacity
          style={[
            styles.ChoosingContainer,
            isSelect === 1 && styles.selectedContainer,
          ]}
          onPress={() => {
            setIsSelect(1);
          }}>
          <View style={styles.LogoContainer}>
            <Image
              source={require('../assets/ChooseRole/reading-book.png')}
              style={styles.ReadingBookLogo}
            />
          </View>

          <Text style={styles.ChooseBoxTXT}>I want a job</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.ChoosingContainer,
            isSelect === 2 && styles.selectedContainer,
          ]}
          onPress={() => {
            setIsSelect(2);
          }}>
          <View style={styles.LogoContainer}>
            <Image
              source={require('../assets/ChooseRole/user-profile.png')}
              style={styles.ReadingBookLogo}
            />
          </View>
          <Text style={styles.ChooseBoxTXT}>I want an Employee</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChooseBox;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  OptionMainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    margin: 15,
    marginTop: 25,
  },
  ReadingBookLogo: {
    height: 45,
    width: 45,
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
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: Colors.Grey,
  },
  ChooseBoxTXT: {
    fontSize: 15,
  },
  AppLogoContainer: {marginTop: 30},
  selectedContainer: {
    borderColor: Colors.Primary_Color,
    borderWidth: 4,
  },
  ButtonContainer: {
    margin: 10,
    top: -20,
    alignItems: 'flex-end',
    // alignContent: 'center',
    // justifyContent: 'center',
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
    width: 90,
    height: 45,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
