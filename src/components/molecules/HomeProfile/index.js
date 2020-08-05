import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Person} from '../../../assets';
import {fonts, colors} from '../../../utils';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={Person} style={styles.image} />
      <View>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.occupation}>Product Designer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  occupation: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});

export default HomeProfile;
