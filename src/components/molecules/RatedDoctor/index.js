import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Person} from '../../../assets';
import {Star} from '../../../assets/icon';
import {fonts, colors} from '../../../utils';

const RatedDoctor = () => {
  return (
    <View style={styles.container}>
      <Image source={Person} style={styles.image} />
      <View style={styles.textWrapper}>
        <Text style={styles.name}>Donita Aprilia</Text>
        <Text style={styles.category}>Dokter kandungan</Text>
      </View>
      <View style={styles.starWrapper}>
        <Image source={Star} style={styles.star} />
        <Image source={Star} style={styles.star} />
        <Image source={Star} style={styles.star} />
        <Image source={Star} style={styles.star} />
        <Image source={Star} style={styles.star} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 7,
  },
  starWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  star: {
    width: 20,
    height: 20,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 2,
  },
  textWrapper: {
    flex: 1,
  },
});

export default RatedDoctor;
