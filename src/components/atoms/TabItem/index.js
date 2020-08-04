import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {Doctor, Hospital, Messages} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, handlePress, handleLongPress}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return <Image style={styles.image} source={Doctor} />;
    }
    if (title === 'Messages') {
      return <Image style={styles.image} source={Messages} />;
    }
    if (title === 'Hospitals') {
      return <Image style={styles.image} source={Hospital} />;
    }

    return <Image style={styles.image} source={Doctor} />;
  };

  return (
    <TouchableNativeFeedback
      style={styles.container}
      onPress={handlePress}
      onLongPress={handleLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
  container: {
    alignItems: 'center',
  },
  text: (active) => ({
    fontSize: 12,
    color: active ? colors.text.active : colors.text.inActive,
    fontFamily: fonts.primary[600],
    marginTop: 5,
  }),
});

export default TabItem;
