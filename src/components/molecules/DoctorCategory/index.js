import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {medicine, stetoskop, heart} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

const DoctorCategory = ({category, handlePress}) => {
  const Icon = () => {
    if (category === 'dokter umum') {
      return <Image source={medicine} style={styles.image} />;
    }
    if (category === 'psikiater') {
      return <Image source={stetoskop} style={styles.image} />;
    }
    if (category === 'dokter obat') {
      return <Image source={heart} style={styles.image} />;
    }
    return <Image source={medicine} style={styles.image} />;
  };

  return (
    <TouchableNativeFeedback style={styles.container} onPress={handlePress}>
      <View style={styles.imageWrapper}>
        <Icon />
      </View>
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greenCard,
    borderRadius: 5,
    padding: 12,
    alignSelf: 'flex-start',
    marginRight: 10,
    alignItems: 'center',
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: colors.primary,
    marginBottom: 20,
  },
  image: {
    width: 20,
    height: 20,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});

export default DoctorCategory;
