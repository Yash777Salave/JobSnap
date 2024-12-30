import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {JobInformation} from '../componants/ProgrammingJobs';
import JobCard from '../componants/JobCard';
import {teachingJobs} from '../componants/TeachingJobs';

const AllJobs = () => {
  return (
    <ScrollView>
      <View style={{marginBottom: 50}}>
        <JobCard JobInformation={teachingJobs} />
        <JobCard JobInformation={JobInformation} />
      </View>
    </ScrollView>
  );
};

export default AllJobs;

const styles = StyleSheet.create({});
