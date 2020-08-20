import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Header, Input, Profile} from '../../components';
import {getData} from '../../utils';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';

const EditProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    occupation: '',
    email: '',
  });

  const [password, setPassword] = useState('');

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  });

  const update = () => {
    const data = profile;
    data.photo = profile.photo.uri;
    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update(profile)
      .then(() => console.log('success'))
      .catch((err) => {
        showMessage({
          message: err.message,
          type: 'danger',
        });
      });
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Edit Profile" handlePress={() => navigation.goBack()} />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Profile photo={profile.photo} />
        <Input
          label="Full Name"
          space={15}
          value={profile.fullName}
          handleChange={(value) => changeText('fullName', value)}
        />
        <Input
          label="Pekerjaan"
          space={15}
          value={profile.occupation}
          handleChange={(value) => changeText('occupation', value)}
        />
        <Input label="Email" space={15} value={profile.email} disable />
        <Input label="Password" space={40} value={profile.password} />
        <Button title="Save Profile" space={60} handlePress={update} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
  },
});

export default EditProfile;
