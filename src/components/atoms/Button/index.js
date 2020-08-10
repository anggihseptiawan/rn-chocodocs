import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {colors} from '../../../utils/colors';
import IconOnly from './IconOnly';
import {fonts} from '../../../utils';
import ButtonSend from './ButtonSend';

const Button = ({type, title, space, handlePress, icon, disable}) => {
  if (type === 'btn-icon') {
    return <ButtonSend disable={disable} />;
  }

  if (type === 'icon-only') {
    return <IconOnly icon={icon} handlePress={handlePress} />;
  }

  if (disable) {
    return (
      <View style={styles.disable(space)}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }

  return (
    <TouchableNativeFeedback
      style={styles.container(type, space)}
      onPress={handlePress}>
      <Text style={styles.btn(type)}>{title}</Text>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: (type, space) => ({
    borderRadius: 8,
    backgroundColor:
      type === 'secondary' ? 'white' : colors.button.primary.background,
    padding: 10,
    marginBottom: space,
  }),
  disable: (space) => ({
    borderRadius: 8,
    backgroundColor: colors.button.disable.background,
    padding: 10,
    marginBottom: space,
  }),
  disableText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontFamily: fonts.primary[600],
  },
  btn: (type) => ({
    textAlign: 'center',
    color: type === 'secondary' ? 'black' : 'white',
    fontSize: 16,
    fontFamily: fonts.primary[600],
  }),
});

export default Button;
