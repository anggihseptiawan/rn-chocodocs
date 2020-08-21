import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, Profile, List} from '../../components';
import {getData} from '../../utils';
import {Fire} from '../../config';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    occupation: '',
  });

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);

  const signOut = () => {
    Fire.auth().signOut();
    navigation.replace('GetStarted');
  };

  return (
    <View style={styles.page}>
      <Header title="Profile" />
      {profile.fullName.length > 0 && (
        <Profile
          photo={profile.photo}
          name={profile.fullName}
          occupation={profile.occupation}
        />
      )}

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
        <List
          name="Sign Out"
          chat="Want to end your session ?"
          type="next"
          icon="help"
          handlePress={signOut}
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
