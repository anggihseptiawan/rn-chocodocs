import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Header, Profile, Input, Button} from '../../components';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Edit Profile" handlePress={() => navigation.goBack()} />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Profile />
        <Input label="Full Name" space={15} />
        <Input label="Pekerjaan" space={15} />
        <Input label="Email" space={15} />
        <Input label="Password" space={40} />
        <Button title="Save Profile" space={60} />
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
