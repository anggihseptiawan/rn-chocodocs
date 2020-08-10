import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Star} from '../../../assets/icon';
import {fonts, colors} from '../../../utils';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

const RatedDoctor = ({avatar, name, desc, handlePress}) => {
  return (
    <TouchableNativeFeedback style={styles.container} onPress={handlePress}>
      <Image source={avatar} style={styles.image} />
      <View style={styles.textWrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{desc}</Text>
      </View>
      <View style={styles.starWrapper}>
        <Image source={Star} style={styles.star} />
        <Image source={Star} style={styles.star} />
        <Image source={Star} style={styles.star} />
        <Image source={Star} style={styles.star} />
        <Image source={Star} style={styles.star} />
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
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
