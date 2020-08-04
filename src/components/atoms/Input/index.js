import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';

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
    color: colors.text.secondary,
    marginBottom: 5,
    fontFamily: fonts.primary[400],
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 12,
  },
});

export default Input;
