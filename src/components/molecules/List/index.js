import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {fonts, colors} from '../../../utils';
import {IconNext, Edit, Language, Help, Rate} from '../../../assets';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

const List = ({image, name, chat, type, handlePress, icon}) => {
  const Icon = () => {
    if (icon === 'editProfile')
      return <Image source={Edit} style={styles.icon} />;
    if (icon === 'language')
      return <Image source={Language} style={styles.icon} />;
    if (icon === 'help') return <Image source={Help} style={styles.icon} />;
    if (icon === 'rate') return <Image source={Rate} style={styles.icon} />;
    return <Image source={Edit} style={styles.icon} />;
  };

  return (
    <TouchableNativeFeedback style={styles.container} onPress={handlePress}>
      {icon ? <Icon /> : <Image source={image} style={styles.image} />}

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

export default List;
