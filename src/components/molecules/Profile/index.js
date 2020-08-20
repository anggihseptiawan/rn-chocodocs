import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {fonts, colors} from '../../../utils';

const Profile = ({name, occupation, photo}) => {
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.image} />
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
    textTransform: 'capitalize',
  },
  occupation: {
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});

export default Profile;
