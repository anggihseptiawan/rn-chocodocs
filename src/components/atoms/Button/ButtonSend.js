import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Send} from '../../../assets';
import {colors} from '../../../utils';

const ButtonSend = ({disable}) => {
  return (
    <View style={styles.container(disable)}>
      <Image source={Send} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: (disable) => ({
    backgroundColor: disable ? colors.disable : colors.active,
    width: 45,
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  image: {
    width: 20,
    height: 20,
  },
});

export default ButtonSend;
