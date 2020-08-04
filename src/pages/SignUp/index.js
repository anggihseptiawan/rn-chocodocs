import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Header, Input} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <Header handlePress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.content}>
        <Input label="Full Name" space={20} />
        <Input label="Pekerjaan" space={20} />
        <Input label="Email" space={20} />
        <Input label="Password" space={40} />
        <Button
          title="Continue"
          handlePress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 0,
  },
});

export default SignUp;
