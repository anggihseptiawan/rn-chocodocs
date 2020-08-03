import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {IconBack} from '../../../assets';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={IconBack} style={styles.image} />
      <Text style={styles.text}>Header</Text>
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
    fontFamily: 'NunitoSans-SemiBold',
    color: '#112340',
  },
});

export default Header;
