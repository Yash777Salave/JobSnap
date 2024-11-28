import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LogoContainer from '../componants/LogoContainer';
import Colors from '../styles/Colors';
import SignButton from '../componants/SignButton';
import {Checkbox} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.MainContainer}>
      <LogoContainer />
      <View>
        <View style={{marginTop: 1}}>
          <Text style={styles.SignInTXT}>Sign in to your account</Text>
        </View>
        <View style={{margin: 1}}>
          <View style={styles.InputContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.InputTitle}>Email</Text>
              <Text style={styles.MandetorySign}>*</Text>
            </View>

            <TextInput placeholder="Email" style={styles.InputBox} />
          </View>
          <View style={styles.InputContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.InputTitle}>Password</Text>
              <Text style={styles.MandetorySign}>*</Text>
            </View>

            <TextInput placeholder="Password" style={styles.InputBox} />
          </View>
        </View>
        <View style={styles.CheckBoxContainer}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color={Colors.Primary_Color}
          />
          <Text style={styles.RememberMeTXT}>Remember me</Text>
        </View>
        <View>
          <SignButton />
        </View>
        <View>
          <Text style={styles.OrContinueWithTXT}>or continue with</Text>
        </View>
        <View style={styles.SocialMediaContainer}>
          <TouchableOpacity style={styles.SocialBoxContainer}>
            <Image
              source={require('../assets/facebook.png')}
              style={{height: 25, width: 25}}
            />
            <Text style={styles.SocialBoxTXT}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SocialBoxContainer}>
            <Image
              source={require('../assets/google.png')}
              style={{height: 25, width: 25}}
            />
            <Text style={styles.SocialBoxTXT}>Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.HaveAccountContainer}>
          <Text style={styles.HaveAccountTXT}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.SignUpTXT}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  SignInTXT: {
    fontSize: 20,
    fontWeight: '600',
    // borderWidth: 1,
    textAlign: 'center',
    padding: 8,
  },
  InputTitle: {
    fontSize: 15,
    marginBottom: 8,
    color: Colors.Grey,
    // borderWidth: 1,
  },
  InputContainer: {
    // marginTop: 10,
    // borderWidth:2,
    margin: 10,
  },
  InputBox: {
    borderWidth: 0.3,
    borderRadius: 10,
    backgroundColor: '#ffff',
    paddingHorizontal: 10,
  },
  MandetorySign: {
    color: '#FF0000',
    fontSize: 17,
  },
  CheckBoxContainer: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  OrContinueWithTXT: {
    // borderWidth: 1,
    textAlign: 'center',
    fontSize: 18,
    color: Colors.Grey,
    // padding: 7,
  },
  SocialMediaContainer: {
    // borderWidth:1,
    margin: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
  },
  SocialBoxContainer: {
    // borderWidth: 1,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    padding: 15,
    borderRadius: 9,
    backgroundColor: '#ffff',
    elevation: 2,
    width: 140,
    justifyContent: 'center',
  },
  // GoogleContainer: {
  //   flexDirection: 'row',
  //   gap: 10,
  //   alignItems: 'center',
  //   padding: 15,
  //   borderRadius: 9,
  //   backgroundColor: '#ffff',
  //   elevation: 2,
  //   width: 140,
  //   justifyContent: 'center',
  // },
  SocialBoxTXT: {
    fontSize: 19,
  },
  HaveAccountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  HaveAccountTXT: {
    fontSize: 18,
  },
  SignUpTXT: {
    fontSize: 18,
    color: Colors.Primary_Color,
  },
});
