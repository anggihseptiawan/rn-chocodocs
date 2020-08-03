import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

const Button = ({type, title, space, handlePress}) => {
  return (
    <TouchableNativeFeedback
      style={styles.container(type, space)}
      onPress={handlePress}>
      <Text style={styles.btn(type)}>{title}</Text>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: (type, space) => ({
    borderRadius: 8,
    backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
    padding: 10,
    marginBottom: space,
  }),
  btn: (type) => ({
    textAlign: 'center',
    color: type === 'secondary' ? 'black' : 'white',
    fontSize: 16,
    fontFamily: 'NunitoSans-SemiBold',
  }),
});

export default Button;
