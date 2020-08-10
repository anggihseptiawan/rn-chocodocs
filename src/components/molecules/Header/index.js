import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../atoms';
import {fonts, colors} from '../../../utils';
import DarkProfile from './DarkProfile';

const Header = ({handlePress, title, type}) => {
  if (type === 'dark-profile') return <DarkProfile handlePress={handlePress} />;

  return (
    <View style={styles.container(type)}>
      <Button type="icon-only" icon="back" handlePress={handlePress} />
      <Text style={styles.text(type)}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (type) => ({
    paddingHorizontal: 15,
    paddingVertical: 30,
    backgroundColor: type === 'dark' ? colors.secondary : 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  image: {
    width: 20,
    height: 20,
  },
  text: (type) => ({
    flex: 1,
    textAlign: 'center',
    marginRight: 20,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: type === 'dark' ? 'white' : '#112340',
  }),
});

export default Header;
