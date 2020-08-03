import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Link = ({title, size, space, align}) => {
  return (
    <View>
      <Text style={styles.text(size, space, align)}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: (size, space, align) => ({
    textAlign: align,
    marginBottom: space,
    fontSize: size,
    color: '#7D8797',
    fontFamily: 'NunitoSans-Regular',
    textDecorationLine: 'underline',
  }),
});

export default Link;
