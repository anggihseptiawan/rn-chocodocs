import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';
import {Person} from '../../../assets';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

const DarkProfile = ({handlePress}) => {
  return (
    <TouchableNativeFeedback style={styles.container} onPress={handlePress}>
      <Button type="icon-only" icon="back" />
      <View>
        <Text style={styles.name}>Budi Yulianto</Text>
        <Text style={styles.category}>Dokter Anak</Text>
      </View>
      <Image source={Person} style={styles.image} />
    </TouchableNativeFeedback>
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
