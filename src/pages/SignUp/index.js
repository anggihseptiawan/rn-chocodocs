import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header, Input, Button} from '../../components';

const SignUp = () => {
  return (
    <View>
      <Header />
      <View style={styles.content}>
        <Text>Sign Up</Text>
        <Input label="Full Name" />
        <Input label="Pekerjaan" />
        <Input label="Email" />
        <Input label="Password" />
        <Button title="Continue" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 20,
    paddingTop: 0,
  },
});

export default SignUp;
