import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Person} from '../../../assets';
import {fonts, colors, getData} from '../../../utils';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

const HomeProfile = ({handlePress}) => {
  const [profile, setProfile] = useState({
    photo: Person,
    fullName: '',
    occupation: '',
  });

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);

  return (
    <TouchableNativeFeedback style={styles.container} onPress={handlePress}>
      <Image source={profile.photo} style={styles.image} />
      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.occupation}>{profile.occupation}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  occupation: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});

export default HomeProfile;
