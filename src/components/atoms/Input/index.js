import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const Input = ({label, space}) => {
  return (
    <View style={styles.container(space)}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: (space) => ({
    marginBottom: space,
  }),
  label: {
    fontSize: 16,
    color: '#7D8797',
    marginBottom: 5,
    fontFamily: 'NunitoSans-Regular',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 8,
    padding: 12,
  },
});

export default Input;
