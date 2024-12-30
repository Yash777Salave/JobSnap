import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import DocumentPicker from 'react-native-document-picker';

const DocumentPickerr = () => {
  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      const fileName = doc[0].name;
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
        </View>
        <TouchableOpacity
          style={{borderWidth: 1, height: 35}}
          onPress={selectDoc}>
          <Text>add</Text>
        </TouchableOpacity>
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
});
