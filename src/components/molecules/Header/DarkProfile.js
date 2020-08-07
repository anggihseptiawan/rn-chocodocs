import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';
import {Person} from '../../../assets';

const DarkProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        type="icon-only"
        icon="back"
        handlePress={() => navigation.goBack()}
      />
      <View>
        <Text style={styles.name}>Budi Yulianto</Text>
        <Text style={styles.category}>Dokter Anak</Text>
      </View>
      <Image source={Person} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  category: {
    color: colors.text.secondary,
    textAlign: 'center',
  },
});

export default DarkProfile;
