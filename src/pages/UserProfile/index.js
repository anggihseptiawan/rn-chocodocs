import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Profile, List} from '../../components';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" />
      <Profile name="Budi Yulianto" occupation="Mobile Developer" />
      <View style={styles.container}>
        <List
          name="Edit Profile"
          chat="Last update yesterday"
          type="next"
          icon="editProfile"
          handlePress={() => navigation.navigate('EditProfile')}
        />
        <List
          name="Language"
          chat="12 language available"
          type="next"
          icon="language"
        />
        <List
          name="Give Us Rate"
          chat="Rate us on playstore"
          type="next"
          icon="rate"
        />
        <List
          name="Help Center"
          chat="Need some help ?"
          type="next"
          icon="help"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
  },
});

export default UserProfile;
