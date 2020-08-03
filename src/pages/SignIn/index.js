import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Logo} from '../../assets';
import {Input, Link, Button} from '../../components';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" space={25} />
      <Input label="Password" space={10} />
      <Link title="Forgot Password" size={12} space={40} />
      <Button title="Sign In" space={30} />
      <Link title="Create New Account" size={16} align="center" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 20,
    fontFamily: 'NunitoSans-SemiBold',
    color: '#112340',
    marginVertical: 40,
    maxWidth: 190,
  },
});

export default SignIn;
