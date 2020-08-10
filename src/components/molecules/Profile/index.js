import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Person} from '../../../assets';
import {fonts, colors} from '../../../utils';

const Profile = ({name, occupation}) => {
  return (
    <View style={styles.container}>
      <Image source={Person} style={styles.image} />
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.occupation}>{occupation}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginTop: 16,
    textAlign: 'center',
  },
  occupation: {
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: 'center',
  },
});

export default Profile;
