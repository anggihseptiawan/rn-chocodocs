import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';

const Link = ({title, size, space, align, handlePress}) => {
  return (
    <TouchableNativeFeedback onPress={handlePress}>
      <Text style={styles.text(size, space, align)}>{title}</Text>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  text: (size, space, align) => ({
    textAlign: align,
    marginBottom: space,
    fontSize: size,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    textDecorationLine: 'underline',
  }),
});

export default Link;
