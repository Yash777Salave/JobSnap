import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import DocumentPicker from 'react-native-document-picker';
import Colors from '../styles/Colors';

const DocumentPickerr = () => {
  const [resumeName, setResumeName] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      const fileName = doc[0].name;
      setResumeName(fileName);
      setIsClicked(true);
      console.log('Name of the file is', fileName);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User Cancle the Upload', error);
      } else {
        console.log(error);
      }
    }
  };
  return (
    <View style={{alignItems: 'center', marginBottom: 50}}>
      <View style={styles.CvHeadlineContainer}>
        <View>
          <Text style={styles.HeadlineTXT}>Upload CV</Text>
          {isClicked === false && (
            <Text style={styles.tagTXT}>
              Employers prefer profile with original CV attachment
            </Text>
          )}
        </View>
        {isClicked && (
          <View style={styles.ResumeContainer}>
            <View style={styles.IconContainer}>
              <Image
                source={require('../assets/resume.png')}
                style={styles.EditIcon}
                tintColor={'#808080'}
              />
              <TouchableOpacity
                style={{alignItems: 'flex-end'}}
                onPress={() => {
                  setIsClicked(false);
                }}>
                <Image
                  source={require('../assets/delete.png')}
                  style={styles.DeleteIcon}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.ResumeName}>{resumeName}</Text>
          </View>
        )}

        <View style={styles.AddExpMainContainer}>
          <TouchableOpacity style={styles.AddExpContainer} onPress={selectDoc}>
            <Text style={styles.AddExpTXT}>Upload </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DocumentPickerr;

const styles = StyleSheet.create({
  CvHeadlineContainer: {
    // borderWidth: 1,
    marginTop: 15,
    // margin: 10,
    backgroundColor: '#ffff',
    padding: 10,
    width: '90%',
    borderRadius: 7,
    shadowColor: '#000',
    elevation: 5,
    marginBottom: 15,
  },
  HeadlineTXT: {
    fontSize: 21,
    fontWeight: '600',
  },
  tagTXT: {
    fontSize: 17,
    color: Colors.Grey,
    // marginBottom: 10,
  },
  AddExpContainer: {
    // borderWidth: 1,
    width: '45%',
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  AddExpTXT: {
    fontSize: 17,
    color: Colors.Primary_Color,
    textAlign: 'center',
    margin: 10,
  },
  AddExpMainContainer: {
    borderTopWidth: 0.4,
    borderTopEndRadius: 22,
    borderTopStartRadius: 22,
  },
  EditIcon: {
    height: 90,
    width: 90,
    backgroundColor: '#ffff',
    borderRadius: 10,
  },
  ResumeContainer: {
    // borderWidth: 2,
    width: '60%',
    borderRadius: 10,
    backgroundColor: Colors.lightBlue,
    padding: 4,
    marginBottom: 10,
  },
  ResumeName: {
    fontSize: 13,
    paddingHorizontal: 10,
  },
  DeleteIcon: {
    height: 30,
    width: 30,
    left: 18,
    bottom: 15,
  },
  IconContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffff',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
});
