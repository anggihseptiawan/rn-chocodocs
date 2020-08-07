import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {fonts, colors} from '../../../utils';
import {IconNext} from '../../../assets';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

const ListDoctor = ({image, name, chat, type, handlePress}) => {
  return (
    <TouchableNativeFeedback style={styles.container} onPress={handlePress}>
      <Image source={image} style={styles.image} />
      <View style={styles.text}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.chat}>{chat}</Text>
      </View>
      {type === 'next' && <Image source={IconNext} style={styles.icon} />}
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  text: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
  },
  chat: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default ListDoctor;
