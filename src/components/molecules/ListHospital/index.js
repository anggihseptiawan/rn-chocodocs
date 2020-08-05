import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {fonts, colors} from '../../../utils';

const ListHospital = ({name, address, image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.street}>{address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 6,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
  },
  street: {
    color: colors.text.secondary,
    width: 220,
  },
});

export default ListHospital;
