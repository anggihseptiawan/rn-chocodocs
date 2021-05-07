import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {Send} from '../../../assets';
import {colors} from '../../../utils';

const ButtonSend = ({disable, handlePress}) => {
  if (disable) {
    return (
      <View style={styles.container(disable)}>
        <Image source={Send} style={styles.image} />
      </View>
    );
  }
  return (
    <TouchableNativeFeedback
      style={styles.container(disable)}
      onPress={handlePress}>
      <Image source={Send} style={styles.image} />
    </TouchableNativeFeedback>
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
