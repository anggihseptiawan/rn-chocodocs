import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../atoms';
import {fonts} from '../../../utils';

const Header = ({handlePress, title}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back" handlePress={handlePress} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 20,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    marginRight: 20,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: '#112340',
  },
});

export default Header;
