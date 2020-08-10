import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';

const Input = ({label, space, value, handleChange, secureTextEntry}) => {
  const [border, setBorder] = useState(colors.border);

  const handleFocus = () => {
    setBorder(colors.active);
  };

  const handleBlur = () => {
    setBorder(colors.border);
  };

  return (
    <View style={styles.container(space)}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={styles.input(border)}
        value={value}
        onChangeText={handleChange}
        secureTextEntry={secureTextEntry}
      />
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
  input: (border) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 8,
    padding: 12,
  }),
});

export default Input;
