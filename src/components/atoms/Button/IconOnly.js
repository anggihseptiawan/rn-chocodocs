import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {IconBack, IconNext} from '../../../assets';

const IconOnly = ({handlePress, icon}) => {
  const Icon = () => {
    if (icon === 'back') {
      return <Image source={IconBack} style={styles.image} />;
    }
    if (icon === 'next') {
      return <Image source={IconNext} style={styles.image} />;
    }

    return <Image source={IconBack} style={styles.image} />;
  };

  return (
    <TouchableNativeFeedback onPress={handlePress}>
      <Icon />
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
});

export default IconOnly;
