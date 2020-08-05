import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {fonts, colors} from '../../../utils';

const ListDoctor = ({image, name, chat}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.text}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.chat}>{chat}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  text: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
  },
  chat: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});

export default ListDoctor;
